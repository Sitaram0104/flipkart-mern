import { Box, makeStyles } from "@material-ui/core";
import { useEffect } from "react";
import { adURL } from "../../constants/data";
import Banner from "./Banner";
import MidSection from "./MidSection";
import Navbar from "./Navbar";
import Slide from "./Slide";
import { useDispatch, useSelector } from "react-redux";
import { selectGetProducts } from "../../redux/features/productSlice";
import { getProducts } from "../../redux/actions/productActions";

const useStyles = makeStyles((theme) => ({
  component: { padding: 10, backgroundColor: "#f2f2f2" },
  leftWrapper: {
    width: "80%",
    [theme.breakpoints.down("md")]: { width: "100%" },
  },
  rightWrapper: {
    backgroundColor: "#ffffff",
    padding: 5,
    margin: "12px 0 0 10px",
    width: 250,
    height: 390,
    [theme.breakpoints.down("md")]: { display: "none" },
  },
}));

function Home() {
  const classes = useStyles();
  const { products } = useSelector(selectGetProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div>
      <Navbar />
      <Box className={classes.component}>
        <Banner />
        <Box style={{ display: "flex" }}>
          <Box className={classes.leftWrapper}>
            <Slide timer title="Deal of the day" products={products} />
          </Box>
          <Box className={classes.rightWrapper}>
            <img src={adURL} alt="ad" style={{ width: 250 }} />
          </Box>
        </Box>
        <MidSection />
        <Slide title="Discounts for you" products={products} />
        <Slide title="Suggested items" products={products} />
        <Slide title="Top Selections" products={products} />
        <Slide title="Recommended items" products={products} />
        <Slide title="Best sellers" products={products} />
      </Box>
    </div>
  );
}

export default Home;
