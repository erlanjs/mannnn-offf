import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/pages/home/Hero";
import About from "../components/pages/home/About";
import Products from "../components/pages/home/Products";
import AllCommand from "../components/pages/home/allComand";






const IndexPage = () => (
  <Layout>
    <Seo title="Mancho Devs" />
      {/*<Hero/>*/}
      {/*<About/>*/}
      <Products/>
      <AllCommand/>
  </Layout>
)

export default IndexPage
