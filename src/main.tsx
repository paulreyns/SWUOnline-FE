import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom';
import { router } from './routes';
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';
import { store } from './app/store';
import './assets/css/karabast.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <Provider store={store}>
        <Toaster
          position="top-left"
          toastOptions={{
            style: {
              background: 'var(--dark-red)',
              color: 'var(--white)',
              border: '1px solid var(--primary)',
              padding: '0.5rem'
            }
          }}
        />
        <RouterProvider router={router} />
      </Provider>
  </React.StrictMode>,
)
