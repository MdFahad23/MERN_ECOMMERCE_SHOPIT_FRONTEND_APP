import React from "react";
import { Carousel } from "react-carousel-minimal";

import Banner1 from "../../../Images/Banner1.jpg";
import Banner2 from "../../../Images/Banner2.jpg";
import Banner3 from "../../../Images/Banner3.jpg";

const HeaderSlider = () => {
  const data = [{ image: Banner1 }, { image: Banner2 }, { image: Banner3 }];

  return (
    <div>
      <Carousel
        data={data}
        time={5000}
        width="100%"
        height="600px"
        automatic={true}
        dots={true}
        pauseIconColor="white"
        pauseIconSize="40px"
        slideImageFit="cover"
      />
    </div>
  );
};

export default HeaderSlider;
