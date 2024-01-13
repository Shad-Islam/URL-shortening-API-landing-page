import Banner from "./components/Banner.jsx";
import NavbarSection from "./components/Navbar.jsx";
import { GlobalStyles, Container } from "./components/styles/global.style";

function App() {
  return (
    <>
      <GlobalStyles />
      <Container>
        <NavbarSection />
        <Banner />
      </Container>
    </>
  );
}

export default App;
