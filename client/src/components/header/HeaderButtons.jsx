import { Badge, Box, Button, makeStyles, Typography } from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { LoginContext } from "../../context/ContextProvider";
import LoginDialog from "../login/LoginDialog";
import Profile from "./Profile";
import { useSelector } from "react-redux";
import { selectCart } from "../../redux/features/cartSlice.js";

const useStyle = makeStyles((theme) => ({
  wrapper: {
    margin: "0 5% 0 auto",
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      alignItems: "center",
      margin: 0,
      width: 200,
      marginTop: 30,
    },
    alignItems: "center",
    "& > *": {
      marginRight: 50,
      textDecoration: "none",
      color: "#fff",
      [theme.breakpoints.down("sm")]: {
        color: "#2874f0",
        margin: 0,
        marginTop: 20,
      },
    },
  },
  login: {
    background: "#eeeeee",
    color: "#2874f0",
    textTransform: "none",
    fontWeight: 600,
    borderRadius: 2,
    padding: "5px 40px",
    boxShadow: "none",
    "&:hover": {
      background: "#eeeeee",
      opacity: 0.5,
    },
    [theme.breakpoints.down("sm")]: {
      background: "#2874f0",
      color: "#ffffff",
      "&:hover": {
        background: "#2874f0",
        color: "#ffffff",
        opacity: 0.5,
      },
    },
  },
  container: {
    display: "flex",
    alignItems: "center",
  },
}));

function HeaderButtons({ closeDrawer }) {
  const [open, setOpen] = useState(false);
  const { userAccount } = useContext(LoginContext);
  const { cartItems } = useSelector(selectCart);

  const classes = useStyle();

  const handleClickOpen = () => {
    setOpen(true);
  };

  return (
    <Box className={classes.wrapper}>
      {userAccount ? (
        <Profile />
      ) : (
        <Button className={classes.login} onClick={handleClickOpen}>
          Login
        </Button>
      )}

      <Typography>More</Typography>
      <Link to="/cart" className={classes.container}>
        <Badge badgeContent={cartItems.length} color="primary">
          <ShoppingCartIcon />
        </Badge>
        <Typography onClick={closeDrawer}>Cart</Typography>
      </Link>
      <LoginDialog open={open} setOpen={setOpen} />
    </Box>
  );
}

export default HeaderButtons;
