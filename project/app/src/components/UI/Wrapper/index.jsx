import React from "react";
import s from "./s.module.css";
import { motion } from "framer-motion";

export default function Wrapper({ children, ...props }) {
    return (
        <motion.div
            // initial={{ opacity: 0 }}
            // animate={{ opacity: 1 }}
            // exit={{ opacity: 0 }}
            initial={{ width: 0, opacity: 0, }}
            animate={{ width: "100%", opacity: 1 }}
            exit={{
                x: window.innerWidth,
                opacity: 0,
                transition: { duration: 0.3 },
            }}
        >
            <div {...props} className={[s.wrapper]}>
                {children}
            </div>
        </motion.div>
    );
}
