import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";


const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#About" },
    { label: "Projects", href: "#Projects" },
    { label: "Skills", href: "#Skills" },
    { label: "Contant", href: "Contant" },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const handelLinkClick = () => setIsOpen(false);

    return (
        <nav className=" fixed top-0 left-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50 shadow-sm">
            <div className=" max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
                <a href="#home" className=" text-xl font-bold text-gray-900 dark:text-white">
                    SURAJ<span className="text-blue-600"> CHANDEL</span>
                </a>

                {/* Desktop links */}

                <ul className="hidden md:flex gap-8">
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <a
                                href={link.href}
                                className="text-gray-700 dark:text-gray-200 hover:text-blue-600 transition-colors">
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Mobile Toggle */}
                <button
                    className=" md:hidden text-2xl text-gray-800 dark:text-white"
                    onClick={() => setIsOpen(isOpen)}
                    aria-label="Toggle menu">
                    {isOpen ? <FiX /> : <FiMenu />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <ul className=" md:flex flex flex-col items-center gap-6 bg-white dark:bg-gray-900 py-6 shadow-md">
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <a href={link.href}
                                onClick={handelLinkClick}
                                className=" text-gray-700 dark:text-gray-200 text-lg">
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>
            )}
        </nav>
    )
}

export default Navbar;