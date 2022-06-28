import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const About = (): JSX.Element => {


  return (
    <section>
      <div className="container mx-auto w-[90%]">
        <div className="flex items-center justify-between">
          <div className="flex text-[100px] font-[700] font-sans text-black sm:text-4xl sm:w-[100%] md:text-6xl lg:w-[70%] lg:text-7xl ">О компан<div className="bg-black h-[5rem] text-white sm:h-[3rem] md:h-[5rem] ">ии</div>
          </div>
          <p className="font-[600] text-3xl sm:hidden md:hidden lg:block xl:block xxl:block">who a<span className=" bg-black text-white py-8">re we?</span></p>
        </div>

      </div>
        <div className="flex justify-between pb-10 sm:flex sm:justify-center sm:flex-wrap ">

            <div className="bg-black p-2 flex justify-center items-end sm:w-full sm:flex sm:justify-center md:w-full lg:w-[40%]">
              <StaticImage
                src={'../../../images/about_img.png'}
                loading="eager"
                quality={95}
                formats={["auto", "webp", "avif"]}
                alt=""
                className="w-6/12 md:h-full md:w-11/12" />
            </div>

            <div className="flex justify-center sm:w-full sm:flex sm:justify-center md:w-full lg:w-[40%]">
              <div className="w-[80%]">
                <p className="my-12">
                  <span className="font-[700] text-[22px] pl-2">Mancho Devs</span> (ОсОО «Прораб») - это стартап, основанный в Бишкеке в феврале 2021 года Эсеном Сагыновым,
                  разработчиком одной из крупнейших компаний в мире - Amazon.
                </p>

                <p className="my-12">
                  В Mancho Devs работают 18 человек одновременно над тремя разными продуктами и это количество очень быстро
                  растёт! Мы не разрабатываем ни для кого, мы создаём свои продукты, которые выводим на рынок.
                </p>

                <p className="my-12">
                  Если ты хочешь стать частью нашего движения и сделать вклад в улучшение жизни жителей нашей страны,
                  присоединяйся к нам!
                </p>
              </div>
            </div>


      </div>
    </section>
  );
};

export default About;