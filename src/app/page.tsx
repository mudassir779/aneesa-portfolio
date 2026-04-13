"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import {
  ArrowRight,
  ArrowDown,
  Code2,
  Paintbrush,
  Smartphone,
  Rocket,
} from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Web Development",
    desc: "Modern & responsive websites",
    color: "text-blue-500",
    bg: "bg-blue-50 dark:bg-blue-500/10",
  },
  {
    icon: Paintbrush,
    title: "UI/UX Design",
    desc: "Beautiful user interfaces",
    color: "text-pink-500",
    bg: "bg-pink-50 dark:bg-pink-500/10",
  },
  {
    icon: Smartphone,
    title: "Responsive",
    desc: "Mobile-first approach",
    color: "text-green-500",
    bg: "bg-green-50 dark:bg-green-500/10",
  },
  {
    icon: Rocket,
    title: "Performance",
    desc: "Fast & optimized code",
    color: "text-purple-500",
    bg: "bg-purple-50 dark:bg-purple-500/10",
  },
];

const techStack = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Tailwind",
  "Node.js",
  "Figma",
  "GitHub",
];

export default function Home() {
  return (
    <div className="page-enter">
      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-4rem)] flex items-center overflow-hidden bg-grid">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{ x: [0, 80, -40, 0], y: [0, -60, 40, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-400/10 dark:bg-purple-600/15 rounded-full blur-[100px]"
          />
          <motion.div
            animate={{ x: [0, -60, 40, 0], y: [0, 80, -40, 0] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-400/10 dark:bg-pink-600/15 rounded-full blur-[100px]"
          />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 dark:bg-green-500/10 border border-green-200 dark:border-green-500/20 mb-6">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-sm text-green-700 dark:text-green-400 font-medium">
                  Available for freelance work
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4">
                Hi, I&apos;m <span className="gradient-text">Aneesa</span>
              </h1>

              <div className="text-xl sm:text-2xl text-gray-700 dark:text-gray-300 mb-6 h-8">
                <TypeAnimation
                  sequence={[
                    "Web Developer",
                    2500,
                    "UI/UX Designer",
                    2500,
                    "Frontend Specialist",
                    2500,
                    "Creative Problem Solver",
                    2500,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                  className="font-light"
                />
              </div>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8 max-w-lg">
                I craft pixel-perfect, responsive websites with clean code and
                stunning design. Passionate about creating digital experiences
                that leave a lasting impression.
              </p>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl text-white font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all"
                >
                  View My Work
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-gray-300 dark:border-white/15 font-semibold hover:bg-gray-50 dark:hover:bg-white/5 transition-all"
                >
                  Get In Touch
                </Link>
              </div>

              {/* Tech stack */}
              <div className="mt-10 pt-8 border-t border-gray-200 dark:border-white/10">
                <p className="text-xs uppercase tracking-widest text-gray-700 dark:text-gray-300 mb-4">
                  Tech Stack
                </p>
                <div className="flex flex-wrap gap-2">
                  {techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 rounded-lg bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-xs font-semibold text-gray-900 dark:text-white"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right: Photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="hidden lg:flex justify-center"
            >
              <div className="relative w-80 h-80">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 rounded-full border border-dashed border-purple-300/30 dark:border-purple-500/20"
                />
                <div className="absolute inset-8 rounded-3xl overflow-hidden shadow-2xl shadow-purple-500/20 ring-4 ring-purple-500/20">
                  <Image
                    src="/aneesa.jpg"
                    alt="Aneesa"
                    fill
                    className="object-cover"
                    sizes="256px"
                    priority
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2"
        >
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }}>
            <ArrowDown className="w-5 h-5 text-gray-400" />
          </motion.div>
        </motion.div>
      </section>

      {/* Quick Highlights */}
      <section className="py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card rounded-2xl p-6 group hover:scale-[1.02] transition-all"
              >
                <div className={`w-12 h-12 rounded-xl ${item.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <item.icon className={`w-6 h-6 ${item.color}`} />
                </div>
                <h3 className="font-semibold mb-1">{item.title}</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-700 dark:text-gray-300 mb-4">Want to know more?</p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { label: "About Me", href: "/about" },
                { label: "My Skills", href: "/skills" },
                { label: "Services", href: "/services" },
              ].map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-sm font-medium hover:border-purple-300 dark:hover:border-purple-500/30 transition-all"
                >
                  {link.label}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
