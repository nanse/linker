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
        <title>회원가입 - Linker</title>
      </Helmet>
      <GridContainer direction="column" justify="center" alignItems="center">
        <GridItem xs={12} sm={12} md={6}>
          <RegisterContainer></RegisterContainer>
        </GridItem>
      </GridContainer>
    </UploadLayout>
  );
};

export default RegisterPage;
