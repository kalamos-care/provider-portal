import React from "react"
import styles from "./dashboard.module.css"
import { getCurrentUser } from "../../utils/auth"
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Deposits from './data/Deposits';
import OrderData from './data/OrderData';
import Typography from '@material-ui/core/Typography';

const Dashboard = () => {
    const { } = getCurrentUser()

    return (
        <section>
            <Grid container spacing={3}>
                {/* Recent Deposits */}
                <Grid item xs={12} md={4} lg={3}>
                    <Paper >
                        <Deposits />
                    </Paper>
                </Grid>
                {/* Recent Orders */}
                <Grid item xs={12}>
                    <Paper>
                        <OrderData />
                    </Paper>
                </Grid>
            </Grid>
        </section>
    )
}

export default Dashboard