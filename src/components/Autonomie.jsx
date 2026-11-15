import TrasnFaceImg from '../assets/f40aebdb8401c6f35c416722e873872be108909f.png'

export function Autonomie() {
    return (
        <div className="relative flex flex-row justify-center h-[1097px] md:h-auto md:min-h-[927px] gap-[65px] max-md:overflow-x-clip">
            <div className="absolute top-0 left-6 right-6 min-[360px]:left-12 min-[360px]:right-12 md:right-auto md:left-[calc(50%-327px)] flex flex-row md:w-[291px] md:h-[353px] gap-12">
                <div className="flex flex-col w-full md:h-[165px] gap-12">
                    <span className="w-[230px] font-tartuffo font-medium text-[clamp(44px,14.25vw,56px)] md:text-[64px] leading-[90%] text-[#30171B]">
                        suçotez sans soucis
                    </span>
                    <span className="w-full font-gustavo font-medium text-[15px] leading-[170%] text-[#816A6C]">
                        La tototte offre une <span className="font-bold text-[#30171B]">autonomie impressionnante</span> de 50 heures de suçotage grâce à sa batterie au lithium, assurant ainsi <span className="font-bold text-[#30171B]">des heures de plaisir ininterrompu </span>pour encore plus de confort et de tranquillité.
                    </span>
                </div>
            </div>

            {/* image */}
            <div className="absolute left-1/2 -translate-x-1/2 top-[249px] md:top-[153px] flex justify-center items-center w-[960px] h-[735px] group cursor-pointer">
                <img className="max-w-none w-[800px] h-[240px] rotate-[-45deg] group-hover:rotate-[-15deg] transition-all duration-1000 " src={TrasnFaceImg} alt="" />
            </div>

            <div className="absolute top-[900px] md:top-[730px] right-6 md:right-auto md:left-[calc(50%+36px)] flex flex-row w-[264px] md:w-[240px] lg:w-[296px] min-h-[197px] gap-12">
                <div className="flex flex-col w-full min-h-[165px] gap-12 max-md:items-end max-md:text-right">
                    <div className="flex flex-col w-[161px] gap-6 max-md:items-end">
                        <span className="w-[114px] h-[38px] font-gustavo font-bold text-[56px] leading-[38px] text-[#30171B]">
                            50h
                        </span>
                        <span className="w-full font-gustavo font-medium text-[13px] leading-[125%] text-[#816A6C]">
                            de suçotage Bluetooth sans interruption 
                        </span>
                    </div>
                    <span className="w-full font-gustavo font-medium text-[15px] leading-[170%] text-[#816A6C]">
                        Grâce aux <span className="font-bold text-[#30171B]">technologies sans contact</span> profitez d’une recharge rapide sur son socle à induction
                    </span>
                </div>
            </div>
            
        </div>
    )
}
