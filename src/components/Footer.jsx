import  "react";
import {FaGithub,FaTwitter,FaInstagram,FaLinkedin} from 'react-icons/fa'
function Footer(){
    return(
        <div className="bg-gray-900 text-white py-8">
        <div className="flex justify-evenly mt-4 mx-auto space-x-4">
    <a href="https://github.com/raghavxkatta">
        <FaGithub className="text-blue-600 text-2xl"/>
    </a>
    <a href="https://www.instagram.com/raghavxkatta/">
        <FaInstagram className="text-pink-600 text-2xl"/>
    </a>
    <a href="https://x.com/KattaRaghav">
        <FaTwitter className="text-blue-600 text-2xl"/>
    </a>
    <a href="https://www.linkedin.com/in/raghav-katta-11674a223/">
        <FaLinkedin className="text-blue-600 text-2xl"/>
    </a>
    
    </div>
    <div className="flex flex- justify-around mt-4">
        <a href="#Home" className="cursor-pointer hover:text-orange-500 transition-colors">Home</a>
        <a href="#About" className="cursor-pointer hover:text-orange-500 transition-colors">About</a>
        <a href="#Technologies" className="cursor-pointer hover:text-orange-500 transition-colors">Projects</a>
        <a href="#Contact" className="cursor-pointer hover:text-orange-500 transition-colors">Contact Us</a>
    </div>  
    </div>)
}
export default Footer