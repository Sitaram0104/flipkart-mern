import { Box, makeStyles, Typography } from "@material-ui/core";
import { navData } from "../../constants/data";

const useStyle = makeStyles((theme) => ({
  component: {
    display: "flex",
    margin: "55px 130px 0 130px",
    justifyContent: "space-between",
    overflowX: "overlay",
    [theme.breakpoints.down("md")]: { margin: 0 },
  },
  container: { textAlign: "center", padding: "12px 8px" },
  image: { width: 64 },
  text: { fontSize: 14, fontWeight: 600 },
}));

function Navbar() {
  const classes = useStyle();

  return (
    <Box className={classes.component}>
      {navData.map(({ url, text }, index) => (
        <Box className={classes.container} key={index}>
          <img src={url} alt={text} className={classes.image} />
          <Typography className={classes.text}>{text}</Typography>
        </Box>
      ))}
    </Box>
  );
}

export default Navbar;
