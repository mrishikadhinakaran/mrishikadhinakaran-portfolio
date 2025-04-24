import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/Logo.png";

const navItems = ["Home", "Projects", "Technologies", "About", "Contact"];

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleNavClick = () => {
        if (menuOpen) setMenuOpen(false);
    };

    return (
        <motion.nav
            initial={{ y: -80 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", stiffness: 80, damping: 15 }}
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${
                scrolled ? "bg-black/70 backdrop-blur-lg shadow-xl" : "bg-transparent"
            }`}
        >
            <div className="max-w-7xl mx-auto px-6 sm:px-10 py-4 flex justify-between items-center relative">
                {/* Logo */}
                <motion.img
                    src={logo}
                    alt="Logo"
                    className="h-12 sm:h-16 w-auto"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                />

                {/* Desktop Nav */}
                <ul className="hidden lg:flex gap-10">
                    {navItems.map((item) => (
                        <motion.li
                            key={item}
                            whileHover={{ scale: 1.15 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <a
                                href={`#${item}`}
                                className="relative text-white text-lg font-semibold tracking-wide hover:text-gradient4"
                            >
                                <span className="nav-glow">{item}</span>
                            </a>
                        </motion.li>
                    ))}
                </ul>

                {/* Mobile Burger */}
                <button
                    className="lg:hidden flex flex-col gap-1 z-50"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <span className="w-6 h-0.5 bg-white rounded-full" />
                    <span className="w-6 h-0.5 bg-white rounded-full" />
                    <span className="w-6 h-0.5 bg-white rounded-full" />
                </button>

                {/* Mobile Nav */}
                <AnimatePresence>
                    {menuOpen && (
                        <motion.ul
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-20 left-0 right-0 bg-black/90 backdrop-blur-lg flex flex-col items-center space-y-5 py-6 rounded-lg shadow-lg z-40"
                        >
                            {navItems.map((item, i) => (
                                <motion.li
                                    key={item}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                >
                                    <a
                                        className="text-xl text-white font-semibold hover:text-gradient4"
                                        href={`#${item}`}
                                        onClick={handleNavClick}
                                    >
                                        {item}
                                    </a>
                                </motion.li>
                            ))}
                        </motion.ul>
                    )}
                </AnimatePresence>
            </div>
        </motion.nav>
    );
}

export default Header;
