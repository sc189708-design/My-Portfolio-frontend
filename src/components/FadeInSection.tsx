import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface FadeInSectionProps {
    children: ReactNode;
    delay?: number;
}

const FadeInSection = ({ children, delay = 0 }: FadeInSectionProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay }}
        >
            {children}
        </motion.div>
    );
};

export default FadeInSection;