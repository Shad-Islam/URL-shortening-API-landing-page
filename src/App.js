import "./App.css";
import { ReactComponent as Logo } from "./images/logo.svg";
import { GiHamburgerMenu } from "react-icons/gi";

function App() {
  return (
    <div className="App">
      <div className="conatiner">
        <nav>
          <div className="nav-left">
            <div className="logo">
              <Logo />
            </div>
            <div className="menu">
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
            <div className="menu-icon">
              <GiHamburgerMenu />
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default App;
