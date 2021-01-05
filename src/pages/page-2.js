import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Something big is coming</h1>
    <p>Hold your hats!</p>
    <Link to="/">Back Home</Link>
  </Layout>
)

export default SecondPage
