import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Layout from "../components/Layout"

function NotFound() {
    return (
        <Layout>
            <Typography variant="h4" component="h1" gutterBottom>
                Do Not Pass Go. Do Not Collect $200.
        </Typography>
        </Layout>
    )
}

export default NotFound