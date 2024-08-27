import { useGetClientSubscriptionQuery } from '../../../slices/clientsApiSlice';
import { useEffect, useState } from 'react';
import { Box, Container, Typography, TextField, Button, Alert, CircularProgress } from '@mui/material';
import { useUpdateSubscriptionByIdMutation } from '../../../slices/adminApiSlice';

const EditSubscription = ({ id }) => {
  const initSubscription = {
    startDate: "",
    durationMonths: 0,
    endDate: ""
  };

  const { data, isLoading, isError, isSuccess, error } = useGetClientSubscriptionQuery(id, { refetchOnMountOrArgChange: true });
  const [updateSubscription] = useUpdateSubscriptionByIdMutation();
  const subscriptionData = isLoading ? null : isError ? error : isSuccess ? data.clientSubscription[0] : null;

  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState(initSubscription);
  const [currentSubData, setCurrentSubData] = useState(initSubscription);

  const [err, setErr] = useState("");

  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date instanceof Date && !isNaN(date) 
      ? date.toISOString().split('T')[0]
      : "";
  };

  const calculateEndDate = (startDate , duration) => {
    const endDate = new Date(startDate);
    console.log(startDate)
    console.log(`input date ${endDate}`)
    const currMonth = endDate.getMonth()
    const addedDuration = parseInt(duration)
   
    endDate.setMonth(currMonth + addedDuration);
    console.log(`output date ${endDate}`)

    return formatDate(endDate);
  }

  useEffect(() => {
    if (isSuccess) {
      // console.log(subscriptionData)
      setEditData(
       { ...subscriptionData,
        startDate: formatDate(subscriptionData.startDate),
        endDate: formatDate(subscriptionData.endDate)}
      );
      setCurrentSubData({
        ...subscriptionData,
        startDate: formatDate(subscriptionData.startDate),
        endDate: formatDate(subscriptionData.endDate)
      })
      console.log(subscriptionData)

    }
  }, [subscriptionData]);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick =  () => {
    if (!validateSubscription()) {
      setErr("Please fill out all fields correctly.");
      return;
    }

    try {
      const payload = {...editData , endDate : calculateEndDate(editData.startDate , editData.durationMonths)}
      setCurrentSubData(payload)
      console.log(currentSubData)
      const res = updateSubscription(payload).unwrap();
      setIsEditing(false);
      setErr("");
    } catch (error) {
      setErr("Failed to update subscription. Please try again.");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditData({
      ...editData,
      [name]: value,
    });
  };

  const validateSubscription = () => {
    return (
      editData.startDate.trim() !== "" &&
      editData.durationMonths > 0
    );
  };

  const innerContent = (
    <>
      {isLoading ? (
        <Box sx={{ display: 'flex', alignItems: "center", justifyContent: "center", flexDirection: "column", height: "90%" }}>
          <CircularProgress />
        </Box>
      ) : isError ? (
        <Container sx={{ py: "0", marginBottom: "20%" }}>
          <Typography variant="h4" gutterBottom sx={{ color: "red", textAlign: "center" }}>
            No subscription found
          </Typography>
        </Container>
      ) : (
        <Container maxWidth="sm">
          <Container sx={{ padding: 2 }}>
            {err && <Alert severity="error">{err}</Alert>}
            {isEditing ? (
              <>
                <TextField
                  fullWidth
                  label="Start Date"
                  type="date"
                  name="startDate"
                  value={editData.startDate}
                  onChange={handleChange}
                  sx={{ marginBottom: 2 }}
                  InputLabelProps={{ shrink: true }}
                />
                <TextField
                  fullWidth
                  label="Duration (Months)"
                  type="number"
                  name="durationMonths"
                  value={editData.durationMonths}
                  onChange={handleChange}
                  sx={{ marginBottom: 2 }}
                  InputProps={{ inputProps: { min: 1 } }}
                />
              </>
            ) : (
              <>
                <Typography variant="h4" gutterBottom sx={{ marginTop: "2%", color: "red" }}>
                  Subscription Details
                </Typography>
                <Typography variant="h6" sx={{ color: "black" }}>
                  Start Date: {formatDate(currentSubData.startDate)}
                </Typography>
                <Typography variant="h6" sx={{ color: "black" }}>
                  Duration: {currentSubData.durationMonths} months
                </Typography>
                <Typography variant="h6" sx={{ color: "black" }}>
                  End Date: {currentSubData.endDate}
                </Typography>
              </>
            )}

            {isEditing ? (
              <Button variant="contained" color="primary" onClick={handleSaveClick} sx={{ marginBottom: 2 }}>
                Save
              </Button>
            ) : (
              <Button variant="contained" color="primary" onClick={handleEditClick} sx={{ marginBottom: 2 }}>
                Edit
              </Button>
            )}
          </Container>
        </Container>
      )}
    </>
  );

  return innerContent;
};

export default EditSubscription;