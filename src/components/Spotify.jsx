import VideoSpotify from '../assets/Spotify Motion RENDER.mp4'

export function Spotify() {
    return (
        <>
            <div className="relative flex flex-row justify-center items-center h-[1200px] gap-[65px]" style={{ background: 'linear-gradient(180deg, rgba(235, 224, 216, 0) 0%, #EBE0D8 33.33%, #EBE0D8 66.67%, rgba(235, 224, 216, 0) 100%)' }}>
                <div className="flex flex-col gap-[72px]">
                    <video
                        autoPlay muted loop playsInline
                        className=" border border-[#30171B] rounded-[8px] w-[740px] h-[387px] object-cover"
                    >
                        <source src={VideoSpotify} type="video/mp4" />
                        Votre navigateur ne supporte pas la vidéo en arrière-plan.
                    </video>
                    <div className="flex flex-row w-full h-[353px] gap-12">
                        <div className="flex flex-row w-full justify-center h-[165px] gap-12">
                            <span class="w-[273px] font-tartuffo font-medium text-[64px] leading-[90%] text-[#30171B]">
                                suçotez vos titres préférés
                            </span>
                            <div className='flex flex-col w-[273px] gap-8 '>
                                <div className="flex flex-col w-full h-[57px] gap-1">
                                    <div className="flex flex-row w-[194px] items-center border border-[#5D4043] gap-1 py-2 px-4">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M17.9 10.9C14.7 9 9.35 8.8 6.3 9.75C5.8 9.9 5.3 9.6 5.15 9.15C5 8.65 5.3 8.15 5.75 8C9.3 6.95 15.15 7.15 18.85 9.35C19.3 9.6 19.45 10.2 19.2 10.65C18.95 11 18.35 11.15 17.9 10.9ZM17.8 13.7C17.55 14.05 17.1 14.2 16.75 13.95C14.05 12.3 9.95 11.8 6.8 12.8C6.4 12.9 5.95 12.7 5.85 12.3C5.75 11.9 5.95 11.45 6.35 11.35C10 10.25 14.5 10.8 17.6 12.7C17.9 12.85 18.05 13.35 17.8 13.7ZM16.6 16.45C16.4 16.75 16.05 16.85 15.75 16.65C13.4 15.2 10.45 14.9 6.95 15.7C6.6 15.8 6.3 15.55 6.2 15.25C6.1 14.9 6.35 14.6 6.65 14.5C10.45 13.65 13.75 14 16.35 15.6C16.7 15.75 16.75 16.15 16.6 16.45ZM12 2C10.6868 2 9.38642 2.25866 8.17317 2.7612C6.95991 3.26375 5.85752 4.00035 4.92893 4.92893C3.05357 6.8043 2 9.34784 2 12C2 14.6522 3.05357 17.1957 4.92893 19.0711C5.85752 19.9997 6.95991 20.7362 8.17317 21.2388C9.38642 21.7413 10.6868 22 12 22C14.6522 22 17.1957 20.9464 19.0711 19.0711C20.9464 17.1957 22 14.6522 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7362 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2Z" fill="#5D4043" />
                                        </svg>

                                        <span class="w-full font-gustavo font-medium text-[15px] leading-[125%] text-[#30171B]">
                                            Spotify Connect® 
                                        </span>
                                    </div>
                                    <span class="min-w-[224px]  font-gustavo font-medium text-[13px] leading-[170%] text-[#816A6C]">
                                        Saveurs disponibles
                                    </span>
                                </div>
                                <span class="w-full font-gustavo font-medium text-[15px] leading-[170%] text-[#816A6C]">
                                    En connectant votre tototte à votre smartphone par la technologie bluetooth, <span className="font-bold text-[#30171B]">dégustez vos morceaux</span> et vos vidéos préférées directement dans votre bouche
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}