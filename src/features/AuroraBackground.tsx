"use client";

import { motion } from "motion/react";
import React from "react";
import { AuroraBackground } from "@/components/ui/aurora-background";
import BackEnd from "@/components/skills/Back-End";
import FrontEnd from "@/components/skills/Front-End";
import Link from "next/link";
import Gmail from "@/components/svg/Gmail";
import LinkedIn from "@/components/svg/LinkedIn";
import GitHub from "@/components/svg/GitHub";
import "@/css/Home.css";

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
          className="relative flex flex-col gap-6 items-center justify-center px-4 py-10"
        >
          <h1 className="title">Carlos David A. Mendoza</h1>

          <div className="text-center space-y-2">
            <h2 className="subtitle">Full Stack Developer &lt;/&gt;</h2>
            <p className="description">
              Microservicios con Java y Spring-Boot e Interfaces de usuario con
              React.js
            </p>
          </div>

          <div className="contact-container">
            <a
              href="mailto:apolayamendozacarlos@gmail.com"
              target="_blank"
              className="link-gmail"
            >
              <Gmail className="inline-block mr-2" />
              Email
            </a>
            <Link
              href="https://www.linkedin.com/in/carlosdavidfront-end/"
              target="_blank"
              className="LinkedIn-GitHub"
            >
              <LinkedIn className="inline-block mr-2" />
              LinkedIn
            </Link>
            <Link
              href="https://github.com/CarlosDavid-AM"
              target="_blank"
              className="LinkedIn-GitHub"
            >
              <GitHub className="inline-block mr-2 bg-black dark:bg-none rounded-full dark:rounded-none" />
              GitHub
            </Link>
          </div>
        </motion.div>

        {/* Skills */}
        <h2 className="title-skill">Skills</h2>
        <div id="skills" className="front-back">
          <FrontEnd />
          <BackEnd />
        </div>
      </AuroraBackground>
    </div>
  );
}
