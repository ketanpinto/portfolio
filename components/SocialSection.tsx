"use client";

import GitHubStats from "./githubstats";
import InstagramStats from "./InstagramStats";
import LinkedInStats from "./LinkedInStats";
import { motion } from "framer-motion";

export default function SocialSection() {
  return (
    <section id="social" className="py-20 bg-black relative">
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 to-purple-500/10 opacity-20" />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.h2
          className="text-4xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
        >
          My <span className="text-pink-500">Socials</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
          <GitHubStats />
          {/* <InstagramStats />
          <LinkedInStats /> */}
        </div>
      </div>
    </section>
  );
}
