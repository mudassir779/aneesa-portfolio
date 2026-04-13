"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  GraduationCap,
  Briefcase,
  Heart,
  MapPin,
  Mail,
  Calendar,
  ArrowRight,
  CheckCircle2,
  BookOpen,
  Globe,
} from "lucide-react";

const personalInfo = [
  { icon: Mail, label: "Email", value: "aneesainayat22@gmail.com" },
  { icon: GraduationCap, label: "Education", value: "BS Computer Science" },
  { icon: Calendar, label: "Experience", value: "2+ Years" },
  { icon: Globe, label: "Languages", value: "English, Urdu" },
  { icon: Briefcase, label: "Status", value: "Available for work" },
];

const timeline = [
  {
    year: "2024 - Present",
    title: "Freelance Web Developer",
    company: "Self Employed",
    desc: "Building modern websites and web applications for clients worldwide using React, Next.js, and Tailwind CSS.",
    icon: Briefcase,
    color: "from-purple-500 to-pink-500",
  },
  {
    year: "2023 - 2024",
    title: "Frontend Developer Intern",
    company: "Tech Company",
    desc: "Worked on building responsive UI components, improving website performance, and collaborating with design teams.",
    icon: BookOpen,
    color: "from-blue-500 to-cyan-500",
  },
  {
    year: "2022 - Present",
    title: "BS Computer Science",
    company: "University",
    desc: "Studying computer science with a focus on web technologies, algorithms, and software engineering principles.",
    icon: GraduationCap,
    color: "from-green-500 to-emerald-500",
  },
];

const interests = ["Clean Code", "UI Design", "Photography", "Open Source", "Typography", "Reading", "Music", "Travel"];

const stats = [
  { number: "20+", label: "Projects Completed" },
  { number: "15+", label: "Happy Clients" },
  { number: "2+", label: "Years Experience" },
  { number: "500+", label: "Cups of Coffee" },
];

export default function AboutPage() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div className="page-enter">
      <section className="pt-12 pb-8 sm:pt-16 sm:pb-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-purple-600 dark:text-purple-400 mb-3">Get to know me</p>
          <h1 className="text-4xl sm:text-5xl font-bold gradient-text mb-4">About Me</h1>
          <p className="text-gray-700 dark:text-gray-300 max-w-xl mx-auto">
            A passionate web developer who loves turning ideas into beautiful, functional digital experiences.
          </p>
        </div>
      </section>

      <section className="py-12" ref={ref}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Profile Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <div className="glass-card rounded-2xl overflow-hidden sticky top-24">
                <div className="h-32 bg-gradient-to-r from-purple-600 to-pink-600 relative">
                  <div className="absolute -bottom-12 left-6">
                    <div className="w-24 h-24 rounded-2xl overflow-hidden border-4 border-white dark:border-gray-900 shadow-xl relative">
                      <Image src="/aneesa.jpg" alt="Aneesa" fill className="object-cover" sizes="96px" />
                    </div>
                  </div>
                </div>

                <div className="pt-16 p-6">
                  <h2 className="text-xl font-bold">Aneesa</h2>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mb-6">Web Developer & Designer</p>

                  <div className="space-y-3">
                    {personalInfo.map((info) => (
                      <div key={info.label} className="flex items-center gap-3">
                        <info.icon className="w-4 h-4 text-purple-500 shrink-0" />
                        <div className="flex-1 min-w-0">
                          <p className="text-xs text-gray-700 dark:text-gray-300">{info.label}</p>
                          <p className="text-sm font-medium truncate">{info.value}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <Link
                    href="/contact"
                    className="mt-6 w-full flex items-center justify-center gap-2 px-5 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl text-white font-semibold text-sm hover:shadow-lg hover:shadow-purple-500/25 transition-all"
                  >
                    <Mail className="w-4 h-4" />
                    Get In Touch
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-3 space-y-12"
            >
              <div>
                <h3 className="text-2xl font-bold mb-4">
                  A passionate <span className="gradient-text">Web Developer</span>
                </h3>
                <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                  <p>
                    Hi! I&apos;m Aneesa, a creative and detail-oriented web developer. I specialize in building modern, responsive, and user-friendly websites using cutting-edge technologies like React, Next.js, TypeScript, and Tailwind CSS.
                  </p>
                  <p>
                    My journey into web development started with a curiosity about how websites work. That curiosity turned into a passion for creating beautiful digital experiences. I believe that great websites are built at the intersection of stunning design and clean, efficient code.
                  </p>
                  <p>
                    When I&apos;m not coding, you can find me exploring new design trends, contributing to open-source projects, or learning about the latest web technologies.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-purple-500" />
                  What I Believe In
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { title: "Clean Code", desc: "Writing readable, maintainable code is just as important as making it work." },
                    { title: "User First", desc: "Every design decision should serve the user experience above all else." },
                    { title: "Continuous Learning", desc: "The web evolves fast. Staying curious is the key to staying relevant." },
                    { title: "Attention to Detail", desc: "The little things matter. Pixel-perfect design creates big impressions." },
                  ].map((item) => (
                    <div key={item.title} className="glass-card rounded-xl p-4">
                      <h4 className="font-semibold text-sm mb-1">{item.title}</h4>
                      <p className="text-xs text-gray-700 dark:text-gray-300">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-purple-500" />
                  My Journey
                </h3>
                <div className="space-y-6">
                  {timeline.map((item, i) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, x: 20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.4 + i * 0.15 }}
                      className="flex gap-4"
                    >
                      <div className={`w-12 h-12 shrink-0 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white shadow-lg`}>
                        <item.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-xs text-purple-600 dark:text-purple-400 font-medium mb-1">{item.year}</p>
                        <h4 className="font-semibold">{item.title}</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300">{item.company}</p>
                        <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Heart className="w-5 h-5 text-pink-500" />
                  Interests
                </h3>
                <div className="flex flex-wrap gap-2">
                  {interests.map((interest) => (
                    <span key={interest} className="px-4 py-2 rounded-full bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-sm font-medium">
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gray-50 dark:bg-white/[0.02] border-y border-gray-200 dark:border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <motion.div key={stat.label} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center">
                <p className="text-3xl sm:text-4xl font-bold gradient-text mb-1">{stat.number}</p>
                <p className="text-sm text-gray-700 dark:text-gray-300">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Want to see what I can do?</h2>
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            <Link href="/skills" className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl text-white font-semibold">
              My Skills <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/projects" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-gray-300 dark:border-white/15 font-semibold">
              My Projects <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
