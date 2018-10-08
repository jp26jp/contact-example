import React from "react"
import Link from "next/link"

const linkStyle = {
    marginRight: 15
}

const Nav = () => (
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
)

export default Nav
