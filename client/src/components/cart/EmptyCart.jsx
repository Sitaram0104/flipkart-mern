import { Box, Button, makeStyles, Typography } from "@material-ui/core";
import { emptycarturl } from "../../constants/data.js";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  component: {
    margin: "80px 140px",
    width: "80%",
    backgroundColor: "white",
    textAlign: "center",
    justifyContent: "center",
    "& > *": { marginTop: 20 },
  },
  image: { width: "15%" },
  shopNow: {
    padding: "12px 70px",
    borderRadius: 2,
    fontSize: 14,
    backgroundColor: "#2874f0",
    color: "white",
  },
});

function EmptyCart() {
  const classes = useStyles();
  const history = useHistory();

  return (
    <Box className={classes.component}>
      <img src={emptycarturl} alt="emptycart" className={classes.image} />
      <Typography>Your cart is empty!</Typography>
      <Typography>Add items to it now.</Typography>
      <Button onClick={() => history.push("/")} className={classes.shopNow}>
        Shop Now
      </Button>
    </Box>
  );
}

export default EmptyCart;
