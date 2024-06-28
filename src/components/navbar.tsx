function NavBar() {
  return (
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
  )
}

export default NavBar
