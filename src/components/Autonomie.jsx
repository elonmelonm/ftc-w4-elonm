import TrasnFaceImg from '../assets/f40aebdb8401c6f35c416722e873872be108909f.png'

export function Autonomie() {
    return (
        <div className="relative flex flex-row justify-center min-h-[927px] gap-[65px]">
            <div className="absolute top-0 left-1/2 -translate-x-3/3 flex flex-row w-[291px] h-[353px] gap-12">
                <div className="flex flex-col w-[230px] h-[165px] gap-12">
                    <span class="w-full font-tartuffo font-medium text-[64px] leading-[90%] text-[#30171B]">
                        suçotez sans soucis
                    </span>
                    <span class="w-full font-gustavo font-medium text-[15px] leading-[170%] text-[#816A6C]">
                        La tototte offre une <span className="font-bold text-[#30171B]">autonomie impressionnante</span> de 50 heures de suçotage grâce à sa batterie au lithium, assurant ainsi <span className="font-bold text-[#30171B]">des heures de plaisir ininterrompu </span>pour encore plus de confort et de tranquillité.
                    </span>
                </div>
            </div>

            {/* image */}
            <img className="absolute w-[800px] h-[240px] rotate-[-45deg] left-1/2 -translate-x-1/2 top-[45%]" src={TrasnFaceImg} alt="" />

            <div className="absolute bottom-0 left-1/2 translate-x-1/3 flex flex-row w-[291px] min-h-[197px] gap-12">
                <div className="flex flex-col w-[296px] min-h-[165px] gap-12">
                    <div className="flex flex-col w-[161px] gap-6">
                        <span class="w-[114px] min-h-[38px] font-gustavo font-bold text-[56px] leading-[90%] text-[#30171B]">
                            50h
                        </span>
                        <span class="w-full font-gustavo font-medium text-[13px] leading-[170%] text-[#816A6C]">
                            de suçotage Bluetooth sans interruption 
                        </span>
                    </div>
                    <span class="w-full font-gustavo font-medium text-[15px] leading-[170%] text-[#816A6C]">
                        Grâce aux <span className="font-bold text-[#30171B]">technologies sans contact</span> profitez d’une recharge rapide sur son socle à induction
                    </span>
                </div>
            </div>
            
        </div>
    )
}