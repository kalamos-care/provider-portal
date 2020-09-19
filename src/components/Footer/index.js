import React from "react"
import { Link } from "gatsby"
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import styles from "./footer.module.css"


const Footer = () => (
  <footer className={styles.footer}>
    <Container maxWidth="sm" className={styles[`footer__wrap`]}>
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link to="https://kalamos.care/">
          Kalamos Care
      </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    </Container>
  </footer>
)

export default Footer