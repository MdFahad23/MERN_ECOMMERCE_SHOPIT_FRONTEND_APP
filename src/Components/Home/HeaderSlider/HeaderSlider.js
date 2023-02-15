import React from "react";
import { Carousel } from "react-carousel-minimal";

import Banner1 from "../../../Images/Banner1.jpg";
import Banner2 from "../../../Images/Banner2.jpg";
import Banner3 from "../../../Images/Banner3.jpg";
import Banner4 from "../../../Images/Banner4.jpg";
import Banner5 from "../../../Images/Banner5.jpg";

const HeaderSlider = () => {
  const data = [
    { image: Banner1 },
    { image: Banner2 },
    { image: Banner3 },
    { image: Banner4 },
    { image: Banner5 },
  ];

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
