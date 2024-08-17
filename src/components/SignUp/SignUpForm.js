import React, { useState } from 'react';
import {
  Container,
  TextField,
  Button,
  MenuItem,
  Grid,
  Box
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/ReactToastify.css'

import { toast } from "react-toastify";
import {useAddNewClientMutation} from "../../slices/clientsApiSlice"

import { useNavigate } from 'react-router-dom'

import { useTranslation } from 'react-i18next';


const themeOptions = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#ff0000',
    },
    secondary: {
      main: '#ffffff',
    },
  },
});

const SignUpForm = () => {
  const { t } = useTranslation(); 

  const initData = {
    fullName: "",
    phoneNumber: "",
    height: "",
    weight: "",
    age: "",
    level: "",
    goal: "",
    active: "",
    numofMeals: "",
    medicalCondition: "",
    foodtoAvoid: "",
    supplement: "",
    comment: ""
  }


const [signup, { isLoading }] = useAddNewClientMutation();

const navigate = useNavigate()

  const [formData, setFormData] = useState(initData);

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateField = (key, value) => {
    return value.trim() !== "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(formData === initData){
      toast.error(t("fillOutTheForm"))
      return;
    }

    const newErrors = {};

    for (const key of Object.keys(formData)) {
      if (!validateField(key, formData[key])) {
        newErrors[key] = t("requiredField");
      }
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    try {
      const res = await signup(formData).unwrap();
      setFormData(initData)
      toast.success('Sign up successful, please log in', {
              position: "top-right",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
              });
      setTimeout(()=>{
              navigate('/login')


      },2000)

      
    } catch (err) {
      toast.error(err?.data?.message || err.error)


      
    }

    


  };

  return (
    <ThemeProvider theme={themeOptions}>
      <ToastContainer/>     

      <Container
        component="main"
        maxWidth="lg"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh',
          marginTop: "5vh"
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%', // Ensures the form takes full width inside the container
          }}
        >
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1, width: '100%' }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="fullName"
                  label={t("fullName")}
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  error={Boolean(errors.fullName)}
                  helperText={errors.fullName}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="phoneNumber"
                  label={t("phoneNumber")}
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  error={Boolean(errors.phoneNumber)}
                  helperText={errors.phoneNumber}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  required
                  fullWidth
                  id="height"
                  label={t("height")}
                  name="height"
                  value={formData.height}
                  onChange={handleChange}
                  error={Boolean(errors.height)}
                  helperText={errors.height}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  required
                  fullWidth
                  id="weight"
                  label={t("weight")}
                  name="weight"
                  value={formData.weight}
                  onChange={handleChange}
                  error={Boolean(errors.weight)}
                  helperText={errors.weight}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  required
                  fullWidth
                  id="age"
                  label={t("age")}
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  error={Boolean(errors.age)}
                  helperText={errors.age}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  required
                  select
                  fullWidth
                  id="level"
                  label={t("level")}
                  name="level"
                  value={formData.level}
                  onChange={handleChange}
                  error={Boolean(errors.level)}
                  helperText={errors.level}
                >
                  <MenuItem value="beginner">{t("beginner")}</MenuItem>
                  <MenuItem value="intermediate">{t("intermediate")}</MenuItem>
                  <MenuItem value="advanced">{t("advanced")}</MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="goal"
                  label={t("goal")}
                  name="goal"
                  value={formData.goal}
                  onChange={handleChange}
                  error={Boolean(errors.goal)}
                  helperText={errors.goal}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="active"
                  label={t("active")}
                  name="active"
                  value={formData.active}
                  onChange={handleChange}
                  error={Boolean(errors.active)}
                  helperText={errors.active}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="numofMeals"
                  label={t("numofMeals")}
                  name="numofMeals"
                  value={formData.numofMeals}
                  onChange={handleChange}
                  error={Boolean(errors.numofMeals)}
                  helperText={errors.numofMeals}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="medicalCondition"
                  label={t("medicalCondition")}
                  name="medicalCondition"
                  value={formData.medicalCondition}
                  onChange={handleChange}
                  error={Boolean(errors.medicalCondition)}
                  helperText={errors.medicalCondition}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="foodtoAvoid"
                  label={t("foodtoAvoid")}
                  name="foodtoAvoid"
                  value={formData.foodtoAvoid}
                  onChange={handleChange}
                  error={Boolean(errors.foodtoAvoid)}
                  helperText={errors.foodtoAvoid}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="supplement"
                  label={t("supplement")}
                  name="supplement"
                  value={formData.supplement}
                  onChange={handleChange}
                  error={Boolean(errors.supplement)}
                  helperText={errors.supplement}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="comment"
                  label={t("comment")}
                  name="comment"
                  value={formData.comment}
                  onChange={handleChange}
                  error={Boolean(errors.comment)}
                  helperText={errors.comment}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              color="primary"
              onClick={handleSubmit}
            >
              {t("sign-up")}
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default SignUpForm;
