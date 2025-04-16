"use client";

import { motion } from "motion/react";
import React from "react";
import { AuroraBackground } from "@/components/ui/aurora-background";

export function AuroraBackgroundDemo() {
  return (
    <div>
      
      <AuroraBackground>
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="relative flex flex-col gap-4 items-center justify-center px-4"
        >
          <div className="text-3xl md:text-5xl font-bold dark:text-white text-center">
            Carlos David A. Mendoza
          </div>
          <div className="font-extralight text-base md:text-2xl dark:text-neutral-200 py-4">
            Portafolio Moderno de Carlos David A. Mendoza
          </div>
          <button className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2">
            Debug now
          </button>
        </motion.div>
      </AuroraBackground>
    </div>
  );
}
