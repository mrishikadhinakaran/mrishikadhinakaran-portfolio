import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/Logo.png";

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 0;
            setScrolled(isScrolled);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = () => {
        if (menuOpen) {
            setMenuOpen(false)
        }
    }

    const navItems = ["Home", "Projects", "Technologies", "About", "Contact"];

    return (
        <nav className={`fixed w-full flex items-center justify-between px-4 sm:px-10 py-4 transition-all duration-300 z-50 ${
            scrolled ? 'bg-black/70 backdrop-blur-sm shadow-lg' : 'bg-transparent'
        }`}>
            <div className="flex items-center">
                <img 
                    src={logo} 
                    alt="Logo" 
                    className="h-12 sm:h-16 w-auto object-contain"
                />
            </div>

            <button 
                className="lg:hidden focus:outline-none cursor-pointer text-white relative w-6 h-6" 
                onClick={() => setMenuOpen(!menuOpen)}
            >
                <motion.span
                    className="absolute block w-6 h-0.5 bg-white"
                    animate={{
                        rotate: menuOpen ? 45 : 0,
                        y: menuOpen ? 8 : 0
                    }}
                    transition={{ duration: 0.2 }}
                    style={{ top: "4px" }}
                />
                <motion.span
                    className="absolute block w-6 h-0.5 bg-white"
                    animate={{
                        opacity: menuOpen ? 0 : 1
                    }}
                    transition={{ duration: 0.2 }}
                    style={{ top: "12px" }}
                />
                <motion.span
                    className="absolute block w-6 h-0.5 bg-white"
                    animate={{
                        rotate: menuOpen ? -45 : 0,
                        y: menuOpen ? -8 : 0
                    }}
                    transition={{ duration: 0.2 }}
                    style={{ top: "20px" }}
                />
            </button>

            <ul className="hidden lg:flex flex-col md:flex-row space-x-20 z-50">
                {navItems.map((item) => (
                    <li key={item}>
                        <a 
                            href={`#${item}`}
                            className="text-xl text-white hover:text-gradient4 transition-all hover:-translate-y-1 inline-block font-semibold"
                            onClick={handleNavClick}
                        >
                            {item}
                        </a>
                    </li>
                ))}
            </ul>

            <AnimatePresence>
                {menuOpen && (
                    <motion.ul
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-16 w-full left-0 lg:hidden bg-black/90 backdrop-blur-sm flex flex-col items-center py-4 space-y-5 cursor-pointer shadow-lg"
                    >
                        {navItems.map((item, i) => (
                            <motion.li 
                                key={item}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <a 
                                    className="text-xl text-white hover:text-gradient4 transition-all font-semibold"
                                    href={`#${item}`}
                                    onClick={handleNavClick}
                                >
                                    {item}
                                </a>
                            </motion.li>
                        ))}
                        <motion.li
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: navItems.length * 0.1 }}
                        >
                            <button className="bg-gradient-to-r from-gradient3 to-gradient4 text-white font-bold px-5 py-2 rounded-lg shadow-lg hover:shadow-gradient4/50 transition-all">
                                Download CV
                            </button>
                        </motion.li>
                    </motion.ul>
                )}
            </AnimatePresence>

            <button className="hidden lg:block bg-gradient-to-r from-gradient3 to-gradient4 text-white font-bold px-5 py-2 rounded-lg shadow-lg hover:shadow-gradient4/50 hover:scale-105 hover:cursor-pointer transition-all">
                Download CV
            </button>
        </nav>
    )
}
export default Header
