import React from "react"
import { Link } from "gatsby"
import styles from "./header.module.css"
import { makeStyles } from '@material-ui/core/styles';
// import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const drawerWidth = 240;

const Header = () => (
  <AppBar position="absolute" className={styles.header}>
        <Toolbar className={styles.header__wrap}>
          <Typography component="h1" variant="h6" color="inherit" noWrap className={styles.title}>
            Kalamos Care
          </Typography>
          <nav profilerole="main" className={styles[`header__nav`]}>
        <Link to="/" className={styles[`header__link`]}>
          Home
        </Link>
        <Link to="/app/register-kit" className={styles[`header__link`]}>
          Register Kit
        </Link>
        <Link to="/app/dashboard" className={styles[`header__link`]}>
          Dashboard
        </Link>
      </nav>
        </Toolbar>
      </AppBar>
  /*
  <header className={styles.header}>
    <div className={styles[`header__wrap`]}>
      <h1 className={styles[`header__heading`]}>
        <Link
          to="/"
          className={`${styles[`header__link`]} ${
            styles[`header__link--home`]
          }`}
        >
          Gatsby Auth
        </Link>
      </h1>
      <nav role="main" className={styles[`header__nav`]}>
        <Link to="/" className={styles[`header__link`]}>
          Home
        </Link>
        <Link to="/app/profile" className={styles[`header__link`]}>
          Profile
        </Link>
        <Link to="/app/details" className={styles[`header__link`]}>
          Details
        </Link>
      </nav>
    </div>
  </header>
        */
)

export default Header