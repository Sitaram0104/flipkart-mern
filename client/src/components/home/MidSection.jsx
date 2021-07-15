import { Box, makeStyles } from "@material-ui/core";
import { coronaURL, ImageURL } from "../../constants/data";

const useStyle = makeStyles((theme) => ({
  wrapper: {
    display: "flex",
    marginTop: 20,
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  image: {
    width: "33%",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  help: {
    width: "100%",
    marginTop: 5,
    [theme.breakpoints.down("sm")]: {
      height: 120,
      objectFit: "cover",
    },
  },
}));

function MidSection() {
  const classes = useStyle();
  return (
    <Box>
      <Box className={classes.wrapper}>
        {ImageURL.map((image, index) => (
          <img src={image} alt="mid" key={index} className={classes.image} />
        ))}
      </Box>
      <Box>
        <img src={coronaURL} alt="corona" className={classes.help} />
      </Box>
    </Box>
  );
}

export default MidSection;
