import React from 'react';
import { Helmet } from 'react-helmet-async';

// core components
import GridContainer from '../components/Grid/GridContainer.js';
import GridItem from '../components/Grid/GridItem.js';

// layout
import UploadLayout from '../components/Layouts/Upload/UploadLayout';
import PasswordContainer from '../containers/auth/PasswordContainer';

const PasswordPage = () => {
  return (
    <UploadLayout>
      <Helmet>
        <title>비밀번호 찾기 - Linker</title>
      </Helmet>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={6}>
          <PasswordContainer></PasswordContainer>
        </GridItem>
      </GridContainer>
    </UploadLayout>
  );
};

export default PasswordPage;
