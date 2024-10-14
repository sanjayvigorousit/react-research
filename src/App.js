import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PrivateRoute from './routes/PrivateRoute';
import Login from './pages/SignUp/Login';
import Layout from './components/Layout/Layout';

function App() {

  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/app/*" element={<PrivateRoute element={<Layout />} />} />
      </Routes>
    </React.Fragment>
  );
}
export default App;
