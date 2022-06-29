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
      <div className="flex justify-between sm:flex sm:justify-center sm:flex-wrap">

        <div className="bg-[#1F1F1F] h-[479px] mr-60 flex justify-center items-end sm:w-full sm:p-10 sm:mr-0 sm:flex sm:justify-center md:w-full md:p-30 md:mr-0 lg:w-[40%] md:p-20 lg:mr-0 lg:p-0 xl:w-[38.8%] xl:p-0 xl:mr-0 xl:p-0 xxl:mr-60 xxl:p-0   ">
          <StaticImage
            src={'../../../images/about_img.png'}
            loading="eager"
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt=""
            className="w-9/12 h-[360px] sm:w-full md:w-full lg:w-10/12 xl:9/12 xxl:9/12"/>
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