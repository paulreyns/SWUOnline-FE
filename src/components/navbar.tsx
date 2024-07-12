import { Link, useNavigate } from 'react-router-dom'
import useAuth from '../hooks/useAuth';
import discordLogo from '../assets/Images/icons/discord.svg'
import githubLogo from '../assets/Images/icons/github.svg'

function NavBar() {
  const { isLoggedIn, logOut } = useAuth();
  const navigate = useNavigate();
  const handleLogOut = (e: React.MouseEvent) => {
    e.preventDefault();
    logOut();
    navigate('/');
  };

  return (
    <div className="nav-bar">
      <div className="nav-bar-user">
        <ul className="rightnav">
          {!isLoggedIn && (
          <li>
            <Link to="/Signup" className="NavBarItem">Sign Up</Link>
          </li>
          )}
          <li>
            {isLoggedIn ? (
              <Link to="/Profile">Profile</Link>
            ) : (
              <Link to="/Login" className="NavBarItem">Log In</Link>
            )}
            
          </li>
          {isLoggedIn && (
            <li>
              <a href="" onClick={handleLogOut}>
                Log Out
              </a>
            </li>
          )}
        </ul>
      </div>
      <div className="nav-bar-links">
          <ul>
              <li>
                <a target="_blank" href="https://discord.gg/hKRaqHND4v" rel="noreferrer">
                    <img src={discordLogo} />
                </a>
              </li>
              <li>
                <a target="_blank" href="https://github.com/OotTheMonk/SWUOnline" rel="noreferrer">
                  <img src={githubLogo} />
                </a>
              </li>      
          </ul>
      </div>
    </div>
  )
}

export default NavBar
