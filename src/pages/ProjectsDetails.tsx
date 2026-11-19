import { useParams, Link } from "react-router-dom";
import { Projects } from "../data/projects";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import {
    FiArrowLeft,
    FiExternalLink,
    FiGithub,
    FiCode,
    FiLayers
} from 'react-icons/fi'

const ProjectDetails = () => {
    const { id } = useParams<{ id: string }>();
    const project = Projects.find((p) => p.id === id);
    if (!project) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-gray-950 px-6 text-center">
                <h1 className="text-4xl font-bold text-white mb-8">
                    Project Not Found
                </h1>
                <p className="text-gray-450 mb-8">
                    Sorry, the project you're looking for doesn't exist.
                </p>
                <Link
                    to="/"
                    className="flex items-center gap-2 px6 py-3 rounded-xl bg-purple-600 text-white hover:bg-purple-700 transition">
                    <FiArrowLeft />
                    Back to Home
                </Link>
            </div >
        );
    }
    return (
        <>
            <Helmet>
                <title>{project.title} | Suraj</title>
                <meta
                    name="description"
                    content={project.description} />
            </Helmet>
            <motion.main
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className=" relative min-h-screen overflow-hidden bg[#080811] text-white">
                {/* Backround Glow */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-150 h-100 bg-purple-600/15 blur-[140px] rounded-full pointer-events-none " />
                <div className="relative max-w-6xl mx-auto px-6 py-20 md:py-28">
                    {/* Back Button */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}>
                        <Link
                            to="/"
                            className=" inline-flex items-center text-gray-400 gap-2 hover:text-purple-400 transition-colors mb-12 group">
                            <FiArrowLeft className=" group-hover:-translate-x-1 transition-transform" />
                            Back to Home
                        </Link>
                    </motion.div>

                    {/* Project heading */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="mb-12">
                        <div className="flex items-center gap-2 text-purple-400 mb-5">
                            <FiCode />
                            <span className="text-sm font-medium tracking-widest uppercase">
                                Featured Project
                            </span>
                        </div>
                        <h1 className=" text-4xl md:text-6xl font-bold tracking-tight mb-6">
                            {project.title}
                        </h1>

                        <p className="max-w-3xl text-gray-400 text-base md:text-lg leading-relaxed">
                            {project.description}
                        </p>
                    </motion.div>

                    {/* Project img */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.96 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7 }}
                        whileHover={{ scale: 1.01 }}
                        className=" relative group mb-14">
                        <div className=" absolute -inset-1 bg-linear-to-r from-purple-600/30 to-indigo-600/30 rounded-3xl blur-xl 
                        opacity-50 hover:opacity-100 transition duration-500"/>

                        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gray-900">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full aspect-video object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                    </motion.div>

                    {/* Project info */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                        {/* About Projects */}
                        <motion.div
                            initial={{ opacity: 0, y: 25 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            className="lg:col-span-2"
                        >
                            <div className="flex items-center gap-3 mb:5">
                                <FiLayers className="text-purple-400 text-xl" />
                                <h2 className="text-2xl font-semibold">
                                    About This Project
                                </h2>
                            </div>

                            <p className="text-gray-400 leading-8">
                                {project.description}
                            </p>
                        </motion.div>

                        {/* Technologies */}
                        <motion.div
                            initial={{ opacity: 0, y: 25 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.5 }}
                            className="p-6 rounded-2xl border border-white/10 bg-whit/[0.3] backdrop-blur-sm"
                        >
                            <h2 className="text-lg font-semibold mb-5 text-black dark:text-white">
                                Technologies Used
                            </h2>
                            <div className="flex flex-wrap gap-3">
                                {project.techStack.map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-3 py-2 text-sm rounded-lg border border-purple-500/10 bg-purple-600 hover:bg-purple-500/20 
                                    hover:border-purple-200/50 transition-colors">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Project Action */}

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                        className="mt-14 pt-8 border-t border-white/10"
                    >
                        <h2 className="text-xl font-semibold mb-6">
                            Explore This Project
                        </h2>
                        
                        <div className="flex flex-col sm:flex-row gap-4">
                            <motion.a
                            whileHover={{y: -4 , scale: 1.02}}
                            whileTap={{ scale: 0.97}}
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-3 px-7 py-4 rounded-xl bg-purple-600
                            hover:bg-purple-500 text-white font-medium shadow-lg shadow-purple-600/20 transition-colors">
                                <FiGithub size={20}/>
                                View Source Code
                                <FiExternalLink />
                            </motion.a>

                            <motion.a
                            whileHover={{y: -4, scale:1.02}}
                            whileTap={{scale: 0.97}}
                            href={project.liveDemo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-3 px-7 py-4 roundedxl bg-purple-600
                            hover:bg-purple-500 text-white font-medium shadow-lg shadow-purple-600/20 transition-colors">
                                <FiExternalLink  size={20}/>
                                Live Demo
                            </motion.a>
                        </div>
                    </motion.div>
                </div>
            </motion.main>
        </>
    )
}

export default ProjectDetails;