import React from 'react';
import { Helmet } from 'react-helmet-async';

// core components
import GridContainer from '../components/Grid/GridContainer.js';
import GridItem from '../components/Grid/GridItem.js';

// layout
import UploadLayout from '../components/Layouts/Upload/UploadLayout';
import RegisterContainer from '../containers/auth/RegisterContainer';

import Parallax from '../components/Parallax/Parallax';

const RegisterPage = () => {
  return (
    <UploadLayout>
      <Helmet>
        <title>회원가입 - Linker</title>
      </Helmet>
      <Parallax image={require('../assets/img/welcome-bg1.png')}>
        <GridContainer direction="column" justify="center" alignItems="center">
          <GridItem xs={12} sm={12} md={4}>
            <RegisterContainer></RegisterContainer>
          </GridItem>
        </GridContainer>
      </Parallax>
    </UploadLayout>
  );
};

export default RegisterPage;
