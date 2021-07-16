import {
  Box,
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
  Grid,
} from "@material-ui/core";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductDetails } from "../../redux/actions/productActions";
import { selectGetProducts } from "../../redux/features/productSlice";
import clsx from "clsx";
import { fassured, sellerURL } from "../../constants/data";
import Badge from "@material-ui/icons/LocalOffer";
import ActionItems from "./ActionItems";

const useStyles = makeStyles((theme) => ({
  component: {
    marginTop: 55,
    backgroundColor: "#f2f2f2",
    minHeight: "90vh",
  },
  container: {
    margin: "0 80px",
    display: "flex",
    [theme.breakpoints.down("sm")]: { margin: 0, flexDirection: "column" },
  },
  leftContainer: {
    minWidth: "40%",
    [theme.breakpoints.down("sm")]: { minWidth: "100%" },
  },
  rightContainer: {
    minWidth: "60%",
    marginTop: 50,
    [theme.breakpoints.down("sm")]: { minWidth: "100%" },
    "& > *": { marginTop: 10 },
  },
  smallText: {
    fontSize: 14,
    verticalAlign: "baseline",
    "& *": { fontSize: 14, marginTop: 10 },
  },
  grayTextColor: { color: "#878787" },
  price: { fontSize: 28 },
  badge: { fontSize: 14, marginRight: 10, color: "#00aa00" },
}));

function ProductDetails({ match }) {
  const { product } = useSelector(selectGetProducts);
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(getProductDetails(match.params.id));
  }, [dispatch, match.params.id]);

  console.log({ product });

  const date = new Date(new Date().getTime() + 5 * 24 * 3600 * 1000);

  return (
    <Box className={classes.component}>
      {product && Object.keys(product).length > 0 && (
        <Grid className={classes.container}>
          <Grid
            item
            lg={4}
            md={4}
            sm={8}
            xs={12}
            className={classes.leftContainer}
          >
            <ActionItems />
          </Grid>
          <Grid
            item
            lg={8}
            md={8}
            sm={8}
            xs={12}
            className={classes.rightContainer}
          >
            <Typography>{product.title.longTitle}</Typography>
            <Typography
              className={clsx(classes.smallText, classes.grayTextColor)}
              style={{ display: "flex", alignItems: "center" }}
            >
              8 Rating & 1 Review
              <span>
                <img
                  src={fassured}
                  alt="fassured"
                  style={{ width: "77px", marginLeft: "20px" }}
                />
              </span>
            </Typography>
            <Typography>
              <span className={classes.price}>₹{product.price.cost}</span>{" "}
              &nbsp;
              <span className={classes.grayTextColor}>
                <strike>₹{product.price.mrp}</strike>
              </span>{" "}
              &nbsp;
              <span style={{ color: "#388e3c" }}>
                ₹{product.price.discount} off
              </span>{" "}
              &nbsp;
            </Typography>
            <Typography style={{ marginTop: 20, fontWeight: 600 }}>
              Available offers
            </Typography>
            <Box className={classes.smallText}>
              <Typography>
                <Badge className={classes.badge} />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                quo officia nemo placeat tenetur ad praesentium eos inventore
                beatae quis.
              </Typography>
              <Typography>
                <Badge className={classes.badge} />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                quo officia nemo placeat tenetur ad praesentium eos inventore
                beatae quis.
              </Typography>
              <Typography>
                <Badge className={classes.badge} />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                quo officia nemo placeat tenetur ad praesentium eos inventore
                beatae quis.
              </Typography>
              <Typography>
                <Badge className={classes.badge} />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                quo officia nemo placeat tenetur ad praesentium eos inventore
                beatae quis.
              </Typography>
            </Box>
            <Table>
              <TableBody>
                <TableRow className={classes.smallText}>
                  <TableCell align="left" className={classes.grayTextColor}>
                    Delivery
                  </TableCell>
                  <TableCell align="left" style={{ fontWeight: 600 }}>
                    {date.toDateString()} | ₹40
                  </TableCell>
                </TableRow>
                <TableRow className={classes.smallText}>
                  <TableCell align="left" className={classes.grayTextColor}>
                    Warranty
                  </TableCell>
                  <TableCell align="left">No Warranty</TableCell>
                </TableRow>
                <TableRow className={classes.smallText}>
                  <TableCell align="left" className={classes.grayTextColor}>
                    Seller
                  </TableCell>
                  <TableCell align="left">
                    <Typography style={{ color: "#2874f0" }}>
                      SuperComNet
                    </Typography>
                    <Typography>GST Invoice Available</Typography>
                    <Typography>14 Days return policy</Typography>
                    <Typography>
                      View more sellers starting from ₹300
                    </Typography>
                  </TableCell>
                </TableRow>
                <TableRow className={classes.smallText}>
                  <TableCell colSpan={2}>
                    <img
                      src={sellerURL}
                      alt="sellerUrl"
                      style={{ width: "390px" }}
                    />
                  </TableCell>
                </TableRow>
                <TableRow className={classes.smallText}>
                  <TableCell align="left" className={classes.grayTextColor}>
                    Description
                  </TableCell>
                  <TableCell align="left">{product.description}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Grid>
        </Grid>
      )}
    </Box>
  );
}

export default ProductDetails;
