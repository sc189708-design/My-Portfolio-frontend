import { FiGithub, FiExternalLink, FiArrowRight } from "react-icons/fi";
import type { Project } from "../types/project";
import { motion } from "framer-motion"
import { Link } from "react-router-dom";

interface ProjectCardPors {
    project: Project;
}

const ProjectCard = ({ project }: ProjectCardPors) => {
    return (
        <motion.div
            whileHover={{ y: -8, boxShadow: '0 20px 60px rgba(168,85,247,0.85)' }}
            transition={{ duration: 0.3 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden
             hover:shadow-2xl transition-colors h-full flex flex-col border border-b-gray-200 dark:border-white/10">
            {/* Image Container */}
            <Link to={`/project/${project.id}`} className="relative overflow-hidden block h-52">
                <motion.img
                    src={project.image}
                    alt={project.title}
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.5 }}
                    className="h-full w-full object-cover cursor-pointer"
                />
                {/* {Image Gradient} */}
                <div className=" absolute inset-0 bg-gradient-to-from-black/60 via-transparent to-transparent" />

                {/* { Purple Glow} */}
                <div className=" absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-purple-500/10 " />
            </Link>

            {/* Content Container */}
            <div className=" flex flex-1 flex-col p-6 ">
                <Link to={`/project/${project.id}`}>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 hover:text-blue-600 
                    transition-colors duration-300 group-hover:text-purple-500">
                        {project.title}
                    </h3>
                </Link>
                <p className="text-gray-500 dark:text-gray-400 mb-5 leading-relaxed text-sm line-clamp-3">
                    {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-2">
                    {project.techStack.slice(0, 4).map((tech) => (
                        <span
                            key={tech}
                            className="text-xs px-3  py-1 text-purple-600 dark:text-purple-300
                            rounded-full border border-purple-500/20 ">
                            {tech}
                        </span>
                    ))}
                    {project.techStack.length > 4 && (
                        <span className="text-xs px-3 py-1 bg-purple-500/10 text-purple-600 dark:text-purple-300 
                        rounded-full border border-purple-500/20 ">
                            +{project.techStack.length - 4}
                        </span>
                    )}
                </div>

                {/* Actions */}
                <div className="flex flex-col gap-3 mt-auto pt-5 border-t border-gray-200 dark:border-white/10">
                    <Link to={`/project/${project.id}`}>
                        <motion.button
                            whileHover={{ x: 4 }}
                            whileTap={{ scale: 0.97 }}
                            className="flex w-full items-center justify-center gap-2 px-4 py-3 bg-purple-600
                            hover:bg-purple-500 text-white rounded-xl font-medium transition-colors">
                            View Details
                            <FiArrowRight size={16} />
                        </motion.button>
                    </Link>
                    <div className="flex gap-3">
                        <a
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-1 items-center justify-center gap-2 rounded-xl border 
                            border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 px-3 py3 
                            text-gray-700 dark:text-gray-300 hover:border-purple-500/40 hover:text-purple-500 transition-all">
                            <FiGithub size={16} />
                            <span className="text-sm">Code</span>
                        </a>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;