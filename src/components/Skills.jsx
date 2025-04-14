import { useState } from 'react';
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
    SiC
} from 'react-icons/si';
import { TbFileText } from 'react-icons/tb';
import { BiData } from 'react-icons/bi';

const SkillsShowcase = () => {
    const [activeSkill, setActiveSkill] = useState(null);

    const skills = [
        { name: 'MongoDB', category: 'Database', icon: <DiMongodb className="w-16 h-16" /> },
        { name: 'Express', category: 'Web', icon: <SiExpress className="w-16 h-16" /> },
        { name: 'React', category: 'Web', icon: <DiReact className="w-16 h-16" /> },
        { name: 'NodeJS', category: 'Web', icon: <DiNodejs className="w-16 h-16" /> },
        { name: 'EJS', category: 'Web', icon: <TbFileText className="w-16 h-16" /> },
        { name: 'C', category: 'Systems', icon: <SiC className="w-16 h-16" /> },
        { name: 'C++', category: 'Systems', icon: <SiCplusplus className="w-16 h-16" /> },
        { name: 'Java', category: 'Enterprise', icon: <DiJava className="w-16 h-16" /> },
        { name: 'Python', category: 'Data/AI', icon: <DiPython className="w-16 h-16" /> },
        { name: 'TypeScript', category: 'Web', icon: <SiTypescript className="w-16 h-16" /> },
        { name: 'NextJS', category: 'Web', icon: <SiNextdotjs className="w-16 h-16" /> },
        { name: 'Tailwind', category: 'Styling', icon: <SiTailwindcss className="w-16 h-16" /> },
        { name: 'SQL', category: 'Database', icon: <BiData className="w-16 h-16" /> },
    ];

    return (
        <div className="bg-black min-h-screen py-20 px-8 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[#0B2447] via-[#19376D] to-[#205295] opacity-40" />
            
            <div className="relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2 }}
                    className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-16 text-center bg-gradient-to-r from-[#205295] to-[#2C74B3] text-transparent bg-clip-text"
                >
                    Technical Skills
                </motion.h2>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-6xl mx-auto">
                    {skills.map((skill) => (
                        <motion.div
                            key={skill.name}
                            className={`p-6 rounded-xl cursor-pointer bg-black/40 backdrop-blur-md border border-[#205295]/30
                                ${activeSkill === skill.name ? 'bg-[#205295]/20' : ''}`}
                            whileHover={{ 
                                y: -5,
                                borderColor: '#2C74B3',
                                backgroundColor: 'rgba(32, 82, 149, 0.2)'
                            }}
                            onClick={() => setActiveSkill(activeSkill === skill.name ? null : skill.name)}
                        >
                            <div className="flex flex-col items-center space-y-4">
                                <motion.div
                                    className="text-[#2C74B3]"
                                    whileHover={{ rotate: 360 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    {skill.icon}
                                </motion.div>
                                <h3 className="text-xl font-bold text-white text-center">{skill.name}</h3>
                                <p className="text-[#205295] text-center font-medium">{skill.category}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SkillsShowcase;