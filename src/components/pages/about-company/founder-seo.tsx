import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const FounderSeo = () => {
  return (
    <section>
      <div className="bg-[#1F1F1F] pb-10">
        <div className="container mx-auto">
          <div className="flex justify-between bg-white items-center">
            <div className="flex justify-between bg-[#1F1F1F] text-white font-[700] text-[120px]">ЭСЕН СА
              <div className="bg-white text-[#1F1F1F] ">ГЫНОВ</div>
            </div>
            <p className="text-[17px] font-[600] pt-12">Founder & <span className="bg-[#1F1F1F] text-white py-[10.7vh]">CEO</span></p>
          </div>
          <div className="flex justify-around  text-white ">
            <div className="w-[50%]">
              <p> В Mancho Devs работают 18 человек одновременно над тремя разными продуктами и это количество очень
                быстро растёт!
              </p>
              <p> Более того, присоединившись к нам, у тебя будет возможность поработать бок о бок с Эсеном Сагыновым,
                разносторонним программистом с Амазон, который непосредственно участвует в разработке автомасштабирования
                AWS
              </p>
            </div>
            <div className="w-[61%] bg-white">
              <StaticImage
                src={'../../../images/esen-sagynov.png'}
                loading="eager"
                quality={95}
                formats={["auto", "webp", "avif"]}
                alt="no img"
                className="w-[100%] "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSeo;