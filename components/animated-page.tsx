"use client";

import { usePathname } from "next/navigation";

import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, y: 5 },
  enter: { opacity: 1, y: 0 },
};

export default function AnimatedPage({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <motion.div
      key={pathname}
      variants={variants}
      initial="hidden"
      animate="enter"
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
}
