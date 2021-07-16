import { Box, Button, makeStyles } from "@material-ui/core";
import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";
import { selectGetProducts } from "../../redux/features/productSlice";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import { addToCart } from "../../redux/actions/cartActions";
import { useHistory } from "react-router-dom";
import { payUsingPaytm } from "../../service/api.js";
import { post } from "../../utils/paytm.js";

const useStyles = makeStyles({
  leftContainer: {
    // backgroundColor: "red",
    display: "flex",
    flexDirection: "column",
    margin: "0 20px",
  },
  image: { padding: "15px 20px", border: "1px solid #c0c0c0", width: "100%" },
  button: {
    height: 50,
    width: "46%",
    borderRadius: 2,
  },
  addToCart: { backgroundColor: "#ff9f00", color: "white" },
  buyNow: { backgroundColor: "#fb641b", color: "white" },
});

function ActionItems() {
  const { product } = useSelector(selectGetProducts);
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  const addToCartHandler = () => {
    dispatch(addToCart(product.id));
    history.push("/cart");
  };

  const buyNowHandler = async () => {
    let response = await payUsingPaytm({
      amount: 500,
      email: "ajay@gmail.com",
    });
    let information = {
      action: "https://securegw-stage.paytm.in/order/process",
      params: response,
    };
    post(information);
  };

  return (
    <Box className={classes.leftContainer}>
      <img
        src={product.detailUrl}
        alt="productdetailurl"
        className={classes.image}
      />
      <br />
      <Box
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: 5,
        }}
      >
        <Button
          className={clsx(classes.button, classes.addToCart)}
          onClick={addToCartHandler}
        >
          <ShoppingCartIcon />
          Add to Cart
        </Button>
        <Button
          className={clsx(classes.button, classes.buyNow)}
          onClick={buyNowHandler}
        >
          <FlashOnIcon />
          Buy Now
        </Button>
      </Box>
    </Box>
  );
}

export default ActionItems;
