"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Eye, Code2, ExternalLink } from "lucide-react";

const categories = ["All", "Web App", "Landing Page", "UI/UX", "Full Stack"];

const projects = [
  {
    id: 1,
    title: "ShopWave E-Commerce",
    description: "A full-featured e-commerce platform with product catalog, shopping cart, user authentication, and Stripe payment integration. Includes admin dashboard for managing products and orders.",
    category: "Full Stack",
    tech: ["Next.js", "TypeScript", "Tailwind", "Stripe", "MongoDB"],
    image: "/projects/ecommerce.svg",
    features: ["Payment Integration", "Auth System", "Admin Panel", "Responsive"],
    requirements: [
      "Product catalog with search & filters",
      "Shopping cart with quantity management",
      "Secure checkout with Stripe",
      "User registration & login",
      "Admin dashboard for CRUD operations",
      "Order tracking & history",
    ],
  },
  {
    id: 2,
    title: "CreativeFlow Portfolio",
    description: "A stunning photographer portfolio with smooth page transitions, image lightbox gallery, lazy loading, and contact form with email integration.",
    category: "Landing Page",
    tech: ["React", "Framer Motion", "Tailwind"],
    image: "/projects/portfolio.svg",
    features: ["Animations", "Image Gallery", "SEO Optimized", "Fast Loading"],
    requirements: [
      "Responsive image gallery with lightbox",
      "Smooth page transitions & scroll animations",
      "Contact form with validation",
      "SEO optimized meta tags",
      "Lazy loading for performance",
      "Mobile-first responsive design",
    ],
  },
  {
    id: 3,
    title: "TaskMaster Pro",
    description: "A productivity app with kanban boards, drag-and-drop task management, real-time collaboration, progress analytics, and deadline reminders.",
    category: "Web App",
    tech: ["React", "Redux", "Node.js", "MongoDB"],
    image: "/projects/taskmanager.svg",
    features: ["Drag & Drop", "Real-time Sync", "Analytics", "Team Collab"],
    requirements: [
      "Kanban board with drag-and-drop",
      "Task creation, editing & deletion",
      "Team member assignment",
      "Progress tracking & analytics",
      "Deadline notifications",
      "Real-time updates via WebSocket",
    ],
  },
  {
    id: 4,
    title: "Flavor Haven Restaurant",
    description: "A modern restaurant website with online menu, table reservation system, food image gallery, customer reviews, and location map integration.",
    category: "Landing Page",
    tech: ["Next.js", "Tailwind", "Framer Motion"],
    image: "/projects/restaurant.svg",
    features: ["Online Menu", "Reservations", "Reviews", "Gallery"],
    requirements: [
      "Interactive menu with categories",
      "Online table reservation form",
      "Customer reviews & ratings",
      "Photo gallery of dishes",
      "Google Maps integration",
      "Mobile responsive layout",
    ],
  },
  {
    id: 5,
    title: "AnalytiQ Dashboard",
    description: "A comprehensive analytics dashboard with interactive charts, data visualization, real-time metrics, customizable widgets, and export functionality.",
    category: "UI/UX",
    tech: ["React", "TypeScript", "Tailwind"],
    image: "/projects/dashboard.svg",
    features: ["Charts", "Real-time Data", "Dark Mode", "Custom Widgets"],
    requirements: [
      "Interactive bar, line & pie charts",
      "Real-time data refresh",
      "Customizable dashboard widgets",
      "Dark/Light mode toggle",
      "Data export to CSV/PDF",
      "Responsive sidebar navigation",
    ],
  },
  {
    id: 6,
    title: "ChatConnect Social App",
    description: "A social media application with user profiles, post feeds, stories, real-time messaging, notifications, and media sharing capabilities.",
    category: "UI/UX",
    tech: ["React", "Firebase", "Tailwind", "Framer Motion"],
    image: "/projects/socialapp.svg",
    features: ["Real-time Chat", "Stories", "Notifications", "Profiles"],
    requirements: [
      "User profile with bio & avatar",
      "Post feed with like & comment",
      "Stories feature with auto-expire",
      "Real-time messaging system",
      "Push notifications",
      "Image & video upload",
    ],
  },
  {
    id: 7,
    title: "FitTrack Health App",
    description: "A fitness tracking web app with workout logging, meal planning, progress charts, goal setting, and personalized workout recommendations.",
    category: "Web App",
    tech: ["Next.js", "TypeScript", "MongoDB", "Tailwind"],
    image: "/projects/fitness.svg",
    features: ["Workout Logs", "Meal Plans", "Progress Charts", "Goals"],
    requirements: [
      "Workout logging with exercise library",
      "Meal planner with calorie tracking",
      "Progress charts & body measurements",
      "Goal setting with milestones",
      "Workout history & statistics",
      "Responsive mobile-friendly design",
    ],
  },
  {
    id: 8,
    title: "BlogSphere CMS",
    description: "A content management system for bloggers with rich text editor, image uploads, categories, tags, SEO tools, and scheduled publishing.",
    category: "Full Stack",
    tech: ["Next.js", "Node.js", "MongoDB", "TypeScript"],
    image: "/projects/blog.svg",
    features: ["Rich Editor", "SEO Tools", "Categories", "Markdown"],
    requirements: [
      "Rich text editor with formatting",
      "Image upload & management",
      "Categories & tags system",
      "SEO meta editor per post",
      "Scheduled post publishing",
      "Author profiles & permissions",
    ],
  },
];

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [expandedId, setExpandedId] = useState<number | null>(null);

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
                  {/* Project Image */}
                  <div className="relative h-52 overflow-hidden bg-gray-100 dark:bg-gray-900">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100">
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
                    {/* Category badge */}
                    <span className="absolute top-3 right-3 text-xs bg-white/90 dark:bg-black/70 backdrop-blur-sm px-3 py-1 rounded-full font-medium text-gray-800 dark:text-gray-200">
                      {project.category}
                    </span>
                  </div>

                  {/* Card body */}
                  <div className="p-6">
                    <h3 className="text-lg font-bold mb-2">{project.title}</h3>
                    <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-4">{project.description}</p>

                    {/* Features */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.features.map((f) => (
                        <span key={f} className="text-xs px-2 py-1 rounded-md bg-gray-100 dark:bg-white/5 text-gray-700 dark:text-gray-300">{f}</span>
                      ))}
                    </div>

                    {/* Requirements toggle */}
                    <button
                      onClick={() => setExpandedId(expandedId === project.id ? null : project.id)}
                      className="text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline mb-3 flex items-center gap-1"
                    >
                      {expandedId === project.id ? "Hide" : "View"} Requirements
                      <svg
                        className={`w-4 h-4 transition-transform ${expandedId === project.id ? "rotate-180" : ""}`}
                        fill="none" stroke="currentColor" viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    {/* Requirements list */}
                    <AnimatePresence>
                      {expandedId === project.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <ul className="space-y-1.5 mb-4 pl-1">
                            {project.requirements.map((req) => (
                              <li key={req} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                                <span className="text-green-500 mt-0.5">&#10003;</span>
                                {req}
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-1.5 pt-4 border-t border-gray-200 dark:border-white/5">
                      {project.tech.map((t) => (
                        <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-purple-50 dark:bg-purple-500/10 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-500/20 font-medium">
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
