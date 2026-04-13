"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Clock,
  Phone,
  Send,
  MessageCircle,
  CheckCircle2,
  Code2 as GithubIcon,
  Link2,
  AtSign,
} from "lucide-react";

const contactInfo = [
  { icon: Mail, label: "Email", value: "aneesainayat22@gmail.com", detail: "Send me an email anytime", bg: "bg-purple-50 dark:bg-purple-500/10", color: "text-purple-600 dark:text-purple-400" },
  { icon: MapPin, label: "Location", value: "Remote", detail: "Available worldwide", bg: "bg-pink-50 dark:bg-pink-500/10", color: "text-pink-600 dark:text-pink-400" },
  { icon: Clock, label: "Working Hours", value: "Mon - Fri, 9am - 6pm", detail: "PKT (UTC+5)", bg: "bg-blue-50 dark:bg-blue-500/10", color: "text-blue-600 dark:text-blue-400" },
  { icon: Phone, label: "Phone", value: "+92 300 XXXXXXX", detail: "WhatsApp available", bg: "bg-green-50 dark:bg-green-500/10", color: "text-green-600 dark:text-green-400" },
];

const socials = [
  { name: "GitHub", icon: GithubIcon, href: "https://github.com/aneesa319" },
  { name: "LinkedIn", icon: Link2, href: "https://www.linkedin.com/in/aneesa-inayat" },
  { name: "Twitter / X", icon: AtSign, href: "https://x.com/AInayat13400" },
];

const faqs = [
  { q: "What is your typical project timeline?", a: "Most projects take 2-6 weeks depending on complexity. Simple landing pages can be done in 1-2 weeks." },
  { q: "Do you work with clients internationally?", a: "Yes! I work with clients worldwide. Communication is through email, WhatsApp, or video calls." },
  { q: "What technologies do you specialize in?", a: "React, Next.js, TypeScript, and Tailwind CSS for frontend. Node.js, Express, and MongoDB for backend." },
  { q: "Do you provide ongoing support after launch?", a: "Absolutely! I offer maintenance packages including bug fixes, updates, and feature enhancements." },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formsubmit.co/ajax/aneesainayat22@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(Object.fromEntries(data)),
      });
      if (res.ok) {
        setSubmitted(true);
        form.reset();
        setTimeout(() => setSubmitted(false), 5000);
      }
    } catch {
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page-enter">
      <section className="pt-12 pb-8 sm:pt-16 sm:pb-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-purple-600 dark:text-purple-400 mb-3">Get in touch</p>
          <h1 className="text-4xl sm:text-5xl font-bold gradient-text mb-4">Contact Me</h1>
          <p className="text-gray-700 dark:text-gray-300 max-w-xl mx-auto">
            Have a project in mind? I&apos;d love to hear from you.
          </p>
        </div>
      </section>

      <section className="py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {contactInfo.map((info, i) => (
              <motion.div key={info.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 + i * 0.08 }} className="glass-card rounded-xl p-5 text-center">
                <div className={`w-12 h-12 rounded-xl ${info.bg} flex items-center justify-center mx-auto mb-3`}>
                  <info.icon className={`w-6 h-6 ${info.color}`} />
                </div>
                <p className="text-xs text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-1">{info.label}</p>
                <p className="font-semibold text-sm mb-0.5">{info.value}</p>
                <p className="text-xs text-gray-700 dark:text-gray-300">{info.detail}</p>
              </motion.div>
            ))}
          </div>

          <div className="grid lg:grid-cols-5 gap-8">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} className="lg:col-span-3">
              <div className="glass-card rounded-2xl p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-purple-50 dark:bg-purple-500/10 flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <h2 className="font-bold">Send a Message</h2>
                    <p className="text-xs text-gray-700 dark:text-gray-300">I&apos;ll respond within 24 hours</p>
                  </div>
                </div>

                {submitted && (
                  <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-3 p-4 mb-6 rounded-xl bg-green-50 dark:bg-green-500/10 border border-green-200 dark:border-green-500/20">
                    <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400" />
                    <p className="text-sm text-green-700 dark:text-green-300 font-medium">Message sent successfully!</p>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  <input type="hidden" name="_subject" value="New message from portfolio!" />
                  <input type="hidden" name="_template" value="table" />
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1.5">Your Name</label>
                      <input type="text" name="name"
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-500 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all text-sm"
                        placeholder="" required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1.5">Your Email</label>
                      <input type="email" name="email"
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-500 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all text-sm"
                        placeholder="" required />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1.5">Subject</label>
                      <input type="text" name="subject"
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-500 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all text-sm"
                        placeholder="" required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1.5">Budget Range</label>
                      <select name="budget"
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all text-sm">
                        <option value="">Select budget</option>
                        <option value="$500 - $1,000">$500 - $1,000</option>
                        <option value="$1,000 - $3,000">$1,000 - $3,000</option>
                        <option value="$3,000 - $5,000">$3,000 - $5,000</option>
                        <option value="$5,000+">$5,000+</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1.5">Message</label>
                    <textarea rows={5} name="message"
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-500 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all text-sm resize-none"
                      placeholder="" required />
                  </div>
                  <button type="submit" disabled={loading} className="w-full flex items-center justify-center gap-2 py-3.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl text-white font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all disabled:opacity-60">
                    <Send className="w-5 h-5" />
                    {loading ? "Sending..." : "Send Message"}
                  </button>
                </form>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }} className="lg:col-span-2 space-y-6">
              <div className="glass-card rounded-2xl p-6">
                <h3 className="font-bold mb-4">Follow Me</h3>
                <div className="space-y-2">
                  {socials.map((social) => (
                    <a key={social.name} href={social.href}
                      className="flex items-center gap-3 px-4 py-3 rounded-xl bg-gray-50 dark:bg-white/5 text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-all hover:bg-gray-100 dark:hover:bg-white/10">
                      <social.icon className="w-5 h-5" />
                      <span className="text-sm font-medium">{social.name}</span>
                    </a>
                  ))}
                </div>
              </div>

              <div className="glass-card rounded-2xl p-6 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/10 dark:to-pink-900/10 !border-purple-200 dark:!border-purple-500/20">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-sm font-semibold text-green-700 dark:text-green-400">Currently Available</span>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  I&apos;m currently accepting new projects. Average response time is within 24 hours.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 dark:bg-white/[0.02] border-y border-gray-200 dark:border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold mb-2">Frequently Asked Questions</h2>
            <p className="text-gray-700 dark:text-gray-300">Quick answers to common questions</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {faqs.map((faq, i) => (
              <motion.div key={faq.q} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="glass-card rounded-xl p-5">
                <h4 className="font-semibold text-sm mb-2">{faq.q}</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
