"use client";

import GitHubStats from "./githubstats";
import { motion } from "framer-motion";

export default function SocialSection() {
  return (
    <section id="social" className="py-32 relative bg-mesh overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-indigo-500 font-semibold tracking-widest uppercase text-sm mb-4 block">
            Connectivity
          </span>
          <h2 className="text-4xl md:text-6xl font-outfit font-bold tracking-tighter">
            Digital <span className="text-gradient-primary">Presence</span>
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto glass-card p-8 rounded-[3rem] border-white/5 shadow-2xl">
          <GitHubStats />
        </div>
      </div>
    </section>
  );
}
