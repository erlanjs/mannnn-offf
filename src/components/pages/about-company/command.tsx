import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { media } from "../../media";

const Command = (): JSX.Element => {
  return (
    <div className="bg-[#FFFFFF]  min-h-[100vh]">
      <div className="bg-[#1F1F1F] w-full h-[280px]">
        <div className="container mx-auto w-[90%] pt-[64px]">

          <StaticImage
            src={"https://downloader.disk.yandex.ru/preview/273b808df4dde78b7d70f430c1bb9d294f28e7edfa2066cf46b818ed26ad19dd/62b3203a/czSdJLzv2CmYXY5CbnP7npfl9nRH_YOkEEiTI5lYEyyxno3wi4KA1Kbogfca3MBP77knDYoiINLlEu9cl0Agqg%3D%3D?uid=0&filename=F81A2527.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=1908x896"}
            loading="eager"
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt=""
            className="absolute mt-[10px] ml-[700px] z-10 w-[588px] h-[555px] phoneMin:ml-0 phoneMin:right-0 phoneMin:w-[65%] phoneMin:h-[709px]  phoneMax:ml-0 phoneMax:right-0 phoneMax:w-[75%] phoneMax:h-[709px] tablet:ml-0 tablet:w-[70%] tablet:right-0 tablet:h-[715px] laptop:left-[580px] laptop:w-[460px] laptop:h-[430px] desktop:left-[680px] desktop:w-[588px] desktop:h-[555px]"
          />

        </div>

      </div>
      <div className="container mx-auto w-[90%]">
        <p>Присоединяйся к команде Mancho Devs!</p>
        <p>Мы всегда в поисках талантливых людей, готовых работать над сложными и интересными задачами вместе с нами</p>
        <button>Открытые вакансии</button>
      </div>
    </div>
  );
};

export default Command;