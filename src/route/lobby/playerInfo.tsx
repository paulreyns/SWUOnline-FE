

function GameLobby() {
    const showCardDetail = () => {};
    const hideCardDetail = () => {};
  return (
    <div className="player-info container bg-black">    
        <h2>Players</h2>
        <div id="my-info">
          <h3><span>paulreynolds</span></h3>
          <div className="display-card">
            <a className="display-card" onMouseEnter={showCardDetail} onMouseLeave={hideCardDetail}>
                <img data-orientation="landscape" className="cardImage" src="WebpImages2/CardBack.webp" />
                <div className="overlay"></div>
            </a>
          </div>
          <div className="display-card">
            <a className="display-card" onMouseEnter={showCardDetail} onMouseLeave={hideCardDetail}>
                <img data-orientation="landscape" className="cardImage" src="WebpImages2/CardBack.webp" />
                <div className="overlay"></div>
            </a>
          </div>
    </div>
    ∆
    <div id="their-info">
        <h3><span>Player 1</span></h3>
        <a className="display-card" onMouseEnter={showCardDetail} onMouseLeave={hideCardDetail}>
            <img data-orientation="landscape" className="cardImage" src="WebpImages2/CardBack.webp" />
            <div className="overlay"></div>
        </a>
        <a className="display-card" onMouseEnter={showCardDetail} onMouseLeave={hideCardDetail}>
            <img data-orientation="landscape" className="cardImage" src="WebpImages2/CardBack.webp" />
            <div className="overlay"></div>
        </a>
    </div>
    </div>
  )
}

export default GameLobby

