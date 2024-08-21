import { useState } from 'react';
import { useCreateSubscriptionMutation } from '../../../slices/adminApiSlice';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Alert,
  CircularProgress
} from '@mui/material';

const CreateSubscription = ({ userId }) => {
  const initialSubscription = {
    startDate: new Date().toISOString().split('T')[0],
    durationMonths: 1,
  };


  console.log(userId)

  const [createSubscription] = useCreateSubscriptionMutation();

  const [subscriptionData, setSubscriptionData] = useState(initialSubscription);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSubscriptionData({
      ...subscriptionData,
      [name]: value,
    });
  };

  const handleSaveClick = async () => {
    if (!validateSubscription()) {
      setError("Please fill out all fields correctly.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const payload = { ...subscriptionData, userId:userId};
      await createSubscription(payload).unwrap();
      setSubscriptionData(initialSubscription);
      // You might want to add a success message or redirect here
    } catch (err) {
      setError("Failed to create subscription. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const validateSubscription = () => {
    return (
      subscriptionData.startDate.trim() !== "" &&
      subscriptionData.durationMonths > 0
    );
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 4, mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Create Subscription
        </Typography>
        {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
        <form>
          <TextField
            fullWidth
            label="Start Date"
            type="date"
            name="startDate"
            value={subscriptionData.startDate}
            onChange={handleChange}
            sx={{ mb: 2 }}
            InputLabelProps={{ shrink: true }}
          />
          <TextField
            fullWidth
            label="Duration (Months)"
            type="number"
            name="durationMonths"
            value={subscriptionData.durationMonths}
            onChange={handleChange}
            sx={{ mb: 2 }}
            InputProps={{ inputProps: { min: 1 } }}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleSaveClick}
            disabled={loading}
            sx={{ mt: 2 }}
          >
            {loading ? <CircularProgress size={24} /> : "Create Subscription"}
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default CreateSubscription;