import { Link } from "react-router-dom"
import useAuth from "../../hooks/useAuth";

function CreateGame() {
  const { isLoggedIn } = useAuth();
  
  return (
    <div className="create-game-wrapper">
      <div className="create-game container bg-black">
        <h2>Create New Game</h2>
        <form action="http://localhost:8080/SWUOnline/CreateGame.php">  
          <label htmlFor="fabdb">
            <u><a href="https://www.swudb.com/" target="_blank" rel="noreferrer">SWUDB</a></u> Deck Link <span className="secondary">(use the url or &apos;Deck Link&apos; button)</span>
          </label>
          <input type="text" id="fabdb" name="fabdb" />
          <label htmlFor="gameDescription" className="game-name-label">Game Name</label>
          <input type="text" id="gameDescription" name="gameDescription" placeholder="Game #" />

          <label htmlFor="format" className="SelectDeckInput">Format</label>
          <select name="format" id="format"><option value="livinglegendscc">Open Format</option></select>
          {isLoggedIn === false && <p className="login-notice">❗<Link to="/Login">Log In</Link> to be able to create public games.</p> }
          <label htmlFor="private" className="privacy-label">
            <input type="radio" className="privacy-input" id="private" name="visibility" value="private" />Private
          </label>
          <div>
            <input type="submit" className="create-game-button" value="Create Game" />
          </div>
        </form>
      </div>
    </div>
  )
}

export default CreateGame
