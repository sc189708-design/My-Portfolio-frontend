const skills: string[] = [
    'HTML',
    'CSS',
    'JavaScript',
    'TypeScript',
    'React',
    'node.js',
    'express',
    'MongoDB',
    'Tailwind CSS',
    'Git & GitHub'
];

const Skills = () => {
    return (
        <section id="skills" className="max-w-4xl mx-auto px-6 py-24">
            <h2 className="text 3xl font-bold text-gray-900 dark-text-white mb-12 text-center">
                Skills
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
                {skills.map((skill) => (
                    <span
                        key={skill}
                        className="px-4 py-2 bg-white dark:bg-gray-800 shadow-md rounded-lg text-gray-700 dark:text-gray-200 font-medium">
                        {skill}
                    </span>
                ))}
            </div>
        </section>
    )
}

export default Skills;