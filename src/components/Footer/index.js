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

// const [value, setValue] = React.useState(0);
// this component is organized differently than my others

export default function Footer() {
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={styles.footer}
    >
      <BottomNavigationAction label="Settings" icon={<Settings />}></BottomNavigationAction>
      <BottomNavigationAction label="Dashboard" icon={<Dashboard />} />
      <BottomNavigationAction label="Messages" icon={<Chat />} />
    </BottomNavigation>
    /*  
      <footer className={styles.footer}>
      const [value, setValue] = React.useState(0);
        <Container maxWidth="sm" className={styles[`footer__wrap`]}>
        </Container>
          </footer>
    */
  );
}