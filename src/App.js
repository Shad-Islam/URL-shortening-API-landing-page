import "./App.css";
import { ReactComponent as Logo } from "./images/logo.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

function App() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  function toggleMenu() {
    setIsMenuVisible(!isMenuVisible);
  }

  return (
    <div className="App">
      <div className="conatiner">
        <nav>
          <div className="nav-left">
            <div className="logo">
              <Logo />
            </div>
            <div className={`${isMenuVisible ? "menu" : "menu-list"}`}>
              <ul>
                <li> Features</li>
                <li> Pricing</li>
                <li> Resources</li>
              </ul>
            </div>
          </div>

          <div className="nav-right">
            <a href="#" className="login-button">
              Log In
            </a>
            <button className="signup-button">Sign Up</button>
            <div className="menu-icon" id="menu-icon" onClick={toggleMenu}>
              <GiHamburgerMenu />
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default App;
