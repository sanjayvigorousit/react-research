import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PrivateRoute from './routes/PrivateRoute';
import Login from './pages/SignUp/Login';
import Layout from './components/Layout/Layout';
import SignuUp from "./pages/SignUp/SocialSignUp";

function App() {

  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignuUp />} />
        <Route path="/app/*" element={<PrivateRoute element={<Layout />} />} />
      </Routes>
    </React.Fragment>
  );
}
export default App;
