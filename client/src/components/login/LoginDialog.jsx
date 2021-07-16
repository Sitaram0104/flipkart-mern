import {
  Box,
  makeStyles,
  Typography,
  TextField,
  Button,
} from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import { useContext, useState } from "react";
import { loginBackground } from "../../constants/data";
import { authenticateLogin, authenticateSignup } from "../../service/api";
import { LoginContext } from "../../context/ContextProvider";

const useStyles = makeStyles({
  component: { height: "70vh", width: "90vh" },
  image: {
    backgroundImage: `url(${loginBackground})`,
    height: "70vh",
    backgroundRepeat: "no-repeat",
    backgroundColor: "#2874f0",
    width: "40%",
    backgroundPosition: "center 85%",
    padding: "45px 35px",
    "& > *": {
      color: "#ffffff",
      fontWeight: 600,
    },
  },
  login: {
    padding: "25px 35px",
    display: "flex",
    flex: 1,
    flexDirection: "column",
    "& > *": {
      marginTop: 10,
    },
  },
  text: { color: "#878787", fontSize: 12 },
  loginBtn: {
    textTransform: "none",
    backgroundColor: "#fb641b",
    color: "white",
    height: 48,
    borderRadius: 2,
    boxShadow: "0 2px 4px 0 rgb( 0 , 0 , 0 / 20%)",
    "&:hover": { backgroundColor: "#fb641b", opacity: 0.9 },
  },
  requestBtn: {
    textTransform: "none",
    backgroundColor: "#ffffff",
    color: "#2874f0",
    height: 48,
    borderRadius: 2,
    boxShadow: "0 2px 4px 0 rgb( 0 , 0 , 0 / 20%)",
    "&:hover": { backgroundColor: "#ffffff", opacity: 0.9 },
  },
  createText: {
    textAlign: "center",
    marginTop: "auto",
    fontSize: 14,
    color: "#2874f0",
    cursor: "pointer",
    fontWeight: 600,
  },
  error: { fontSize: 12, color: "red" },
});

const initialValue = {
  login: {
    view: "login",
    heading: "Login",
    subHeading: "Get access to your Orders, Wishlist and Recommendation",
  },
  signup: {
    view: "signup",
    heading: "Looks like you are new here!",
    subHeading: "Signup with your mobile number to get started",
  },
};

const signupInitialValue = {
  firstname: "Ajay",
  lastname: "Devgan",
  username: "ajay",
  email: "ajay@gmail.com",
  password: "ajay@123",
  phone: "123456789",
};

const loginInitialValue = {
  username: "ajay",
  password: "ajay@123",
};

function LoginDialog({ open, setOpen }) {
  const [account, setAccount] = useState(initialValue.login);
  const [signup, setSignup] = useState(signupInitialValue);
  const [login, setLogin] = useState(loginInitialValue);
  const [loginError, setLoginError] = useState(false);

  const { setUserAccount } = useContext(LoginContext);
  // const setUserAccount = () => {};
  const classes = useStyles();

  const handleClose = () => {
    setOpen(false);
    setAccount(initialValue.login);
  };

  const toggleAccount = (screen) => {
    setAccount(screen);
  };

  const signupUser = async () => {
    let response = await authenticateSignup(signup);
    if (!response) return;
    setUserAccount(signup.firstname);
    handleClose();
  };

  const loginUser = async () => {
    try {
      let response = await authenticateLogin(login);
      console.log(response);
      if (!response) {
        setLoginError(true);
        return;
      }
      setUserAccount(login.username);
      handleClose();
    } catch (error) {
      console.log(error);
      setLoginError(true);
    }
  };

  const onInputChange = (e) => {
    setSignup({ ...signup, [e.target.name]: e.target.value });
  };

  const onLoginInputChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogContent className={classes.component}>
        <Box style={{ display: "flex" }}>
          <Box className={classes.image}>
            <Typography variant="h5">{account.heading}</Typography>
            <Typography style={{ marginTop: 20 }}>
              {account.subHeading}
            </Typography>
          </Box>
          {account.view === "login" ? (
            <Box className={classes.login}>
              <TextField
                name="username"
                label="Enter Email/Mobile number"
                value={login.username}
                onChange={(e) => {
                  onLoginInputChange(e);
                }}
              />
              <TextField
                name="password"
                label="Enter Password"
                value={login.password}
                onChange={(e) => {
                  onLoginInputChange(e);
                }}
              />
              {loginError && (
                <Box component="p" className={classes.error}>
                  Invalid username or password
                </Box>
              )}
              <Typography className={classes.text}>
                By continuing, you agree to Flipkart's terms of use and Privacy
                Policy
              </Typography>
              <Button
                variant="contained"
                className={classes.loginBtn}
                onClick={loginUser}
              >
                Login
              </Button>
              <Typography style={{ textAlign: "center" }}>Or</Typography>
              <Button variant="contained" className={classes.requestBtn}>
                Request OTP
              </Button>
              <Typography
                className={classes.createText}
                onClick={() => {
                  toggleAccount(initialValue.signup);
                }}
              >
                New to Flipkart? Create an account.
              </Typography>
            </Box>
          ) : (
            <Box className={classes.login}>
              <TextField
                name="firstname"
                label="Enter Firstname"
                value={signup.firstname}
                onChange={(e) => {
                  onInputChange(e);
                }}
              />
              <TextField
                name="lastname"
                label="Enter Lastname"
                value={signup.firstname}
                onChange={(e) => {
                  onInputChange(e);
                }}
              />

              <TextField
                name="username"
                label="Enter Username"
                onChange={(e) => {
                  onInputChange(e);
                }}
                value={signup.username}
              />
              <TextField
                name="email"
                label="Enter Email"
                onChange={(e) => {
                  onInputChange(e);
                }}
                value={signup.email}
              />
              <TextField
                name="password"
                label="Enter Password"
                onChange={(e) => {
                  onInputChange(e);
                }}
                value={signup.password}
              />
              <TextField
                name="phone"
                label="Enter Phone"
                onChange={(e) => {
                  onInputChange(e);
                }}
                value={signup.phone}
              />

              <Button
                variant="contained"
                className={classes.loginBtn}
                onClick={() => {
                  signupUser();
                }}
              >
                Signup
              </Button>
            </Box>
          )}
        </Box>
      </DialogContent>
    </Dialog>
  );
}

export default LoginDialog;
