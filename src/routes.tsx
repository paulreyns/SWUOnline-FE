import { Navigate, createBrowserRouter } from 'react-router-dom';
import useAuth from './hooks/useAuth';
// Routes
import Main from './route/main/main.tsx';
import Lobby from './route/lobby/lobby.tsx';
import Login from './route/login/login.tsx';
import SignUp from './route/signup/signup.tsx';
import Profile from './route/profile/profile.tsx';
import PrivacyPolicy from './route/privacyPolicy/privacypolicy.tsx';

const LoggedInGuard = ({
  children,
  shouldBeLoggedIn
}: {
  children: JSX.Element;
  shouldBeLoggedIn: boolean;
}) => {
  const { isLoggedIn } = useAuth();

  if (isLoggedIn === !shouldBeLoggedIn) {
    return (
      <Navigate
        to={{
          pathname: '/'
        }}
        state={{ from: location }}
      />
    );
  }

  return children;
};

export const router = createBrowserRouter([
  { path: "/", element: <Main /> },
  { path: "/Lobby", element: <Lobby /> },
  { path: "/Login", element: <Login /> },
  { path: "/Signup", element: <SignUp /> },
  { path: "/Profile", element: <LoggedInGuard shouldBeLoggedIn={true}><Profile /></LoggedInGuard> },
  { path: "/PrivacyPolicy", element: <PrivacyPolicy /> },
]);

