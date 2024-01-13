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
    gap: 20px;
    width: 100%;
    flex-direction: column-reverse;
    margin-top: ${(props) => (props.isMenuVisible ? "150px" : "100px")};
  }
`;

const BannerLeft = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: baseline;
  flex-direction: column;
  justify-content: center;
  //   background-color: red;

  @media (max-width: 600px) {
    width: 100%;
  }
`;
const BannerRight = styled.div`
  height: 100%;
  width: 50%;
  //   background-color: yellow;

  @media (max-width: 600px) {
    width: 100%;
    text-align: center;
  }
`;

const BannerImage = styled.img`
  @media (max-width: 600px) {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
  }
`;

const BannerHeading = styled.h1`
  font-size: 66px;
  font-weight: 700;
  color: hsl(255, 11%, 22%);

  @media (max-width: 600px) {
    font-size: 46px;
    text-align: center;
  }
`;
const BannerText = styled.p`
  margin-bottom: 30px;
  padding-right: 185px;
  color: hsl(0, 0%, 75%);

  @media (max-width: 600px) {
    font-size: 20px;
    text-align: center;
    padding-right: 0px;
    margin-bottom: 20px;
  }
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
    margin: 0 auto;
  }
`;

export {
  BannerLeft,
  BannerText,
  BannerImage,
  BannerRight,
  BannerButton,
  BannerHeading,
  BannerContainer,
};
