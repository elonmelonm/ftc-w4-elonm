import { useState, useEffect } from 'react';
import Logo from '../assets/Logo-Picto.png'
import { motion } from 'framer-motion';

export function Header() {
    const [isFooterVisible, setIsFooterVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const footer = document.getElementById('header-blur-visible');
            if (footer) {
                const footerPosition = footer.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                setIsFooterVisible(footerPosition < windowHeight);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.div 
            className={`fixed top-0 left-0 px-[240px] w-full z-20 ${
                isFooterVisible ? 'bg-[linear-gradient(to_bottom,white_45%,transparent_100%)]' : ''
            }`}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="flex flex-row w-full h-[118px] items-center justify-between">
                <motion.span
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                    <img src={Logo} alt="" />
                </motion.span>
                <motion.button 
                    className="w-[111px] h-10 text-[#FAF6F3] text-[15px] font-medium px-6 bg-[#5D4043]"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Acheter
                </motion.button>
            </div>
        </motion.div>
    )
}