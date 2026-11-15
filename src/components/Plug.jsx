import Plug1 from "../assets/08c77595a2b404c5ebca9959c80767141f95d052.png"
import Plug2 from "../assets/c0a42725a511d3f948acdd3121e8946758481491.png"
import Plug3 from "../assets/ab21da7c6138e12f20b88833886e79a795099ba2.png"
import Plug4 from "../assets/07c68ba774a6dd2df35cc9a21096f21201156638.png"
import Plug5 from "../assets/f692b68b303de928400b8c11d48f0fb786fe4fca.png"
import Plug6 from "../assets/b2633931929a6732029aae729d2b9356e35a9a8c.png"
import Plug7 from "../assets/fdc15f9d2e9a28e43c24be6c398ad84f67bf6c7d.png"
import Plug8 from "../assets/53a6cd3d612b2a82e6887fe6b7be2d7208d4b6c3.png"

export function Plug() {
    const plugs = [Plug1, Plug2, Plug3, Plug4, Plug5, Plug6, Plug7, Plug8]
    const shelf = { background: 'radial-gradient(53.35% 53.35% at 50% 0%, #D3BFB0 0%, rgba(235, 224, 216, 0) 100%)' }
    const statNumber = "w-[80px] h-[38px] font-gustavo font-bold text-[56px] leading-[38px] text-[#30171B]"
    const statLabel = "w-full font-gustavo font-medium text-[13px] leading-[125%] text-[#816A6C]"
    return (
        <>
            <div className="relative md:pt-[118px] min-h-[961px] md:min-h-[851px] flex flex-col justify-cente items-center">
                {/* plugs : 2 rangées de 4 sur mobile, une rangée de 8 à partir de la tablette */}
                <div className="flex w-full lg:w-[1178px] h-[400px] md:h-[200px] justify-center items-center">
                    <div className="grid grid-cols-4 md:grid-cols-8 shrink-0 w-[360px] max-w-full md:w-[720px] h-[400px] md:h-[200px]">
                        {plugs.map((plug, index) => (
                            <div key={index} className="w-full md:w-[90px] h-[200px] md:h-full px-2.5 pt-[45px] hover:pt-[13px] transition-all duration-500">
                                <img src={plug} alt="" />
                            </div>
                        ))}
                    </div>
                </div>
                {/* étagère de la première rangée (mobile uniquement) */}
                <div aria-hidden="true" className="md:hidden pointer-events-none absolute top-[182px] left-1/2 -translate-x-1/2 w-[860px] h-[143px]" style={shelf}></div>
                <div className="absolute top-[382px] md:top-[289px] w-full lg:w-[1178px] px-6 min-[360px]:px-12 md:px-0 h-[217px] pt-[142px] md:pt-[138px] bg-no-repeat bg-center max-md:bg-[length:860px_217px]" style={{ backgroundImage: shelf.background }}>
                    <div className="flex flex-col items-start md:flex-row justify-center md:items-center gap-9 md:gap-[65px]">
                        <div className="flex flex-row gap-6 min-[360px]:gap-12">
                            <div className="flex flex-col w-[120px] gap-6">
                                <span className={statNumber}>
                                    30
                                </span>
                                <span className={statLabel}>
                                    Saveurs disponibles 
                                </span>
                            </div>
                            <div className="flex flex-col w-[120px] gap-6">
                                <span className={statNumber}>
                                    11
                                </span>
                                <span className={statLabel}>
                                    Vertus médicinales 
                                </span>
                            </div>
                        </div>
                        <div className="flex flex-row max-md:w-full">
                            <span className="w-[304px] max-w-full min-h-[62px] font-gustavo font-medium text-[15px] leading-[170%] text-[#816A6C]">
                                Laissez-vous tenter par les saveurs des différents plugs et{' '}
                                <span className="font-bold text-[#30171B]">découvrez un monde de délices</span> pour chaque envie.
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
