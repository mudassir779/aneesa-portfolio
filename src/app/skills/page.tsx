"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ArrowRight } from "lucide-react";

const frontendSkills = [
  { name: "HTML5", level: 95, color: "#E34F26" },
  { name: "CSS3", level: 92, color: "#1572B6" },
  { name: "JavaScript", level: 88, color: "#F7DF1E" },
  { name: "TypeScript", level: 80, color: "#3178C6" },
  { name: "React.js", level: 90, color: "#61DAFB" },
  { name: "Next.js", level: 85, color: "#888888" },
  { name: "Tailwind CSS", level: 92, color: "#06B6D4" },
  { name: "Bootstrap", level: 85, color: "#7952B3" },
  { name: "Sass/SCSS", level: 80, color: "#CC6699" },
  { name: "Redux", level: 75, color: "#764ABC" },
  { name: "Framer Motion", level: 78, color: "#0055FF" },
  { name: "Vite", level: 82, color: "#646CFF" },
];

const backendSkills = [
  { name: "Node.js", level: 78, color: "#339933" },
  { name: "Express.js", level: 75, color: "#555555" },
  { name: "MongoDB", level: 72, color: "#47A248" },
  { name: "Firebase", level: 76, color: "#FFCA28" },
];

const tools = [
  {
    name: "VS Code",
    desc: "Primary code editor",
    icon: <svg viewBox="0 0 24 24" className="w-6 h-6" fill="#007ACC"><path d="M17.583 2.29L12.6 7.28l-4.77-3.65L2 6.24v11.52l5.83 2.61 4.77-3.65 4.983 4.99L24 18.63V5.37l-6.417-3.08zM7.83 15.9L4.5 14.1V9.9l3.33-1.8v7.8zm5.77-3.9l-3.77 2.9V9.1l3.77 2.9zm5.9 3.6l-3.33 1.6V6.8l3.33 1.6v7.2z"/></svg>,
  },
  {
    name: "Git",
    desc: "Version control",
    icon: <svg viewBox="0 0 24 24" className="w-6 h-6" fill="#F05032"><path d="M23.546 10.93L13.067.452a1.55 1.55 0 00-2.188 0L8.708 2.627l2.76 2.76a1.838 1.838 0 012.327 2.341l2.66 2.66a1.838 1.838 0 11-1.103 1.05l-2.48-2.48v6.53a1.838 1.838 0 11-1.512-.065V8.71a1.839 1.839 0 01-.998-2.41L7.629 3.57.452 10.746a1.55 1.55 0 000 2.188l10.48 10.48a1.55 1.55 0 002.186 0l10.428-10.428a1.55 1.55 0 000-2.188z"/></svg>,
  },
  {
    name: "GitHub",
    desc: "Code hosting",
    icon: <svg viewBox="0 0 24 24" className="w-6 h-6 fill-gray-900 dark:fill-white"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>,
  },
  {
    name: "Figma",
    desc: "UI/UX design",
    icon: <svg viewBox="0 0 24 24" className="w-6 h-6"><path d="M5 5.5A3.5 3.5 0 018.5 2H12v7H8.5A3.5 3.5 0 015 5.5z" fill="#F24E1E"/><path d="M12 2h3.5a3.5 3.5 0 010 7H12V2z" fill="#FF7262"/><path d="M12 9.5h3.5a3.5 3.5 0 010 7H12V9.5z" fill="#1ABCFE"/><path d="M5 19.5A3.5 3.5 0 018.5 16H12v3.5a3.5 3.5 0 01-7 0z" fill="#0ACF83"/><path d="M5 12.5A3.5 3.5 0 018.5 9H12v7H8.5A3.5 3.5 0 015 12.5z" fill="#A259FF"/></svg>,
  },
  {
    name: "npm",
    desc: "Package manager",
    icon: <svg viewBox="0 0 24 24" className="w-6 h-6" fill="#CB3837"><path d="M0 7.334v8h6.666v1.332H12v-1.332h12v-8H0zm6.666 6.664H5.334V10H3.998v4H1.334V8.666h5.332v5.332zm4 0h-2.666V14h-1.334V8.666h4v5.332zm12-5.332v5.332h-2.666V10h-1.334v3.998h-1.332V10h-1.334v4h-2.666V8.666h9.332z"/></svg>,
  },
  {
    name: "Vercel",
    desc: "Deployment",
    icon: <svg viewBox="0 0 24 24" className="w-6 h-6 fill-gray-900 dark:fill-white"><path d="M12 1L24 22H0L12 1z"/></svg>,
  },
  {
    name: "Postman",
    desc: "API testing",
    icon: <svg viewBox="0 0 24 24" className="w-6 h-6" fill="#FF6C37"><path d="M13.527.099C6.955-.744.942 3.9.099 10.473c-.843 6.572 3.8 12.584 10.373 13.428 6.573.843 12.587-3.801 13.428-10.374C24.744 6.955 20.101.943 13.527.099zm2.471 7.485a.855.855 0 011.264.091.855.855 0 01-.091 1.264.855.855 0 01-1.264-.091.856.856 0 01.091-1.264zM7.619 12.162l3.294-3.294 4.119 4.119-3.294 3.294-4.119-4.119zm9.253-4.859l-1.742 1.742-4.119-4.119 1.742-1.742c.476-.476 1.248-.476 1.724 0l2.395 2.395c.476.476.476 1.248 0 1.724z"/></svg>,
  },
  {
    name: "Notion",
    desc: "Project management",
    icon: <svg viewBox="0 0 24 24" className="w-6 h-6 fill-gray-900 dark:fill-white"><path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L18.29 2.29c-.42-.326-.98-.7-2.055-.607L3.01 2.83c-.466.046-.56.28-.374.466l1.823 1.912zm.793 3.358v13.856c0 .746.373 1.026 1.213.98l14.523-.84c.84-.046.933-.56.933-1.166V6.63c0-.606-.233-.933-.746-.886l-15.177.886c-.56.047-.746.327-.746.933zm14.337.373c.093.42 0 .84-.42.886l-.7.14v10.264c-.607.327-1.166.513-1.633.513-.746 0-.933-.233-1.493-.933l-4.572-7.179v6.946l1.446.327s0 .84-1.166.84l-3.218.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.093-.42.14-1.026.746-1.073l3.452-.233 4.759 7.272V9.527l-1.213-.14c-.093-.513.28-.886.746-.933l3.219-.186z"/></svg>,
  },
  {
    name: "Canva",
    desc: "Graphic design",
    icon: <svg viewBox="0 0 24 24" className="w-6 h-6" fill="#00C4CC"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.14 16.47c-.84 1.26-2.1 1.98-3.36 1.98-1.68 0-2.94-1.26-2.94-3.18 0-2.82 2.1-5.82 5.1-5.82.96 0 1.56.42 1.56 1.14 0 .54-.36.96-.78.96-.18 0-.36-.06-.48-.18.12-.24.18-.48.18-.72 0-.42-.24-.66-.66-.66-1.44 0-3.06 2.28-3.06 4.68 0 1.26.6 2.16 1.74 2.16.84 0 1.62-.54 2.22-1.38l.42.42z"/></svg>,
  },
  {
    name: "Chrome DevTools",
    desc: "Debugging",
    icon: <svg viewBox="0 0 24 24" className="w-6 h-6"><circle cx="12" cy="12" r="4.5" fill="#4285F4"/><path d="M12 3a9 9 0 00-7.794 4.5h7.294L15 12l3.5-6.062A8.977 8.977 0 0012 3z" fill="#EA4335"/><path d="M4.206 7.5A9 9 0 003 12a9 9 0 004.206 7.5L10.5 13 7.5 7.5H4.206z" fill="#FBBC05"/><path d="M12 21a9 9 0 007.794-4.5H12.5L9 12l-1.794 7.5A8.96 8.96 0 0012 21z" fill="#34A853"/></svg>,
  },
];

function SkillBar({ name, level, color, delay, inView }: { name: string; level: number; color: string; delay: number; inView: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay }}
      className="glass-card rounded-xl p-4 hover:scale-[1.02] transition-all"
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 rounded-full" style={{ background: color }} />
          <span className="text-sm font-semibold">{name}</span>
        </div>
        <span className="text-xs font-mono text-gray-500">{level}%</span>
      </div>
      <div className="h-2 bg-gray-200 dark:bg-white/5 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : {}}
          transition={{ duration: 1, delay: delay + 0.2, ease: "easeOut" }}
          className="h-full rounded-full"
          style={{ background: `linear-gradient(90deg, ${color}, ${color}88)` }}
        />
      </div>
    </motion.div>
  );
}

export default function SkillsPage() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <div className="page-enter">
      <section className="pt-12 pb-8 sm:pt-16 sm:pb-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-purple-600 dark:text-purple-400 mb-3">What I work with</p>
          <h1 className="text-4xl sm:text-5xl font-bold gradient-text mb-4">Skills & Technologies</h1>
          <p className="text-gray-700 dark:text-gray-300 max-w-xl mx-auto">
            A comprehensive overview of my technical skills, tools, and technologies I use to build amazing web experiences.
          </p>
        </div>
      </section>

      <section className="py-12" ref={ref}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Frontend */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-500/10 flex items-center justify-center text-blue-500 font-bold text-lg">F</div>
              <div>
                <h2 className="text-xl font-bold">Frontend Development</h2>
                <p className="text-sm text-gray-700 dark:text-gray-300">Languages, frameworks & libraries</p>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {frontendSkills.map((skill, i) => (
                <SkillBar key={skill.name} {...skill} delay={0.1 + i * 0.05} inView={inView} />
              ))}
            </div>
          </div>

          {/* Backend */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-green-50 dark:bg-green-500/10 flex items-center justify-center text-green-500 font-bold text-lg">B</div>
              <div>
                <h2 className="text-xl font-bold">Backend & Database</h2>
                <p className="text-sm text-gray-700 dark:text-gray-300">Server-side technologies</p>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {backendSkills.map((skill, i) => (
                <SkillBar key={skill.name} {...skill} delay={0.4 + i * 0.05} inView={inView} />
              ))}
            </div>
          </div>

          {/* Tools */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-purple-50 dark:bg-purple-500/10 flex items-center justify-center text-purple-500 font-bold text-lg">T</div>
              <div>
                <h2 className="text-xl font-bold">Tools & Platforms</h2>
                <p className="text-sm text-gray-700 dark:text-gray-300">Software I use daily</p>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3">
              {tools.map((tool, i) => (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.6 + i * 0.04 }}
                  className="glass-card rounded-xl p-4 text-center cursor-default hover:scale-105 transition-all flex flex-col items-center gap-2"
                >
                  {tool.icon}
                  <p className="text-sm font-semibold">{tool.name}</p>
                  <p className="text-xs text-gray-700 dark:text-gray-300">{tool.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Currently Learning */}
          <div className="mt-16 glass-card rounded-2xl p-8 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/10 dark:to-pink-900/10 !border-purple-200 dark:!border-purple-500/20">
            <h3 className="text-lg font-bold mb-2">Currently Learning</h3>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">Always expanding my knowledge and staying up-to-date.</p>
            <div className="flex flex-wrap gap-2">
              {["Three.js", "Web Animations API", "GraphQL", "Docker", "AWS"].map((tech) => (
                <span key={tech} className="px-3 py-1.5 rounded-full bg-purple-100 dark:bg-purple-500/10 text-purple-700 dark:text-purple-300 text-xs font-medium border border-purple-200 dark:border-purple-500/20">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Interested in working together?</h2>
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            <Link href="/projects" className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl text-white font-semibold">
              View Projects <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-gray-300 dark:border-white/15 font-semibold">
              Contact Me <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
