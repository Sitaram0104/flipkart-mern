import { selectCart } from "../../redux/features/cartSlice";
import { useSelector } from "react-redux";
import { Box, Button, makeStyles, Typography } from "@material-ui/core";
import CartItem from "./CartItem";
import EmptyCart from "./EmptyCart";
import TotalView from "./TotalView";

const useStyles = makeStyles((theme) => ({
  component: {
    padding: "30px 130px",
    [theme.breakpoints.down("sm")]: {
      padding: "15px 30px",
    },
  },
  componentBox: {
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      flexDirection: "column",
    },
  },
  leftComponent: {
    width: "67%",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  header: {
    backgroundColor: "#fff",
    padding: "15px 24px",
    "& > *": { fontSize: 18, fontWeight: 600 },
  },
  bottom: {
    padding: "16px 22px",
    backgroundColor: "white",
    borderTop: "1px solid #f0f0f0",
    boxShadow: "0 -2px 10px 0 rgba(0, 0, 0, 0.3)",
  },
  placeOrder: {
    backgroundColor: "#fb641b",
    color: "white",
    borderRadius: 2,
    width: 250,
    height: 50,
    display: "flex",
    marginLeft: "auto",
  },
  rightComponent: {
    width: "30%",
    backgroundColor: "white",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      marginTop: 30,
    },
  },
}));

function Cart() {
  const { cartItems } = useSelector(selectCart);
  const classes = useStyles();

  return (
    <Box className={classes.component}>
      {cartItems.length ? (
        <Box className={classes.componentBox}>
          <Box className={classes.leftComponent}>
            <Box className={classes.header}>
              <Typography>My Cart ( {cartItems.length} )</Typography>
            </Box>
            {cartItems.map((item) => (
              <CartItem item={item} />
            ))}
            <Box className={classes.bottom}>
              <Button className={classes.placeOrder}>Place Order</Button>
            </Box>
          </Box>
          <Box className={classes.rightComponent}>
            <TotalView />
          </Box>
        </Box>
      ) : (
        <EmptyCart />
      )}
    </Box>
  );
}

export default Cart;
