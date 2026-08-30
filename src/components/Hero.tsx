const Hero = () => {
    return (
        <section
            id="home"
            className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-20">
            <p className=" text-blue-600 font-medium mb-3">Hey my name is</p>
            <h1 className="text-4xl md:text-6xl font-semibold text-gray-900 dark:text-gray-400 mb-6">
                Suraj
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-500 dark:text-gray-400 mb-6">
                Full Stack Devloper (Mern + TypeScript)
            </h2>
            <p className="max-w-xl text-gray-600 dark:text-gray-300 mb-8">
                I build clean, functional, and responsive web applications using
                Reac, Node.js, Express, and MongoDB.
            </p>
            <div className=" flex gap-4">
                <a href="#projects"
                    className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">
                    View Projects
                </a>
                <a href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 border border-blue-600 rounded-lg font-medium hover:bg-50 dark:hover:bg-gray-800 transition-colors"
                > Resume
                </a>
            </div>
        </section>
    );
};

export default Hero;