import React from "react"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"
import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography'
import Header from "../Header"
// import Sidebar from "../Sidebar"
import Footer from "../Footer"

// Global styles and component-specific styles.
import "./global.css"
import styles from "./main.module.css"
import { isLoggedIn } from "../../utils/auth"

// const drawerWidth = 240;

function Layout({ children }) {
  const loggedIn = isLoggedIn()
  return (
    <div>
            <CssBaseline />
      <Helmet title="Kalamos Care" />
      <Header />
      {/* <Sidebar /> */}
      <main className={styles.main}>
        <Container maxWidth="md">
          <Box my={4}>
            {children}
          </Box>
        </Container>
      </main>
      <Footer />
    </div>
  )
}

export default Layout