import React from "react";
import {StaticImage} from  "gatsby-plugin-image"
import {Link} from "gatsby";

const Gallery = () => {
  return (
    <section className="my-12 py-10 bg-white sm:bg-[#1F1F1F] sm:py-[1px] md:bg-[#1F1F1F] md:py-1 lg:bg-white lg:py-2 xl:bg-white xl:py2  xxl:bg-white xxl:py-5">
      <div className="bg-[#1F1F1F] pt-5 pb-40 sm:pt-1 md:pt-1 lg:pt-3 xl:pt-4 xxl:pt-5 ">
      <div className="flex items-end justify-between  container mx-auto">
        <div className="flex text-[100px] font-[700] font-sans text-white sm:text-4xl sm:w-[100%] md:text-6xl  lg:w-[70%] lg:text-7xl ">Галер
          <div className="bg-black h-[5rem] text-white sm:h-[3rem] md:h-[5rem] bg-white h-[120px] text-[#1F1F1F]">ея</div>
        </div>
        <a className="font-[600] text-3xl text-white sm:hidden md:hidden lg:block xl:block xxl:block">see all photos</a>
      </div>
    </div>
      <div className="container mx-auto">
        <div className="flex justify-between h-full mt-[-140px] sm:flex sm:flex-col md:flex md:flex-col lg:flex lg:flex-row ">
          <div className="px-2.5 w-full">
            <StaticImage
              src={"../../../images/gallery_img_1.png"}
              loading="eager"
              quality={95}
              formats={["auto", "webp", "avif"]}
              alt="images"
              className="w-[100%] h-[398px] my-2 sm:h-[187px] md:h-[329px]"
            />
            <h1 className="font-[900] text-black text-2xl pt-20 sm:text-white md:text-white lg:text-black xl:text-black xxl:text-black">Присоединяйся к команде Mancho Devs!</h1>
            <p className="font-[300] text-[#1F1F1F] text-[15px] sm:text-white md:text-white lg:text-black xl:text-[#1F1F1F] xxl:text-[#1F1F1F]">Мы всегда в поисках талантливых людей, готовых работать над сложными и интересными задачами вместе с нами</p>
            <div>
              <Link to={'/about-company'}>
                <button className="bg-black px-8 py-3 rounded text-white font-[700] text-[12px] sm:bg-white sm:text-black md:bg-white md:text-black lg:bg-black lg:text-white xl:bg-black xl:text-white xxl:bg-black xxl:bg-black">Присоединяйся к нам!</button>
              </Link>
              <span></span>
            </div>
          </div>

          <div className="px-2.5 w-full">
            <StaticImage
              src={"../../../images/gallery_img_2.png"}
              loading="eager"
              quality={95}
              formats={["auto", "webp", "avif"]}
              alt="images"
              className="w-[100%] h-[258px] my-2 sm:h-[187px] md:h-[329px]"
            />
            <StaticImage
              src={"../../../images/gallery_img_3.png"}
              loading="eager"
              quality={95}
              formats={["auto", "webp", "avif"]}
              alt="images"
              className="w-[100%] h-[535px] my-2 sm:h-[187px] md:h-[329px]"

            />

          </div>

          <div className="px-2.5 w-full">
            <StaticImage
              src={"../../../images/gallery_img_4.png"}
              loading="eager"
              quality={95}
              formats={["auto", "webp", "avif"]}
              alt="images"
              className="w-[100%] h-[258px] my-2 sm:h-[187px] md:h-[329px]"
            />
            <StaticImage
              src={"../../../images/gallery_img_5.png"}
              loading="eager"
              quality={95}
              formats={["auto", "webp", "avif"]}
              alt="images"
              className="w-[100%] h-[258px] my-2 sm:h-[187px] md:h-[329px]"
            />
            <StaticImage
              src={"../../../images/gallery_img_6.png"}
              loading="eager"
              quality={95}
              formats={["auto", "webp", "avif"]}
              alt="images"
              className="w-[100%] h-[258px] my-2 sm:h-[187px] md:h-[329px]"
            />

          </div>

        </div>
      </div>
    </section>
  );
};
export default Gallery;
