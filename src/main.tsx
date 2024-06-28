import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/css/karabast.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
// Routes
import Main from './route/Main/index.tsx';
import Login from './route/Login/login.tsx';

const router = createBrowserRouter([
  { path: "/", element: <Main /> },
  { path: "/Login", element: <Login /> },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
