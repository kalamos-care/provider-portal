import React from "react"
import { Helmet } from "react-helmet"
import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Header from "./Header"
import Footer from "./Footer"

// Global styles and component-specific styles.
import "./global.css"
import styles from "./main.module.css"
import { isLoggedIn } from "../../utils/auth"

function Layout({ children }) {
  const loggedIn = isLoggedIn()

  return (
    <root>
      <CssBaseline />
      <Helmet title="Kalamos Care" />
      <Header />
      <main className={styles.main}>
        <Container maxWidth="md">
          <Box my={4}>
            {children}
          </Box>
        </Container>
      </main>
      <Footer />
    </root>
  )
}

export default Layout