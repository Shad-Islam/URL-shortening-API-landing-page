import styled, { createGlobalStyle } from "styled-components";

// Global styles (similar to your *{} CSS rule)
const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }
`;

// Container styled component
const Container = styled.div`
  width: 1440px;
  margin: 0 auto;
  /* background-color: #000; */

  @media (max-width: 600px) {
    width: 100%;
  }
`;

// Export components
export { GlobalStyles, Container };
