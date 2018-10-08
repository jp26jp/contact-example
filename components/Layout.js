import Nav from "./Nav"
import React from "react"

const Layout = (props) =>
    <div>
        <Nav/>
        {props.children}
    </div>

export default Layout
