import { makeStyles } from "@material-ui/core";
import React from "react";
import Carousel from "react-material-ui-carousel";
import { bannerData } from "../../constants/data";

const useStyle = makeStyles((theme) => ({
  image: {
    width: "100%",
    height: 280,
    [theme.breakpoints.down("sm")]: { objectFit: "cover", height: 180 },
  },
}));

function Banner() {
  const classes = useStyle();

  return (
    <Carousel
      autoplay
      animation="slide"
      indicators={false}
      navButtonsAlwaysVisible
      cycleNavigation
      navButtonsProps={{
        // Change the colors and radius of the actual buttons. THIS STYLES BOTH BUTTONS
        style: {
          backgroundColor: "white",
          color: "#494949",
          borderRadius: 0,
          margin: 0,
        },
      }}
    >
      {bannerData.map((item, i) => (
        <img key={i} src={item} alt="carousel" className={classes.image} />
      ))}
    </Carousel>
  );
}

export default Banner;
