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
            className={`fixed w-full flex items-center justify-between px-10 py-4 shadow-md backdrop-blur-md z-50 ${menuOpen ? "bg-gray-900" : "bg-gray-900/90"}`}
        >
            <motion.span 
                className="ml-5 text-xl font-bold bg-gradient-to-r from-orange-500 to-yellow-400 text-transparent bg-clip-text"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                Raghav Katta
            </motion.span>

            <motion.button 
                whileTap={{ scale: 0.9 }}
                className="lg:hidden text-2xl focus:outline-none cursor-pointer text-white hover:text-orange-500 transition-colors" 
                onClick={() => setMenuOpen(!menuOpen)}
            >
                ☰
            </motion.button>

            <ul className="hidden lg:flex flex-col md:flex-row space-x-20 text-white z-50">
                {["Home", "About", "Contact", "Technologies"].map((item, i) => (
                    <motion.li
                        key={item}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                    >
                        <motion.a 
                            href={`#${item}`}
                            className="text-xl hover:bg-gray-800 p-4 rounded-md hover:text-orange-500 transition-all"
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
                        className="absolute top-16 w-full left-0 lg:hidden shadow-md flex flex-col items-center py-4 bg-gray-800 space-y-5 cursor-pointer z-100"
                    >
                        {["Home", "About", "Contact", "Technologies"].map((item, i) => (
                            <motion.li
                                key={item}
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <motion.a 
                                    whileHover={{ scale: 1.1 }}
                                    className="text-xl text-white hover:text-orange-500 transition-colors"
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
                                className="bg-gradient-to-r from-orange-500 to-yellow-400 text-black font-bold px-5 py-2 rounded-lg shadow-lg transition cursor-pointer"
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
                className="hidden lg:block bg-gradient-to-r from-orange-500 to-yellow-400 text-black font-bold px-5 py-2 rounded-lg shadow-lg transition cursor-pointer"
            >
                Download CV
            </motion.button>
        </motion.nav>
    )
}
export default Header