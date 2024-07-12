import { Link, useNavigate, useSearchParams } from "react-router-dom"
import useAuth from "../../hooks/useAuth";
import { useCreateGameMutation, useGetFavoriteDecksQuery } from "../../features/api/apiSlice";
import { yupResolver } from "@hookform/resolvers/yup";
import { CreateGameAPI } from "../../interface/api/createGame.php";
import { SubmitHandler, useForm } from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';
import validationSchema from './components/createGameValidationSchema';
import { GAME_FORMAT, GAME_VISIBILITY } from "../../appConstants";
import { useAppDispatch } from "../../app/hooks";
import { setGameStart } from "../../features/game/GameSlice";
import toast from "react-hot-toast";
import { useEffect, useMemo } from "react";

function CreateGame() {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { data, isLoading, isSuccess } = useGetFavoriteDecksQuery(undefined);
  const [searchParams, setSearchParams] = useSearchParams();
  const [createGame, createGameResult] = useCreateGameMutation();

  const {
    formState: { isSubmitting, errors },
    register,
    handleSubmit,
    setError,
    reset
  } = useForm<CreateGameAPI>({
    mode: 'onBlur',
    resolver: yupResolver(validationSchema)
  });

const initialValues: CreateGameAPI = useMemo(() => {
    return {
      deck: '',
      fabdb: searchParams.get('fabdb') ?? '',
      deckTestMode: false,
      format: searchParams.get('format') ?? isLoggedIn 
         ? data?.lastFormat !== undefined
            ? data.lastFormat
            : GAME_FORMAT.PREMIER
          : GAME_FORMAT.OTHER,
      visibility:
        searchParams.get('visibility') ??
        (isLoggedIn
          ? data?.lastVisibility !== undefined && data.lastVisibility == 1
            ? GAME_VISIBILITY.PUBLIC
            : GAME_VISIBILITY.PRIVATE
          : GAME_VISIBILITY.PRIVATE),
      decksToTry: '',
      favoriteDeck: false,
      favoriteDecks:
        data?.lastUsedDeckIndex !== undefined
          ? data.favoriteDecks.find(
              (deck) => deck.index === data.lastUsedDeckIndex
            )?.key
          : '',
      gameDescription: '',
      deckTestDeck: ''
    };
  }, [isSuccess, isLoggedIn]);

  useEffect(() => {
    reset(initialValues);
  }, [initialValues, reset]);

  const onSubmit: SubmitHandler<CreateGameAPI> = async (
    values: CreateGameAPI
  ) => {
    try {
      console.log('onSubmit');
      // if you're not logged in you can ONLY make a private game.
      if (!isLoggedIn) values.visibility = GAME_VISIBILITY.PRIVATE;
      values.user = searchParams.get('user') ?? undefined;
      const response = await createGame(values).unwrap();
      if (response.error) {
        throw response.error;
      } else {
        if (!response.playerID || !response.gameName || !response.authKey) {
          throw new Error('A required param is missing');
        }
        dispatch(
          setGameStart({
            playerID: response.playerID ?? 0,
            gameID: response.gameName ?? 0,
            authKey: response.authKey ?? ''
          })
        );
        navigate(`/game/lobby/${response.gameName}`, {
          state: { playerID: response.playerID ?? 0 }
        });
      }
    } catch (error) {
      console.warn(error);
      toast.error(String(error), { position: 'top-center' });
      setError('root.serverError', {
        type: 'custom',
        message: `There has been an error while creating your game. Message: ${JSON.stringify(
          error
        )} Please try again`
      });
    }
  };

  return (
    <div className="create-game-wrapper">
      <div className="create-game container bg-black">
        <h2>Create New Game</h2>
        <form onSubmit={handleSubmit(onSubmit)}> 
          {isLoggedIn && !isLoading && (
              <label>
                Favorite Deck
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
            )}
            <ErrorMessage
              errors={errors}
              name="favoriteDecks"
              render={({ message }) => (
                <p>
                  {message}
                </p>
              )} />
          <label htmlFor="swudb">
            <u>
              <a href="https://www.swudb.com/" target="_blank" rel="noreferrer">SWUDB</a>
            </u> Deck Link 
            <span className="secondary">(use the url or &apos;Deck Link&apos; button)</span>
          </label>
          <input type="text" id="swudb" {...register('fabdb')} />
          <ErrorMessage
              errors={errors}
              name="fabdb"
              render={({ message }) => (
                <p>
                  {message}
                </p>
              )}
            />
          {isLoggedIn && (
            <span className="save-deck">
              <label htmlFor="favoritedeck">
                <input className="inputFavoriteDeck" type="checkbox" id="favoriteDeck" {...register("favoriteDeck")} />
                  Save to Favorite Decks
                </label>
              </span>
            )}
          <label htmlFor="gameDescription" className="game-name-label">Game Name</label>
          <input type="text" id="gameDescription" name="gameDescription" placeholder="Game #" />

          <label htmlFor="format" className="SelectDeckInput">Format</label>
          <select id="format" {...register('format')}>
            <option value={GAME_FORMAT.PREMIER}>Premier</option>
            <option value={GAME_FORMAT.COMPETATIVE_PREMIER}>
              Request-Undo Premier
            </option>
            <option value={GAME_FORMAT.OTHER}>
              Open Format
            </option>
          </select>
          {isLoggedIn === false && <p className="login-notice">❗<Link to="/Login">Log In</Link> to be able to create public games.</p> }
          {isLoggedIn && <label htmlFor="public" className="privacy-label">
            <input type="radio" className="privacy-input" id="public" {...register('visibility')} value="public" />Public
          </label>
          }
          <label htmlFor="private" className="privacy-label">
            <input type="radio" className="privacy-input" id="private" {...register('visibility')} value="private" />Private
          </label>
          <div>
            <input type="submit" className="create-game-button" value="Create Game" />
          </div>
          {errors.root?.serverError?.message && (
            <div>
              {errors.root?.serverError?.message}
            </div>
          )}
        </form>
      </div>
    </div>
  )
}

export default CreateGame
