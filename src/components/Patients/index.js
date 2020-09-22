import React from "react"
import styles from "./patients.module.css"
import { getCurrentUser } from "../../utils/auth"
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'
import PatientList from './PatientList'

const Dashboard = () => {
    const { } = getCurrentUser()

    return (
        <section>
            <Typography component="h1" variant="h5">
        Patients
      </Typography>
      <Grid container>
          <PatientList />
      </Grid>
        </section>
    )
}

export default Dashboard