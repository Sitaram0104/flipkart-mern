import { Button, ButtonGroup, makeStyles } from "@material-ui/core";
import { useState } from "react";

const useStyles = makeStyles({
  component: { marginTop: 30 },
  button: { borderRadius: "50%" },
});

function GroupButton() {
  const [counter, setCounter] = useState(1);
  const classes = useStyles();

  return (
    <ButtonGroup className={classes.component}>
      <Button
        className={classes.button}
        onClick={() => setCounter(counter <= 1 ? 1 : counter - 1)}
        disabled={counter <= 1}
      >
        -
      </Button>
      <Button>{counter}</Button>
      <Button
        className={classes.button}
        onClick={() => setCounter(counter + 1)}
      >
        +
      </Button>
    </ButtonGroup>
  );
}

export default GroupButton;
