import React from 'react';
import { Helmet } from 'react-helmet-async';

// core components
import GridContainer from '../components/Grid/GridContainer.js';
import GridItem from '../components/Grid/GridItem.js';

// layout
import UploadLayout from '../components/Layouts/Upload/UploadLayout';
import RegisterContainer from '../containers/auth/RegisterContainer';

const RegisterPage = () => {
  return (
    <UploadLayout>
      <Helmet>
        <title>회원가입 하기 - Linker</title>
      </Helmet>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={4}>
          <RegisterContainer></RegisterContainer>
        </GridItem>
      </GridContainer>
    </UploadLayout>
  );
};

export default RegisterPage;
