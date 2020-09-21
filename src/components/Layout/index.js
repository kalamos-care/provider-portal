import React from "react"
import { Helmet } from "react-helmet"
import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box';
// look up the difference between boxes and grids in material ui
import Header from "./Header"
import Footer from "./Footer"

// Global styles and component-specific styles.
import "./global.css"
import styles from "./main.module.css"
import { isLoggedIn } from "../../utils/auth"

function Layout({ children }) {
  const loggedIn = isLoggedIn()

  return (
    <root className="root">
      <CssBaseline />
      <Helmet title="Kalamos Care" />
      <div class="header">
        <Header />
      </div>
      <main className={styles.main}>
        <Container maxWidth="sm">
          <Box my={4}>
            {children}
          </Box>
        </Container>
      </main>
      <div class="footer">
        <Footer />
      </div>
    </root>
  )
}

export default Layout