import React from "react"
import { Link, navigate } from "@reach/router"
import styles from "./header.module.css"
// import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Button from '@material-ui/core/Button'
import { getCurrentUser, isLoggedIn, logout } from "../../../utils/auth"


function Header() {
  const loggedIn = isLoggedIn()

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            className={styles.title}
            // component={Link}
            // to="/"
          >
            Kalamos Care
        </Typography>
          {!loggedIn && (
            <Button
              color="inherit"
              component={Link}
              to="/app/login"
            >
              Login
            </Button>
          )}
          {loggedIn && (
            <Button color="inherit">
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem
                  onClick={handleClose}
                  component={Link}
                  to="/app/settings"
                >
                  Settings
                </MenuItem>
                <MenuItem onClick={event => {
                  event.preventDefault()
                  logout(() => navigate(`/app/login`))
                }}>
                  Log Out
                </MenuItem>
              </Menu>
            </Button>
          )}
        </Toolbar>
      </AppBar>
  );
}

export default Header