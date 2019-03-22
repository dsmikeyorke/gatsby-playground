import React from "react"
import Slideshow from "../components/Slideshow/Slideshow"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Slideshow />
  </Layout>
)

export default IndexPage
