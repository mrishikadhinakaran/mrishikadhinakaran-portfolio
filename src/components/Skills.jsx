import { motion } from 'framer-motion';
import {
    DiMongodb,
    DiNodejs,
    DiPython,
    DiJava,
    DiReact
} from 'react-icons/di';
import {
    SiExpress,
    SiCplusplus,
    SiTypescript,
    SiNextdotjs,
    SiTailwindcss,
    SiC,
    SiFirebase,
    SiAppwrite,
    SiClerk
} from 'react-icons/si';
import { BiData } from 'react-icons/bi';

const Skills = () => {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { 
            opacity: 1, 
            y: 0,
            transition: {
                duration: 0.5
            }
        }
    };

    const skills = [
        { name: 'MongoDB', icon: <DiMongodb className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14" /> },
        { name: 'Express', icon: <SiExpress className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14" /> },
        { name: 'React', icon: <DiReact className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14" /> },
        { name: 'NodeJS', icon: <DiNodejs className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14" /> },
        { name: 'Firebase', icon: <SiFirebase className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14" /> },
        { name: 'Appwrite', icon: <SiAppwrite className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14" /> },
        { name: 'Clerk', icon: <SiClerk className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14" /> },
        { name: 'C', icon: <SiC className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14" /> },
        { name: 'C++', icon: <SiCplusplus className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14" /> },
        { name: 'Java', icon: <DiJava className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14" /> },
        { name: 'Python', icon: <DiPython className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14" /> },
        { name: 'TypeScript', icon: <SiTypescript className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14" /> },
        { name: 'NextJS', icon: <SiNextdotjs className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14" /> },
        { name: 'Tailwind', icon: <SiTailwindcss className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14" /> },
        { name: 'SQL', icon: <BiData className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14" /> },
    ];

    return (
        <section id="Skills" className="min-h-screen bg-black relative py-16 sm:py-20">
            <div className="absolute inset-0 bg-gradient-to-br from-[#0B2447] via-[#19376D] to-[#205295] opacity-40" />
            
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
                <motion.h2 
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl sm:text-3xl lg:text-4xl font-bold text-center mb-12 sm:mb-16 bg-gradient-to-r from-[#205295] to-[#2C74B3] text-transparent bg-clip-text"
                >
                    Technical Skills
                </motion.h2>

                <div className="light-bg text-primaryLight dark:bg-[#0A2647] dark:text-white p-6 rounded-xl shadow-md hover-lift">
                    
                    <p className="mt-2 text-xl font-bold light-glow dark:glow-effect">Explore my expertise in various technologies.</p>
                    <motion.div 
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3 sm:gap-4 md:gap-6"
                    >
                        {skills.map((skill) => (
                            <motion.div
                                key={skill.name}
                                variants={item}
                                whileHover={{ scale: 1.05 }}
                                className="group flex flex-col items-center p-3 sm:p-4 md:p-6 rounded-lg light-bg dark:bg-[#0A2647] dark:border-[#205295]/30 hover:border-[#2C74B3] transition-all"
                            >
                                <motion.div 
                                    whileHover={{ rotate: 360 }}
                                    transition={{ duration: 0.6 }}
                                    className="text-[#2C74B3] group-hover:text-[#205295] transition-colors mb-2 sm:mb-3"
                                >
                                    {skill.icon}
                                </motion.div>
                                <h3 className="text-sm sm:text-base md:text-lg font-medium text-primaryLight dark:text-white group-hover:text-[#2C74B3] transition-colors text-center">
                                    {skill.name}
                                </h3>
                                <div className="w-full h-1 mt-2 sm:mt-3 bg-[#205295]/20 rounded-full overflow-hidden">
                                    <motion.div 
                                        initial={{ width: 0 }}
                                        whileInView={{ width: "100%" }}
                                        transition={{ duration: 0.8, delay: 0.2 }}
                                        className="h-full bg-gradient-to-r from-[#205295] to-[#2C74B3]" 
                                    />
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Skills;