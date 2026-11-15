import { useRef, useState } from 'react';
import Img1 from '../assets/Logo-Picto copy.png'
import Img2 from '../assets/c97962c69888c5fad039860a45766f75146bef4a.png'
import Img3 from '../assets/dff3bb2bf79bde1cf27125f7b2b365085ea3b0fe.png'
import Img4 from '../assets/ab2713d26b9d52e4874d6d555d665cc15c676759.png'

const SLIDES = [Img2, Img3, Img4]

const FINITIONS = [
    { label: 'Finition rose', background: 'linear-gradient(132.51deg, #FFE7DB 0%, #EECDBF 96.01%)' },
    { label: 'Finition bleue', background: 'linear-gradient(132.51deg, #DBF2FF 0%, #BFC7EE 96.01%)' },
    { label: 'Finition argent', background: 'linear-gradient(132.51deg, #F6F6F6 0%, #D8D8D8 96.01%)' },
    { label: 'Finition anthracite', background: 'linear-gradient(132.51deg, #99969F 0%, #484848 96.01%)' },
]

const ORNEMENTS = [
    { label: 'Ornement bleu', background: '#017AD7' },
    { label: 'Ornement turquoise', background: '#35E1C2' },
    { label: 'Ornement rose', background: '#FF5EAB' },
    { label: 'Ornement obsidienne', background: '#2C3C3A' },
]

const PACKS = [
    { name: 'Pack Starter', detail: '3 saveurs de découverte', price: 'Offert' },
    { name: 'Pack Suçoteur', detail: '6 saveurs', price: '29€' },
    { name: 'Pack Suçoteur Pro', detail: '12 saveurs + 1 jus de Mynthos', oldPrice: '60€', price: '49€' },
]

// Titres et sous-titres des options : l'interligne reprend la hauteur des capitales,
// comme sur la maquette (texte rogné au plus près des lettres).
const optionTitle = "w-full font-tartuffo font-regular text-[32px] leading-[24px] lg:text-[40px] lg:leading-[30px] text-[#30171B]"
const optionHint = "w-full font-gustavo font-regular text-[#816A6C]"

function Swatches({ items, selected, onSelect }) {
    return (
        <div className="flex flex-row w-[216px] h-12 gap-2">
            {items.map((item, index) => (
                <button
                    key={item.label}
                    type="button"
                    aria-label={item.label}
                    aria-pressed={selected === index}
                    onClick={() => onSelect(index)}
                    className={`w-12 h-12 flex justify-center items-center border rounded-full cursor-pointer transition-colors duration-300 ${selected === index ? 'border-[#30171B]' : 'border-transparent hover:border-[#30171B]/30'}`}
                >
                    <span className="w-10 h-10 rounded-full" style={{ background: item.background }}></span>
                </button>
            ))}
        </div>
    )
}

export function BuyFooter() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [finition, setFinition] = useState(0);
    const [ornement, setOrnement] = useState(0);
    const [pack, setPack] = useState(0);
    const touchStartX = useRef(null);

    const lastIndex = SLIDES.length - 1;
    const handlePrevClick = () => setActiveIndex(prev => Math.max(prev - 1, 0));
    const handleNextClick = () => setActiveIndex(prev => Math.min(prev + 1, lastIndex));

    // balayage au doigt sur mobile (les flèches n'y sont pas affichées)
    const handleTouchStart = (event) => { touchStartX.current = event.touches[0].clientX; };
    const handleTouchEnd = (event) => {
        if (touchStartX.current === null) return;
        const delta = event.changedTouches[0].clientX - touchStartX.current;
        touchStartX.current = null;
        if (delta < -40) handleNextClick();
        if (delta > 40) handlePrevClick();
    };

    const arrow = "max-lg:hidden absolute top-[250px] z-10 flex justify-center items-center w-10 h-10 rounded-full bg-white opacity-[50%] cursor-pointer hover:opacity-100"

    return (
        <>
            <div className="relative w-full lg:h-[2528px]">
                {/* fond bleu de la zone d'achat (calque "Blue" de la maquette desktop) */}
                <div aria-hidden="true" className="hidden lg:block pointer-events-none absolute -z-10 left-0 top-[-795px] w-full h-[2341px] bg-[linear-gradient(to_bottom,rgba(239,241,253,0)_0px,#EFF1FD_795px)]"></div>

                <div className="flex flex-col lg:flex-row h-full px-6 min-[360px]:px-8 md:px-10 lg:px-[clamp(32px,calc(50vw-480px),240px)] max-lg:pt-[181px] max-lg:pb-[84px] lg:gap-[88px]">

                    {/* slider */}
                    <div className="max-lg:order-2 max-lg:mt-[14px] max-lg:-mx-6 min-[360px]:max-lg:-mx-8 md:max-lg:-mx-10 lg:sticky lg:top-0 z-10 lg:h-[770px] flex lg:flex-1 lg:items-end">
                        <div
                            className="relative w-full h-[320px] lg:h-[540px] lg:rounded-[8px] bg-white"
                            onTouchStart={handleTouchStart}
                            onTouchEnd={handleTouchEnd}
                        >
                            <div className="relative w-full h-full lg:rounded-[8px] overflow-hidden">
                                {/* track */}
                                <div
                                    className="flex h-full transition-transform duration-500 ease-out"
                                    style={{ transform: `translateX(-${activeIndex * 100}%)` }}
                                    >
                                    {SLIDES.map((slide, index) => (
                                        <img key={index} src={slide} alt={`Vue ${index + 1} de la tototte`} className="shrink-0 w-full h-full object-cover" />
                                    ))}
                                </div>
                            </div>
                            {/* left arrow */}
                            {activeIndex > 0 && (
                                <button type="button" aria-label="Image précédente" onClick={handlePrevClick} className={`${arrow} left-4`}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M8.70707 12L14.3535 6.35353L13.6464 5.64642L7.29286 12L13.6464 18.3535L14.3535 17.6464L8.70707 12Z" fill="#30171B"/>
                                    </svg>
                                </button>
                            )}
                            {/* right arrow */}
                            {activeIndex < lastIndex && (
                                <button type="button" aria-label="Image suivante" onClick={handleNextClick} className={`${arrow} right-4`}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M15.2929 12L9.64648 6.35359L10.3536 5.64648L16.7071 12L10.3536 18.3536L9.64648 17.6465L15.2929 12Z" fill="#30171B"/>
                                    </svg>
                                </button>
                            )}
                            <div className="absolute left-1/2 -translate-x-1/2 bottom-2.5 lg:bottom-4 flex flex-row gap-[3px] lg:gap-1">
                                {SLIDES.map((_, index) => (
                                    <button
                                        key={index}
                                        type="button"
                                        aria-label={`Afficher l'image ${index + 1}`}
                                        className={`w-[5px] h-[5px] lg:w-2 lg:h-2 rounded-full bg-[#30171B] cursor-pointer ${activeIndex === index ? '' : 'opacity-[50%]'}`}
                                        onClick={() => setActiveIndex(index)}
                                    ></button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* side element (ses blocs se réordonnent autour du slider sur mobile) */}
                    <div className="max-lg:contents flex flex-col lg:mt-[230px] lg:w-[392px] lg:h-[1136px] justify-between ">
                        <div className="max-lg:order-1 flex flex-col w-full lg:h-[175px] gap-8 lg:gap-4">
                            <span className="w-full font-tartuffo font-regular text-[clamp(44px,14.25vw,56px)] lg:text-[64px] leading-[90%] text-[#30171B]">
                                personnalisez votre tototte
                            </span>
                            <span className="w-full font-gustavo font-regular text-[15px] leading-[170%] text-[#816A6C]">
                                Vous allez créer la tototte idéale pour vous. <br />À chacun son expérience, à chacun sa tototte.
                            </span>
                        </div>
                        <div className="max-lg:order-3 max-lg:mt-[53px] flex flex-col w-full lg:h-[136px] gap-6">
                            <div className="flex flex-col gap-4 lg:gap-6">
                                <span className={optionTitle}>
                                    finition
                                </span>
                                <span className={`${optionHint} text-[13px] leading-[9px] lg:text-[15px] lg:leading-[10px]`}>
                                    Choisissez votre favorite
                                </span>
                            </div>
                            <Swatches items={FINITIONS} selected={finition} onSelect={setFinition} />
                        </div>
                        <div className="max-lg:order-3 max-lg:mt-16 flex flex-col w-full lg:h-[136px] gap-6">
                            <div className="flex flex-col gap-4 lg:gap-6">
                                <span className={optionTitle}>
                                    ornement
                                </span>
                                <span className={`${optionHint} text-[13px] leading-[9px] lg:text-[15px] lg:leading-[10px]`}>
                                    Choisissez votre pierre précieuse
                                </span>
                            </div>
                            <Swatches items={ORNEMENTS} selected={ornement} onSelect={setOrnement} />
                        </div>
                        <div className="max-lg:order-3 max-lg:mt-16 flex flex-col w-full lg:h-[329px] gap-8 lg:gap-6 ">
                            <div className="flex flex-col gap-4 lg:gap-6">
                                <span className={optionTitle}>
                                    pack saveur
                                </span>
                                <span className={`${optionHint} text-[15px] leading-[10px]`}>
                                    Choisissez votre pack de saveurs
                                </span>
                            </div>
                            <div className="flex flex-col gap-0.5 max-lg:-mx-2">
                                {PACKS.map((item, index) => (
                                    <button
                                        key={item.name}
                                        type="button"
                                        aria-pressed={pack === index}
                                        onClick={() => setPack(index)}
                                        className={`flex flex-row items-center w-full h-[79px] px-4 lg:px-6 gap-2 text-left border cursor-pointer transition-colors duration-300 ${pack === index ? 'border-[#30171B] text-[#30171B]' : 'border-transparent text-[#5D4043] hover:border-[#30171B]/30'}`}
                                    >
                                        <span className="flex flex-1 flex-col min-w-0 gap-2 whitespace-nowrap">
                                            <span className="font-gustavo font-bold text-[20px] max-[359px]:text-[17px] leading-[14px]">
                                                {item.name}
                                            </span>
                                            <span className="font-gustavo font-regular text-[13px] leading-[9px]">
                                                {item.detail}
                                            </span>
                                        </span>
                                        <span className="flex flex-row items-baseline gap-2 font-gustavo font-regular whitespace-nowrap">
                                            {item.oldPrice && (
                                                <span className="text-[11px] line-through opacity-75">{item.oldPrice}</span>
                                            )}
                                            <span className="text-[15px]">{item.price}</span>
                                        </span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>


                {/* Footer */}
                <div className="relative lg:absolute left-0 bottom-0 w-full lg:h-[982px] bg-[#30171B] max-lg:overflow-clip ">
                    <div className="relative w-full h-full max-lg:flex max-lg:flex-col max-lg:px-4 max-lg:pt-[75px] max-lg:pb-7 md:max-lg:px-10">
                        <div className="relative max-lg:z-10 lg:absolute lg:top-[75px] lg:right-[clamp(32px,calc(50vw-480px),240px)] text-white flex flex-col w-full md:w-[392px] md:max-lg:ml-auto lg:h-[612px] gap-12">
                            <div className="flex flex-col w-full gap-6">
                                <span className="w-full font-tartuffo font-regular text-[32px] leading-[24px] lg:text-[40px] lg:leading-[30px] ">
                                    votre panier est prêt
                                </span>
                                <span className="w-full font-gustavo font-regular text-[15px] leading-[10px] text-[#816A6C]">
                                    Récapitulatif de votre commande
                                </span>
                            </div>

                            <div className="flex flex-col w-full min-h-[150px] font-gustavo font-regular text-[15px] leading-[125%] gap-[15px]">
                                <div className="flex flex-row w-full h-full">
                                    <span className="w-full  ">
                                        1 x thefrenchtototte <br />
                                        <span className="pl-2.5">+ Finition argent</span> <br />
                                        <span className="pl-2.5">+ Ornement obsidiennes</span> <br />
                                    </span>
                                    <span className="flex justify-end min-w-[60px]  ">
                                        99,00 €
                                    </span>
                                </div>
                                <div className="flex flex-row w-full h-full justify-between gap-6 ">
                                    <span className="w-full  ">
                                        1 x Pack Suçoteur Pro
                                    </span>
                                    <span className="flex justify-end min-w-[60px]  ">
                                        49,00 €
                                    </span>
                                </div>
                                <div className="flex flex-row w-full h-full justify-between gap-6 ">
                                    <span className="w-full  ">
                                        Livraison
                                    </span>
                                    <span className="flex justify-end min-w-[60px]  ">
                                        Offerte
                                    </span>
                                </div>
                                <div className="flex flex-row w-full h-full justify-between gap-6 ">
                                    <span className="w-full  ">
                                        Prix
                                    </span>
                                    <span className="flex justify-end min-w-[70px]">
                                        148,00 €
                                    </span>
                                </div>
                            </div>
                            <div className="flex flex-col w-full min-h-6 font-gustavo font-regular text-[15px] leading-[125%] gap-6">
                                <div className="flex flex-row w-full h-full justify-between items-center max-lg:gap-3 ">
                                    <span className="lg:min-w-[137px]  ">
                                        Retrait en magasin
                                    </span>
                                    <span className="flex max-lg:shrink-0 lg:flex-1 justify-end items-center min-w-[70px] gap-1 max-lg:[&>svg]:shrink-0 ">
                                        <span className="flex justify-end max-lg:whitespace-nowrap lg:min-w-[137px]  ">
                                            Tototte Store Lille
                                        </span>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M12 15.2929L17.6464 9.64648L18.3535 10.3536L12 16.7071L5.64641 10.3536L6.35352 9.64648L12 15.2929Z" fill="white" />
                                        </svg>

                                    </span>
                                </div>
                                <div className="flex flex-row w-full h-full justify-between items-center max-lg:gap-3 ">
                                    <span className="lg:min-w-[137px]  ">
                                        Commandez avant 17h
                                    </span>
                                    <span className="flex max-lg:shrink-0 lg:flex-1 justify-end items-center min-w-[70px] gap-1 max-lg:[&>svg]:shrink-0 ">
                                        <span className="flex justify-end max-lg:whitespace-nowrap lg:min-w-[137px]  ">
                                            Livrer à 59000
                                        </span>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M4.5 5.5H19.5V18.5H4.5V5.5ZM9.5 17.5H11.5V13.5H9.5V17.5ZM12.5 17.5H14.5V13.5H12.5V17.5ZM15.5 17.5V12.5H8.5V17.5H5.5V10.814C6.47082 11.1853 7.5679 11.1085 8.48649 10.5836L8.5 10.5759L8.51351 10.5836C9.58953 11.1985 10.9105 11.1985 11.9865 10.5836L12 10.5759L12.0135 10.5836C13.0895 11.1985 14.4105 11.1985 15.4865 10.5836L15.5 10.5759L15.5135 10.5836C16.4321 11.1085 17.5292 11.1853 18.5 10.814V17.5H15.5ZM18.5 6.5V9.70984L18.4903 9.71535C17.7218 10.1545 16.7782 10.1545 16.0097 9.71535L15.5 9.42412L14.9903 9.71535C14.2218 10.1545 13.2782 10.1545 12.5097 9.71535L12 9.42412L11.4903 9.71535C10.7218 10.1545 9.77823 10.1545 9.00965 9.71535L8.5 9.42412L7.99035 9.71535C7.22177 10.1545 6.27823 10.1545 5.50965 9.71535L5.5 9.70984V6.5H18.5Z" fill="white" />
                                        </svg>
                                    </span>
                                </div>
                                <div className="flex flex-col w-full max-lg:mt-6 lg:h-[182px] justify-between items-center gap-4 ">
                                    <button className="flex justify-center items-center py-4 px-6 w-full h-16 lg:h-10 bg-[#5D4043] cursor-pointer">
                                        Ajouter au Panier
                                    </button>
                                    <span className="justify-end w-full text-[9px] leading-[130%] text-[#816A6C]  ">
                                        The French Tototte est couverte par une garantie limitée contre les défauts de fabrication pour
                                        une période de 2 mois à compter de la date d'achat. Cette garantie ne couvre pas
                                        les dommages causés par une mauvaise utilisation, une négligence ou une modification
                                        non autorisée du produit. Dans les limites permises par la loi, <span className="font-tartuffo">thefrenchtototte</span> décline
                                        toute responsabilité pour les dommages directs, indirects, spéciaux, accidentels ou consécutifs
                                        découlant de l'utilisation ou de l'incapacité d'utiliser <span className="font-tartuffo">thefrenchtototte</span>, même si <span className="font-tartuffo">thefrenchtototte</span>
                                        a été informée de la possibilité de tels dommages. En utilisant <span className="font-tartuffo">thefrenchtototte</span>, l'utilisateur consent
                                        à la collecte et à l'utilisation de ses données conformément à la politique de confidentialité de <span className="font-tartuffo">thefrenchtototte</span>.
                                        Les informations collectées peuvent inclure, mais ne sont pas limitées à, des données d'utilisation, des informations de
                                        localisation et des données personnelles, telles que définies dans ladite politique de confidentialité.
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col max-lg:relative max-lg:z-10 max-lg:mt-[408px] max-lg:gap-8 lg:flex-row lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:bottom-14 lg:w-max lg:max-[1439px]:w-[calc(100%-64px)] lg:h-[73px] gap-6">
                            <div className="flex flex-col gap-6 lg:gap-2">
                                <div className="flex flex-row gap-6 lg:gap-2 5 max-lg:[&_svg]:w-8 max-lg:[&_svg]:h-8">
                                    <button className='cursor-pointer'>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7.8 2H16.2C19.4 2 22 4.6 22 7.8V16.2C22 17.7383 21.3889 19.2135 20.3012 20.3012C19.2135 21.3889 17.7383 22 16.2 22H7.8C4.6 22 2 19.4 2 16.2V7.8C2 6.26174 2.61107 4.78649 3.69878 3.69878C4.78649 2.61107 6.26174 2 7.8 2ZM7.6 4C6.64522 4 5.72955 4.37928 5.05442 5.05442C4.37928 5.72955 4 6.64522 4 7.6V16.4C4 18.39 5.61 20 7.6 20H16.4C17.3548 20 18.2705 19.6207 18.9456 18.9456C19.6207 18.2705 20 17.3548 20 16.4V7.6C20 5.61 18.39 4 16.4 4H7.6ZM17.25 5.5C17.5815 5.5 17.8995 5.6317 18.1339 5.86612C18.3683 6.10054 18.5 6.41848 18.5 6.75C18.5 7.08152 18.3683 7.39946 18.1339 7.63388C17.8995 7.8683 17.5815 8 17.25 8C16.9185 8 16.6005 7.8683 16.3661 7.63388C16.1317 7.39946 16 7.08152 16 6.75C16 6.41848 16.1317 6.10054 16.3661 5.86612C16.6005 5.6317 16.9185 5.5 17.25 5.5ZM12 7C13.3261 7 14.5979 7.52678 15.5355 8.46447C16.4732 9.40215 17 10.6739 17 12C17 13.3261 16.4732 14.5979 15.5355 15.5355C14.5979 16.4732 13.3261 17 12 17C10.6739 17 9.40215 16.4732 8.46447 15.5355C7.52678 14.5979 7 13.3261 7 12C7 10.6739 7.52678 9.40215 8.46447 8.46447C9.40215 7.52678 10.6739 7 12 7ZM12 9C11.2044 9 10.4413 9.31607 9.87868 9.87868C9.31607 10.4413 9 11.2044 9 12C9 12.7956 9.31607 13.5587 9.87868 14.1213C10.4413 14.6839 11.2044 15 12 15C12.7956 15 13.5587 14.6839 14.1213 14.1213C14.6839 13.5587 15 12.7956 15 12C15 11.2044 14.6839 10.4413 14.1213 9.87868C13.5587 9.31607 12.7956 9 12 9Z" fill="#816A6C" />
                                        </svg>
                                    </button>
                                    <button className='cursor-pointer'>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10 15L15.19 12L10 9V15ZM21.56 7.17C21.69 7.64 21.78 8.27 21.84 9.07C21.91 9.87 21.94 10.56 21.94 11.16L22 12C22 14.19 21.84 15.8 21.56 16.83C21.31 17.73 20.73 18.31 19.83 18.56C19.36 18.69 18.5 18.78 17.18 18.84C15.88 18.91 14.69 18.94 13.59 18.94L12 19C7.81 19 5.2 18.84 4.17 18.56C3.27 18.31 2.69 17.73 2.44 16.83C2.31 16.36 2.22 15.73 2.16 14.93C2.09 14.13 2.06 13.44 2.06 12.84L2 12C2 9.81 2.16 8.2 2.44 7.17C2.69 6.27 3.27 5.69 4.17 5.44C4.64 5.31 5.5 5.22 6.82 5.16C8.12 5.09 9.31 5.06 10.41 5.06L12 5C16.19 5 18.8 5.16 19.83 5.44C20.73 5.69 21.31 6.27 21.56 7.17Z" fill="#816A6C" />
                                        </svg>
                                    </button>
                                    <button className='cursor-pointer'>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M16.7049 11.108C16.5429 8.121 14.9109 6.411 12.1709 6.394C10.5189 6.384 9.13785 7.084 8.29185 8.367L9.79985 9.4C10.4339 8.439 11.4349 8.24 12.1599 8.247C13.0629 8.253 13.7429 8.515 14.1839 9.027C14.5039 9.399 14.7189 9.914 14.8259 10.563C14.0259 10.427 13.1599 10.385 12.2359 10.438C9.62985 10.588 7.95585 12.108 8.06785 14.219C8.12485 15.29 8.65785 16.212 9.56985 16.814C10.3399 17.323 11.3339 17.571 12.3649 17.515C13.7279 17.44 14.7969 16.921 15.5429 15.97C16.1089 15.248 16.4669 14.312 16.6249 13.134C17.2749 13.526 17.7549 14.041 18.0219 14.661C18.4739 15.715 18.4999 17.447 17.0869 18.859C15.8489 20.095 14.3609 20.631 12.1119 20.647C9.61685 20.629 7.72985 19.828 6.50385 18.269C5.35385 16.809 4.76085 14.699 4.73885 12C4.76085 9.3 5.35485 7.191 6.50385 5.73C7.72985 4.171 9.61685 3.371 12.1119 3.353C14.6249 3.372 16.5439 4.175 17.8179 5.743C18.4429 6.511 18.9129 7.477 19.2239 8.603L20.9899 8.133C20.6129 6.746 20.0209 5.551 19.2159 4.56C17.5829 2.55 15.1829 1.521 12.1059 1.5C9.03485 1.521 6.67385 2.555 5.08685 4.571C3.67585 6.366 2.94685 8.877 2.92285 12.007C2.94685 15.137 3.67585 17.634 5.08685 19.429C6.67385 21.445 9.04685 22.479 12.1169 22.5C14.8479 22.481 16.7719 21.766 18.3569 20.183C20.4319 18.11 20.3689 15.513 19.6859 13.919C19.1609 12.694 18.1159 11.713 16.7059 11.109M12.2679 15.666C11.1259 15.73 9.93985 15.218 9.88085 14.12C9.83785 13.306 10.4609 12.398 12.3379 12.29C13.1862 12.233 14.0383 12.2916 14.8709 12.464C14.6549 15.166 13.3859 15.604 12.2679 15.666Z" fill="#816A6C" />
                                        </svg>
                                    </button>
                                    <button className='cursor-pointer'>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M19 3C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19ZM18.5 18.5V13.2C18.5 12.3354 18.1565 11.5062 17.5452 10.8948C16.9338 10.2835 16.1046 9.94 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17C14.6813 12.17 15.0374 12.3175 15.2999 12.5801C15.5625 12.8426 15.71 13.1987 15.71 13.57V18.5H18.5ZM6.88 8.56C7.32556 8.56 7.75288 8.383 8.06794 8.06794C8.383 7.75288 8.56 7.32556 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19C6.43178 5.19 6.00193 5.36805 5.68499 5.68499C5.36805 6.00193 5.19 6.43178 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56ZM8.27 18.5V10.13H5.5V18.5H8.27Z" fill="#816A6C" />
                                        </svg>
                                    </button>

                                    <button className='cursor-pointer'>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M18.2048 2.25H21.5128L14.2858 10.51L22.7878 21.75H16.1298L10.9158 14.933L4.94984 21.75H1.63984L9.36984 12.915L1.21484 2.25H8.03984L12.7528 8.481L18.2048 2.25ZM17.0438 19.77H18.8768L7.04484 4.126H5.07784L17.0438 19.77Z" fill="#816A6C" />
                                        </svg>
                                    </button>
                                </div>
                                <div className="flex gap-[5px] text-[#816A6C]">
                                    <span className="lg:w-[376px] lg:h-[41px] font-tartuffo text-[clamp(34px,10.9vw,43px)] lg:text-[55px] text-center leading-[90%] ">
                                        the french tototte
                                    </span>
                                    <span className="flex mt-[15px] ">
                                        ®
                                    </span>
                                </div>
                            </div>
                            <div className="flex flex-col justify-end font-gustavo leading-[100%] max-[1439px]:leading-[140%] max-lg:leading-[125%] text-[13px] text-[#816A6C] gap-2 max-lg:gap-4">
                                <span className="w-full">Copyright © 2024 TheFrenchTototte. Tous droits réservés  <span className='text-[#5D4043] '>— Utilisation des cookies — Mention légales.</span></span>
                                <span className="w-full">Sur une idée originale d’Antoine Daniel, concept art par Tera Silver, 3D par Aurélien Thomas, logo par Baloprisonnier, 3D print par Lunath & Packaging par Illusion</span>
                            </div>
                        </div>


                        <img src={Img1} className='absolute bottom-0 left-0 pointer-events-none max-lg:max-w-none max-lg:w-[449px] max-lg:left-[-37px] ' alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}