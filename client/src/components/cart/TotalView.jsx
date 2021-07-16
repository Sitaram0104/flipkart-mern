import { Box, makeStyles, Typography } from "@material-ui/core";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectCart } from "../../redux/features/cartSlice";

const useStyle = makeStyles({
  component: { width: "100%", padding: "24px" },
  header: {
    marginBottom: 20,
    paddingBottom: 10,
    borderBottom: "1px solid #f0f0f0",
  },
  container: { "& > *": { marginTop: 15, fontSize: 14 } },
  grayTextColor: { color: "#878787" },
  price: { float: "right" },
  totalAmount: {
    fontWeight: 600,
    fontSize: 18,
    borderTop: "1px dashed #e0e0e0",
    borderBottom: "1px dashed #e0e0e0",
    padding: "20px 0",
  },
});

function TotalView() {
  const [price, setPrice] = useState(0);
  const [discount, setDiscount] = useState(0);
  const { cartItems } = useSelector(selectCart);
  const classes = useStyle();

  useEffect(() => {
    let p = cartItems.reduce((acc, crr) => acc + crr.price.mrp, 0);
    let d = cartItems.reduce(
      (acc, crr) => acc + crr.price.mrp - crr.price.cost,
      0
    );

    setPrice(p);
    setDiscount(d);
  }, [cartItems]);

  return (
    <Box className={classes.component}>
      <Box className={classes.header}>
        <Typography className={classes.grayTextColor}>PRICE DETAILS</Typography>
      </Box>
      <Box className={classes.container}>
        <Typography>
          Price ({cartItems.length} item){" "}
          <span className={classes.price}>₹{price}</span>
        </Typography>
        <Typography>
          Discount <span className={classes.price}>-₹{discount}</span>
        </Typography>
        <Typography>
          Deliver Charges <span className={classes.price}>₹40</span>
        </Typography>
        <Typography className={classes.totalAmount}>
          Total Amount{" "}
          <span className={classes.price}>₹{price - discount + 40}</span>
        </Typography>
        <Typography style={{ color: "green" }}>
          You will save ₹{discount} on this order
        </Typography>
      </Box>
    </Box>
  );
}

export default TotalView;
