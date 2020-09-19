import React from "react"
import { Helmet } from "react-helmet"
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Header from "../Header"
//import Sidebar from "../Sidebar"
import Footer from "../Footer"

// Global styles and component-specific styles.
import "./global.css"
import styles from "./main.module.css"

// const drawerWidth = 240;

const Layout = ({ children }) => (
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
    <Footer />
  </div>
)

export default Layout