import VideoPlugNTote from "../assets/f81746b3d40a398606f712a61a120482eea32cae.gif"
import Plug1 from "../assets/08c77595a2b404c5ebca9959c80767141f95d052.png"
import Plug2 from "../assets/c0a42725a511d3f948acdd3121e8946758481491.png"
import Plug3 from "../assets/ab21da7c6138e12f20b88833886e79a795099ba2.png"
import Plug4 from "../assets/07c68ba774a6dd2df35cc9a21096f21201156638.png"
import Plug5 from "../assets/f692b68b303de928400b8c11d48f0fb786fe4fca.png"
import Plug6 from "../assets/b2633931929a6732029aae729d2b9356e35a9a8c.png"
import Plug7 from "../assets/fdc15f9d2e9a28e43c24be6c398ad84f67bf6c7d.png"
import Plug8 from "../assets/53a6cd3d612b2a82e6887fe6b7be2d7208d4b6c3.png"

export function Plug() {
    return (
        <>
            <div className="relative pt-[72px] min-h-[851px] flex flex-col justify-cente items-center">
                <div className="flex w-[1178px] h-[217px] justify-center items-center">
                    <div className="grid grid-cols-8 w-[720px] h-[200px]">
                        <div className="w-[90px] h-full px-2.5 pt-[45px] hover:pt-[13px] transition-all duration-500">
                            <img src={Plug1} alt="" />
                        </div>
                        <div className="w-[90px] h-full px-2.5 pt-[45px] hover:pt-[13px] transition-all duration-500">
                            <img src={Plug2} alt="" />
                        </div>
                        <div className="w-[90px] h-full px-2.5 pt-[45px] hover:pt-[13px] transition-all duration-500">
                            <img src={Plug3} alt="" />
                        </div>
                        <div className="w-[90px] h-full px-2.5 pt-[45px] hover:pt-[13px] transition-all duration-500">
                            <img src={Plug4} alt="" />
                        </div>
                        <div className="w-[90px] h-full px-2.5 pt-[45px] hover:pt-[13px] transition-all duration-500">
                            <img src={Plug5} alt="" />
                        </div>
                        <div className="w-[90px] h-full px-2.5 pt-[45px] hover:pt-[13px] transition-all duration-500">
                            <img src={Plug6} alt="" />
                        </div>
                        <div className="w-[90px] h-full px-2.5 pt-[45px] hover:pt-[13px] transition-all duration-500">
                            <img src={Plug7} alt="" />
                        </div>
                        <div className="w-[90px] h-full px-2.5 pt-[45px] hover:pt-[13px] transition-all duration-500">
                            <img src={Plug8} alt="" />
                        </div>
                    </div>
                </div>
                <div className="absolute top-[250px] w-[1178px] h-[217px] pt-[138px]" style={{ background: 'radial-gradient(53.35% 53.35% at 50% 0%, #D3BFB0 0%, rgba(235, 224, 216, 0) 100%)' }}>
                    <div className="flex flex-row justify-center items-center gap-[65px]">
                        <div className="flex flex-row gap-12">
                            <div className="flex flex-col w-[120px] gap-6">
                                <span class="w-[80px] min-h-[38px] font-gustavo font-bold text-[56px] leading-[90%] text-[#30171B]">
                                    30
                                </span>
                                <span class="w-full  font-gustavo font-medium text-[13px] leading-[170%] text-[#816A6C]">
                                    Saveurs disponibles 
                                </span>
                            </div>
                            <div className="flex flex-col w-[120px] gap-6">
                                <span class="w-[80px] min-h-[38px] font-gustavo font-bold text-[56px] leading-[90%] text-[#30171B]">
                                    11
                                </span>
                                <span class="w-full font-gustavo font-medium text-[13px] leading-[170%] text-[#816A6C]">
                                    Vertus médicinales 
                                </span>
                            </div>
                        </div>
                        <div className="flex flex-row">
                            <span class="w-[304px] min-h-[62px] font-gustavo font-medium text-[13px] leading-[170%] text-[#816A6C]">
                                Laissez-vous tenter par les saveurs des différents plugs et .
                                <span className="font-bold text-[#30171B]">découvrez un monde de délices</span> pour chaque envie.
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}