import React from "react";
import {
  BannerText,
  BannerLeft,
  BannerRight,
  BannerButton,
  BannerHeading,
  BannerContainer,
} from "./styles/banner.style";

function Banner({ isMenuVisible }) {
  return (
    <div>
      <BannerContainer isMenuVisible={isMenuVisible}>
        <BannerLeft>
          <BannerHeading>More than just shorter links</BannerHeading>
          <BannerText>
            Build your brand's recognition and get detailed insights on how your
            links are performing
          </BannerText>
          <BannerButton>Get Started</BannerButton>
        </BannerLeft>
        <BannerRight>
          
        </BannerRight>
      </BannerContainer>
    </div>
  );
}

export default Banner;
