import React from 'react';
import { Helmet } from 'react-helmet-async';

// core components
import GridContainer from '../components/Grid/GridContainer.js';
import GridItem from '../components/Grid/GridItem.js';

// layout
import UploadLayout from '../components/Layouts/UploadLayout';
import LoginContainer from '../containers/auth/LoginContainer';

const RegisterPage = () => {
  return (
    <UploadLayout>
      <Helmet>
        <title>로그인 - Linker</title>
      </Helmet>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={4}>
          <LoginContainer></LoginContainer>
        </GridItem>
      </GridContainer>
    </UploadLayout>
  );
};

export default RegisterPage;
