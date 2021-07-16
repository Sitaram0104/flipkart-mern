import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { timerURL } from "../../constants/data";
import {
  makeStyles,
  Typography,
  Box,
  Button,
  Divider,
} from "@material-ui/core";
import Countdown from "react-countdown";
import { Link } from "react-router-dom";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const useStyle = makeStyles((theme) => ({
  image: { height: 150 },
  component: { marginTop: 12, backgroundColor: "white", padding: 15 },
  deal: {
    padding: "15px 20px",
    display: "flex",
  },
  dealText: {
    fontSize: 22,
    fontWeight: 600,
    lineHeight: "32px",
    marginRight: 25,
  },
  timer: {
    color: "#7f7f7f",
    marginLeft: 10,
    alignItems: "center",
    display: "flex",
  },
  timerBox: { [theme.breakpoints.down("sm")]: { display: "none" } },
  button: {
    marginLeft: "auto",
    backgroundColor: "#2874f0",
    color: "white",
    borderRadius: 2,
    fontsize: 13,
    "&:hover": { backgroundColor: "#2874f0", opacity: 0.8 },
  },
  text: { fontSize: 14, marginTop: 5 },
  wrapper: { padding: "25px 15px" },
}));

function Slide({ timer, title, products }) {
  const classes = useStyle();

  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
    } else {
      // Render a countdown
      return (
        <span className={classes.timer}>
          {hours} : {minutes} : {seconds} Left
        </span>
      );
    }
  };

  return (
    <Box className={classes.component}>
      <Box className={classes.deal}>
        <Typography className={classes.dealText}>{title}</Typography>
        {timer && (
          <Box className={classes.timerBox}>
            <img src={timerURL} alt="" style={{ width: "24px" }} />
            <Countdown date={Date.now() + 50400000} renderer={renderer} />
          </Box>
        )}
        <Button variant="contained" className={classes.button}>
          view all
        </Button>
      </Box>
      <Divider />

      <Carousel
        responsive={responsive}
        infinite={true}
        draggable={false}
        swipeable={false}
        centerMode={true}
        autoPlay={true}
        autoPlaySpeed={10000}
        keyBoardControl={true}
        showDots={false}
        // removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        containerClass="carousel-container"
      >
        {products.map(({ url, title, discount, tagline, id }) => (
          <Link
            to={`/product/${id}`}
            key={id}
            style={{ textDecoration: "none" }}
          >
            <Box textAlign="center" className={classes.wrapper}>
              <img src={url} alt="" className={classes.image} />
              <Typography
                className={classes.text}
                style={{ fontWeight: 600, color: "#212121" }}
              >
                {title.shortTitle}
              </Typography>
              <Typography className={classes.text} style={{ color: "green" }}>
                {discount}
              </Typography>
              <Typography className={classes.text} style={{ color: "#888888" }}>
                {tagline}
              </Typography>
            </Box>
          </Link>
        ))}
      </Carousel>
    </Box>
  );
}

export default Slide;
