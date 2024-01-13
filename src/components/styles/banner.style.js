import styled from "styled-components";

const BannerContainer = styled.div`
  height: 500px;
  width: 1300px;
  padding: 20px;
  display: flex;
  margin: 0 auto;
  //   background-color: green;
  transition: all linear 0.2s;

  @media (max-width: 600px) {
    width: 100%;
    flex-direction: column;
    margin-top: ${(props) => (props.isMenuVisible ? "120px" : "0")};
  }
`;

const BannerLeft = styled.div`
  height: 100%;
  width: 50%;
  //   background-color: red;

  @media (max-width: 600px) {
    width: 100%;
  }
`;
const BannerRight = styled.div`
  height: 100%;
  width: 50%;
  //   background-color: yellow;
`;

const BannerHeading = styled.h1`
  font-size: 66px;
  font-weight: 700;
  margin-bottom: 10px;
  color: hsl(255, 11%, 22%);
`;
const BannerText = styled.p`
  margin-bottom: 30px;
  padding-right: 185px;
  color: hsl(0, 0%, 75%);
`;

const BannerButton = styled.button`
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
    // display: none;
  }
`;

export {
  BannerLeft,
  BannerText,
  BannerRight,
  BannerButton,
  BannerHeading,
  BannerContainer,
};
