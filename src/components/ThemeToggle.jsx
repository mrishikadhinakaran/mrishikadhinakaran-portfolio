import { useTheme } from '../context/ThemeContext';
import { motion } from 'motion/react';
import { FaSun, FaMoon } from 'react-icons/fa';

export default function ThemeToggle() {
    const { isDark, toggleTheme } = useTheme();

    return (
        <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleTheme}
            className="fixed bottom-5 right-5 p-3 rounded-full bg-gradient-to-r from-gradient1 to-gradient2 text-white shadow-lg"
        >
            {isDark ? <FaSun size={24} /> : <FaMoon size={24} />}
        </motion.button>
    );
}