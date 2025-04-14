import { useState } from "react";

function Header() {
    const [menuOpen, setMenuOpen] = useState(false)
    
    const handleNavClick = () => {
        if (menuOpen) {
            setMenuOpen(false)
        }
    }
    
    const navItems = ["Home", "Projects", "Technologies", "About", "Contact"];
    
    return (
        <nav className="fixed w-full flex items-center justify-between px-10 py-4 bg-black/70 backdrop-blur-sm shadow-lg z-50">
            <span className="text-2xl font-bold text-white tracking-wider">
                Raghav Katta
            </span>

            <button 
                className="lg:hidden text-3xl focus:outline-none cursor-pointer text-white" 
                onClick={() => setMenuOpen(!menuOpen)}
            >
                ☰
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

            {menuOpen && (
                <ul className="absolute top-16 w-full left-0 lg:hidden bg-black/90 backdrop-blur-sm flex flex-col items-center py-4 space-y-5 cursor-pointer shadow-lg">
                    {navItems.map((item) => (
                        <li key={item}>
                            <a 
                                className="text-xl text-white hover:text-gradient4 transition-all font-semibold"
                                href={`#${item}`}
                                onClick={handleNavClick}
                            >
                                {item}
                            </a>
                        </li>
                    ))}
                    <li>
                        <button className="bg-gradient-to-r from-gradient3 to-gradient4 text-white font-bold px-5 py-2 rounded-lg shadow-lg hover:shadow-gradient4/50 transition-all">
                            Download CV
                        </button>
                    </li>
                </ul>
            )}

            <button className="hidden lg:block bg-gradient-to-r from-gradient3 to-gradient4 text-white font-bold px-5 py-2 rounded-lg shadow-lg hover:shadow-gradient4/50 hover:scale-105 hover:cursor-pointer transition-all">
                Download CV
            </button>
        </nav>
    )
}
export default Header