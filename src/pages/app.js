import React from "react"
import { Router } from "@reach/router"
import Layout from "../components/Layout"
import Dashboard from "../components/Dashboard"
import AccountSettings from "../components/AccountSettings"
import RegisterKit from "../components/RegisterKit"
import Login from "../components/Login"
import PrivateRoute from "../components/PrivateRoute"
import Status from "../components/Status"
// import Sidebar from "../components/Sidebar"

const App = () => (
  <Layout>
    {/* <Sidebar /> */}
    <Status />
    <Router>
    <PrivateRoute path="/app/account-settings" component={AccountSettings} />
      <PrivateRoute path="/app/dashboard" component={Dashboard} />
      <PrivateRoute path="/app/register-kit" component={RegisterKit} />
      <Login path="/app/login" />
    </Router>
  </Layout>
)

export default App