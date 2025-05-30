"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type FadeInSectionProps = {
  children: ReactNode;
};

export default function FadeInSection({ children }: FadeInSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </motion.div>
  );
}
