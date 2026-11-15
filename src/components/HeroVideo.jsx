import VideoHero from '../assets/Main_16-9.mp4'

export function HeroVideo() {
    return (
        <>
            <div className="overflow-x-visible ">
                <video
                    autoPlay muted loop playsInline
                    className="fixe top-0 left-0 w-full max-md:h-[560px] max-md:-mt-[44px] md:h-auto object-cover [mask-image:linear-gradient(to_bottom,black_60%,transparent_100%)] -z-10">
                    <source src={VideoHero} type="video/mp4" />
                    Votre navigateur ne supporte pas la vidéo en arrière-plan.
                </video>
                {/* <div className="absolute top-0 left-0 w-full h-screen bg-gradient-to-t from-white/100 to-transparent z-10"></div> */}

                <div className="absolute top-[445px] md:top-[calc(100vw*789/1920-51px)] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[187px] h-[68px] z-10 flex items-end justify-center">
                    <h1 className="w-full min-h-[21px] font-tartuffo text-[25.22px] leading-[41.19px] text-[#5D4043] ">the french tototte</h1>
                    <span className="min-h-[13px] font-tartuffo text-[15.19px] leading-[41.19px] text-[#5D4043] ">®</span>
                </div>
            </div>
            {/* <div className="relative z-10 flex items-center justify-center h-screen text-whit">
                    <h1 className="text-4xl font-bold">Hello avec vidéo en background 🎥</h1>
                </div> */}
        </>
    )
}