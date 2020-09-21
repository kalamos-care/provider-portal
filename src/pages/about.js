import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Layout from "../components/Layout"
import Grid from '@material-ui/core/Grid';

export default function About() {
  return (
    <Layout>
      <Grid container spacing={2}>
      <Typography variant="h6" component="h1" gutterBottom>
        I STARTED KALAMOS BECAUSE SEX SCARED THE $@*! OUT OF ME
      </Typography>
      <p>
        One morning I woke up to a burning sensation. Half-convinced my life was over, I shamefully walked into a clinic. The care I received that day changed my life.
      </p>
      <p>
        I knew then that I wanted everyone to experience feeling loved and cared for in a moment of need. I wanted to empower my community. I wanted to replace fear with Pride.
      </p>
      <p>
        I played professional football and found my way out of the closet, but tackling our sexual wellness shame is the most audacious, exciting challenge I’ve ever faced.
      </p>
      <p>
        I hope you’ll join the fight with me.</p>
        <div class="index-nav">
      <p>
        <Link to="/">Go to the main page</Link>
      </p>
      </div>
      </Grid>
    </Layout>
  );
}
