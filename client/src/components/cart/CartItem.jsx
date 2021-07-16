import { Box, Button, Card, makeStyles, Typography } from "@material-ui/core";
import { fassured } from "../../constants/data";
import clsx from "clsx";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../redux/actions/cartActions";
import GroupButton from "./GroupButton";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  component: {
    display: "flex",
    borderRadius: 0,
    borderTop: "1px solid #c0c0c0",
  },
  leftComponent: {
    margin: 20,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  rightComponent: { margin: 20 },
  smallText: { fontSize: 14 },
  grayTextColor: { color: "#878787" },
  price: { fontSize: 18, fontWeight: 600 },
  image: { width: "130px" },
  remove: { marginTop: 20, fontSize: 16 },
});

function CartItem({ item }) {
  const classes = useStyles();
  const dispatch = useDispatch();

  const removeItemFromCart = () => {
    dispatch(removeFromCart(item.id));
  };

  return (
    <Card className={classes.component}>
      <Box className={classes.leftComponent}>
        <img src={item.url} alt="productdetailurl" className={classes.image} />
        <GroupButton />
      </Box>
      <Box className={classes.rightComponent}>
        <Link
          to={`/product/${item.id}`}
          style={{ textDecoration: "none", color: "black" }}
        >
          <Typography style={{ fontWeight: 600 }}>
            {item.title.longTitle}
          </Typography>
        </Link>
        <Typography
          style={{ marginTop: 20 }}
          className={clsx(classes.smallText, classes.grayTextColor)}
        >
          Seller: Fortune500
          <span>
            <img
              src={fassured}
              alt="assured"
              style={{ width: 50, marginLeft: 10, verticalAlign: "baseline" }}
            />
          </span>
        </Typography>
        <Typography>
          <span className={classes.price}>₹{item.price.cost}</span>{" "}
          &nbsp;&nbsp;&nbsp;
          <span>
            <strike className={classes.grayTextColor}>₹{item.price.mrp}</strike>
          </span>
          &nbsp;&nbsp;&nbsp;
          <span style={{ color: "#388e3c" }}>{item.price.discount} off</span>
        </Typography>
        <Button className={classes.remove} onClick={removeItemFromCart}>
          Remove
        </Button>
      </Box>
    </Card>
  );
}

export default CartItem;
