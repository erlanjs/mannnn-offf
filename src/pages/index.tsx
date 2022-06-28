import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/pages/home/Hero";
import About from "../components/pages/home/About";
import Products from "../components/pages/home/Products";
import AllCommand from "../components/pages/home/allComand";




import Gallery from "../components/pages/home/Gallery";
import Contact from "../components/pages/home/Contact";


const IndexPage = () => (
  <Layout>
    <Seo title="Mancho Devs" />
      {/*<Hero/>*/}
      {/*<About/>*/}
    <About/>
    <Products/>
      <AllCommand/>
      {/*<Hero/>*/}
      <Gallery/>
      <Contact/>
  </Layout>
)

export default IndexPage
