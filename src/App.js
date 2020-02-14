import React from 'react';
import { Route } from 'react-router-dom';
import RegisterPage from './pages/RegisterPage';
import ChatPage from './pages/ChatPage';
import { Helmet } from 'react-helmet-async';

const App = () => {
  return (
    <>
      <Helmet>
        <title>REACTERS</title>
      </Helmet>
      <Route component={ChatPage} path={'/chat'} />
      <Route component={RegisterPage} path="/register" />
    </>
  );
};
export default App;
