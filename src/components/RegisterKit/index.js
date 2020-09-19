import React from "react"
import { navigate } from "gatsby"
import styles from "./register-kit.module.css"
import { getCurrentUser } from "../../utils/auth"

const RegisterKit = () => {
    //pre-fill registration fields
    const { } = getCurrentUser()

    return (
        <section>
            <p>This would move to the patient app</p>
            <h1>Insert Registration Form</h1>
        </section>
    )
}

export default RegisterKit