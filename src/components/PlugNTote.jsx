import VideoPlugNTote from "../assets/f81746b3d40a398606f712a61a120482eea32cae.gif"

export function PlugNTote() {
    return (
        <>
            <div className="relative min-h-[1353px] flex flex-col justify-center items-center">
                <div className="relative w-[720px] h-[516px]">
                    <img 
                        src={VideoPlugNTote} 
                        alt="Plug N Tote Animation"
                        className="w-[720px] h-[720px] absolute -10" 
                    />
                    <span className="absolute top-[116px] w-[720px] h-[400px] z-0" style={{ background: 'linear-gradient(270deg, #FAF6F3 -3%, rgb(0, 0, 0, 0) 30%, #FAF6F3 100%' }}></span>
                </div>
                <div className="relative items-center flex flex-1 flex-col w-full bg-[#D4C2B800] gap-[33px]">
                    <div className="relative flex flex-col gap-20 w-full h-[523px] pt-[143px] justify-center items-center " style={{ background: 'radial-gradient(72.32% 75.14% at 50.9% 0%, #D4C2B8 0%, rgba(212, 194, 184, 0) 100%)' }}>
                        <div className="flex flex-row gap-[55px]">
                            <div className="flex flex-col w-[304px] h-hull gap-10">
                                <span class="w-[284px] min-h-[143px] font-tartuffo text-[64px] text-center leading-[90%] text-[#5D4043]">
                                    technologie plug’n’tote
                                </span>
                                <span class="w-full min-h-[143px] font-gustavo text-[15px] leading-[170%] text-[#816A6C]">
                                    La tototte est équipée de la <span className="font-bold text-[#30171B]">technologie plug'n'tote</span>, permettant de changer de plug à volonté, offrant ainsi un accès à une <span className="font-bold text-[#30171B]">gamme infinie de saveurs de suçotage</span>  pour satisfaire tous les goûts.
                                </span>
                            </div>
                            <div className="relative flex flex-col w-[304px] gap-10">
                                <span class="absolute bottom-[52px] w-full min-h-10 font-gustavo text-[15px] leading-[170%] text-[#816A6C]">
                                    Cette technologie vous permet de changer en un clin d’œil de saveur pour  <span className="font-bold text-[#30171B]">voyager du bout des lèvres.</span>
                                </span>
                            </div>
                        </div>
                        <button className="min-w-[168px] h-10 text-[15px] font-gustavo hover:border-b hover:border-[#5D4043] font-medium leading-[41.19px] px-6 text-[#5D4043] ">
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