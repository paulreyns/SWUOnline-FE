import HomeHeader from '../../components/homeHeader'
import NavBar from '../../components/navbar'
import { useDeleteDeckMutation, useGetFavoriteDecksQuery, useGetUserProfileQuery } from '../../features/api/apiSlice';

import '../../assets/css/profile.css'
import toast from 'react-hot-toast';
import { DeleteDeckAPIResponse } from '../../interface/api/deleteDeckAPI.php';

const CODE = 'code';
const CLIENT_ID = 'UMs7_V2SPi656fczWY0SDtg9M3RJy-gd4H95h7fd05BUJ2UMnd0IM77dp0ZAtBng';
const REDIRECT_URI = 'https://talishar.net/user/profile/linkpatreon';
const SCOPE = 'identity identity.memberships';
const PATREON_URL = 'https://www.patreon.com/oauth2/authorize?';
const PatreonOAuthParam = new URLSearchParams();
PatreonOAuthParam.append('response_type', CODE);
PatreonOAuthParam.append('client_id', CLIENT_ID);
PatreonOAuthParam.append('redirect_uri', REDIRECT_URI);
PatreonOAuthParam.append('scope', SCOPE);

function Profile() {
  const {
    data: decksData,
    isLoading: deckIsLoading,
    refetch: deckRefetch
  } = useGetFavoriteDecksQuery(undefined);
  const {
    data: profileData,
    isLoading: profileIsLoading
  } = useGetUserProfileQuery(undefined);
  const [deleteDeck] = useDeleteDeckMutation();

  const handleDeleteDeckMessage = (resp: DeleteDeckAPIResponse): string => {
    if (resp.message === 'Deck deleted successfully.') {
      return 'The deck has been removed from your favorites list. It is still available to view on the deckbuilding site.';
    } else {
      return 'There has been a problem deleting your deck, please try again.';
    }
  };

  const handleDeleteDeck = async (deckLink: string) => {
    try {
      const deleteDeckPromise = deleteDeck({ deckLink }).unwrap();
      toast.promise(
        deleteDeckPromise,
        {
          loading: 'Deleting deck...',
          success: (data) => handleDeleteDeckMessage(data),
          error: (err) =>
            `There has been an error, please try again. Error: ${err.toString()}`
        },
        {
          style: {
            minWidth: '250px'
          },
          position: 'top-center'
        }
      );
      await deleteDeckPromise;
    } catch (err) {
      console.warn(err);
    } finally {
      deckRefetch();
    }
  };

  return (
    <>
      <NavBar />
      <HomeHeader />
      <div className="core-wrapper">
      <div className="fav-decks container bg-black">
        <h2>Welcome {profileData?.userName}!</h2>

          <div>
            {profileIsLoading && <p>Loading Profile...</p>}
            {!profileIsLoading && profileData?.isPatreonLinked && (
              <p>
                You have linked your patreon. <br />
                <a href={PATREON_URL + PatreonOAuthParam.toString()}>
                  Refresh your patreon connection
                </a>{' '}
                (in case you have new patreons and can&aspot;t access their perks yet)
              </p>
            )}
            {!profileIsLoading && !profileData?.isPatreonLinked && (
              <p>
                <a href={PATREON_URL + PatreonOAuthParam.toString()}>
                  Connect to Patreon
                </a>
              </p>
            )}
          </div>

        <h2>Favorite Decks</h2>
        <table>
            <thead>
              <tr>
                <th scope="col">Hero</th>
                <th scope="col">Deck Name</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>
            <tbody>
              {deckIsLoading && <div>Loading...</div>}
              {decksData?.favoriteDecks.map((deck) => (
                <tr key={deck.key}>
                  <td>{deck.hero}</td>
                  <td>{deck.name}</td>
                  <td>
                    <button onClick={() => handleDeleteDeck(deck.link)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        <h2>Block List</h2>
        <form className="form-resetpwd" action="includes/BlockUser.php" method="post">
          <input className="block-input" type="text" name="userToBlock" placeholder="User to block" />
          <button type="submit" name="block-user-submit">Block</button>
        </form>
      </div>

      <div className="stats container bg-black">
        <h2>Your Record</h2><script src="./jsInclude.js"></script>
        <div id="cardDetail">
        </div>
          <div id="wrapper">
            <div>
              <table>
                <tbody>
                  <tr>
                    <td>Hero</td>
                    <td>Num Wins</td>
                    <td>Num Plays</td>
                    <td>Win %</td>
                    <td>Played %</td>
                  </tr>
                </tbody>
              </table>
              <br />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile
