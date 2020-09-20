import React from "react"
import styles from "./patients.module.css"
import { getCurrentUser } from "../../utils/auth"
import Typography from '@material-ui/core/Typography';

const Dashboard = () => {
    const { } = getCurrentUser()

    return (
        <section>
            <Typography component="h1" variant="h5">
        Patients
      </Typography>
        </section>
    )
}

export default Dashboard