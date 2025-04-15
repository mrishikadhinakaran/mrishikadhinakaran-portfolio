import { motion, useScroll, useSpring } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import hireorbit from "/Hireorbit.png";
import finwise from "../assets/Finwise.png";
import hackyours from "../assets/Hackyours.png";
import caremate from "../assets/Caremate.png";

const projects = [
    {
        title: "HackYours",
        subtitle: "AI-Powered Hackathon Helper",
        year: "2025",
        description: "AI-enhanced platform to assist hackathon teams in ideation, project setup, and submissions. Features intelligent suggestion engine and team collaboration dashboard.",
        demo: "hackyours.vercel.app",
        image: hackyours,
        tech: ["Gemini API", "React", "Node.js", "MongoDB"],
        color: "#00FF00"
    },
    {
        title: "FinWise",
        subtitle: "AI-Powered Investment Platform",
        year: "2025",
        description: "Personalized investment advisor integrating Gemini and AMFI APIs with a chatbot and financial education modules.",
        demo: "finwise.ayush-sharma.in",
        image: finwise,
        tech: ["React", "Tailwind", "Appwrite", "Framer Motion"],
        color: "#00CC9A"
    },
    {
        title: "HireOrbit",
        subtitle: "Resume Recruitment Manager",
        year: "2025",
        description: "Recruitment dashboard featuring resume parsing, smart candidate ranking, and real-time filtering. Powered by the MERN stack, Firebase authentication, and deployed on Cloudflare.",
        demo: "hireorbit.pages.dev",
        image: hireorbit,
        tech: ["MERN", "Firebase", "Cloudflare"],
        color: "#FFD700"
    },
    {
        title: "CareMate",
        subtitle: "Health Monitoring Web App",
        year: "2025",
        description: "Personal health companion app to manage symptoms, medications, and appointments. Developed responsive UI with React and Firebase; built-in reminders for user care continuity.",
        demo: "carematehealth.vercel.app",
        image: caremate,
        tech: ["React", "Firebase", "Node.js"],
        color: "#0066FF"
    }
];

function Projects() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                type: "spring",
                stiffness: 100
            }
        }
    };

    const imageVariants = {
        hover: {
            scale: 1.05,
            transition: { duration: 0.3 }
        }
    };

    const linkVariants = {
        hover: {
            x: 5,
            scale: 1.1,
            transition: { type: "spring", stiffness: 400 }
        }
    };

    return (
        <div id="Projects" className="bg-black min-h-screen py-20 px-6 relative">
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-[#2C74B3] origin-left z-50"
                style={{ scaleX }}
            />

            <div className="absolute inset-0 bg-gradient-to-br from-[#0B2447] via-[#19376D] to-[#205295] opacity-40" />

            <div className="relative z-10 max-w-7xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2 }}
                    className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-[#205295] to-[#2C74B3] text-transparent bg-clip-text cursor-default"
                >
                    Featured Projects
                </motion.h2>

                <div className="grid gap-12">
                    {projects.map((project) => (
                        <motion.div
                            key={project.title}
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="group relative"
                        >
                            <motion.div
                                className="grid md:grid-cols-2 gap-8 p-6 rounded-xl bg-black/40 backdrop-blur-md border border-[#205295]/30 hover:border-[#2C74B3] transition-all overflow-hidden cursor-pointer"
                                whileHover={{ y: -5, boxShadow: '0 10px 30px -15px rgba(44, 116, 179, 0.5)' }}
                            >
                                <div className="order-2 md:order-1">
                                    <div className="flex flex-col justify-between h-full">
                                        <div>
                                            <motion.a
                                                href={`https://${project.demo}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-block"
                                            >
                                                <motion.h3
                                                    className="text-2xl font-bold text-white mb-2 group-hover:text-[#2C74B3] transition-colors"
                                                    whileHover={{ scale: 1.05 }}
                                                >
                                                    {project.title}
                                                </motion.h3>
                                            </motion.a>
                                            <p className="text-[#205295] text-lg font-medium mb-4 cursor-default">
                                                {project.subtitle} - {project.year}
                                            </p>
                                            <p className="text-white/80 mb-6 cursor-default">
                                                {project.description}
                                            </p>
                                            <div className="flex flex-wrap gap-2 mb-6">
                                                {project.tech.map((tech) => (
                                                    <motion.span
                                                        key={tech}
                                                        className="px-3 py-1 text-sm rounded-full bg-[#205295]/20 text-[#2C74B3] border border-[#205295]/30 cursor-default"
                                                        whileHover={{ scale: 1.1, y: -2 }}
                                                        style={{
                                                            backgroundColor: `${project.color}10`,
                                                            borderColor: `${project.color}30`,
                                                            color: project.color
                                                        }}
                                                    >
                                                        {tech}
                                                    </motion.span>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="flex gap-4">
                                            <motion.a
                                                href={`https://${project.demo}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 text-white hover:text-[#2C74B3] transition-colors"
                                                variants={linkVariants}
                                                whileHover="hover"
                                            >
                                                <span>Live Demo</span>
                                                <FaExternalLinkAlt size={16} />
                                            </motion.a>
                                            <motion.a
                                                href="#"
                                                className="flex items-center gap-2 text-white hover:text-[#2C74B3] transition-colors"
                                                variants={linkVariants}
                                                whileHover="hover"
                                            >
                                                <span>Source Code</span>
                                                <FaGithub size={16} />
                                            </motion.a>
                                        </div>
                                    </div>
                                </div>
                                <motion.div
                                    className="order-1 md:order-2 relative overflow-hidden rounded-lg"
                                    variants={imageVariants}
                                    whileHover="hover"
                                >
                                    <motion.a
                                        href={`https://${project.demo}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block relative"
                                    >
                                        <motion.div
                                            className="absolute inset-0 bg-gradient-to-tr from-black/80 via-black/50 to-transparent opacity-60 group-hover:opacity-40 transition-opacity"
                                            whileHover={{ opacity: 0.2 }}
                                        />
                                        <motion.img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover rounded-lg transform"
                                            whileHover={{ scale: 1.1 }}
                                            transition={{ duration: 0.4 }}
                                        />
                                    </motion.a>
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Projects;