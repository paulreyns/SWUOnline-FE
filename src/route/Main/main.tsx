import HomeHeader from '../../components/homeheader'
import NavBar from '../../components/navbar'
import GameBrowser from './gamebrowser'
import GameNews from './game-news'
import CreateGame from './create-game'

function Main() {
  return (
    <>
      <NavBar />
      <HomeHeader />
      <div className="core-wrapper">
        <GameBrowser />
        <CreateGame />
        <GameNews />
      </div>
    </>
  )
}

export default Main
