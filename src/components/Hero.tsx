import { motion } from "framer-motion";

const Hero = () => {
    return (
        <section
            id="home"
            className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-20">
            <motion.p
                initial={{ opacity: 0, y: - 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className=" text-blue-600 font-medium mb-3">
                Hey my name is
            </motion.p>
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-4xl md:text-6xl font-semibold text-gray-900 dark:text-gray-400 mb-6">
                Suraj
            </motion.h1>
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-2xl md:text-3xl font-semibold text-gray-500 dark:text-gray-400 mb-6">
                Full Stack Devloper (Mern + TypeScript)
            </motion.h2>
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}

                className="max-w-xl text-gray-600 dark:text-gray-300 mb-8">
                I build clean, functional, and responsive web applications using
                React, Node.js, Express, and MongoDB.
            </motion.p>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className=" flex gap-4">
                <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="#projects"
                    className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">
                    View Projects
                </motion.a>
                <a href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 border text-white border-blue-600 rounded-lg font-medium hover:bg-50 dark:hover:bg-gray-800 transition-colors"
                > Resume
                </a>
            </motion.div>
        </section>
    );
};

export default Hero;