import { Link } from "react-router-dom"

function HomeHeader() {
  return (
<div className="home-header">
  <Link to="/" className="title"> 
      <div className="title">
          <h1>Karabast</h1>
          <p>
            The Fan-Made, Open-Source
            <br />
            Star Wars Unlimited Simulator
          </p>
      </div>
  </Link>

  <div className="home-banner">
      <div className="banner block-1"></div>
      <div className="banner block-2"></div>
      <div className="banner block-3"></div>
      <div className="banner block-4"></div>
  </div>

</div>
  )
}

export default HomeHeader
