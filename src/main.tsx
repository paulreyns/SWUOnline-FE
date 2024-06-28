import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './assets/css/karabast.css'
// Routes
import Main from './route/Main/main.tsx';
import Lobby from './route/Lobby/lobby.tsx';
import Login from './route/Login/login.tsx';
import SignUp from './route/Signup/signup.tsx';
import PrivacyPolicy from './route/PrivacyPolicy/privacypolicy.tsx';

const router = createBrowserRouter([
  { path: "/", element: <Main /> },
  { path: "/Lobby", element: <Lobby /> },
  { path: "/Login", element: <Login /> },
  { path: "/Signup", element: <SignUp /> },
  { path: "/PrivacyPolicy", element: <PrivacyPolicy /> },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
