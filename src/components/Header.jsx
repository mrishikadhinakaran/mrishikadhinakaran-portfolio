import {useState} from "react";

function Header(){
    const[menuOpen,setMenuOpen]=useState(false)
return(
    <nav className="flex items-center justify-between px-10 py-4 bg-gray-900/90 shadow-md backdrop-blur-md">
        <span className="ml-5 text-lg font-bold text-white animate-pulse">Raghav Katta</span>

        {/* Menu Button */}
        <button className="lg:hidden text-2xl focus:outline-none cursor-pointer" onClick={()=>setMenuOpen(!menuOpen)}>
        ☰
        </button>
{/* Nav-links For Large Screen */}
    <ul className=" hidden lg:flex flex-col md:flex-row space-x-20 text-white">
        <li><a href="#Home"className=" text-xl hover:bg-gray-300 p-4 rounded-md hover:text-orange-500">Home</a></li>
        <li><a href="#About" className="text-xl  hover:text-orange-500 hover:bg-gray-300 p-4 rounded-md transition duration-300">About</a></li>
        <li><a href="#Contact" className="text-xl  hover:text-orange-500 hover:bg-gray-300 p-4 rounded-md transition duration-300">Contact</a></li>
        <li><a href="#Technologies" className="text-xl  hover:text-orange-500 hover:bg-gray-300 p-4 rounded-md transition duration-300">Technologies</a></li>
    </ul>
    
    {/* Nav-links for Smasll Screen */}
    {menuOpen&&(
        
        <ul className="absolute top-16 w-full left-0 lg:hidden shadow-md flex flex-col items-center py-4 bg-gray-400 space-y-5 cursor-pointer z-50">
        <li><a href="#Home"className=" text-xl hover:text-orange-500">Home</a></li>
        <li><a href="#About" className="text-xl text-black hover:text-orange-500 transition duration-300">About</a></li>
        <li><a href="#Contact" className="text-xl text-black hover:text-orange-500 transition duration-300">Contact</a></li>
        <li><a href="#Technologies" className="text-xl text-black hover:text-orange-500 transition duration-300">Technologies</a></li>
    </ul>
    )}

    {/* Download CV Button */}
    <button className="bg-gradient-to-r from-orange-500 to-yellow-400 text-black font-bold px-5 py-2 rounded-lg shadow-lg hover:scale-105 transition cursor-pointer">Download CV</button>
    </nav>
)
}
export default Header