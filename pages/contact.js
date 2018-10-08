import React from "react"
import Layout from "../components/Layout.js"
import fetch from "isomorphic-unfetch"

const Contact = props => (
    <Layout>
        <h1>{props.contact.first_name} {props.contact.last_name}</h1>
    </Layout>
)

Contact.getInitialProps = async function (context) {
    const {id} = context.query
    const res = await fetch(`http://localhost:3000/api/contact/${id}`)
    const contact = await res.json()
    return {contact: contact}
}

export default Contact
