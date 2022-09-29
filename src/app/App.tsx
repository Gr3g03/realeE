import AppNavigate from './AppNavigate';
import PrivateRoute from './private-route';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Register from '../pages/register/Register';
import LandingPage from '../pages/landing/LandingPage';
import Login from '../pages/login/index';
import Profile from '../pages/profile/profile';
import Chat from '../pages/chat/chat';

const App = () => {
  return (
    <BrowserRouter>
      <AppNavigate />
      <Routes>
        <Route index element={<Navigate to="/login" />} />
        <Route
          path="/login"
          element={
            <PrivateRoute isPageLogin>
              <Login />
            </PrivateRoute>
          }
        />
        <Route
          path="/register"
          element={
            <PrivateRoute isPageLogin>
              <Register />
            </PrivateRoute>
          }
        />
        <Route
          path="/home"
          element={
            <PrivateRoute>
              <LandingPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />
        <Route
          path="/chat"
          element={
            <PrivateRoute>
              <Chat />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
