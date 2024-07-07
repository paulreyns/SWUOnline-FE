import { Link } from "react-router-dom"
import useAuth from "../../hooks/useAuth";
import FormatList from "./components/formatList";
import { GAME_FORMAT } from '../../appConstants';
import { useGetGameListQuery } from "../../features/api/apiSlice";
import { IOpenGame } from "../../interface/api/getGameList.php";

function GameBrowser() {
  const { isLoggedIn } = useAuth();
  const { data, isLoading, error, refetch, isFetching } =
    useGetGameListQuery(undefined);
  
  const games = data?.openGames ? [...data.openGames] : [];
  
  return (
    <div className="game-browser-wrapper">
      <div className="game-browser container bg-black" >
        <div className="SpectatorContainer">
          <h2>Public Games</h2>
          { isLoggedIn === false && <p className="login-notice">❗
            <Link to="/Login">Log In</Link> to use matchmaking and see open matches
          </p> }
          { isLoggedIn === true && <>
            <FormatList name="Premier" games={games
              .filter((game) => game.format === GAME_FORMAT.PREMIER)} />
            <FormatList name="Request-Undo Premier" games={games
              .filter((game) => game.format === GAME_FORMAT.COMPETATIVE_PREMIER)} />
            <FormatList name="Other" games={games
              .filter((game) => game.format === GAME_FORMAT.OTHER)} />
            </>}
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
