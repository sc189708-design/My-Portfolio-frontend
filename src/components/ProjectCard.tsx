import { FiGithub, FiExternalLink } from "react-icons/fi";
import type { Project } from "../types/project";

interface ProjectCardPors {
    project: Project;
}

const ProjectCard = ({ project }: ProjectCardPors) => {
    return (
        <div className=" bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow">
            <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
            />
            <div className="p-6">
                <h3 className=" text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {project.title}
                </h3>
                <p className=" text-gray-500 dark:text-gray-300 mb-4">
                    {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.map((tech) => (
                        <span
                            key={tech}
                            className="text-xs px-2 py-1 bg-blue-50 dark:bg-gray-700 text-blue-600 dark:text-blue-300 rounded-full">
                            {tech}
                        </span>
                    ))}
                </div>
                <div className="flex gap-4">
                    <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-gray-700 dark:text-gray-200 hover:text-blue-600">
                        <FiGithub /> Code
                    </a>

                    <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="nopener noreferrer"
                        className="flex items-center gap-1 text-gray-700 dark:text-gray-200 hover:text-blue-600"
                    >
                        <FiExternalLink /> Live Demo
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;