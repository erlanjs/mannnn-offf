import * as React from 'react';
import {StaticImage} from "gatsby-plugin-image"
import {media} from "../../media";

const Hero = () => {


    return (
        <div className="bg-[#FFFFFF]  min-h-[100vh] relative">
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
            {/*            src={'../../../images/esenbb.png'}*/}
            {/*            loading="eager"*/}
            {/*            quality={95}*/}
            {/*            formats={["auto", "webp", "avif"]}*/}
            {/*            alt=""*/}
            {/*            className="absolute mt-[10px] ml-[700px] z-10 w-[588px] h-[555px] phoneMin:ml-0 phoneMin:right-0 phoneMin:w-[65%] phoneMin:h-[709px]  phoneMax:ml-0 phoneMax:right-0 phoneMax:w-[75%] phoneMax:h-[709px] tablet:ml-0 tablet:w-[70%] tablet:right-0 tablet:h-[715px] laptop:left-[580px] laptop:w-[460px] laptop:h-[430px] desktop:left-[680px] desktop:w-[588px] desktop:h-[555px]"*/}
            {/*        />*/}
            {/*        <img*/}
            {/*            src={"https://downloader.disk.yandex.ru/preview/273b808df4dde78b7d70f430c1bb9d294f28e7edfa2066cf46b818ed26ad19dd/62b3203a/czSdJLzv2CmYXY5CbnP7npfl9nRH_YOkEEiTI5lYEyyxno3wi4KA1Kbogfca3MBP77knDYoiINLlEu9cl0Agqg%3D%3D?uid=0&filename=F81A2527.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=1908x896"}*/}
            {/*            alt=""*/}
            {/*        />*/}

            {/*    </div>*/}

            {/*</div>*/}
            {/*<div className="container mx-auto w-[90%]">*/}
            {/*    <div className="block phoneMin:absolute phoneMin:z-40 phoneMin:ml-[140px] phoneMin:mt-[130px] phoneMin:text-white phoneMax:absolute  phoneMax:mt-[130px] phoneMax:ml-[200px] tablet:mt-[170px] laptop:block laptop:text-black laptop:ml-[0px] laptop:mt-[-60px] desktop:block desktop:text-black desktop:ml-[0px] desktop:mt-[-60px]">*/}
            {/*        <h3 className="font-normal text-[20px] mt-[180px] phoneMin:text-[16px]" style={{width: media(252,500)}}>Наша миссия — оптимизировать процессы, используя технологии, во благо людей.</h3>*/}
            {/*        <button className="py-3 px-6 bg-black text-white font-black text-[12px] rounded-md mt-5 phoneMin:bg-transparent phoneMin:border-2 phoneMin:border-white phoneMax:bg-transparent phoneMax:border-2 tablet:border-white tablet:bg-transparent tablet:border-2 tablet:border-white laptop:bg-black laptop:border-2  ">Присоединяйся к нам!</button>*/}
            {/*    </div>*/}
            {/*</div>*/}
            <div className='bg-[#1F1F1F] w-full h-[280px] absolute'/>
            <div className='container flex items-start justify-between w-full relative sm:max-w-full md:max-w-full sm:p-0 md:p-0 sm:flex  md:flex md:items-start md:justify-start xl:max-w-full lg:max-w-full'>
                <div className='mt-32 z-30 flex flex-col sm:mt-20 sm:w-[34%] md:pr-2 md:mt-20'>
                    <StaticImage
                        src={"../images/logo.svg"}
                        loading="eager"
                        quality={95}
                        width={200}
                        formats={["auto", "webp", "avif"]}
                        alt=""
                        className='w-52 sm:hidden sm:w-full md:hidden'
                    />
                    <div className='flex items-center md:block sm:block sm:pl-2 md:pl-10'>
                        <h1 className='devs-d font-[900] text-[200px] text-black sm:m-0 sm:text-[160px] md:m-0'>D</h1>
                        <h1 className='font-[900] text-[200px] text-black ml-20 sm:m-0 md:m-0 sm:text-[160px] sm:pt-1'>E</h1>
                        <h1 className='font-[900]  text-[200px] text-black ml-20 sm:m-0 md:m-0 sm:text-[160px]'>V</h1>
                        <h1 className='font-[900]  text-[200px] text-white  absolute left-[675px] sm:left-0 sm:bg-[#1F1F1F] sm:px-4  sm:text-[159px] sm:m-0 md:m-0 md:left-0 md:bg-[#1F1F1F] md:px-14'>S</h1>
                        <h2 className='absolute right-0  left-[638px] top-96 text-xl text-white sm:hidden md:hidden'><span className='text-black pr-1'>we</span> are creative</h2>
                    </div>
                    <div className='w-2/3 sm:hidden md:hidden'>
                        <p>
                            Наша миссия — оптимизировать процессы, используя технологии, во благо людей.
                        </p>
                        <button className='bg-black p-4 text-white'>Присоединяйся к нам!</button>
                    </div>
                </div>




                <div className='mt-28 relative md:w-[89%] md:pl-8'>
                    <StaticImage
                        src={'../../../images/esenbb.png'}
                        loading="eager"
                        quality={95}
                        formats={["auto", "webp", "avif"]}
                        alt=""
                        className='sm:hidden md:h-[53rem] md:z-30 md:w-full'
                    />
                    <div className='sm:p-1 sm:block xl:hidden absolute bottom-16 z-40 md:p-2'>
                        <p className='text-white'>
                            Наша миссия — оптимизировать процессы, используя технологии, во благо людей.
                        </p>
                        <button className='bg-black p-4 text-white  border rounded border-white'>Присоединяйся к нам!</button>
                    </div>
                </div>




                <div className='w-full h-full relative md:hidden lg:hidden xl:hidden'>
                    <StaticImage
                        src={'../../../images/eb-mobile.png'}
                        loading="eager"
                        formats={["auto", "webp", "avif"]}
                        alt="esen bayke image"
                        className='z-30 h-[49.2rem] w-full object-contain'
                    />
                    <div className='sm:p-2 sm:block xl:hidden absolute bottom-16 z-40'>
                        <p className='text-white'>
                            Наша миссия — оптимизировать процессы, используя технологии, во благо людей.
                        </p>
                        <button className='bg-black p-4 text-white border rounded border-white'>Присоединяйся к нам!</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Hero;