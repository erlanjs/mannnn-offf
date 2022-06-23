import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import {StaticImage} from "gatsby-plugin-image";

const Header = () => (
  <header className="bg-[#1F1F1F] py-5 fixed w-full z-30">
      <div className="container mx-auto w-[90%] flex justify-between items-center mt-[30px]">
          <StaticImage
              src={"../images/logo.svg"}
              loading="eager"
              quality={95}
              width={200}
              formats={["auto", "webp", "avif"]}
              alt=""
          />
          <div className="container mx-auto w-[90%] hidden phoneMin:hidden phoneMax:hidden tablet:hidden laptop:flex desktop:flex">
              <a href="#" className="text-white mx-5 text-[15px] no-underline">О компании</a>
              <a href="#" className="text-white mx-5 text-[15px] no-underline">Products</a>
              <a href="#" className="text-white mx-5 text-[15px] no-underline">Наша команда</a>
              <a href="#" className="text-white mx-5 text-[15px] no-underline">Контакты</a>
          </div>
      </div>

  </header>
)


export default Header
