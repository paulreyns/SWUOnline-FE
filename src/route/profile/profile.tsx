import HomeHeader from '../../components/homeHeader'
import NavBar from '../../components/navbar'
import '../../assets/css/profile.css'

function Profile() {
return (
    <>
      <NavBar />
      <HomeHeader />
      <div className="core-wrapper">
      <div className="fav-decks container bg-black">
        <h2>Welcome paulreynolds!</h2>

        <a className="containerPatreon" href="https://www.patreon.com/oauth2/authorize?response_type=code&amp;client_id=&amp;redirect_uri=https%3A%2F%2Fwww.karabast.net%2FSWUOnline%2FPatreonLogin.php&amp;state=eyJmaW5hbF9wYWdlIjoiaHR0cDpcL1wva2FyYWJhc3QubmV0XC9TV1VPbmxpbmVcL01haW5NZW51LnBocCJ9&amp;scope=identity%20identity.memberships">
          <img className="imgPatreon" src="./Assets/patreon-php-master/assets/images/login_with_patreon.png" alt="Login via Patreon" />
        </a>
        <h2>Favorite Decks</h2>  
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
