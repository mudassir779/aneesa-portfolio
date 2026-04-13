"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Monitor,
  Paintbrush,
  Smartphone,
  Zap,
  LayoutGrid,
  Code2,
  Search,
  Wrench,
  CheckCircle2,
} from "lucide-react";

const services = [
  {
    icon: Monitor,
    title: "Web Development",
    description: "Building modern, fast, and scalable websites using React, Next.js, and other cutting-edge technologies.",
    features: ["Custom website development", "Single Page Applications", "Server-side rendering", "API integration"],
    bg: "bg-purple-50 dark:bg-purple-500/10",
    color: "text-purple-600 dark:text-purple-400",
  },
  {
    icon: Paintbrush,
    title: "UI/UX Design",
    description: "Creating beautiful, intuitive user interfaces that users love. From wireframes to polished designs in Figma.",
    features: ["User interface design", "Wireframing & prototyping", "Design system creation", "User experience research"],
    bg: "bg-pink-50 dark:bg-pink-500/10",
    color: "text-pink-600 dark:text-pink-400",
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    description: "Making sure your website looks and works flawlessly on every device from mobile phones to desktops.",
    features: ["Mobile-first development", "Cross-browser compatibility", "Touch-friendly interfaces", "Adaptive layouts"],
    bg: "bg-green-50 dark:bg-green-500/10",
    color: "text-green-600 dark:text-green-400",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Optimizing website speed using lazy loading, code splitting, image optimization, and caching strategies.",
    features: ["Page speed optimization", "Lazy loading & code splitting", "Image optimization", "Core Web Vitals"],
    bg: "bg-yellow-50 dark:bg-yellow-500/10",
    color: "text-yellow-600 dark:text-yellow-400",
  },
  {
    icon: LayoutGrid,
    title: "Landing Pages",
    description: "Designing high-converting landing pages with compelling visuals, smooth animations, and clear CTAs.",
    features: ["Conversion-focused design", "A/B testing ready", "Engaging animations", "Lead capture forms"],
    bg: "bg-violet-50 dark:bg-violet-500/10",
    color: "text-violet-600 dark:text-violet-400",
  },
  {
    icon: Code2,
    title: "Clean Code",
    description: "Writing maintainable, well-documented, and scalable code following industry standards and best practices.",
    features: ["TypeScript implementation", "Code documentation", "Version control (Git)", "Testing & QA"],
    bg: "bg-cyan-50 dark:bg-cyan-500/10",
    color: "text-cyan-600 dark:text-cyan-400",
  },
  {
    icon: Search,
    title: "SEO Optimization",
    description: "Implementing SEO best practices to improve your website's visibility in search engines.",
    features: ["On-page SEO", "Meta tags & Open Graph", "Sitemap generation", "Structured data"],
    bg: "bg-blue-50 dark:bg-blue-500/10",
    color: "text-blue-600 dark:text-blue-400",
  },
  {
    icon: Wrench,
    title: "Maintenance & Support",
    description: "Providing ongoing website maintenance, bug fixes, feature updates, and technical support.",
    features: ["Bug fixes & updates", "Performance monitoring", "Security patches", "Feature enhancements"],
    bg: "bg-red-50 dark:bg-red-500/10",
    color: "text-red-600 dark:text-red-400",
  },
];

const processSteps = [
  { step: "01", title: "Discovery", desc: "Understanding your goals, audience, and requirements." },
  { step: "02", title: "Design", desc: "Creating wireframes and visuals aligned with your brand." },
  { step: "03", title: "Development", desc: "Building with clean code and modern technologies." },
  { step: "04", title: "Launch", desc: "Testing, optimization, and deploying to the world." },
];

export default function ServicesPage() {
  return (
    <div className="page-enter">
      <section className="pt-12 pb-8 sm:pt-16 sm:pb-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-purple-600 dark:text-purple-400 mb-3">What I offer</p>
          <h1 className="text-4xl sm:text-5xl font-bold gradient-text mb-4">My Services</h1>
          <p className="text-gray-700 dark:text-gray-300 max-w-xl mx-auto">
            I offer a range of web development and design services to help bring your digital vision to life.
          </p>
        </div>
      </section>

      <section className="py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-5">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group glass-card rounded-2xl p-6 sm:p-8"
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 shrink-0 rounded-xl ${service.bg} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <service.icon className={`w-6 h-6 ${service.color}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold mb-2">{service.title}</h3>
                    <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-4">{service.description}</p>
                    <ul className="space-y-1.5">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                          <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 dark:bg-white/[0.02] border-y border-gray-200 dark:border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-2">My Process</h2>
            <p className="text-gray-700 dark:text-gray-300">How I approach every project</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-white font-bold text-lg mx-auto mb-4 shadow-lg shadow-purple-500/20">
                  {step.step}
                </div>
                <h3 className="font-bold mb-1">{step.title}</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <div className="glass-card rounded-3xl p-10 sm:p-14 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/10 dark:to-pink-900/10 !border-purple-200 dark:!border-purple-500/20">
            <h2 className="text-2xl sm:text-4xl font-bold mb-4">Ready to start your project?</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-8 max-w-lg mx-auto">
              Let&apos;s discuss your ideas and bring them to life.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl text-white font-semibold text-lg">
              Let&apos;s Talk <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
