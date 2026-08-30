import type { Project } from "../types/project";

export const Projects: Project[] = [
    {
        id: "project-1",
        title: "My Social-media-app",
        description: "A Mern stack social Media platform with authentication, posts, and likes and comment and profile",
        image: '/projects/social-media.png',
        techStack: ['React', 'node.js', 'express.js', 'MongoDB'],
        githubLink: 'https://github.com/suraj/social-media-app',
        liveDemo: 'https://myPortfolio.com'
    },
    {
        id: "project-2",
        title: "My personal-ai-assitant",
        description: "A local ai chatbot buitl with mern, typescript, and local hosted LLM",
        image: "/pojects/My-ai",
        techStack: ['React', 'TypeScript', 'node.js', 'ollama'],
        githubLink: 'https://github.com/suraj/my-buddy-ai',
        liveDemo: 'https://myPortfolio.com'
    },
];
