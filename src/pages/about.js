import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '../components/Link';
import Layout from "../components/Layout"

export default function About() {
  return (
    <Layout>
        <Typography variant="h4" component="h1" gutterBottom>
          Gatsby v4-beta example
        </Typography>
        <Link to="/">Go to the main page</Link>
    </Layout>
  );
}
