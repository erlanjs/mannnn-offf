import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import {StaticImage} from "gatsby-plugin-image";

const Header = () => (
  <header className="bg-[#1F1F1F] py-5 fixed w-full z-50 sm:py-2">
      <div className="container flex justify-center items-center sm:flex sm:items-center sm:justify-between sm:p-1 sm:max-w-full">
          <StaticImage
              src={"../images/logo.svg"}
              loading="eager"
              quality={95}
              width={200}
              formats={["auto", "webp", "avif"]}
              alt=""
              className='xl:hidden md:hidden sm:w-[130px]'
          />
          <div className=" flex items-center justify-center sm:hidden">
              <a href="#" className="text-white mx-5 text-[15px] no-underline">О компании</a>
              <a href="#" className="text-white mx-5 text-[15px] no-underline">Products</a>
              <a href="#" className="text-white mx-5 text-[15px] no-underline">Наша команда</a>
              <a href="#" className="text-white mx-5 text-[15px] no-underline">Контакты</a>
          </div>
          <div className='xl:hidden lg:hidden'>
              <svg className="h-8 w-8 text-gray-200" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2"
                   stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z"/>
                  <line x1="4" y1="6" x2="20" y2="6"/>
                  <line x1="4" y1="12" x2="20" y2="12"/>
                  <line x1="4" y1="18" x2="20" y2="18"/>
              </svg>
          </div>
      </div>

  </header>
)


export default Header
