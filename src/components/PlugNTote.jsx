import VideoPlugNTote from "../assets/f81746b3d40a398606f712a61a120482eea32cae.gif"

export function PlugNTote() {
    return (
        <>
            <div className="relative lg:min-h-[1353px] flex flex-col justify-center items-center max-md:pb-[18px]">
                {/* animation du plug : 400x400 sur mobile, 720x720 à partir de la tablette */}
                <div className="relative w-full h-[429px] md:w-[720px] md:h-[516px]">
                    <img
                        src={VideoPlugNTote}
                        alt="Plug N Tote Animation"
                        className="max-w-none w-[400px] h-[400px] top-[141px] left-1/2 -translate-x-1/2 md:top-0 md:left-0 md:translate-x-0 md:w-[720px] md:h-[720px] absolute -10"
                    />
                    <span className="absolute top-[116px] w-full h-[313px] md:w-[720px] md:h-[400px] z-0" style={{ background: 'linear-gradient(270deg, #FAF6F3 -3%, rgb(0, 0, 0, 0) 30%, #FAF6F3 100%' }}></span>
                </div>
                <div className="relative items-center flex flex-1 flex-col w-full bg-[#D4C2B800] md:-mt-[87px]">
                    <div className="relative flex flex-col gap-[30px] md:gap-20 w-full px-6 min-[360px]:px-12 pt-[74px] md:px-0 md:h-[523px] md:pt-[143px] justify-center items-start md:items-center bg-no-repeat bg-center max-md:bg-[length:1920px_100%]" style={{ backgroundImage: 'radial-gradient(72.32% 75.14% at 50.9% 0%, #D4C2B8 0%, rgba(212, 194, 184, 0) 100%)' }}>
                        <div className="flex flex-col md:flex-row gap-[25px] md:gap-[55px] max-md:w-full">
                            <div className="flex flex-col w-full max-w-[304px] md:w-[304px] h-hull gap-[29px] md:gap-10">
                                <span className="w-full md:w-[284px] md:min-h-[107px] font-tartuffo text-[clamp(44px,14.25vw,56px)] md:text-[64px] leading-[90%] text-[#30171B]">
                                    technologie plug’n’tote<span className="relative"><span className="absolute left-full top-[0.3em] ml-0.5 font-gustavo text-[11px] leading-none">®</span></span>
                                </span>
                                <span className="w-full md:min-h-[114px] font-gustavo text-[15px] leading-[170%] text-[#816A6C]">
                                    La tototte est équipée de la <span className="font-bold text-[#30171B]">technologie plug'n'tote</span>, permettant de changer de plug à volonté, offrant ainsi un accès à une <span className="font-bold text-[#30171B]">gamme infinie de saveurs de suçotage</span>  pour satisfaire tous les goûts.
                                </span>
                            </div>
                            <div className="relative flex flex-col w-full max-w-[304px] md:w-[304px] gap-10">
                                <span className="md:absolute md:top-[147px] w-full min-h-10 font-gustavo text-[15px] leading-[170%] text-[#816A6C]">
                                    Cette technologie vous permet de changer en un clin d’œil de saveur pour  <span className="font-bold text-[#30171B]">voyager du bout des lèvres</span>.
                                </span>
                            </div>
                        </div>
                        <button className="max-md:self-center min-w-[168px] h-10 text-[15px] font-gustavo hover:border-b hover:border-[#5D4043] font-medium leading-[41.19px] px-6 text-[#5D4043] ">
                            Découvrir les saveurs
                        </button>
                    </div>
                    <div className=" w-[1px] h-[400px] left-[calc(50%-1px/2-0.5px)]
                        bg-[linear-gradient(180deg,#513E40_0%,rgba(183,140,145,0)_100%)]">
                    </div>
                </div>
            </div>
        </>
    )
}
