import { Link } from "react-router-dom";
import {motion} from "framer-motion";

const NotFound = () => {
    return (
        <motion.section
        initial={{ opacity: 0}}
        animate={{ opacity:1}}
        exit={{ opacity: 0}}
        transition={{ duration: 0.3}}
        className="min-h-screen flex flex-col items-center justify-center text-center px-6"
        >
            <h1 className="text-6xl font-bold text-blue-600 mb-4">404</h1>
            <p className="text-xl text-gray-700 dark:text-gray-200 mb-8">
                Page not found
            </p>
            <Link to= "/"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
            back to home
            </Link>
        </motion.section>
    )
}

export default NotFound;