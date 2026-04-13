"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Home,
  User,
  Lightbulb,
  Briefcase,
  Sparkles,
  Mail,
  Code2,
  Link2,
  AtSign,
} from "lucide-react";

const quickLinks = [
  { name: "Home", href: "/", icon: Home },
  { name: "About", href: "/about", icon: User },
  { name: "Skills", href: "/skills", icon: Lightbulb },
  { name: "Projects", href: "/projects", icon: Briefcase },
  { name: "Services", href: "/services", icon: Sparkles },
  { name: "Contact", href: "/contact", icon: Mail },
];

const socials = [
  { name: "GitHub", icon: Code2, href: "https://github.com/aneesa319" },
  { name: "LinkedIn", icon: Link2, href: "https://www.linkedin.com/in/aneesa-inayat" },
  { name: "Twitter", icon: AtSign, href: "https://x.com/AInayat13400" },
];

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-white/5 bg-gray-50 dark:bg-[#030303] transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl overflow-hidden relative">
                <Image src="/aneesa.jpg" alt="Aneesa" fill className="object-cover" sizes="36px" />
              </div>
              <span className="text-lg font-bold">
                Aneesa<span className="text-purple-600 dark:text-purple-400">.</span>
              </span>
            </Link>
            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
              Creative web developer crafting beautiful digital experiences with modern technologies.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                  >
                    <link.icon className="w-4 h-4" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
              <li>Web Development</li>
              <li>UI/UX Design</li>
              <li>Responsive Design</li>
              <li>Landing Pages</li>
              <li>Performance Optimization</li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Connect</h4>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">aneesainayat22@gmail.com</p>
            <div className="flex gap-2">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-9 h-9 rounded-lg bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 hover:border-purple-300 dark:hover:border-purple-500/30 transition-all"
                  aria-label={social.name}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-200 dark:border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-700 dark:text-gray-300">
            &copy; {new Date().getFullYear()} Aneesa. All rights reserved.
          </p>
          <p className="text-xs text-gray-700 dark:text-gray-300">
            Designed & Built with <span className="text-pink-500">&#9829;</span> by Aneesa
          </p>
        </div>
      </div>
    </footer>
  );
}
