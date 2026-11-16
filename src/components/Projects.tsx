import { Projects as projectsData } from "../data/projects"
import type { Project } from "../types/project"
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion"

const Projects = () => {
    const infiniteProjects = [...projectsData, ...projectsData];
    return (
        <section
            id="Projects"
            className="max-w-7xl mx-auto px6 py-24 overflow-hidden">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
                My Projects
            </h2>
            <motion.div
                className=" flex w-max gap-8"
                animate={{ x: ["0", "-50%"] }}
                transition={{
                    duration: 35,
                    ease: "linear",
                    repeat: Infinity
                }}>
                {infiniteProjects.map((project: Project, index) => (
                    <motion.div
                        key={`${project.id}-${index}`}
                        className="w-87.5 md:w-112.5 shrink-0"
                        whileHover={{ scale: 1.2, y: -6 }}
                        transition={{ duration: 0.3 }}>
                            <ProjectCard project={project}/>
                        </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default Projects;