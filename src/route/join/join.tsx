import toast from 'react-hot-toast';
import HomeHeader from '../../components/homeHeader'
import NavBar from '../../components/navbar'
import { useEffect, useMemo } from 'react';
import { JoinGameAPI } from '../../interface/api/joinGame.php';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate, useParams } from 'react-router-dom';
import { useAppDispatch } from '../../app/hooks';
import { useGetFavoriteDecksQuery, useJoinGameMutation } from '../../features/api/apiSlice';
import useAuth from '../../hooks/useAuth';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { useKnownSearchParams } from '../../hooks/useKnownSearchParams';
import { setGameStart } from '../../features/game/GameSlice';
import validationSchema from './validationSchema';

function Join() {
const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [joinGame, joinGameResult] = useJoinGameMutation();
  const { data, isLoading, isSuccess } = useGetFavoriteDecksQuery(undefined);
  const { isLoggedIn } = useAuth();

  let [{ gameName = '0', playerID = '2', authKey = '' }] =
    useKnownSearchParams();

  const { gameID } = useParams();
  gameName = gameID ?? gameName;

  const {
    formState: { isSubmitting, errors },
    register,
    handleSubmit,
    setError,
    reset
  } = useForm<JoinGameAPI>({
    mode: 'onBlur',
    resolver: yupResolver(validationSchema)
  });

  const initialValues: JoinGameAPI = useMemo(() => {
    return {
      deck: '',
      fabdb: '',
      deckTestMode: false,
      decksToTry: '',
      favoriteDeck: false,
      favoriteDecks:
        data?.lastUsedDeckIndex !== undefined
          ? data.favoriteDecks.find(
              (deck) => deck.index === data.lastUsedDeckIndex
            )?.key
          : '',
      gameDescription: ''
    };
  }, [isSuccess, isLoggedIn]);

  useEffect(() => {
    reset(initialValues);
  }, [initialValues, reset]);

  const onSubmit: SubmitHandler<JoinGameAPI> = async (values: JoinGameAPI) => {
    values.playerID = parseInt(playerID);
    values.gameName = parseInt(gameName);

    try {
      const response = await joinGame(values).unwrap();
      if (response.error) {
        throw response.error;
      } else {
        dispatch(
          setGameStart({
            playerID: response.playerID ?? 0,
            gameID: response.gameName ?? 0,
            authKey: response.authKey ?? ''
          })
        );
        // const searchParam = { playerID: String(response.playerID ?? '0') };
        navigate(`/Lobby/${response.gameName}`, {
          state: { playerID: response.playerID ?? 0 }
        });
      }
    } catch (error) {
      console.warn(error);
      toast.error(String(error), { position: 'top-center' });
      setError('root.serverError', {
        type: 'custom',
        message: `There has been an error while joining the game. Message: ${JSON.stringify(
          error
        )} Please try again`
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
        <div className="game-invite container bg-black">
          <h2>Join Game</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input type="hidden" id="gameName" name="gameName" value="5" />
            <input type="hidden" id="playerID" name="playerID" value="2" />
            <label htmlFor="favoriteDecks">Favorite Decks
              <select
                  id="favoriteDecks"
                  aria-busy={isLoading}
                  {...register('favoriteDecks')}
                  aria-invalid={
                    errors.favoriteDecks?.message ? 'true' : undefined
                  }
                >
                  {data?.favoriteDecks.map((deck) => (
                    <option value={deck.key} key={deck.index}>
                      {deck.name}
                    </option>
                  ))}
                </select>
                <ErrorMessage
                  errors={errors}
                  name="favoriteDecks"
                  render={({ message }) => <p>{message}</p>}
                />
            </label>
            <label htmlFor="swudb">
              <u><a href="https://www.swudb.com/" target="_blank" rel="noreferrer">SWUDB</a></u> Deck Link <span className="secondary">(use the url or &apos;Deck Link&apos; button)</span>
            </label>
            <input type="text" id="swudb" {...register('fabdb')} />
            <span className="save-deck">
              <label htmlFor="favoriteDeck">
                <input title="Save deck to Favorites" className="inputFavoriteDeck" type="checkbox" id="favoriteDeck" {...register('favoriteDeck')} />
                Save Deck to ❤️ Favorites
              </label>
            </span>
            <div style={{ textAlign: 'center' }}>
              <input className="JoinGame_Button" type="submit" value="Join Game" />
            </div>
          </form>
        </div>
        <div className="container bg-blue">
            <h3>Instructions</h3>
            <p>Choose a deck, then click &apos;Join Game&apos; to be taken to the game lobby.</p>
            <p>Once in the game lobby, the player who win the dice roll choose if the go first. Then the host can start the game.</p>
            <p>Have Fun!</p>
        </div>
      </div>
      <div className="flex-padder"></div>
      </div>
    </>
  )
}

export default Join
