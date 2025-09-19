import TransCote from '../assets/f094d77692e6d4834f9966b31b9f58bbfd76590f.png'

export function Bento() {
    return (
        <>
            <div className="relative w-full h-[1142px] px-[472px] pt-[116px] pb-[100px]  ">
                <div className="relative grid grid-flow-col grid-rows-3 gap-4">
                    
                    <div class="relative overflow-x-clip bg-red-400 row-span-2 justify-between  pb-8 rounded-[8px] flex flex-col pt-[101px] gap-[30px] ...">
                        <span className="absolute flex flex-1 overflow-clip left-[-365px] mr- z-10 ">
                            <img className=' w-[672px] h-[350px] mr-[73px] bg-cover' src={TransCote} alt="" />
                        </span>
                        <br />
                        
                        <div className="flex flex-col  items-end w-[309px] h-[99px] gap-6 ml-8 mr-[39px]">
                            <h1 class="w-full min-h-[21px] font-tartuffo text-[25.22px] leading-[41.19px] text-[#5D4043] ">
                                élégante et sophistiquée
                            </h1>
                            <span className='font-gustavo text-[#816A6C] text-[14px] '>
                                Design raffiné et ornements exclusifs pour une expérience de vapotage distinguée et élégante
                            </span>


                        </div>
                    </div>
                    <div class="bg-green-400 col-span-2  ...">03</div>
                    <div class="bg-pink-400 col-span-2 w-[580px] h-[298px] ...">02</div>
                    <div class="bg-yellow-400 col-span- ...">04</div>
                    <div class="bg-slate-400 col-span- ...">05</div>
                    <div class="bg-orange-400 col-span- ...">06</div>
                    {/* <div class="col-span-2 row-span-2 ...">03</div> */}
                                        
                </div>
            </div>
        </>
    )
}