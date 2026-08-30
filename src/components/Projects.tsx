import { Projects as projectsData } from "../data/projects"
import type { Project } from "../types/project"
import ProjectCard from "./ProjectCard";

const Projects = () => {
    return (
        <section id="projects" className="max-w-6xl mx-auto px-6 py-24">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
                My Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projectsData.map((project: Project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </section>
    );
};

export default Projects;