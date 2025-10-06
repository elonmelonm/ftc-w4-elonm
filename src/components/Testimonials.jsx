import Img1 from '../assets/d5c5f8e18a62f53874af7c31647893027c4319a2.png'
import Img2 from '../assets/2860b06d9f49ea4249a17f8b34cd281c6f1879a5.png'
import Img3 from '../assets/1d771cc31278fe9451d9976a5a7fb55b171936a8.png'

export function Testimonials() {
    return (
        <div className="relative flex flex-row justify-center h-[1120px] pt-[132px] pb-[220px] gap-[65px]">
            <div className="flex flex-col w-full h-full justify-center items-center gap-12">
                <div className="flex flex-col justify-center items-center w-[382px] h-[169px] gap-8">
                    <span class="w-full font-tartuffo font-regular text-[64px] leading-[90%] text-[#30171B]">
                        ils ont suçotés, ils ont adorés
                    </span>
                    <span class="w-full font-gustavo font-regular text-[14px] leading-[170%] text-[#816A6C]">
                        Nos totottes sont utilisées par les plus grands de ce monde et si vous voulez mon avis ce n’est pas un hasard
                    </span>
                </div>
                <div className="grid grid-row grid-cols-3 justify-center items-center w-[960px] h-[551px] gap-[120px] ">
                    <div className="flex flex-col w-[240px] min-h-[301px] pt-[112px] gap-6">
                        <img className="w-[176px] h-[176px] rounded-full object-cover " src={Img1} alt="" />
                        <div className="flex flex-col w-full h-12 gap-4">
                            <span class="min-w-[100px] font-tartuffo font-regular text-[20px] leading-[90%] text-[#30171B]">
                                /Baghera Jones
                            </span>
                            <div className="flex flex-row min-w-[91px] items-center gap-1">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.76044 3.95337H8.71378V6.80671H7.76044M10.3804 3.95337H11.3338V6.80671H10.3804M4.66711 1.33337L2.28711 3.71337V12.2867H5.14044V14.6667L7.52711 12.2867H9.42711L13.7138 8.00004V1.33337M12.7604 7.52671L10.8604 9.42671H8.95378L7.28711 11.0934V9.42671H5.14044V2.28671H12.7604V7.52671Z" fill="#30171B"/>
                                </svg>

                                <span class="w-full font-gustavo font-medium text-[14px] leading-[150%] text-[#30171B]">
                                    Streamer
                                </span>

                            </div>

                            <span class="w-full font-gustavo font-regular text-[14px] leading-[170%] text-[#816A6C]">
                                J’ai arrêté de vape depuis que j’ai découvert <span className="font-tartuffo text-[#30171B]">the french tototte®</span>
                            </span>
                        </div>
                    </div>
                    <div className="flex flex-col w-[240px] min-h-[301px] pt-[229px] gap-6">
                        <img className="w-[176px] h-[176px] rounded-full object-cover " src={Img2} alt="" />
                        <div className="flex flex-col w-full h-12 gap-4">
                            <span class="min-w-[100px] font-tartuffo font-regular text-[20px] leading-[90%] text-[#30171B]">
                                /Joueur_du_Grenier
                            </span>
                            <div className="flex flex-row min-w-[91px] items-center gap-1">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.66732 10L10.1273 8.00004L6.66732 6.00004V10ZM14.374 4.78004C14.4607 5.09337 14.5207 5.51337 14.5607 6.04671C14.6073 6.58004 14.6273 7.04004 14.6273 7.44004L14.6673 8.00004C14.6673 9.46004 14.5607 10.5334 14.374 11.22C14.2073 11.82 13.8207 12.2067 13.2207 12.3734C12.9073 12.46 12.334 12.52 11.454 12.56C10.5873 12.6067 9.79398 12.6267 9.06065 12.6267L8.00065 12.6667C5.20732 12.6667 3.46732 12.56 2.78065 12.3734C2.18065 12.2067 1.79398 11.82 1.62732 11.22C1.54065 10.9067 1.48065 10.4867 1.44065 9.95337C1.39398 9.42004 1.37398 8.96004 1.37398 8.56004L1.33398 8.00004C1.33398 6.54004 1.44065 5.46671 1.62732 4.78004C1.79398 4.18004 2.18065 3.79337 2.78065 3.62671C3.09398 3.54004 3.66732 3.48004 4.54732 3.44004C5.41398 3.39337 6.20732 3.37337 6.94065 3.37337L8.00065 3.33337C10.794 3.33337 12.534 3.44004 13.2207 3.62671C13.8207 3.79337 14.2073 4.18004 14.374 4.78004Z" fill="#30171B"/>
                                </svg>


                                <span class="w-full font-gustavo font-medium text-[14px] leading-[150%] text-[#30171B]">
                                    YouTuber
                                </span>

                            </div>

                            <span class="w-full font-gustavo font-regular text-[14px] leading-[170%] text-[#816A6C]">
                                J’ai commandé un pack pour toute la famille et même mon fils Légolas San Goku adore sa <span className="font-tartuffo text-[#30171B]">the french tototte®</span>
                            </span>
                        </div>
                    </div>
                    <div className="flex flex-col w-[240px] min-h-[301px] gap-6">
                        <img className="w-[176px] h-[176px] rounded-full object-cover " src={Img3} alt="" />
                        <div className="flex flex-col w-full h-12 gap-4">
                            <span class="min-w-[100px] font-tartuffo font-regular text-[20px] leading-[90%] text-[#30171B]">
                                /Etoiles
                            </span>
                            <div className="flex flex-row min-w-[91px] items-center gap-1">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.76044 3.95337H8.71378V6.80671H7.76044M10.3804 3.95337H11.3338V6.80671H10.3804M4.66711 1.33337L2.28711 3.71337V12.2867H5.14044V14.6667L7.52711 12.2867H9.42711L13.7138 8.00004V1.33337M12.7604 7.52671L10.8604 9.42671H8.95378L7.28711 11.0934V9.42671H5.14044V2.28671H12.7604V7.52671Z" fill="#30171B"/>
                                </svg>

                                <span class="w-full font-gustavo font-medium text-[14px] leading-[150%] text-[#30171B]">
                                    Streamer
                                </span>

                            </div>

                            <span class="w-full font-gustavo font-regular text-[14px] leading-[170%] text-[#816A6C]">
                                Grâce à <span className="font-tartuffo text-[#30171B]">the french tototte®</span> je régule mon taux d’insuline parfaitement et je n’achète plus de saumon ni de nutella !
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
