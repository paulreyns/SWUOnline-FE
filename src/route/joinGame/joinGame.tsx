import HomeHeader from '../../components/homeHeader'
import NavBar from '../../components/navbar'

function JoinGame() {
  return (
    <>
      <NavBar />
      <HomeHeader />
      <div className="core-wrapper">
      <div className="flex-padder"></div>
      <div className="flex-wrapper">
        <div className="game-invite container bg-black">
          <h2>Join Game</h2>
          <form action="http://localhost:8080/SWUOnline/JoinGameInput.php">
            <input type="hidden" id="gameName" name="gameName" value="5" />
            <input type="hidden" id="playerID" name="playerID" value="2" />
            <label htmlFor="favoriteDecks">Favorite Decks
              <select name="favoriteDecks" id="favoriteDecks">
                <option value="www.swudb.com/deck/view/SDhHGqmxj">Luke Aggro Mill FINAL v18</option>
              </select>
            </label>
            <label htmlFor="swudb">
              <u><a href="https://www.swudb.com/" target="_blank" rel="noreferrer">SWUDB</a></u> Deck Link <span className="secondary">(use the url or &apos;Deck Link&apos; button)</span>
            </label>
            <input type="text" id="swudb" name="swudb" />
            <span className="save-deck">
              <label htmlFor="favoriteDeck">
                <input title="Save deck to Favorites" className="inputFavoriteDeck" type="checkbox" id="favoriteDeck" name="favoriteDeck" />
                Save Deck to Favorites
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

export default JoinGame
