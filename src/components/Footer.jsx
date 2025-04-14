import { FaGithub, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { motion } from "framer-motion";

function Footer() {
    return (
        <div className="bg-black relative overflow-hidden py-12">
            <div className="absolute inset-0 bg-gradient-to-b from-[#0B2447]/50 to-black" />

            <div className="max-w-7xl mx-auto px-6">
                <div className="flex justify-center gap-8 mb-12 relative z-10">
                    <motion.a
                        whileHover={{ scale: 1.2, y: -5 }}
                        href="https://github.com/raghavxkatta"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-4xl text-[#205295] hover:text-[#2C74B3] transition-all duration-300 hover:shadow-lg hover:shadow-[#205295]/20"
                    >
                        <FaGithub />
                    </motion.a>
                    <motion.a
                        whileHover={{ scale: 1.2, y: -5 }}
                        href="https://www.instagram.com/raghavxkatta/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-4xl text-[#205295] hover:text-[#2C74B3] transition-all duration-300 hover:shadow-lg hover:shadow-[#205295]/20"
                    >
                        <FaInstagram />
                    </motion.a>
                    <motion.a
                        whileHover={{ scale: 1.2, y: -5 }}
                        href="https://x.com/KattaRaghav"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-4xl text-[#205295] hover:text-[#2C74B3] transition-all duration-300 hover:shadow-lg hover:shadow-[#205295]/20"
                    >
                        <FaTwitter />
                    </motion.a>
                    <motion.a
                        whileHover={{ scale: 1.2, y: -5 }}
                        href="https://www.linkedin.com/in/raghav-katta-11674a223/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-4xl text-[#205295] hover:text-[#2C74B3] transition-all duration-300 hover:shadow-lg hover:shadow-[#205295]/20"
                    >
                        <FaLinkedin />
                    </motion.a>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 justify-items-center mb-2 relative z-10">
                    {["Home", "About", "Projects", "Contact"].map((item) => (
                        <motion.a
                            key={item}
                            whileHover={{ scale: 1.1, y: -2 }}
                            href={`#${item}`}
                            className="text-white/90 hover:text-[#2C74B3] transition-all duration-300 text-lg font-medium"
                        >
                            {item}
                        </motion.a>
                    ))}
                </div>


            </div>
        </div>
    );
}

export default Footer;