import React from "react"
import { navigate } from "gatsby"
import styles from "./dashboard.module.css"
import { getCurrentUser } from "../../utils/auth"

const Dashboard = () => {
    const { } = getCurrentUser()

    return (
        <section>
            <p>Insert practice stats here</p>
            <h1>10 new patients this week!</h1>
        </section>
    )
}

export default Dashboard