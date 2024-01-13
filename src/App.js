import { useState } from "react";
import Banner from "./components/Banner.jsx";
import NavbarSection from "./components/Navbar.jsx";
import { GlobalStyles, Container } from "./components/styles/global.style";

function App() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  return (
    <>
      <GlobalStyles />
      <Container>
        <NavbarSection
          isMenuVisible={isMenuVisible}
          setIsMenuVisible={setIsMenuVisible}
        />
        <Banner isMenuVisible={isMenuVisible} />
      </Container>
    </>
  );
}

export default App;
