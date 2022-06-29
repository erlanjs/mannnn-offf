import * as React from "react"
import {StaticImage} from "gatsby-plugin-image";


const Header = () => (
  <div className="bg-[#1F1F1F] py-10 fixed w-full z-10">
      <div className="container mx-auto w-[90%] flex justify-center items-center">
          {/*<StaticImage*/}
          {/*    src={"../images/logo.svg"}*/}
          {/*    loading="eager"*/}
          {/*    quality={95}*/}
          {/*    width={200}*/}
          {/*    formats={["auto", "webp", "avif"]}*/}
          {/*    alt="img"*/}
          {/*    className="bg-red-600"/>*/}
          <div className="flex justify-between  w-[60%]">
              <a href="#" className="text-white no-underline">О компании</a>
              <a href="#" className="text-white no-underline">Products</a>
              <a href="#" className="text-white no-underline">Наша команда</a>
              <a href="#" className="text-white no-underline">Contacts</a>
          </div>
      </div>
  </div>
)


export default Header
