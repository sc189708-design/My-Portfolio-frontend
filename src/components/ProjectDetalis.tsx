import { motion } from "framer-motion"

const Notfound = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration:0.3}}
            className="flex *:items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900  ">
                <h1 className=" flex text-4xl  text-gray-900 dark:text-white">404 error Page not found</h1>
        </motion.div>
    )
}

export default Notfound;