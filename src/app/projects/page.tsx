"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Eye, Code2, ExternalLink } from "lucide-react";

const categories = ["All", "Web App", "Landing Page", "UI/UX", "Full Stack"];

const projects = [
  {
    id: 1,
    title: "ShopWave E-Commerce",
    description: "A full-featured e-commerce platform with product catalog, shopping cart, user authentication, and Stripe payment integration.",
    category: "Full Stack",
    tech: ["Next.js", "TypeScript", "Tailwind", "Stripe", "MongoDB"],
    gradient: "from-purple-600 to-blue-600",
    features: ["Payment Integration", "Auth System", "Admin Panel", "Responsive"],
  },
  {
    id: 2,
    title: "CreativeFlow Portfolio",
    description: "A stunning photographer portfolio with smooth page transitions, image lightbox gallery, and contact form.",
    category: "Landing Page",
    tech: ["React", "Framer Motion", "Tailwind"],
    gradient: "from-pink-600 to-rose-600",
    features: ["Animations", "Image Gallery", "SEO Optimized", "Fast Loading"],
  },
  {
    id: 3,
    title: "TaskMaster Pro",
    description: "A productivity app with kanban boards, drag-and-drop task management, real-time collaboration, and progress analytics.",
    category: "Web App",
    tech: ["React", "Redux", "Node.js", "MongoDB"],
    gradient: "from-green-600 to-emerald-600",
    features: ["Drag & Drop", "Real-time Sync", "Analytics", "Team Collab"],
  },
  {
    id: 4,
    title: "Flavor Haven Restaurant",
    description: "A modern restaurant website with online menu, table reservation system, food image gallery, and customer reviews.",
    category: "Landing Page",
    tech: ["Next.js", "Tailwind", "Framer Motion"],
    gradient: "from-orange-500 to-amber-600",
    features: ["Online Menu", "Reservations", "Reviews", "Gallery"],
  },
  {
    id: 5,
    title: "AnalytiQ Dashboard",
    description: "A comprehensive analytics dashboard with interactive charts, data visualization, real-time metrics, and customizable widgets.",
    category: "UI/UX",
    tech: ["React", "TypeScript", "Tailwind"],
    gradient: "from-cyan-600 to-blue-600",
    features: ["Charts", "Real-time Data", "Dark Mode", "Custom Widgets"],
  },
  {
    id: 6,
    title: "ChatConnect Social App",
    description: "A social media application with user profiles, post feeds, stories, real-time messaging, and notifications.",
    category: "UI/UX",
    tech: ["React", "Firebase", "Tailwind", "Framer Motion"],
    gradient: "from-violet-600 to-purple-600",
    features: ["Real-time Chat", "Stories", "Notifications", "Profiles"],
  },
  {
    id: 7,
    title: "FitTrack Health App",
    description: "A fitness tracking web app with workout logging, meal planning, progress charts, and goal setting.",
    category: "Web App",
    tech: ["Next.js", "TypeScript", "MongoDB", "Tailwind"],
    gradient: "from-red-500 to-pink-600",
    features: ["Workout Logs", "Meal Plans", "Progress Charts", "Goals"],
  },
  {
    id: 8,
    title: "BlogSphere CMS",
    description: "A content management system for bloggers with rich text editor, image uploads, categories, tags, and SEO tools.",
    category: "Full Stack",
    tech: ["Next.js", "Node.js", "MongoDB", "TypeScript"],
    gradient: "from-indigo-600 to-blue-600",
    features: ["Rich Editor", "SEO Tools", "Categories", "Markdown"],
  },
];

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = activeFilter === "All" ? projects : projects.filter((p) => p.category === activeFilter);

  return (
    <div className="page-enter">
      <section className="pt-12 pb-8 sm:pt-16 sm:pb-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-purple-600 dark:text-purple-400 mb-3">My recent work</p>
          <h1 className="text-4xl sm:text-5xl font-bold gradient-text mb-4">Projects</h1>
          <p className="text-gray-700 dark:text-gray-300 max-w-xl mx-auto">
            A collection of projects I&apos;ve built, from e-commerce platforms to creative portfolios.
          </p>
        </div>
      </section>

      <section className="py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  activeFilter === cat
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/20"
                    : "bg-gray-100 dark:bg-white/5 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-white/10 hover:border-purple-300 dark:hover:border-purple-500/30"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <motion.div layout className="grid md:grid-cols-2 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="group glass-card rounded-2xl overflow-hidden"
                >
                  <div className={`h-44 bg-gradient-to-br ${project.gradient} relative flex items-center justify-center p-6`}>
                    <div className="text-center text-white">
                      <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                      <span className="text-xs bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm">{project.category}</span>
                    </div>
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100">
                      <span className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center cursor-pointer hover:bg-white/30 transition-colors">
                        <Eye className="w-5 h-5 text-white" />
                      </span>
                      <span className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center cursor-pointer hover:bg-white/30 transition-colors">
                        <Code2 className="w-5 h-5 text-white" />
                      </span>
                      <span className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center cursor-pointer hover:bg-white/30 transition-colors">
                        <ExternalLink className="w-5 h-5 text-white" />
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.features.map((f) => (
                        <span key={f} className="text-xs px-2 py-1 rounded-md bg-gray-100 dark:bg-white/5 text-gray-700 dark:text-gray-300">{f}</span>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-1.5 pt-4 border-t border-gray-200 dark:border-white/5">
                      {project.tech.map((t) => (
                        <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-purple-50 dark:bg-purple-500/10 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-500/20">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Like what you see?</h2>
          <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl text-white font-semibold mt-4">
            Start a Project <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
