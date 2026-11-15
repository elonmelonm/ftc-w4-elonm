import TrasnFaceImg from '../assets/f40aebdb8401c6f35c416722e873872be108909f.png'

export function Autonomie() {
    return (
        <div className="relative flex flex-col md:flex-row justify-center max-md:px-6 max-md:pb-8 md:min-h-[927px] gap-10 md:gap-[65px]">
            <div className="md:absolute md:top-0 md:left-1/2 md:-translate-x-3/3 flex flex-row w-full md:w-[291px] md:h-[353px] gap-12">
                <div className="flex flex-col w-full md:w-[230px] md:h-[165px] gap-8 md:gap-12">
                    <span className="w-full font-tartuffo font-medium text-[48px] md:text-[64px] leading-[90%] text-[#30171B]">
                        suçotez sans soucis
                    </span>
                    <span className="w-full font-gustavo font-medium text-[15px] leading-[170%] text-[#816A6C]">
                        La tototte offre une <span className="font-bold text-[#30171B]">autonomie impressionnante</span> de 50 heures de suçotage grâce à sa batterie au lithium, assurant ainsi <span className="font-bold text-[#30171B]">des heures de plaisir ininterrompu </span>pour encore plus de confort et de tranquillité.
                    </span>
                </div>
            </div>

            {/* image */}
            <div className="relative md:absolute md:left-1/2 md:-translate-x-1/2 md:top-[45%] flex justify-center max-md:items-center w-full h-[92vw] max-h-[450px] md:max-h-none md:w-[960px] md:h-[735px] group cursor-pointer">
                <img className="max-md:shrink-0 max-md:max-w-[480px] max-md:max-h-[144px] w-[100vw] h-[30vw] md:w-[800px] md:h-[240px] rotate-[-45deg] group-hover:rotate-[-15deg] transition-all duration-1000 " src={TrasnFaceImg} alt="" />
            </div>

            <div className="md:absolute md:bottom-0 md:left-1/2 md:translate-x-1/3 flex flex-row max-md:self-end w-[230px] md:w-[240px] lg:w-[291px] min-h-[197px] gap-12">
                <div className="flex flex-col w-full lg:w-[296px] min-h-[165px] gap-12">
                    <div className="flex flex-col w-[161px] gap-6">
                        <span className="w-[114px] min-h-[38px] font-gustavo font-bold text-[56px] leading-[90%] text-[#30171B]">
                            50h
                        </span>
                        <span className="w-full font-gustavo font-medium text-[13px] leading-[170%] text-[#816A6C]">
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