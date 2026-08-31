import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

const Footer = () => {
    return (
        <footer className=" bg-gray-900 text-gray-300 py-10">
            <div className=" max-w-6xl mx-auto px-6 flex flex-col items-center gap-4">
                <div className="flex gap-6 text-xl">
                    <a href="https://github.com/sc189708-design" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                        <FiGithub />
                    </a>
                    <a href="https://linkedin.com/in/suraj-chandel-3b9723372" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                        <FiLinkedin />
                    </a>
                    <a href="https://mailto:sc189708@gmail.com" rel="nooper noreferrer" className="hover:text-white">
                       <FiMail/>
                    </a>
                </div>
                <p className="text-sm text-gray-500">
                     © {new Date().getFullYear()} Suraj all rights reserved.
                </p>
            </div>
        </footer>
    )
}

export default Footer;