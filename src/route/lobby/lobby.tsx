import GameLobby from "./gameLobby";
import PlayerInfo from "./playerInfo";

function Lobby() {
  return (<>
      <div className="lobby-container">
        <div id="cardDetail">
          <img style={{ height: '375px', width: '523px' }} src="http://localhost:8080/SWUOnline/WebpImages2/6093792814.webp" />
        </div>
        <div className="lobby-header">
          <h1>Game Lobby</h1>
          <p className="leave-lobby"><a href="MainMenu.php">Leave Lobby</a></p>
        </div>
        <div className="lobby-wrapper">
          <GameLobby></GameLobby>
          <PlayerInfo></PlayerInfo>
        </div>
      </div>
    </>
  )
}

export default Lobby
