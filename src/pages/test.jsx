import React, { useState } from 'react';
import {
  Container,
  TextField,
  Button,
  MenuItem,
  Typography,
  Grid,
  Box
} from '@mui/material';

import Navbar from '../components/Home/Navbar.jsx';
import SignUpForm from '../components/SignUp/SignUpForm.jsx';
import { useTranslation } from 'react-i18next';

const Test = () => {
  const { t } = useTranslation()
  
  return (<>
    <Navbar></Navbar>
    <div className="features-title" style={{  paddingTop: "10vh"}}><h1>{t("sign-up")}</h1></div>
    <SignUpForm></SignUpForm>






    </>
  );
};

export default Test;
