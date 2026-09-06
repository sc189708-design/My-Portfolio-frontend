import type { Project } from "../types/project";

export const Projects: Project[] = [
    {
        id: "project-1",
        title: "My Social-media-app",
        description: "A Mern stack social Media platform with authentication, posts, and likes and comment and profile",
        image: 'https://imgs.search.brave.com/FvY3vYn0oDP_SfOwub0uYY_e_GrWroGwPgLEi4oyK_Q/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTQ2/NzQzODI5MS9waG90/by9jb25uZWN0aW5n/LXdpdGgtc29jaWFs/LW1lZGlhLW5ldHdv/cmstdmlhLXNtYXJ0/cGhvbmUuanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPXd4em9x/c1R5LWx6RHVkYTdU/cUlGdHNfcWhkVllW/SWxKR0NDMzgzZDJ0/UkE9',
        techStack: ['React', 'node.js', 'express.js', 'MongoDB'],
        githubLink: 'https://github.com/sc189708-design/social-media-app-frontend',
        liveDemo: 'https://myPortfolio.com'
    },
    {
        id: "project-2",
        title: "My personal-ai-assitant",
        description: "A local ai chatbot buitl with mern, typescript, and local hosted LLM",
        image: "https://imgs.search.brave.com/o8A7gfdnM6ziw21o4DoB-8p-CiL55hECJNFzm4KBY-w/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMucGV4ZWxzLmNv/bS9waG90b3MvODg0/OTI5NS9wZXhlbHMt/cGhvdG8tODg0OTI5/NS5qcGVnP2NzPXRp/bnlzcmdiJmRwcj0x/Jnc9NTAw",
        techStack: ['React', 'TypeScript', 'node.js', 'ollama'],
        githubLink: 'https://github.com/sc189708-design/buddy-ai-fronend-',
        liveDemo: 'https://myPortfolio.com'
    },
];
