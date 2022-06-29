import * as React from "react"
import Layout from "../components/layout";
import Seo from "../components/seo";
import Header from "../components/header";
import Command from "../components/pages/about-company/command";
import Contact from "../components/pages/home/Contact";
import Products from "../components/pages/home/Products";
import About from "../components/pages/home/About";


const SecondPage = () => (
  <>
    <Layout>
      <Seo title={'Mancho Devs'}/>
      <Header/>
      <Command/>
      <About/>
      <Products/>
      <Contact/>
    </Layout>
  </>
)

export default SecondPage