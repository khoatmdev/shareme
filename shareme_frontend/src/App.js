import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Login from './components/Login';
import { HomePage, UserProfilePage } from './containers';
import { DefaultLayout } from './layouts';

const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route
        path="/"
        element={
          <DefaultLayout>
            <HomePage />
          </DefaultLayout>
        }
      />
      <Route
        path="/user-profile/:userId"
        element={
          <DefaultLayout>
            <UserProfilePage />
          </DefaultLayout>
        }
      />
    </Routes>
  );
};

export default App;
