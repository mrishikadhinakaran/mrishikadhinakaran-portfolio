import React from "react";
import Pfp from "../assets/Pfp.jpg"

function Hero() {

    return (
        <div className="flex flex-col lg:flex-row items-center justify-center  h-screen ">

            <div className="flex flex-col">
                <p className="text-white text-3xl md:text-2xl animate-pulse">A MERN Stack developer</p>
                <h1 className="text-9xl text-orange-500 font-bold ">Hello!,I'm <br />
                    Raghav Katta</h1>

            </div>

            <img src={Pfp} alt="Profile Pic" className="w-[30rem] h-[30rem] rounded-full ml-[7.5rem]" />



        </div>
    )
}
export default Hero