import React from 'react';

import { Helmet } from 'react-helmet-async';

// layout
import UploadLayout from '../components/Layouts/Upload/UploadLayout';

const WelcomePage = () => {
  return (
    <UploadLayout>
      <Helmet>
        <title>생기부 업로드 완료 - Linker</title>
      </Helmet>
      <div>
        <h1>🎉 생기부 업로드 완료</h1>
        <h3>
          🌼 더 좋은 서비스로 찾아뵙겠습니다. <br /> 🌻 그때까지 안녕히 계세요.
        </h3>
      </div>
    </UploadLayout>
  );
};

export default WelcomePage;
