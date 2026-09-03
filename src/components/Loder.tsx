import { motion } from "framer-motion";

const Loader = () => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-50 dark:bg-gray-900 z-100">
            <motion.div
            className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full"
            animate={{rotate: 360}}
            transition={{duration: 0.8, repeat: Infinity, ease: 'linear'}}/>
        </div>
    )
};

export default Loader;