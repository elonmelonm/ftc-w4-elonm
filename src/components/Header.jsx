import Logo from '../assets/Logo-Picto.png'

export function Header() {
    return (
        <div className="fixed top-0 left-0 px-[240px] w-full z-10">
            <div className="flex flex-row w-full h-[118px] items-center justify-between ">
                <span>
                    <img src={Logo} alt="" />
                </span>
                <button className="w-[111px] h-10 text-[#FAF6F3] text-[15px] font-medium px-6 bg-[#5D4043] ">Acheter</button>
            </div>
        </div>
    )
}