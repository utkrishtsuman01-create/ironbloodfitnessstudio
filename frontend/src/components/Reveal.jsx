import { motion } from "framer-motion";

export const Reveal = ({ children, delay = 0, y = 28, className = "", once = true }) => (
    <motion.div
        className={className}
        initial={{ opacity: 0, y }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once, margin: "-60px" }}
        transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
        {children}
    </motion.div>
);

export const MaskedLines = ({ lines, className = "", lineClassName = "", delay = 0, as: Tag = "span" }) => (
    <span className={`block ${className}`}>
        {lines.map((line, i) => (
            <span key={i} className="block overflow-hidden pb-[0.08em] -mb-[0.08em]">
                <motion.span
                    className={`block ${lineClassName}`}
                    initial={{ y: "115%" }}
                    animate={{ y: "0%" }}
                    transition={{ duration: 0.9, delay: delay + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                >
                    <Tag>{line}</Tag>
                </motion.span>
            </span>
        ))}
    </span>
);

export const Stagger = ({ children, className = "", gap = 0.08 }) => (
    <motion.div
        className={className}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-40px" }}
        transition={{ staggerChildren: gap }}
    >
        {children}
    </motion.div>
);

export const staggerItem = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};
