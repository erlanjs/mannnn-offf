import * as React from "react"
import Layout from "../components/layout";
import Seo from "../components/seo";
import Header from "../components/header";
import Command from "../components/pages/about-company/command";
import Contact from "../components/pages/home/Contact";
import Products from "../components/pages/home/Products";
import About from "../components/pages/home/About";
import FounderSeo from "../components/pages/about-company/founder-seo";
import Сondition from "../components/pages/about-company/Сondition";


const SecondPage = () => (
  <>
    <Layout>
      <Seo title={'Mancho Devs'}/>
      <Header/>
      <Command/>
      <About/>
      <Products/>
      <Сondition/>
      {/*<FounderSeo/>*/}
      <Contact/>
    </Layout>
  </>
)

export default SecondPage
