import * as React from 'react';
import {StaticImage} from  "gatsby-plugin-image"
import {media} from "../../media";

const Hero = () => {

    return (
        <div className="bg-[#FFFFFF]  min-h-[100vh]">
            {/*<div className="bg-[#1F1F1F] w-full h-[280px]">*/}
            {/*    <div className="container mx-auto w-[90%] pt-[64px]">*/}

            {/*        <div className="mt-[90px] phoneMin:mt-[55px]">*/}
            {/*            <div className="absolute flex z-20 flex-col  left-[-30px] mt-[-20px] text-[176px] phoneMin:flex-col phoneMin: mr-4 phoneMin:mt-[15px] phoneMin:text-[176px] phoneMax:flex-col mt-0  phoneMax:text-[176px] phoneMin:left-0 phoneMin:pl-0 phoneMax:left-0 phoneMax:pl-0  tablet:flex-col mt-0 tablet:text-[176px] tablet:left-0 tablet:pl-8 laptop:flex-row laptop:mt-[55px] laptop:text-[200px] desktop:flex-row desktop:text-[268px], desktop:mt-[60px]">*/}
            {/*                <span className=" font-black px-0 mr-0 text-black phoneMin:leading-none  phoneMin: px-4 phoneMax:mr-0 tablet: mr-0 phoneMax:leading-none laptop:mr-[15px] desktop:mr-[30px]">D</span>*/}
            {/*                <span className=" font-black px-0 mr-0 text-black phoneMin:mr-0 phoneMin:leading-none  phoneMin: px-4 phoneMax:mr-0 phoneMax:leading-none tablet: mr-0 laptop:mr-[15px] desktop:mr-[30px]">E</span>*/}
            {/*                <span className=" font-black px-0  mr-0 text-black phoneMin:mr-0 phoneMin:leading-none  phoneMin: px-4 phoneMax:mr-0 phoneMax:leading-none tablet: mr-0 laptop:mr-[15px] desktop:mr-[30px]">V</span>*/}
            {/*                <span className=" font-black  text-white mr-0 px-0 bg-[#1F1F1F] phoneMin:bg-[#1F1F1F] phoneMin:leading-none phoneMin: px-4 phoneMax:leading-none phoneMax:bg-[#1F1F1F] tablet:bg-[#1F1F1F] laptop:bg-transparent desktop:bg-transparent phoneMin:mr-0 phoneMax:mr-0 tablet:mr-[15px] laptop:mr-0 desktop:mr-[30px]">S</span>*/}
            {/*            </div>*/}
            {/*        </div>*/}

            {/*        <StaticImage*/}
            {/*            src={"https://downloader.disk.yandex.ru/preview/273b808df4dde78b7d70f430c1bb9d294f28e7edfa2066cf46b818ed26ad19dd/62b3203a/czSdJLzv2CmYXY5CbnP7npfl9nRH_YOkEEiTI5lYEyyxno3wi4KA1Kbogfca3MBP77knDYoiINLlEu9cl0Agqg%3D%3D?uid=0&filename=F81A2527.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=1908x896"}*/}
            {/*            loading="eager"*/}
            {/*            quality={95}*/}
            {/*            formats={["auto", "webp", "avif"]}*/}
            {/*            alt=""*/}
            {/*            className="absolute mt-[10px] ml-[700px] z-10 w-[588px] h-[555px] phoneMin:ml-0 phoneMin:right-0 phoneMin:w-[65%] phoneMin:h-[709px]  phoneMax:ml-0 phoneMax:right-0 phoneMax:w-[75%] phoneMax:h-[709px] tablet:ml-0 tablet:w-[70%] tablet:right-0 tablet:h-[715px] laptop:left-[580px] laptop:w-[460px] laptop:h-[430px] desktop:left-[680px] desktop:w-[588px] desktop:h-[555px]"*/}
            {/*        />*/}

            {/*    </div>*/}

            {/*</div>*/}
            {/*<div className="container mx-auto w-[90%]">*/}
            {/*    <div className="block phoneMin:absolute sm:z-40 phoneMin:ml-[140px] md:mt-[130px] phoneMin:text-white md:absolute  md:mt-[130px] phoneMax:ml-[200px] tablet:mt-[170px] lg:block lg:text-black lg:ml-[0px] lg:mt-[-60px] desktop:block xl:text-black xl:ml-[0px] xl:mt-[-60px]">*/}
            {/*        <h3 className="font-normal text-[20px] mt-[180px] phoneMin:text-[16px]" style={{width: media(252,500)}}>Наша миссия — оптимизировать процессы, используя технологии, во благо людей.</h3>*/}
            {/*        <button className="py-3 px-6 bg-black text-white font-black text-[12px] rounded-md mt-5 md:bg-transparent md:border-2 md:border-white md:bg-transparent md:border-2 md:border-white md:bg-transparent md:border-2 md:border-white lg:bg-black lg:border-2  ">Присоединяйся к нам!</button>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>
    );
};

export default Hero;