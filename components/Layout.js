import Nav from "./Nav"
import React from "react"
import Link from "next/link"

const Layout = (props) =>
    <div>
        <div>
            <Link href="/contact/John">
                <a style={linkStyle}>John</a>
            </Link>
            <Link href="/contact/Jed">
                <a style={linkStyle}>Jed</a>
            </Link>
            <Link href="/contact/Fred">
                <a style={linkStyle}>Fred</a>
            </Link>
        </div>
        {props.children}
    </div>

export default Layout
