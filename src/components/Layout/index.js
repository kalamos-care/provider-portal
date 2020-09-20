import React from "react"
import { Helmet } from "react-helmet"
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
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
      { loggedIn && (
        <Footer />
      )}
    </div>
  )
}

export default Layout