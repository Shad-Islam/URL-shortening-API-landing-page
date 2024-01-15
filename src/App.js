import { useState } from "react";
import Feature from "./components/Feature";
import Search from "./components/Search";
import Banner from "./components/Banner";
import NavbarSection from "./components/Navbar";
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
        {/* <Search /> */}
        <Feature />
      </Container>
    </>
  );
}

export default App;
