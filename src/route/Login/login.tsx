import { Link } from 'react-router-dom'
import HomeHeader from '../../components/homeheader'
import NavBar from '../../components/navbar'

function Login() {
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
        
        <form action="./AccountFiles/AttemptPasswordLogin.php" method="post" className="LoginForm">
          <label>Username</label>
          <input className="username" type="text" name="userID" />
          <label>Password</label>
          <input className="password" type="password" name="password" />
          <div className="remember-me">
          <input type="checkbox" id="rememberMe" name="rememberMe" value="rememberMe" />
          <label htmlFor="rememberMe">Remember Me</label> 
          </div>
          <button type="submit" name="submit">Submit</button>
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
