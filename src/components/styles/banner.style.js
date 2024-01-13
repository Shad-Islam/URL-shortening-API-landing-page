import styled from "styled-components";

const BannerContainer = styled.div`
  height: 100px;
  width: 1300px;
  padding: 20px;
  margin: 0 auto;
  background-color: green;
  //   transition: all linear 0.2s;

  @media (max-width: 600px) {
    width: 100%;
    margin-top: ${(props) => (props.isMenuVisible ? "120px" : "0")};
  }
`;

export { BannerContainer };
