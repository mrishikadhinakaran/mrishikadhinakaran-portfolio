import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import pdfchatbot from "../assets/PDFchatbot.png";
import agrisense from "../assets/Agrisense.png";
import lifeflow from "../assets/Lifeflow.png";
import endo from "../assets/endo.png";

const projects = [
    {
        title: "LifeFlow",
        subtitle: "AI-Powered daily Tracker & Planner",
        year: "2025",
        description: "An AI-enhanced platform to help peoples track and plan daily works with smart tools and dashboards.",
        demo: "https://github.com/mrishikadhinakaran/LIFEFLOW-project",
        image: lifeflow,
        github: "https://github.com/mrishikadhinakaran/LIFEFLOW-project",
        tech: ["React", "Express", "Convex", "MongoDB"],
        color: "#eda8dd"
    },
    {
        title: "AgriSense",
        subtitle: "ML-based Realtime IOT based agriculture Management Platform",
        year: "2025",
        description: "An AI-powered platform for agriculture management using machine learning techniques.",
        demo: "https://agri-sense-rho.vercel.app/",
        image: agrisense,
        github: "https://github.com/mrishikadhinakaran/Agrisense_work",
        tech: ["React", "Tailwind", "Firebase", "MapLibre GL JS"],
        color: "#00CC9A"
    },
    {
        title: "PDFChatBot",
        subtitle: "AI-Powered PDF Query Assistant",
        year: "2025",
        description: "An intelligent chatbot that allows users to query and interact with PDF documents using natural language processing.",
        demo: "https://github.com/mrishikadhinakaran/RAG-pdfChatbot",
        image: pdfchatbot,
        github: "https://github.com/mrishikadhinakaran/RAG-pdfChatbot",
        tech: ["React", "Node.js", "Python", "NLP"],
        color: "#3475ed"
    },
    {
        title: "Endometrial Cancer Detection",
        subtitle: "Deep learning-based system for early cancer detection",
        year: "2025",
        description: "A comprehensive health and wellness tracking application with personalized insights and recommendations.",
        demo: "https://github.com/mrishikadhinakaran/Endometrial-Cancer-Detection",
        image: endo,
        github: "https://github.com/mrishikadhinakaran/Endometrial-Cancer-Detection",
        tech: ["React", "Firebase", "Node.js"],
        color: "#eda058"
    }
];

export default function Projects() {
    return (
        <section id="Projects" className="bg-gradient-to-br from-[#0A2647] via-[#144272] to-[#205295] text-white px-6 py-24 min-h-screen">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center text-4xl sm:text-6xl pulse-glow font-bold mb-20 relative flex justify-center text-transparent bg-clip-text bg-gradient-to-r from-[#8a6de0] to-[#4a9fe0]"
            >
                My Projects

                {/* Glow underline pulse */}
                <span className="absolute left-1/2 transform -translate-x-1/2 -bottom-2 h-[3px] w-32 bg-gradient-to-r from-[#8a6de0] via-[#4a55c7] to-[#4a9fe0] blur-sm animate-pulse rounded-full" />

                {/* Soft neon reflection */}
                <span className="absolute -bottom-6 left-1/2 w-40 h-6 blur-[40px] opacity-40 rounded-full -translate-x-1/2 bg-[#4a9fe0]" />
            </motion.h2>

            <div className="space-y-20 max-w-6xl mx-auto">
                {projects.map((project, i) => (
                    <motion.div
                        key={project.title}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.15, duration: 0.6, ease: "easeOut" }}
                        className="relative rounded-2xl overflow-hidden border border-[#4a55c7]/30 bg-gradient-to-br from-[#0f1a3c]/20 to-[#1d2a57]/20 backdrop-blur-md hover:shadow-2xl group transition-transform duration-300 hover:scale-[1.01]"
                    >
                        {/* Left Glow Bar */}
                        <div
                            className="absolute left-0 top-0 h-full w-1.5 rounded-tr-lg rounded-br-lg animate-pulse"
                            style={{ backgroundColor: project.color }}
                        />

                        {/* Glow Aura on Hover */}
                        <div
                            className="absolute inset-0 opacity-0 group-hover:opacity-20 transition duration-500 blur-[90px] rounded-2xl -z-10"
                            style={{ backgroundColor: project.color }}
                        />

                        {/* Card content */}
                        <div className="relative z-10 p-6 sm:p-10 flex flex-col lg:flex-row gap-10 items-center">
                            {/* Text Section */}
                            <div className="flex-1">
                                <h3 className="text-xl sm:text-3xl font-bold text-white">{project.title}</h3>
                                <p
                                    className="text-sm sm:text-base font-semibold mb-4"
                                    style={{ color: project.color }}
                                >
                                    {project.subtitle} - {project.year}
                                </p>
                                <p className="text-white/90 mb-5 text-sm sm:text-lg">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tech.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-3 py-1 text-xs sm:text-sm rounded-full font-medium border"
                                            style={{
                                                color: project.color,
                                                borderColor: `${project.color}60`,
                                                backgroundColor: `${project.color}10`
                                            }}
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex gap-6 text-lg">
                                    <a
                                        href={project.demo}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="flex items-center gap-2 hover:text-[#4a9fe0]"
                                    >
                                        <FaExternalLinkAlt /> 
                                    </a>
                                    <a
                                        href="#"
                                        className="flex items-center gap-2 hover:text-[#4a9fe0]"
                                    >
                                    </a>
                                </div>
                            </div>

                            {/* Image Section */}
                            <motion.div
                                whileHover={{ scale: 1.1 }}
                                transition={{ duration: 0.3 }}
                                className="w-full lg:w-[450px] aspect-video overflow-hidden rounded-xl shadow-lg cursor-pointer"
                                onClick={() => window.open(project.demo, '_blank')}
                            >
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="object-contain w-full h-full rounded-xl"
                                    style={{ objectPosition: "top center" }}
                                />
                            </motion.div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
