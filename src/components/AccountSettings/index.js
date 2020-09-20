import React from "react"
import styles from "./account-settings.module.css"
import { getCurrentUser } from "../../utils/auth"

const Settings = () => {
  const { name, legalName, email } = getCurrentUser()

  return (
    <section>
      <p>
        This is a client-only route. You can get additional information about a
        user on the client from this page.
      </p>
      <ul>
        <li>Preferred name: {name}</li>
        <li>Legal name: {legalName}</li>
        <li>Email address: {email}</li>
      </ul>
    </section>
  )
}

export default Settings