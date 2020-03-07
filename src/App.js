import React from 'react';
import { Route } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles';
import WelcomePage from './pages/WelcomePage';
import RegisterPage from './pages/RegisterPage';
import UploadPage from './pages/UploadPage';
import CompletePage from './pages/CompletePage';
import ChatPage from './pages/ChatPage';
import LoginPage from './pages/LoginPage';
import GuidePage from './pages/GuidePage';
import PasswordPage from './pages/PasswordPage';

import { Helmet } from 'react-helmet-async';

import theme from './theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Helmet>
        <title>생기부 사전 업로드 : Linker</title>
      </Helmet>
      <Route component={ChatPage} path={'/chat'} />
      <Route component={LoginPage} path="/login" />
      <Route component={PasswordPage} path="/password" />
      <Route component={GuidePage} path="/guide" />
      <Route component={RegisterPage} path="/register" />
      <Route component={CompletePage} path="/complete" />
      <Route component={UploadPage} path="/upload" />
      <Route component={WelcomePage} exact path="/" />
    </ThemeProvider>
  );
};
export default App;
