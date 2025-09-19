

export function Hero (){
    return (
        <>
            <div className="absolute w-full h-[831px] top-[645px] bg-[linear-gradient(to_bottom,transparent_0%,white_25%,transparent_70%)] flex flex-col items-center">
                <div className="flex flex-col w-6 h-1.5 mb-6">
                    <svg width="24" height="6" viewBox="0 0 24 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="8" height="6" fill="#003DB3"/>
                        <rect x="8" width="8" height="6" fill="white"/>
                        <rect x="16" width="8" height="6" fill="#F73C53"/>
                    </svg>
                </div>
                <span class="w-[661px] min-h-[143px] font-tartuffo text-[80px] text-center leading-[80px] text-[#5D4043] mb-12">
                    pour ceux qui osent être différents
                </span>
                <button className="w-[125px] h-10 text-[15px] font-gustavo hover:border-b hover:border-[#5D4043] font-medium leading-[41.19px] px-6 text-[#5D4043] ">
                    découvrir
                </button>
                <div class="w-[1px] h-[400px] left-[calc(50%-1px/2-0.5px)] top-[269px] 
                    bg-[linear-gradient(180deg,#513E40_0%,rgba(183,140,145,0)_100%)]">
                </div>


            </div>
        </>
    )
}