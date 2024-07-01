import { useForm, SubmitHandler } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

import { useLoginMutation } from '../../features/api/apiSlice';
import useAuth from '../../hooks/useAuth';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginValidationSchema, LoginValidationType } from './validation';
import NavBar from '../../components/navbar';
import HomeHeader from '../../components/homeHeader';

const getLoginBody = ({
  userID,
  password,
  ...rest
}: {
  userID: string;
  password: string;
  rememberMe: boolean;
}) => {
  if (rest.rememberMe) {
    return { userID, password, rememberMe: rest.rememberMe };
  }
  return { userID, password };
};

function Login() {
  const [login] = useLoginMutation();
  const { setLoggedIn } = useAuth();
  const navigate = useNavigate();
  // const { refetch } = useGetFavoriteDecksQuery(undefined);
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting }
  } = useForm<LoginValidationType>({
    mode: 'onBlur',
    resolver: yupResolver(loginValidationSchema)
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit: SubmitHandler<LoginValidationType> = async (data: any) => {
    console.log('onSubmit');
    const values = { ...data, rememberMe: data.rememberMe ?? false };
    try {
      const resp = await login(getLoginBody(values)).unwrap();
      if (resp.error) {
        setError('root.serverError', {
          type: 'custom',
          message: resp.error
        });
        toast.error(resp.error, { position: 'top-center' });
      }
      if (resp?.isUserLoggedIn) {
        toast.success('logged in!', { position: 'top-center' });
        // refetch();
        setLoggedIn(resp?.loggedInUserID ?? '0', resp?.loggedInUserName, '', resp?.isPatron);
        // TODO: Have this go back in router history to the previous page or protected route.
        navigate('/');
      }
      if (resp?.isUserLoggedIn === false) {
        toast.error('Incorrect username or password.', {
          position: 'top-center'
        });
        setError('root.serverError', {
          type: 'custom',
          message: 'Incorrect username or password.'
        });
      }
    } catch (err) {
      console.warn(err);
      toast.error(`Network error: ${JSON.stringify(err)}`, {
        position: 'top-center'
      });
      setError('root.serverError', {
        type: 'custom',
        message: `There has been a network error while logging in. Please try again. If you still get an error please report on our discord and let them know the following: ${JSON.stringify(
          err
        )}`
      });
    }
  };

  return (
    <>
    <NavBar />
    <HomeHeader />
    <div className="core-wrapper">
    <div className="flex-padder"></div>
    <div className="flex-wrapper">
      <div className="login container bg-black">
        <h2>Log In</h2>
        <p className="login-message">Make sure to use your username, not your email!</p>
        
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>Username</label>
          <input className="username" type="text" {...register('userID')} />
          <label>Password</label>
          <input className="password" type="password" {...register('password')} />
          <div className="remember-me">
          <input type="checkbox" {...register('rememberMe')} />
          <label htmlFor="rememberMe">Remember Me</label> 
          </div>
          <button type="submit" disabled={isSubmitting} aria-busy={isSubmitting}>
            Submit
          </button>
          {errors.root?.serverError?.message && (
            <div>
              {errors.root?.serverError?.message}
            </div>
          )}
        </form>
      </div>

      <div className="container bg-blue">
        <p>By using the Remember Me function, you consent to a cookie being stored in your browser for the purpose of identifying
          your account on future visits.</p>
        <Link to="/PrivacyPolicy">Privacy Policy</Link>
      </div>
        
    </div>

    <div className="flex-padder"></div>
    </div>
    </>
  )
}

export default Login
