import { Link } from "react-router-dom"
import useAuth from "../../hooks/useAuth";
import { useGetFavoriteDecksQuery } from "../../features/api/apiSlice";
import { yupResolver } from "@hookform/resolvers/yup";
import { CreateGameAPI } from "../../interface/api/createGame.php";
import { useForm } from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';
import validationSchema from './components/createGameValidationSchema';

function CreateGame() {
  const { isLoggedIn } = useAuth();
  const { data, isLoading, isSuccess } = useGetFavoriteDecksQuery(undefined);
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

  return (
    <div className="create-game-wrapper">
      <div className="create-game container bg-black">
        <h2>Create New Game</h2>
        <form action="http://localhost:8080/SWUOnline/CreateGame.php">  
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
          <label htmlFor="swudb">
            <u>
              <a href="https://www.swudb.com/" target="_blank" rel="noreferrer">SWUDB</a>
            </u> Deck Link 
            <span className="secondary">(use the url or &apos;Deck Link&apos; button)</span>
          </label>
          <input type="text" id="swudb" name="swudb" />
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
