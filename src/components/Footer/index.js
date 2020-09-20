import React from "react"
import { Link } from "gatsby"
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Login from "../Login"
import PrivateRoute from "../PrivateRoute"
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
// Icons
import Chat from '@material-ui/icons/Chat';
import Dashboard from '@material-ui/icons/Dashboard';
import Settings from '@material-ui/icons/Settings';
//Styles
import styles from "./footer.module.css"

import { isLoggedIn } from "../../utils/auth"

// const [value, setValue] = React.useState(0);
// this component is organized differently than my others

function Footer() {
  const [value, setValue] = React.useState('recents');
  const loggedIn = isLoggedIn();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  if (loggedIn) {
  return (
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels
        className={styles.footer}
      >
        <BottomNavigationAction
          component={Link}
          to="/app/settings"
          label="Settings"
          value="settings"
          icon={<Settings />}
        />
        <BottomNavigationAction
          component={Link}
          to="/app/dashboard"
          label="Dashboard"
          value="dashboard"
          icon={<Dashboard />}
        />
        <BottomNavigationAction
          component={Link}
          to="/app/messages"
          label="Messages"
          value="messages"
          icon={<Chat />}
        />
      </BottomNavigation>
    )}
    return (
      <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://kalamos.care">
        Kalamos Care
        </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
    )
}

export default Footer