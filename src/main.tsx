import React from 'react'
import ReactDOM from 'react-dom/client'
import './karabast.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
// Routes
import MainPage from './route/MainPage/index.tsx';
import App from './App.tsx'
import Disclaimer from './components/disclaimer.tsx';

const router = createBrowserRouter([
  { path: "/", element: <MainPage /> },
  { path: "/App", element: <App /> },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Disclaimer />
  </React.StrictMode>,
)
