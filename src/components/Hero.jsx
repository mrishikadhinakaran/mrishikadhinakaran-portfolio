import { motion } from "framer-motion";
import Pfp from "../assets/Pfp.jpg";

function Hero() {
    return (
        <div className="modern-gradient relative min-h-screen flex flex-col lg:flex-row items-center justify-center px-6 lg:px-20 text-center lg:text-left overflow-hidden gap-20">
            <div className="absolute inset-0 bg-gradient-to-br from-gradient1 via-gradient2 to-gradient3 opacity-80" />
            
            <div className="flex flex-col items-center lg:items-start gap-2 z-10">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl md:text-2xl text-white glow-effect"
                >
                    A MERN Stack developer
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <h1 className="text-5xl sm:text-7xl lg:text-9xl font-bold text-white">
                        Hello!, I&apos;m <br />
                        <span className="gradient-text">Raghav Katta</span>
                    </h1>
                </motion.div>
            </div>

            <motion.div 
                className="relative"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-gradient2 via-gradient3 to-gradient4 rounded-full blur-xl opacity-30" />
                <motion.img
                    src={Pfp}
                    alt="Profile Pic"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="w-60 sm:w-100 md:w-110 lg:w-[30rem] mt-[2rem] rounded-full relative z-10 glass-card hover-lift"
                />
            </motion.div>
        </div>
    );
}

export default Hero;