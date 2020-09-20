import React from "react"
import styles from "./notifications.module.css"
import { getCurrentUser } from "../../utils/auth"
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Deposits from './data/Deposits';
import OrderData from './data/OrderData';

const Messages = () => {
    
    return (
        <section>
            <Typography component="h1" variant="h5">
                Notifications
            </Typography>
            <Grid container spacing={3}>
                {/* Recent Deposits */}
                <Grid item xs={12} md={4} lg={3}>
                    <Paper className={styles.paper}>
                        <Deposits />
                    </Paper>
                </Grid>
                {/* Recent Orders */}
                <Grid item xs={12}>
                    <Paper className={styles.paper}>
                        <OrderData />
                    </Paper>
                </Grid>
            </Grid>
        </section>
    )
}

export default Messages