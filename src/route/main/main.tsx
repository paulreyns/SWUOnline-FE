import HomeHeader from '../../components/homeHeader'
import NavBar from '../../components/navbar'
import GameBrowser from './gameBrowser'
import GameNews from './gameNews'
import CreateGame from './createGame'

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
