import React from "react"
import { Link } from "gatsby"
import Drawer from '@material-ui/core/Drawer';
import styles from "./sidebar.module.css"

const Sidebar = () => (
    <sidebar className={styles.sidebar}>
        <div className={styles[`sidebar__wrap`]}>
            <h1>Sidebar</h1>
            <Link to="/">
                Home
        </Link>
        </div>
    </sidebar>
)

export default Sidebar