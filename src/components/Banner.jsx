import React from "react";
import { BannerContainer } from "./styles/banner.style";

function Banner({ isMenuVisible }) {
  return (
    <div>
      <BannerContainer isMenuVisible={isMenuVisible}>
        <h1>Hello</h1>
      </BannerContainer>
    </div>
  );
}

export default Banner;
