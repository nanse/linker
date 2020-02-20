import React from 'react';
import { Route } from 'react-router-dom';
import WelcomePage from './pages/WelcomePage';
import RegisterPage from './pages/RegisterPage';
import UploadPage from './pages/UploadPage';
import CompletePage from './pages/CompletePage';
import ChatPage from './pages/ChatPage';
import { Helmet } from 'react-helmet-async';

const App = () => {
  return (
    <>
      <Helmet>
        <title>REACTERS</title>
      </Helmet>
      <Route component={ChatPage} path={'/chat'} />
      <Route component={WelcomePage} path="/welcome" />
      <Route component={RegisterPage} path="/register" />
      <Route component={CompletePage} path="/complete" />
      <Route component={UploadPage} path="/upload" />
    </>
  );
};
export default App;
