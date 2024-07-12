

function GameLobby() {
  const copyText = () => {};
  const submitChat = () => {};
  const chatKey = () => {};
  return (
    <div className="game-lobby">
        <div id="mainPanel" style={{textAlign:'center'}}>
          <div className="game-set-up container bg-blue">
            <h2>Set Up</h2>
            <div id="setup-content">
              <p>Waiting for another player to join.</p>
              <div className="invite-link-wrapper">
                <input className="GameLobby_Input invite-link" onClick={copyText} type="text" id="gameLink" value="http://localhost:8080/SWUOnline/JoinGame.php?gameName=5&amp;playerID=2" />
                <button className="GameLobby_Button" onClick={copyText}>Copy Invite Link</button>
              </div>
            </div>
            <div id="submitForm">
              <form action="./SubmitSideboard.php">
                <input type="hidden" id="gameName" name="gameName" value="5" />
                <input type="hidden" id="playerID" name="playerID" value="1" />
                <input type="hidden" id="playerCharacter" name="playerCharacter" value="6093792814,2579145458" />
                <input type="hidden" id="playerDeck" name="playerDeck" value="0074718689,0074718689,0074718689,0949648290,0949648290,1662196707,1662196707,1662196707,1785627279,1785627279,1785627279,1880931426,1880931426,1880931426,2050990622,2050990622,2050990622,3038238423,3038238423,3038238423,3789633661,3789633661,3789633661,3809048641,3809048641,3809048641,3896582249,4405415770,4405415770,6208347478,6208347478,6903722220,6903722220,6903722220,7109944284,7109944284,7109944284,7202133736,7202133736,7202133736,7861932582,8615772965,8918765832,8918765832,9560139036,9560139036,9560139036,9680213078,9680213078,9680213078" />
                <input type="hidden" id="authKey" name="authKey" value="59c22387d1e838528dbb8ac60288689dc24518088a03e3b3b740538679356fd8" />
                <input className="GameLobby_Button" type="submit" value="Start" />
              </form>
            </div>
          </div>
        </div>
        <div className="chat-log container bg-black">
          <h2>Chat</h2>
          <div id="gamelog" className="gamelog"></div>
          <div id="chatbox" className="chatbox">
            <div className="lobby-chat-input">
              <input className="GameLobby_Input" type="text" id="chatText" name="chatText" value="" onKeyDown={chatKey}/>
              <button className="GameLobby_Button" onClick={submitChat}>Chat</button>
            </div>
          </div>
        </div>
      </div>
  )
}

export default GameLobby
