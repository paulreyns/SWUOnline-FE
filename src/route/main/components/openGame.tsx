import { Link } from 'react-router-dom';
import { IOpenGame } from '../../../interface/api/getGameList.php';

const OpenGame = ({
  ix,
  entry,
  isOther
}: {
  ix: number;
  entry: IOpenGame;
  isOther?: boolean;
}) => {
  
  return (
    <tr key={ix}>
      <td className="game-name">
        Game #{entry.gameName}
        {isOther && <div>{entry.formatName}</div>}
      </td>
      <td>
        <Link to={`/JoinGame/${entry.gameName}`} className="button ServerChecker_Button" id="joinGame">
          Join Game
        </Link>
      </td>
    </tr>
  );
};

export default OpenGame;