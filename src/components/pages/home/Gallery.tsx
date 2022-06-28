import React from "react";
import {StaticImage} from  "gatsby-plugin-image"


const Gallery = () => {
  return (
    <section><div className="bg-[#1F1F1F] pt-5 pb-40">
      <div className="flex items-end justify-between  container mx-auto">
        <div className="flex text-[100px] font-[700] font-sans text-white sm:text-4xl sm:w-[100%] md:text-6xl  lg:w-[70%] lg:text-7xl ">Галер
          <div className="bg-black h-[5rem] text-white sm:h-[3rem] md:h-[5rem] bg-white h-[120px] text-[#1F1F1F]">ея</div>
        </div>
        <a className="font-[600] text-3xl text-white sm:hidden md:hidden lg:block xl:block xxl:block">see all photos</a>
      </div>
    </div>

      <div className="container mx-auto ">
        <div className="flex justify-between h-full bg-amber-600 mt-[-140px] sm:flex justify-center md:flex justify-center lg:flex justify-between xl:flex justify-between ">

          <div className="px-2.5 w-full">
            <StaticImage
              src={"../../../images/gallery_img_1.png"}
              loading="eager"
              quality={95}
              formats={["auto", "webp", "avif"]}
              alt="images"
              className="w-[100%] h-[398px] my-2"
            />
            <h1 className="font-[900] text-black text-2xl pt-20">Присоединяйся к команде Mancho Devs!</h1>
            <p className="font-[300] text-[#1F1F1F] text-[15px]">Мы всегда в поисках талантливых людей, готовых работать над сложными и интересными задачами вместе с нами</p>
            <div>
              <button className="bg-black px-8 py-3 rounded text-white font-[700] text-[12px]">Присоединяйся к нам!</button>
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
              className="w-[100%] h-[258px] my-2"
            />
            <StaticImage
              src={"../../../images/gallery_img_3.png"}
              loading="eager"
              quality={95}
              formats={["auto", "webp", "avif"]}
              alt="images"
              className="w-[100%] h-[535px] my-2"

            />

          </div>

          <div className="px-2.5 w-full">
            <StaticImage
              src={"../../../images/gallery_img_4.png"}
              loading="eager"
              quality={95}
              formats={["auto", "webp", "avif"]}
              alt="images"
              className="w-[100%] h-[258px] my-2"
            />
            <StaticImage
              src={"../../../images/gallery_img_5.png"}
              loading="eager"
              quality={95}
              formats={["auto", "webp", "avif"]}
              alt="images"
              className="w-[100%] h-[258px] my-2"
            />
            <StaticImage
              src={"../../../images/gallery_img_6.png"}
              loading="eager"
              quality={95}
              formats={["auto", "webp", "avif"]}
              alt="images"
              className="w-[100%] h-[258px] my-2"
            />

          </div>

          
        </div>
      </div>
    </section>
  );
};

export default Gallery;