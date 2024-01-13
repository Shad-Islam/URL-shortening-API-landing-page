import React from "react";
import { useState } from "react";
import {
  Menu,
  Item,
  NavLeft,
  NavRight,
  MenuIcon,
  MenuList,
  MenuItems,
  LoginButton,
  SignupButton,
  NavbarContainer,
} from "./styles/nav.style";
import { GiHamburgerMenu } from "react-icons/gi";
import { ReactComponent as Logo } from "../images/logo.svg";

function NavbarSection() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };
  return (
    <>
      <NavbarContainer>
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
      </NavbarContainer>
    </>
  );
}

export default NavbarSection;
