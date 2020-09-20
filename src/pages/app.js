import React from "react"
import { Router } from "@reach/router"
import Layout from "../components/Layout"
import Patients from "../components/Patients"
import AccountSettings from "../components/AccountSettings"
import RegisterKit from "../components/RegisterKit"
import Messages from "../components/Messages"
import Notifications from "../components/Notifications"
import Login from "../components/Login"
import PrivateRoute from "../components/PrivateRoute"

// probably need to set the state

const App = () => (
  <Layout>
    <Router>
      <PrivateRoute path="/app/settings" component={AccountSettings} />
      <PrivateRoute path="/app/patients" component={Patients} />
      <PrivateRoute path="/app/notifications" component={Notifications} />
      <PrivateRoute path="/app/register-kit" component={RegisterKit} />
      <PrivateRoute path="/app/messages" component={Messages} />
      <Login path="/app/login" />
    </Router>
  </Layout>
)

export default App