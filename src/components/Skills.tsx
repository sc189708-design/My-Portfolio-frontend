import htmllogo from '../assets/html.png'
import csslogo from '../assets/css.png'
import jslogo from '../assets/JavaScript Tips.jpg'
import tslogo from '../assets/TypeScript.jpg'
import nodologo from '../assets/How to Standardize Node_js Version in an npm Package.jpg'
import reactLogo from '../assets/react.svg';
import expresslogo from '../assets/Express Js Sticker.jpg'
import tailwindLogo from '../assets/tailwind.png';
import mongodblogo from '../assets/MongoDB - MDB - Stock Price & News _ The Motley Fool.jpg'
import githublogo from '../assets/Github Sticker.jpg'
import gitlogo from '../assets/Git.jpg'
import { motion } from 'framer-motion'

type Skill = {
    name: string;
    image: string;
};

const skills: Skill[] = [
    { name: 'HTML', image: htmllogo },
    { name: 'CSS', image: csslogo },
    { name: 'JavaScript', image: jslogo },
    { name: 'TypeScript', image: tslogo },
    { name: 'React', image: reactLogo },
    { name: 'Node.js', image: nodologo },
    { name: 'Express.js', image: expresslogo },
    { name: 'MongoDB', image: mongodblogo },
    { name: 'Tailwind CSS', image: tailwindLogo },
    { name: 'Git Hub', image: githublogo },
    { name: 'Git', image: gitlogo }
];

const Skills = () => {
    return (
        <section
            id="Skills" className="max-w-4xl mx-auto px-6 py-24 mb-4">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-10 text-center">
                Skills
            </h2>
            <div
                className="grid grid-cols-2 sm:grid-cols-3 gap-6 justify-items-center">
                {skills.map((skill) => (
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                        key={skill.name} className="w-full text-center">
                        <div className="h-44 flex items-center justify-center rounded-3xl bg-gray-100 dark:bg-gray-800">
                            <img className="h-24 w-24 object-contain rounded-2xl" src={skill.image} alt={`${skill.name} logo`} />
                        </div>
                        <p className="text-xl dark:text-white mt-3 font-bold">{skill.name}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}

export default Skills;