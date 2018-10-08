import React from "react"
import Link from "next/link"

const Layout = (props) =>
    <div>
        <div>
            <Link href="/contact/John">
                <a>John</a>
            </Link><br/>
            <Link href="/contact/Jed">
                <a>Jed</a>
            </Link><br/>
            <Link href="/contact/Fred">
                <a>Fred</a>
            </Link>
        </div>
        {props.children}
    </div>

export default Layout
