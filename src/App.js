import React from "react";
import { useState } from "react";
import {
  GlobalStyles,
  Container,
  Navbar,
  NavLeft,
  Menu,
  MenuList,
  MenuItems,
  Item,
  NavRight,
  LoginButton,
  SignupButton,
  MenuIcon,
} from "./components/styles/global.style"; // Replace with the correct file path
import { ReactComponent as Logo } from "./images/logo.svg";
import { GiHamburgerMenu } from "react-icons/gi";

function App() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  return (
    <>
      <GlobalStyles />
      <Container>
        <Navbar>
          <NavLeft>
            <div className="logo">
              {/* Assuming Logo is just an image */}
              <Logo />
            </div>
            <Menu isMenuVisible={isMenuVisible}>
              <MenuList isMenuVisible={isMenuVisible}>
                <MenuItems>
                  <Item href="#">Features</Item>
                </MenuItems>
                <MenuItems>
                  <Item href="#">Pricing</Item>
                </MenuItems>
                <MenuItems>
                  <Item href="#">Resources</Item>
                </MenuItems>
              </MenuList>
            </Menu>
          </NavLeft>

          <NavRight>
            <LoginButton href="#" className="login-button">
              Log In
            </LoginButton>
            <SignupButton className="signup-button">Sign Up</SignupButton>
            <MenuIcon id="menu-icon" onClick={toggleMenu}>
              {/* Assuming GiHamburgerMenu is an SVG icon */}
              <GiHamburgerMenu />
            </MenuIcon>
          </NavRight>
        </Navbar>
      </Container>
    </>
  );
}

export default App;
