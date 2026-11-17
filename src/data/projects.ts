import type { Project } from "../types/project";
import socialMediaImage from '../assets/socialmedia.jpg'
import myai from '../assets/myai.jpg'
import musicPlayer from '../assets/music.jpg'

export const Projects: Project[] = [
    {
        id: "project-1",
        title: "My Social-media-app",
        description: "A Mern stack social Media platform with authentication, posts, and likes and comment and profile",
        image: socialMediaImage,
        techStack: ['React', 'node.js', 'express.js', 'MongoDB'],
        githubLink: 'https://github.com/sc189708-design/social-media-app-frontend',
        liveDemo: 'https://myPortfolio.com'
    },
    {
        id: "project-2",
        title: "My personal-ai-assitant",
        description: "A local ai chatbot buitl with mern, typescript, and local hosted LLM",
        image: myai,
        techStack: ['React', 'TypeScript', 'node.js', 'ollama'],
        githubLink: 'https://github.com/sc189708-design/buddy-ai-fronend-',
        liveDemo: 'https://myPortfolio.com'
    },
    {
        id: "project-3",
        title: "Music web application",
        description: 'A Mern stack music listner web application use youtube api to listing online music',
        image: musicPlayer,
        techStack: ['React', 'typeScript', 'node.js', 'express.js', 'mongoDB', 'farmer-motion'],
        githubLink: "https://github.com/sc189708-design/music-player",
        liveDemo: 'https://myPortfolio.com'
    }
];
