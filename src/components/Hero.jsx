import { motion } from "motion/react"
import Pfp from "../assets/Pfp.jpg"
function Hero() {
    return (
        <div className="relative flex flex-col lg:flex-row items-center justify-center h-screen px-6 lg:px-20 text-center lg:text-left overflow-hidden">
            {/* Background Animation */}
            <motion.div
                className="absolute inset-0 opacity-20"
                initial={{ backgroundSize: "100%" }}
                animate={{
                    background: [
                        "radial-gradient(circle at 0% 0%, #FF6B6B 0%, transparent 50%)",
                        "radial-gradient(circle at 100% 100%, #4ECDC4 0%, transparent 50%)",
                        "radial-gradient(circle at 0% 100%, #45B7D1 0%, transparent 50%)",
                        "radial-gradient(circle at 100% 0%, #96C93D 0%, transparent 50%)"
                    ]
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    repeatType: "reverse"
                }}
            />

            <div className="flex flex-col items-center lg:items-start gap-2 z-10">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-white text-3xl md:text-2xl animate-pulse"
                >
                    A MERN Stack developer
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <h1 className="text-5xl sm:text-7xl lg:text-9xl text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-400 font-bold">
                        Hello!, I&apos;m <br />
                        Raghav Katta
                    </h1>
                </motion.div>
            </div>
<div className="">
<motion.img
                src={Pfp}
                alt="Profile Pic"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="w-60 sm:w-100 md:w-110 sm:items-center lg:w-[30rem] mt-[2rem] rounded-full ml-[7.5rem] mb-6 lg:mb-0 hover:shadow-2xl hover:shadow-orange-500/50 transition-shadow duration-300 "
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            />
</div>
            
        </div>
    )
}
export default Hero