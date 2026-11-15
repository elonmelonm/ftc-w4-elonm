// Lignes de grille verticales de la maquette (calque "Layout") :
// 5 lignes sur la colonne de 1440 px en desktop, 3 sur mobile (marges + centre).
export function GridLines() {
    const line = "w-[2px] h-full bg-[#30171B]/[0.02]"
    return (
        <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 -z-20 left-6 right-6 md:left-10 md:right-10 lg:left-[clamp(32px,calc(50vw-480px),240px)] lg:right-[clamp(32px,calc(50vw-480px),240px)] flex flex-row justify-between"
        >
            <span className={line}></span>
            <span className={`${line} max-lg:hidden`}></span>
            <span className={line}></span>
            <span className={`${line} max-lg:hidden`}></span>
            <span className={line}></span>
        </div>
    )
}
