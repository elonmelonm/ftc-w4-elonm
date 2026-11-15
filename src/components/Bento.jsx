import TransCote from '../assets/f094d77692e6d4834f9966b31b9f58bbfd76590f.png'
import Savoureuse from '../assets/617d800920f786995359e05d7bee9aabecceceba.png'
import Personnalisable from '../assets/9b5c9685909eaa953ad710f428837dd5dc0b930d.png'
import Madeinfrance from '../assets/94e44bcbf492e021e3e0b2189c21548f5c722b5e.png'
import Innovante from '../assets/11efdf04634f9bf77cfcb3818980d328cac0f600.png'
import Image16 from '../assets/image 16.png'

// Titre de carte : 32px, interligne 0.9 (maquettes desktop et mobile).
const cardTitle = "w-full min-h-[21px] font-tartuffo text-[32px] leading-[0.9] text-[#5D4043] "
// Carte mobile / tablette : 425px de haut, fin liseré blanc.
const mobileCard = "max-lg:h-[425px] max-lg:border max-lg:border-white/50 "

export function Bento() {
    return (
        <>
            <div  id="header-blur-visible" className="relative w-full flex flex-col items-center px-4 md:px-10 md:py-24 lg:px-0 lg:h-[1142px] lg:pt-[116px] lg:pb-[100px] ">
                <div className="relative grid w-full max-w-[420px] grid-cols-1 md:max-w-none md:grid-cols-2 lg:w-auto lg:grid-cols-[380px_282px_282px] lg:grid-flow-col lg:grid-rows-[repeat(3,298px)] gap-4">

                    {/* élégante et sophistiquée */}
                    <div className={`relative overflow-x-clip overflow-y-clip bg-[#FFFFFF] ${mobileCard} max-lg:order-1 lg:row-span-2 justify-between  pb-8 rounded-[8px] flex flex-col pt-12 lg:pt-[101px] gap-[30px] ...`}>
                        <span className="absolute flex flex-1 overflow-clip max-lg:top-[52px] left-[-136px] lg:left-[-365px] lg:hover:left-[-345px] lg:hover:scale-105 transition-all duration-500 mr- z-10 ">
                            <img className=' max-w-none w-[430px] h-[206px] object-cover lg:w-[672px] lg:h-[350px] lg:mr-[73px] bg-cover' src={TransCote} alt="" />
                        </span>
                        <br />
                        <div className="absolute w-[677px] h-[534px] left-[calc(50%-338.5px+0.5px)] bottom-[-236px]
                        bg-[#EFF1FD] mix-blend-multiply blur-[80px]"></div>

                        <div className="flex flex-col  items-end lg:w-[309px] lg:h-[99px] gap-6 ml-8 mr-5 lg:mr-[39px]">
                            <h1 className={cardTitle}>
                                élégante et sophistiquée
                            </h1>
                            <span className='w-full font-gustavo text-[#816A6C] text-[14px] '>
                                Design raffiné et ornements exclusifs pour une expérience de vapotage distinguée et élégante
                            </span>
                        </div>
                    </div>

                    {/* savoureuse */}
                    <div className={`relative bg-[#EFF2FD] rounded-[8px] max-lg:overflow-clip ${mobileCard} max-lg:order-5 lg:col-span-2  ...`}>
                        <div className="absolute left-8 top-8 flex flex-col w-[234px] max-w-[calc(100%-64px)] h-[120px] gap-6 ">
                            <h1 className={cardTitle}>
                                savoureuse
                            </h1>
                            <span className='font-gustavo text-[#816A6C] text-[14px] '>
                                Palette de saveurs exquises pour une expérience de suçotage délicieusement satisfaisante et immersive.
                            </span>
                        </div>
                        <div className="absolute overflow-clip bottom-0 right-0 max-lg:left-0 max-lg:top-[169px]">
                            <div className="relative max-lg:w-full max-lg:h-full lg:w-[1002px] lg:h-[565px]">
                            <img className='absolute max-lg:max-w-none max-lg:w-[1002px] max-lg:h-[565px] max-lg:left-[-119px] max-lg:bottom-[-189px] lg:w-full lg:h-full lg:bottom-[-178px] lg:right-[-470px] lg:hover:right-[-390px] transition-all duration-500 ' src={Savoureuse} alt="" />
                            </div>
                        </div>
                    </div>

                    {/* personnalisable */}
                    <div className={`relative bg-[#FFFFFF] overflow-clip ${mobileCard} max-lg:order-2 lg:col-span-2 rounded-[8px] `}>
                        <div className="absolute w-[580px] h-[298px] left-0 top-0">
                            <div className="relative w-[1565px] h-[565px] lg:w-[1308px] lg:h-[472px]">
                                <img className='absolute max-w-none w-full h-full top-[-116px] left-[-86px] lg:top-[-78px] lg:left-[-151px] bg-cover lg:hover:left-[-131px] transition-all duration-500 ' src={Personnalisable} alt="" />
                            </div>
                        </div>
                        <div className="absolute bottom-8 left-8 right-2 lg:bottom-auto lg:top-[97px] lg:left-[220px] lg:right-auto lg:w-[320px] lg:h-[99px] flex flex-col gap-6">
                            <h1 className={cardTitle}>
                                personnalisable
                            </h1>
                            <span className='font-gustavo text-[#816A6C] leading-[150%] text-[14px] '>
                                Ornements et accessoires premium pour créer une vapoteuse unique qui reflète votre style personnel
                            </span>
                        </div>
                    </div>

                    {/* made in france */}
                    <div className={`relative bg-[#FFFFFF] flex flex-col max-lg:justify-end ${mobileCard} max-lg:order-3 gap-[39px] p-8 rounded-[8px] `}>
                        <div className=" max-lg:absolute max-lg:top-[112px] max-lg:left-[32px] max-lg:w-[291px] max-lg:max-w-[calc(100%-64px)] max-lg:h-[77px] lg:w-[216px] lg:h-[99px] lg:px-1 lg:py-[22px] flex flex-col gap-6">
                            <img className='w-full h-full hover:scale-105 hover:rotate-[-10deg] z-10 transition-all duration-500 ' src={Madeinfrance} alt="" />
                        </div>
                        <div className=" relative z-10 w-[216px] lg:h-[99px] flex flex-col gap-6">
                            <h1 className={cardTitle + "whitespace-nowrap"}>
                                made in france
                            </h1>
                            <span className='font-gustavo text-[#816A6C] leading-[150%] text-[14px] '>
                                Savoir-faire français pour une expérience de suçotage authentique et exceptionnelle
                            </span>
                        </div>
                        <img className='absolute top-0 left-0 w-full h-full z-0 rounded-[8px]' src={Image16} alt="" />

                    </div>

                    {/* innovante */}
                    <div className={`relative bg-[#FFFFFF] flex flex-col overflow-clip ${mobileCard} max-lg:order-4 gap-[39px] p-8 rounded-[8px] `}>
                        <div className=" w-[183px] h-[120px] flex flex-col gap-6">
                            <h1 className={cardTitle}>
                                innovante
                            </h1>
                            <span className='font-gustavo text-[#816A6C] leading-[150%] text-[14px] '>
                                Technologies de pointe offrant une expérience de suçotage révolutionnaire et inégalée.
                            </span>
                        </div>
                        <div className="absolute w-[393.82px] h-[221.52px] z-10 top-[190px] left-[-29px] lg:top-[127.63px] lg:left-[9.38px] rotate-[-2.54deg] group lg:hover:top-[88px] transition-all duration-500 ">
                            <img className='max-w-none w-full h-full ' src={Innovante} alt="" />
                        </div>
                        <div className="absolute w-[555px] h-full left-[-48px] top-[162px]
                        bg-[#EBE0D8] mix-blend-multiply blur-[80px] group-hover:top-[103px] transition-all duration-500"></div>


                    </div>

                    {/* hébergement 100% français */}
                      <div className="relative flex flex-col bg-[#EBE0D8] hover:bg-white transition-all duration-500 rounded-[8px] max-lg:h-[199px] max-lg:border max-lg:border-white/50 max-lg:order-6 p-8 gap-[18px] col-span- ... group" >
                         <div className="w-6 h-[6px] lg:group-hover:h-[88px] transition-all duration-500">
                         <span className="
                            absolute
                            w-6
                            h-[6px]
                            max-lg:right-8
                            lg:left-8
                            top-8
                            bg-[linear-gradient(90deg,#003DB3_0_33.33%,white_33.33%_66.67%,#F73C53_66.67%_100%)]
                            lg:group-hover:h-[88px] transition-all duration-500
                            "
                            style={{background: 'linear-gradient(180deg, #D9D9D9 0%, 91.5%)'}}
                        ></span>
                        </div>
                        <div className="absolute max-lg:bottom-8 lg:top-[138px] flex flex-col w-[216px] lg:h-[128px] gap-6 ">
                            <h1 className="w-[full min-h-[21px] font-tartuffo text-[32px] leading-[90%] text-[#5D4043] ">
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
