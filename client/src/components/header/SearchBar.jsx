import { InputBase, List, ListItem, makeStyles } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectGetProducts } from "../../redux/features/productSlice";

const useStyle = makeStyles((theme) => ({
  search: {
    borderRadius: 2,
    backgroundColor: "#fff ",
    marginLeft: 10,
    width: "40%",
    display: "flex",
    color: "black",
  },
  searchIcon: {
    padding: 5,
    height: "100%",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "blue",
  },
  inputRoot: {
    fontSize: "unset",
    width: "100%",
  },
  inputInput: {
    paddingLeft: 20,
  },
  list: {
    position: "absolute",
    backgroundColor: "white",
    marginTop: 40,
    width: "40%",
    border: "1px solid gray",
    borderRadius: "0 0 8px 8px",
  },
}));

function SearchBar() {
  const [text, setText] = useState("");
  const [open, setOpen] = useState(true);
  const { products } = useSelector(selectGetProducts);
  const classes = useStyle();

  return (
    <div className={classes.search}>
      <InputBase
        placeholder="Search for products, brands, more"
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        inputProps={{ "aria-label": "search" }}
        onChange={(e) => {
          setText(e.target.value);
          setOpen(true);
        }}
      />
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>
      {text && (
        <List className={classes.list} hidden={!open}>
          {products
            .filter((product) =>
              product.title.longTitle.toLowerCase().includes(text.toLowerCase())
            )
            .map(({ id, title }) => (
              <ListItem key={id}>
                <Link
                  to={`/product/${id}`}
                  style={{ textDecoration: "none", color: "inherit" }}
                  onClick={() => setOpen(false)}
                >
                  {title.longTitle}
                </Link>
              </ListItem>
            ))}
        </List>
      )}
    </div>
  );
}

export default SearchBar;
