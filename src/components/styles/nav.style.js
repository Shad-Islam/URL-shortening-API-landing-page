import styled from "styled-components";

// Navbar styled component
const NavbarContainer = styled.nav`
  display: flex;
  width: 1300px;
  padding: 20px;
  justify-content: space-between;
  /* background-color: palegoldenrod; */

  @media (max-width: 600px) {
    width: 100%;
  }
`;

// NavLeft styled component
const NavLeft = styled.div`
  gap: 20px;
  width: 50%;
  display: flex;
  align-items: center;
  /* background-color: aqua; */
`;

// Menu styled component
const Menu = styled.div`
  position: relative;
  @media (max-width: 600px) {
  }
`;

// MenuList styled component
const MenuList = styled.ul`
  display: flex;
  list-style: none;
  transition: all linear 0.7s;

  @media (max-width: 600px) {
    top: 20px;
    right: 23px;
    position: absolute;
    flex-direction: column;
    display: ${(props) => (props.isMenuVisible ? "flex" : "none")};
  }
`;

// MenuItem styled component
const MenuItems = styled.li`
  padding: 20px;
  list-style-type: none;

  @media (max-width: 600px) {
    padding: 10px;
  }
`;

const Item = styled.a`
  font-size: 18px;
  text-decoration: none;
  color: hsl(257, 7%, 63%);
  transition: all linear 0.7s;

  &:hover {
    color: #000;
  }
`;

// NavRight styled component
const NavRight = styled.div`
  gap: 20px;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  /* background-color: rgb(67, 97, 97); */
`;

// LoginButton styled component
const LoginButton = styled.a`
  font-size: 18px;
  text-decoration: none;
  color: hsl(257, 7%, 63%);
  transition: all linear 0.7s;

  &:hover {
    color: #000;
  }

  @media (max-width: 600px) {
    display: none;
  }
`;

// SignupButton styled component
const SignupButton = styled.button`
  outline: 0;
  border: 0;
  color: #fff;
  cursor: pointer;
  font-size: 18px;
  padding: 6px 18px;
  border-radius: 24px;
  transition: all linear 0.7s;
  background-color: hsl(180, 66%, 49%);

  &:hover {
    background-color: #9de1e2;
  }

  @media (max-width: 600px) {
    display: none;
  }
`;

// MenuIcon styled component
const MenuIcon = styled.div`
  display: none;

  @media (max-width: 600px) {
    display: block;
    font-size: 18px;
  }
`;

// Export components
export {
  Menu,
  Item,
  NavLeft,
  MenuList,
  MenuIcon,
  NavRight,
  MenuItems,
  LoginButton,
  SignupButton,
  NavbarContainer,
};
