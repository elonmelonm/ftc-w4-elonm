import VideoHero from '../assets/Main_16-9.mp4'

export function HeroVideo() {
    return (
        <>
            <div className="overflow-x-visible ">
                <video
                    autoPlay muted loop playsInline
                    className="fixe top-0 left-0 w-full object-cover -z-10">
                    <source src={VideoHero} type="video/mp4" />
                    Votre navigateur ne supporte pas la vidéo en arrière-plan.
                </video>
                {/* <div className="absolute top-0 left-0 w-full h-screen bg-gradient-to-t from-white/100 to-transparent z-10"></div> */}

                <div class="absolute top-[564px] left-[667px] w-[187px] h-[68px] z-10 flex items-end justify-center">
                    <h1 class="w-full min-h-[21px] font-tartuffo text-[25.22px] leading-[41.19px] text-[#5D4043] ">the french tototte</h1>
                    <span class="min-h-[13px] font-tartuffo text-[15.19px] leading-[41.19px] text-[#5D4043] ">®</span>
                </div>
            </div>
            {/* <div class="relative z-10 flex items-center justify-center h-screen text-whit">
                    <h1 class="text-4xl font-bold">Hello avec vidéo en background 🎥</h1>
                </div> */}
        </>
    )
}