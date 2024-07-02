import { Link } from "react-router-dom"
import useAuth from "../../hooks/useAuth";

function GameBrowser() {
  const { isLoggedIn } = useAuth();

  return (
    <div className="game-browser-wrapper">
      <div className="game-browser container bg-black" >
        <div className="SpectatorContainer">
          <h2>Public Games</h2>
          { isLoggedIn === false && <p className="login-notice">❗
            <Link to="/Login">Log In</Link> to use matchmaking and see open matches
          </p> }
          <div className="progress-title-wrapper">
            <h3 className="progress-header">Games In Progress</h3>
            <h3 className="progress-count">0</h3>
          </div>
          <hr />
        </div>    
      </div>
    </div>
  )
}

export default GameBrowser
