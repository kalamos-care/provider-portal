import React from "react"
import styles from "./messages.module.css"
import { getCurrentUser } from "../../utils/auth"
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'
import MessageList from './MessageList';

const Messages = () => {
    
    return (
        <section>
            <Typography component="h1" variant="h5">
                Messages
            </Typography>
            <Grid container>
                <MessageList />
            </Grid>
        </section>
    )
}

export default Messages