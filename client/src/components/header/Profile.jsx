import { Menu, MenuItem, Typography } from "@material-ui/core";
import { useContext, useState } from "react";
import { LoginContext } from "../../context/ContextProvider";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";

function Profile() {
  const { userAccount, setUserAccount } = useContext(LoginContext);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    event.preventDefault();
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Typography style={{ cursor: "pointer" }} onClick={handleClick}>
        {userAccount}
      </Typography>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        style={{ marginTop: 40 }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem
          onClick={() => {
            setUserAccount("");
            handleClose();
          }}
        >
          <PowerSettingsNewIcon fontSize="small" color="primary" />
          <Typography>Logout</Typography>
        </MenuItem>
      </Menu>
    </>
  );
}

export default Profile;
