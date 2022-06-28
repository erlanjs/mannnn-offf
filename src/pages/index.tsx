import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/pages/home/Hero";
import About from "../components/pages/home/About";
import Gallery from "../components/pages/home/Gallery";
import Contact from "../components/pages/home/Contact";


const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
      <Hero/>
      <About/>
      <Gallery/>
      <Contact/>
  </Layout>
)

export default IndexPage
