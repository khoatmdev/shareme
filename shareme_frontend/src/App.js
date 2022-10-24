import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Login from './components/Login';
import Home from './containers/Home';
import { DefaultLayout } from './layouts';

const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route
        path="/"
        element={
          <DefaultLayout>
            <Home />
          </DefaultLayout>
        }
      />
    </Routes>
  );
};

export default App;
