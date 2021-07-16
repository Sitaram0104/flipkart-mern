import {
  AppBar,
  Toolbar,
  makeStyles,
  Typography,
  Box,
  withStyles,
  IconButton,
  Drawer,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import HeaderButtons from "./HeaderButtons";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
import { useState } from "react";
import { logoURL, subURL } from "../../constants/data";

const useStyle = makeStyles((theme) => ({
  header: { background: "#2874f0", height: 55 },
  logo: { width: 75 },
  sub: { width: 10, marginLeft: 4, height: 10 },
  component: {
    display: "flex",
    flexDirection: "column",
    marginLeft: "12%",
    lineHeight: 0,
    textDecoration: "none",
    color: "#fff",
  },
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
  },
  subHeading: { fontSize: 10, fontStyle: "italic" },
  menuButton: {
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
  },
  headerButtons: {
    marginLeft: 20,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

const ToolBar = withStyles({
  root: { minHeight: 55 },
})(Toolbar);

function Header() {
  const [open, setOpen] = useState(false);
  const classes = useStyle();

  const openDrawer = () => {
    setOpen(true);
  };
  const closeDrawer = () => {
    setOpen(false);
  };

  return (
    <AppBar className={classes.header}>
      <ToolBar>
        <IconButton
          color="inherit"
          className={classes.menuButton}
          onClick={openDrawer}
        >
          <MenuIcon />
        </IconButton>
        <Drawer open={open} onClose={closeDrawer}>
          <HeaderButtons closeDrawer={closeDrawer} />
        </Drawer>
        <Link to="/" className={classes.component}>
          <img src={logoURL} alt="logo" className={classes.logo} />
          <Box className={classes.container}>
            <Typography className={classes.subHeading}>
              Explore{" "}
              <Box component="span" style={{ color: "#ffe500" }}>
                Plus
              </Box>
            </Typography>
            <img src={subURL} alt="" className={classes.sub} />
          </Box>
        </Link>
        <SearchBar />
        <span className={classes.headerButtons}>
          <HeaderButtons />
        </span>
      </ToolBar>
    </AppBar>
  );
}

export default Header;
