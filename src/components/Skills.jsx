import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
    DiMongodb, DiNodejs, DiPython, DiJava, DiReact
} from 'react-icons/di';
import {
    SiExpress, SiCplusplus, SiTypescript, SiNextdotjs,
    SiTailwindcss, SiC, SiFirebase, SiAppwrite, SiClerk
} from 'react-icons/si';
import { BiData } from 'react-icons/bi';
import SnowParticles from './SnowParticle';
const skills = [
    { name: 'MongoDB', icon: <DiMongodb className=" text-3xl sm:text-5xl" /> },
    { name: 'Express', icon: <SiExpress className=" text-3xl sm:text-5xl" /> },
    { name: 'React', icon: <DiReact className=" text-3xl sm:text-5xl" /> },
    { name: 'NodeJS', icon: <DiNodejs className=" text-3xl sm:text-5xl" /> },
    { name: 'Firebase', icon: <SiFirebase className=" text-3xl sm:text-5xl" /> },
    { name: 'Appwrite', icon: <SiAppwrite className=" text-3xl sm:text-5xl" /> },
    { name: 'Clerk', icon: <SiClerk className=" text-3xl sm:text-5xl" /> },
    { name: 'C', icon: <SiC className=" text-3xl sm:text-5xl" /> },
    { name: 'C++', icon: <SiCplusplus className=" text-3xl sm:text-5xl" /> },
    { name: 'Java', icon: <DiJava className=" text-3xl sm:text-5xl" /> },
    { name: 'Python', icon: <DiPython className=" text-3xl sm:text-5xl" /> },
    { name: 'TypeScript', icon: <SiTypescript className=" text-3xl sm:text-5xl" /> },
    { name: 'NextJS', icon: <SiNextdotjs className=" text-3xl sm:text-5xl" /> },
    { name: 'Tailwind', icon: <SiTailwindcss className=" text-3xl sm:text-5xl" /> },
    { name: 'SQL', icon: <BiData className=" text-3xl sm:text-5xl" /> },
];

export default function Skills() {
    return (
        <section id="Skills" className="relative py-20 px-6 min-h-screen overflow-hidden bg-[#0B2447] text-white">
            <SnowParticles />
            
            <div className="max-w-7xl w-full mx-auto px-4">
                <motion.h2
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className=" text-3xl sm:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-[#00c6ff] to-[#0072ff] text-transparent bg-clip-text"
                >
                    Technical Skills
                </motion.h2>

                <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
                    {skills.map((skill) => {
                        const ref = useRef(null);
                        const isInView = useInView(ref, { margin: '-50px 0px', amount: 0.5 });

                        return (
                            <motion.div
                                key={skill.name}
                                whileHover={{ scale: 1.07 }}
                                whileTap={{ scale: 0.95 }}
                                className="group flex flex-col items-center justify-center p-4 h-[100px] w-[100px] sm:h-[160px] sm:w-[220px] rounded-xl bg-white/5 backdrop-blur-md border border-white/10 shadow-md hover:shadow-cyan-500/20 transition-all overflow-hidden"
                            >
                                <div className="absolute w-40 h-40 bg-cyan-500/10 blur-[80px] opacity-0 group-hover:opacity-20 transition-all duration-500 -z-10" />

                                <motion.div
                                    className="mb-3 text-white/80 group-hover:text-cyan-400 transition-colors duration-300"
                                    whileHover={{ rotate: 360 }}
                                    transition={{ duration: 0.6 }}
                                >
                                    {skill.icon}
                                </motion.div>

                                <h3 className="text-sm font-semibold text-white/80 group-hover:text-white transition-colors text-center">
                                    {skill.name}
                                </h3>

                                <div ref={ref} className="w-full h-1 mt-2 bg-[#205295]/20 rounded-full overflow-hidden">
                                    <motion.div
                                        animate={{ scaleX: isInView ? 1 : 0 }}
                                        initial={{ scaleX: 0 }}
                                        transition={{ duration: 0.8, ease: 'easeInOut' }}
                                        className="h-full  bg-gradient-to-r from-[#00c6ff] to-[#0072ff] origin-left"
                                    />
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
