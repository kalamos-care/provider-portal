import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'
import { Link } from 'gatsby';
import Layout from "../components/Layout"

const Index = () => (
  <Layout>
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h4" component="h1" gutterBottom>
          Remote Patient Monitoring made easy.
        </Typography>
      </Grid>
      <Grid item xs={12}>
      <p>
        This is a simple example of creating dynamic apps with Gatsby that
        require user authentication. It uses concepts from the
        {` `}
        <a href="https://www.gatsbyjs.org/docs/client-only-routes-and-user-authentication/">
          client-only routes section
        </a>
        {` `}
        of the “Building Apps with Gatsby” documentation.
      </p>
    </Grid>
    <Grid item xs={12} sm={6}>
      <Typography variant="h4" component="h1" gutterBottom>
        Gatsby v4-beta example
        </Typography>
    </Grid>
    <Grid item xs={12} sm={6}>
      <p>
        <Link to="/about" color="secondary">
          Go to the about page
        </Link>
      </p>
      <p>
        <Link to="/app" color="secondary">
          Go to the app page
        </Link>
      </p>
      <p>
        <Link to="/signup" color="secondary">
          Go to the signup page
        </Link>
      </p>
    </Grid>
    </Grid>
  </Layout>
)

export default Index