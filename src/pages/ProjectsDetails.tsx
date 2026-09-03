import { useParams } from "react-router-dom";
import { Projects } from "../data/projects";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { FiArrowLeft, FiExternalLink } from "react-icons/fi";

const ProjectDetails = () => {
    const { id } = useParams<{ id: string }>();
    const projects = Projects.find((p) => p.id === id);
    if (!projects) {
        return (
            <div
                className="min-h-screen flex flex-col items-center justify-center px-6">
                <p className="text-xl text-gray-700 dark:text-gray-200 mb-4">
                    Project not Found</p>
                <Link to="/" className="text-blue-600 hover:underline">
                    Back To Home
                </Link>
            </div>
        );
    };
    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="max-w-4xl mx-auto px-6 py-24"
        >
            <Helmet>
                <title>{projects.title} | Suraj</title>
                <meta name="description" content={projects.description} />
            </Helmet>

            <Link
                to="/" className=" inline-flex items-center gap-2 text-blue-600 hover:underline ">
                <FiArrowLeft /> Back to Home
            </Link>

            <img
                src={projects.image}
                alt={projects.title}
            />

            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                {projects.title}
            </h1>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                {projects.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
                {projects.techStack.map((tech) => (
                    <span
                        key={tech}
                        className="text-sm px-3 py-1 bg-blue-50 dark:bg-gray-700 text-blue-600 dark:text-blue-300 rounded-full"
                    >
                        {tech}
                    </span>
                ))}
            </div>

            <div className=" flex gap-4">
                <a href={projects.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-3 bg-blue-600 text-white rounded-lg font-medium"
                >
                    <FiExternalLink /> View Code
                </a>

                <a
                    href={projects.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-3 bg-blue-600 text-white rounded-lg font-medium "
                >
                    <FiExternalLink /> Live Demo
                </a>
            </div>
        </motion.section>
    );
};

export default ProjectDetails;