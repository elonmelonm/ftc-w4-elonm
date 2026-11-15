import MynthosImg from '../assets/ae652835e1f0858eeafbe6bef6f2609b95e52cf1.png'

export function Mynthos() {
    return (
        <>
            <div className="relative flex flex-row justify-center items-center px-6 min-[360px]:px-12 pt-[87px] pb-[97px] md:p-0 md:h-[640px]">
                <div className="flex flex-col w-full md:w-auto md:flex-row items-center gap-[91px] md:gap-24">
                    <img className="max-md:w-[240px] max-md:h-[272px] w-[274px] h-[314px]" src={MynthosImg} alt="" />
                    <div className='flex flex-col w-full md:w-[273px] gap-12 '>
                        <div className="flex flex-col w-full h-full gap-6">
                            <span className="w-full max-w-[273px] font-tartuffo font-medium text-[clamp(44px,14.25vw,56px)] md:text-[64px] leading-[90%] text-[#30171B]">
                                le jus de mynthos
                            </span>
                            <span className="w-[188px] border border-[#5D4043] px-2 py-[7px] font-gustavo font-medium text-[15px] leading-[10px] text-[#5D4043]">
                                Collaboration exclusive
                            </span>
                        </div>
                        <span className="w-full font-gustavo font-regular text-[15px] leading-[170%] text-[#816A6C]">
                            Découvrez l'exclusivité : la fusion inédite entre <span className="font-bold text-[#30171B]">Le Jus de Mynthos</span> et <span className="font-tartuffo text-[#30171B]">the french tototte®</span>, offrant un goût rare et recherché. Une collaboration qui révèle l'essence de l'excellence et de l'originalité, à savourer sans plus attendre.
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}
