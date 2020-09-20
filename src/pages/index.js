import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '../components/Link';
import Layout from "../components/Layout"

const Index = () => (
  <Layout>
    <Typography variant="h4" component="h1" gutterBottom>
      Remote Patient Monitoring made easy.
        </Typography>
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
    <p>
      For the full experience, go to
        {` `}
      <Link to="/app/profile">your profile</Link>.
      </p>
    <Typography variant="h4" component="h1" gutterBottom>
      Gatsby v4-beta example
        </Typography>
    <p>
      <Link to="/about" color="secondary">
        Go to the about page
        </Link>
    </p><p>
      <Link to="/app" color="secondary">
        Go to the app page
        </Link>
    </p>
  </Layout>
)

export default Index