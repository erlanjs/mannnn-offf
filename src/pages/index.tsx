import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import About from "../components/pages/home/About";
import Products from "../components/pages/home/Products";
import AllCommand from "../components/pages/home/allComand";
import Gallery from "../components/pages/home/Gallery";
import Contact from "../components/pages/home/Contact";
import {BrowserRouter} from "react-router-dom";

const IndexPage = () => (
  <Layout>
    <Seo title="Mancho Devs" />
    {/*<Hero/>*/}
    <About/>
    <Products/>
    <AllCommand/>
    <Gallery/>
    <Contact/>

  </Layout>
);

export default IndexPage;
