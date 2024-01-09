import NavbarSection from "./components/navbar";
import { GlobalStyles, Container } from "./components/styles/global.style";

function App() {
  return (
    <>
      <GlobalStyles />
      <Container>
        <NavbarSection />
      </Container>
    </>
  );
}

export default App;
