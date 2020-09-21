import React from "react"
import { Link } from "gatsby"
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Login from "../../Login"
import PrivateRoute from "../../PrivateRoute"
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
// Icons
import Chat from '@material-ui/icons/Chat';
import Folder from '@material-ui/icons/Folder';
import Notifications from '@material-ui/icons/Notifications';
//Styles
import styles from "./footer.module.css"

import { isLoggedIn } from "../../../utils/auth"

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
        className={styles["bottom__nav"]}
      >
        <BottomNavigationAction
          component={Link}
          to="/app/notifications"
          label="Notifications"
          value="notifications"
          icon={<Notifications />}
        />
        <BottomNavigationAction
          component={Link}
          to="/app/patients"
          label="Patients"
          value="patients"
          icon={<Folder />}
        />
        <BottomNavigationAction
          component={Link}
          to="/app/messages"
          label="Messages"
          value="messages"
          icon={<Chat />}
        />
      </BottomNavigation>
    )
  }
  return (
    <div className={styles["footer__nav"]}>
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link to="https://register.kalamos.care" color="secondary">
          Kalamos Care
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
      </div>
  )
}

export default Footer