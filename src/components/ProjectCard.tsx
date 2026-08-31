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
            whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(0,0,0,0.2)' }}
            transition={{ duration: 0.3 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-2xl transition-all h-full flex flex-col">
            {/* Image Container */}
            <Link to={`/project/${project.id}`} className="relative overflow-hidden block">
                <motion.img
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover cursor-pointer"
                />
            </Link>

            {/* Content Container */}
            <div className="p-6 flex flex-col ">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {project.title}
                </h3>
                <p className="text-gray-500 dark:text-gray-300 mb-4 text-sm line-clamp-3">
                    {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.slice(0, 4).map((tech) => (
                        <span
                            key={tech}
                            className="text-xs px-2 py-1 bg-blue-50 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full">
                            {tech}
                        </span>
                    ))}
                    {project.techStack.length > 4 && (
                        <span className="text-xs px-2 py-1 bg-blue-50 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full">
                            +{project.techStack.length - 4}
                        </span>
                    )}
                </div>

                {/* Actions */}
                <div className="flex flex-col gap-3 pt-4 border-t border-gray-200 dark:border-gray-700">
                    <Link to={`/project/${project.id}`}>
                        <motion.button
                            whileHover={{ x: 4 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors">
                            View Details
                            <FiArrowRight size={16} />
                        </motion.button>
                    </Link>
                    <div className="flex gap-3">
                        <a
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200 rounded-lg transition-colors">
                            <FiGithub size={16} />
                            <span className="text-sm">Code</span>
                        </a>
                        <a
                            href={project.liveDemo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200 rounded-lg transition-colors">
                            <FiExternalLink size={16} />
                            <span className="text-sm">Demo</span>
                        </a>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;