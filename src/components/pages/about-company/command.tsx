import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const Command = (): JSX.Element => {
  return (
    <div className="bg-[#FFFFFF]  min-h-[100vh] mb-[70px]">
      <div className="bg-[#1F1F1F] w-full h-[380px] sm:h-[280px] md:h-[380px] lg:h-[380px]  xl:h-[380px] xxl:h-[380px]">
        <div className="container mx-auto w-[90%]">

          <div className="flex justify-between pt-24 sm:flex sm:flex-col md:flex-col lg:flex-row xl:flex-row xxl:flex-row">
            <div className=" w-[100%] mt-20 sm:block md:block lg:hidden xl:hidden xxl:hidden">
              <p className="font-[750] text-[22px] mt-2  text-white">Присоединяйся к команде Mancho Devs!</p>
            <p className="font-[600] text-[12px] text-black mt-10">Мы всегда в поисках талантливых людей, готовых работать над сложными и интересными задачами вместе с нами</p>
            <button className="rounded py-3 px-6 border-[3px] border-black text-[12px] font-[700] text-black ">Открытые вакансии</button>
            </div>

            <div className="pt-72 w-[50%] sm:hidden md:hidden lg:block xl:block xxl:block">
              <p className="font-[900] text-[34px] ">Присоединяйся к команде Mancho Devs!</p>
              <p className="font-[700] text-[15px]">Мы всегда в поисках талантливых людей, готовых работать над сложными и интересными задачами вместе с нами</p>
              <button className="rounded py-3 px-6 border-[3px] border-black text-[12px] font-[700] ">Открытые вакансии</button>
            </div>

            <div className="w-[50%] mt-44 sm:w-[100%] md:w-[100%] lg:w-[50%] xl:w-[50%] xxl:w-[50%] ">
              <StaticImage
                src={'../../../images/mancho_devs.png'}
                loading="eager"
                quality={95}
                formats={["auto", "webp", "avif"]}
                alt=""
                className="w-full"
              />
            </div>

          </div>
        </div>

      </div>

    </div>
  );
};

export default Command;