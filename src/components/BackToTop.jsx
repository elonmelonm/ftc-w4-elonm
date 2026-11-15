import { useEffect, useState } from 'react'

// Bouton "retour en haut" collé au bord droit (calque "STICKY TOP" de la maquette desktop).
export function BackToTop() {
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const onScroll = () => setVisible(window.scrollY > 600)
        onScroll()
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    return (
        <button
            type="button"
            aria-label="Retour en haut de la page"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className={`hidden lg:flex fixed right-0 bottom-24 z-20 w-16 h-16 items-end justify-center bg-[#5D4043]/40 hover:bg-[#5D4043]/70 cursor-pointer transition-all duration-500 ${visible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        >
            <svg width="32" height="34" viewBox="0 0 32 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 34V1M16 1L4 13M16 1L28 13" stroke="#5D4043" strokeOpacity="0.55" strokeWidth="1" />
            </svg>
        </button>
    )
}
