import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Header() {
    const [menuOpen, setMenuOpen] = useState(false)
    
    const handleNavClick = () => {
        if (menuOpen) {
            setMenuOpen(false)
        }
    }
    
    return (
        <motion.nav 
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", stiffness: 100 }}
            className="fixed w-full flex items-center justify-between px-10 py-4 bg-black/70 backdrop-blur-sm shadow-lg z-50"
        >
            <motion.span 
                className="text-2xl font-bold text-white tracking-wider"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                Raghav Katta
            </motion.span>

            <motion.button 
                whileTap={{ scale: 0.9 }}
                className="lg:hidden text-3xl focus:outline-none cursor-pointer text-white" 
                onClick={() => setMenuOpen(!menuOpen)}
            >
                ☰
            </motion.button>

            <ul className="hidden lg:flex flex-col md:flex-row space-x-20 z-50">
                {["Home", "About", "Contact", "Technologies"].map((item, i) => (
                    <motion.li
                        key={item}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                    >
                        <motion.a 
                            href={`#${item}`}
                            className="text-xl text-white hover:text-gradient4 transition-all hover:-translate-y-1 inline-block font-semibold"
                            whileHover={{ scale: 1.1 }}
                            onClick={handleNavClick}
                        >
                            {item}
                        </motion.a>
                    </motion.li>
                ))}
            </ul>

            <AnimatePresence>
                {menuOpen && (
                    <motion.ul 
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-16 w-full left-0 lg:hidden bg-gradient1 flex flex-col items-center py-4 space-y-5 cursor-pointer shadow-lg"
                    >
                        {["Home", "About", "Contact", "Technologies"].map((item, i) => (
                            <motion.li
                                key={item}
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <motion.a 
                                    whileHover={{ scale: 1.1, x: 10 }}
                                    className="text-xl text-white hover:text-gradient4 transition-all font-semibold"
                                    href={`#${item}`}
                                    onClick={handleNavClick}
                                >
                                    {item}
                                </motion.a>
                            </motion.li>
                        ))}
                        <motion.li
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 }}
                        >
                            <motion.button 
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                className="bg-gradient-to-r from-gradient3 to-gradient4 text-white font-bold px-5 py-2 rounded-lg shadow-lg hover:shadow-gradient4/50 transition-all"
                            >
                                Download CV
                            </motion.button>
                        </motion.li>
                    </motion.ul>
                )}
            </AnimatePresence>

            <motion.button 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="hidden lg:block bg-gradient-to-r from-gradient3 to-gradient4 text-white font-bold px-5 py-2 rounded-lg shadow-lg hover:shadow-gradient4/50 transition-all"
            >
                Download CV
            </motion.button>
        </motion.nav>
    )
}
export default Header