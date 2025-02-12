import "react";
import Pfp from "../assets/Pfp.jpg"
import {motion} from 'motion/react'

function Hero() {

    return (
        <div className="flex flex-col lg:flex-row items-center justify-center  h-screen px-6 lg:px-20 text-center lg:text-left ">

            <div className="flex flex-col items-center lg:items-start gap-2">
                <p className="text-white text-3xl md:text-2xl animate-pulse">A MERN Stack developer</p>
                <motion.h1 className="text-5xl sm:text-7xl lg:text-9xl text-orange-500 font-bold "><p>Hello!, I am</p> <br />
                    Raghav Katta</motion.h1>

            </div>

            <img src={Pfp} alt="Profile Pic" className="w-60 sm:w-100 md:w-110 lg:w-[30rem] items-center mt-[2rem]  rounded-full ml-[7.5rem] mb-6 lg:mb-0" />



        </div>
    )
}
export default Hero