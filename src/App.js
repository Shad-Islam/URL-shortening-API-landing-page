import { useState } from "react";
// import Search from "./components/Search";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Feature from "./components/Feature";
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
        {/* <Search />
        <Feature />
        <Footer /> */}
      </Container>
    </>
  );
}

export default App;
