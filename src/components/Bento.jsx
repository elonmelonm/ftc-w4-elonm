import TransCote from '../assets/f094d77692e6d4834f9966b31b9f58bbfd76590f.png'
import Savoureuse from '../assets/617d800920f786995359e05d7bee9aabecceceba.png'
import Personnalisable from '../assets/9b5c9685909eaa953ad710f428837dd5dc0b930d.png'
import Madeinfrance from '../assets/94e44bcbf492e021e3e0b2189c21548f5c722b5e.png'
import Innovante from '../assets/11efdf04634f9bf77cfcb3818980d328cac0f600.png'
import Image16 from '../assets/image 16.png'

export function Bento() {
    return (
        <>
            <div className="relative w-full h-[1142px] flex flex-col items-center pt-[116px] pb-[100px]  ">
                <div className="relative grid grid-flow-col grid-rows-3 gap-4">
                    
                    <div class="relative overflow-x-clip overflow-y-clip bg-[#FFFFFF] row-span-2 justify-between  pb-8 rounded-[8px] flex flex-col pt-[101px] gap-[30px] ...">
                        <span className="absolute flex flex-1 overflow-clip left-[-365px] mr- z-10 ">
                            <img className=' w-[672px] h-[350px] mr-[73px] bg-cover' src={TransCote} alt="" />
                        </span>
                        <br />
                        <div className="absolute w-[677px] h-[534px] left-[calc(50%-338.5px+0.5px)] bottom-[-236px] 
                        bg-[#EFF1FD] mix-blend-multiply blur-[80px]"></div>
                        
                        <div className="flex flex-col  items-end w-[309px] h-[99px] gap-6 ml-8 mr-[39px]">
                            <h1 class="w-full min-h-[21px] font-tartuffo text-[25.22px] leading-[41.19px] text-[#5D4043] ">
                                élégante et sophistiquée
                            </h1>
                            <span className='font-gustavo text-[#816A6C] text-[14px] '>
                                Design raffiné et ornements exclusifs pour une expérience de vapotage distinguée et élégante
                            </span>
                        </div>
                    </div>
                    <div class="relative bg-[#EFF2FD] rounded-[8px] col-span-2  ...">
                        <div className="absolute left-8 top-8 flex flex-col w-[234px] h-[120px] gap-6 ">
                            <h1 class="w-full min-h-[21px] font-tartuffo text-[25.22px] leading-[41.19px] text-[#5D4043] ">
                                savoureuse
                            </h1>
                            <span className='font-gustavo text-[#816A6C] text-[14px] '>
                                Palette de saveurs exquises pour une expérience de suçotage délicieusement satisfaisante et immersive.
                            </span>
                        </div>
                        <div className="absolute overflow-clip bottom-0 right-0">
                            <div className="relative w-[1002px] h-[565px]">
                            <img className='absolute w-full h-full bottom-[-178px] right-[-470px] ' src={Savoureuse} alt="" />
                            </div>
                        </div>
                    </div>
                    <div class="relative bg-[#FFFFFF] overflow-clip col-span-2 rounded-[8px] ">
                        <div className="absolute w-[580px] h-[298px] left-0 top-0">
                            <div className="relative w-[1308px] h-[472px]">
                                <img className='absolute w-full h-full top-[-78px] left-[-151px] bg-cover ' src={Personnalisable} alt="" />
                            </div>
                        </div>
                        <div className="absolute top-[97px] left-[220px] w-[320px] h-[99px] flex flex-col gap-6">
                            <h1 class="w-full min-h-[21px] font-tartuffo text-[25.22px] leading-[41.19px] text-[#5D4043] ">
                                personnalisable
                            </h1>
                            <span className='font-gustavo text-[#816A6C] leading-[150%] text-[14px] '>
                                Ornements et accessoires premium pour créer une vapoteuse unique qui reflète votre style personnel
                            </span>
                        </div>
                    </div>
                    <div class="relative bg-[#FFFFFF] flex flex-col gap-[39px] p-8 rounded-[8px] ">
                        <div className=" w-[216px] h-[99px] px-1 py-[22px] flex flex-col gap-6">
                            <img className='w-full h-full ' src={Madeinfrance} alt="" />
                        </div>
                        <div className=" w-[216px] h-[99px] flex flex-col gap-6">
                            <h1 class="w-full min-h-[21px] font-tartuffo text-[25.22px] leading-[41.19px] text-[#5D4043] ">
                                made in france
                            </h1>
                            <span className='font-gustavo text-[#816A6C] leading-[150%] text-[14px] '>
                                Savoir-faire français pour une expérience de suçotage authentique et exceptionnelle
                            </span>
                        </div>
                        <img className='absolute top-0 left-0 w-full h-full z-0' src={Image16} alt="" />

                    </div>
                    <div class="relative bg-[#FFFFFF] flex flex-col overflow-clip gap-[39px] p-8 rounded-[8px] ">
                        <div className="absolute w-[555px] h-full left-[-48px] top-[162px] 
                        bg-[#EBE0D8] mix-blend-multiply blur-[80px]"></div>
                        <div className=" w-[183px] h-[120px] flex flex-col gap-6">
                            <h1 class="w-full min-h-[21px] font-tartuffo text-[25.22px] leading-[41.19px] text-[#5D4043] ">
                                innovante
                            </h1>
                            <span className='font-gustavo text-[#816A6C] leading-[150%] text-[14px] '>
                                Technologies de pointe offrant une expérience de suçotage révolutionnaire et inégalée.
                            </span>
                        </div>
                        <div className="absolute w-[393.82px] h-[221.52px] top-[127.63px] left-[9.38px] rotate-[-2.54deg] ">
                            <img className='w-full h-full ' src={Innovante} alt="" />
                        </div>
                        

                    </div>
                    <div class="flex flex-col bg-[#EBE0D8] rounded-[8px] p-8 gap-[18px] col-span- ...">
                        <div className="w-6 h-[88px]">
                            <span>
                                <svg width="24" height="6" viewBox="0 0 24 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="8" height="6" fill="#003DB3"/>
                                    <rect x="8" width="8" height="6" fill="white"/>
                                    <rect x="16" width="8" height="6" fill="#F73C53"/>
                                </svg>
                            </span>
                        </div>
                        <div className="flex flex-col w-[234px] h-[128px] gap-6 ">
                            <h1 class="w-[full min-h-[21px] font-tartuffo text-[32px] leading-[90%] text-[#5D4043] ">
                                hébergement 100% français
                            </h1>
                            <span className='font-gustavo text-[#816A6C] text-[14px] '>
                                Notre site web est hébergé en france grâce à notre partenaire o2switch
                            </span>
                        </div>
                    </div>
                    {/* <div class="col-span-2 row-span-2 ...">03</div> */}
                                        
                </div>
            </div>
        </>
    )
}