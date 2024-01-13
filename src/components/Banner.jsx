import React from "react";
import {
  BannerText,
  BannerLeft,
  BannerRight,
  BannerImage,
  BannerButton,
  BannerHeading,
  BannerContainer,
} from "./styles/banner.style";
// import { ReactComponent as IllustrationWorking } from "../images/illustrationWorking.svg";
import illustrationWorking from "../images/illustrationWorking.svg";

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
          {/* <IllustrationWorking /> */}
          <BannerImage src={illustrationWorking} alt="" />
        </BannerRight>
      </BannerContainer>
    </div>
  );
}

export default Banner;
