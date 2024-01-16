import styled from "styled-components";

const FeatureContainer = styled.div`
  height: 500px;
  width: 1300px;
  margin: 0 auto;
  background-color: red;

  @media (max-width: 600px) {
    width: 100%;
  }
`;

export { FeatureContainer };
