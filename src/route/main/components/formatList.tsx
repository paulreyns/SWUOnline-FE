import { IOpenGame } from "../../../interface/api/getGameList.php";
import OpenGame from "./openGame";

export interface IFormatList {
  name: string;
  games: IOpenGame[];
}

function FormatList({ name, games }: IFormatList) {
  const hasGames = games.length > 0;
  
  return (
    <>
      <h3 className="format-title">{name}</h3>
      <hr />
      {hasGames &&
      <form action="http://localhost:8080/SWUOnline/JoinGame.php">
          <table className="game-item">
              <tbody>
                  {games.map((entry, ix: number) => {
                      return (
                      <OpenGame
                          entry={entry}
                          ix={ix}
                          key={entry.gameName}
                      />
                      );
                  })}
              </tbody>
          </table>
          <input type="hidden" name="gameName" value="4" />
          <input type="hidden" name="playerID" value="2" />
      </form>}
    </>
  )
}

export default FormatList
