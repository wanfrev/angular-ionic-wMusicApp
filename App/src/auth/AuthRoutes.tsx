import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import LoginPage from './login/LoginPage';
import RegisterPage from './register/RegisterPage';

const AuthRoutes: React.FC = () => (
  <>
    <Route exact path="/login">
      <LoginPage />
    </Route>
    <Route exact path="/register">
      <RegisterPage />
    </Route>
    <Route exact path="/">
      <Redirect to="/login" />
    </Route>
  </>
);

export default AuthRoutes;