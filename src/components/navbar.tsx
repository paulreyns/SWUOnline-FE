import { Link } from 'react-router-dom'
import discordLogo from '../assets/Images/icons/discord.svg'
import githubLogo from '../assets/Images/icons/github.svg'

function NavBar() {
  return (
    <div className="nav-bar">
      <div className="nav-bar-user">
        <ul className="rightnav">
          <li>
            <Link to="/Signup" className="NavBarItem">Sign Up</Link>
          </li>
          <li>
            <Link to="/Login" className="NavBarItem">Log In</Link>
          </li>
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
