import React from "react"
import styles from "./messages.module.css"
import { getCurrentUser } from "../../utils/auth"
import Typography from '@material-ui/core/Typography';

const Messages = () => {
    
    return (
        <section>
            <Typography component="h1" variant="h5">
                Messages
            </Typography>
        </section>
    )
}

export default Messages