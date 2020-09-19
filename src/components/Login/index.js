import React from "react"
import { navigate } from "gatsby"
import styles from "./login.module.css"
import { handleLogin, isLoggedIn } from "../../utils/auth"

{/* import { navigate } from "@reach/router" */ }

const Form = ({ handleSubmit, handleUpdate }) => {
    return (
        <form
            className={styles.form}
            method="post"
            onSubmit={event => {
                handleSubmit(event)
                navigate(`/app/profile`)
            } }
        >
            <p className={styles[`form__instructions`]}>
                For this demo, please log in with the username <code>gatsby</code> and the
                password <code>demo</code>.
            </p>
            <label className={styles[`form__label`]}>
                Username
                <input
                    className={styles[`form__input`]}
                    type="text"
                    name="username"
                    onChange={handleUpdate} />
            </label>
            <label className={styles[`form__label`]}>
                Password
                <input
                    className={styles[`form__input`]}
                    type="password"
                    name="password"
                    onChange={handleUpdate} />
            </label>
            <input className={styles[`form__button`]} type="submit" value="Log In" />
        </form>
    )
}

class Login extends React.Component {
    state = {
        username: ``,
        password: ``,
    }

    handleUpdate(event) {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    handleSubmit(event) {
        event.preventDefault()
        handleLogin(this.state)
    }

    render() {
        if (isLoggedIn()) {
            navigate(`/app/dashboard`)
        }

        return (
            <Form
                handleUpdate={e => this.handleUpdate(e)}
                handleSubmit={e => this.handleSubmit(e)}
        />
        )
    }
}

export default Login