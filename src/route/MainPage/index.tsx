import { useState } from 'react'

function MainPage() {
  return (
    <>
<div className="nav-bar">
  
  <div className="nav-bar-user">
    <ul className="rightnav">
              <li><a href="Signup.php" className="NavBarItem">Sign Up</a></li><li><a href="./LoginPage.php" className="NavBarItem">Log In</a></li>      </ul>
  </div>
  
  <div className="nav-bar-links">
    <ul>
        <li>
          <a target="_blank" href="https://discord.gg/hKRaqHND4v">
            <img src="./Images/icons/discord.svg" />
          </a>
        </li>
        <li><a target="_blank" href="https://github.com/OotTheMonk/SWUOnline"><img src="./Images/icons/github.svg" /></a></li>      
      </ul>
  </div>

</div>
<div className="home-header">
  <a href="./MainMenu.php" className="title"> 
      <div className="title">
          <h1>Karabast</h1>
          <p>The Fan-Made, Open-Source
          Star Wars Unlimited Simulator</p>
      </div>
  </a>

  <div className="home-banner">
      <div className="banner block-1"></div>
      <div className="banner block-2"></div>
      <div className="banner block-3"></div>
      <div className="banner block-4"></div>
  </div>

</div>
<div className="core-wrapper">

<div className="game-browser-wrapper">
  <div className="game-browser container bg-black" >
    <div className="SpectatorContainer">
      <h2>Public Games</h2>
      <p className="login-notice">❗
        <a href="./LoginPage.php">Log In</a> to use matchmaking and see open matches
      </p>
      <div className="progress-title-wrapper">
        <h3 className="progress-header">Games In Progress</h3>
        <h3 className="progress-count">0</h3>
      </div>
      <hr />
    </div>    
  </div>
</div>

<div className="create-game-wrapper">
<div className="create-game container bg-black">
<h2>Create New Game</h2>

<form action="http://localhost:8080/SWUOnline/CreateGame.php">  
<label htmlFor="fabdb"><u><a href="https://www.swudb.com/" target="_blank">SWUDB</a></u> Deck Link <span className="secondary">(use the url or 'Deck Link' button)</span></label>
<input type="text" id="fabdb" name="fabdb" />
  <label htmlFor="gameDescription" className="game-name-label">Game Name</label>
<input type="text" id="gameDescription" name="gameDescription" placeholder="Game #" />

<label htmlFor="format" className="SelectDeckInput">Format</label><select name="format" id="format"><option value="livinglegendscc">Open Format</option></select>
<p className="login-notice">❗<a href="./LoginPage.php">Log In</a> to be able to create public games.</p>  <label htmlFor="private" className="privacy-label">
  <input type="radio" className="privacy-input" id="private" name="visibility" value="private" />Private</label>
<div>
  <input type="submit" className="create-game-button" value="Create Game" />
</div>
</form>

</div>
</div>


<div className="karabast-column">
<div className="karabast-overview container bg-blue">
  <p><b>Karabast is an open-source, fan-made platform.</b></p>
  <p>It is an educational tool only, meant to facilitate researching decks and strategies that is supportive of in-person play. As such, direct competition through the form of automated tournaments or rankings will not be added.</p>
  <p>This tool is free to use and is published non-commercially. Payment is not required to access any functionality.</p>
</div>

<div className="karabast-news container bg-black">
  <h2>News</h2>
  <div>
    <div>
    
    </div>
  </div>
    </div>

</div>

</div>
    </>
  )
}

export default MainPage
