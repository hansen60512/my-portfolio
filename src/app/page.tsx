"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [language, setLanguage] = useState("en");
  const [menuOpen, setMenuOpen] = useState(false);
  const items = [
    { slug: "work1", title: language === "en" ? "Project One" : "動畫作品一", thumbnail: "/thumb/thumb1.jpg", desc: language === "en" ? "A cinematic short made with Blender." : "使用 Blender 製作的電影短片。" },
    { slug: "work2", title: language === "en" ? "Project Two" : "動畫作品二", thumbnail: "/thumb/thumb2.jpg", desc: language === "en" ? "UI motion prototype using AE." : "使用 AE 的 UI 動效範例。" },
    { slug: "work3", title: language === "en" ? "Project Three" : "動畫作品三", thumbnail: "/thumb/thumb3.jpg", desc: language === "en" ? "Logo reveal animation for client." : "為客戶設計的 Logo 揭示動畫。" },
    { slug: "work4", title: language === "en" ? "Project Four" : "動畫作品四", thumbnail: "/thumb/thumb4.jpg", desc: language === "en" ? "Music visualizer loop design." : "音樂視覺化循環動畫設計。" },
    { slug: "work5", title: language === "en" ? "Project Five" : "動畫作品五", thumbnail: "/thumb/thumb5.jpg", desc: language === "en" ? "2D character rig with DUIK." : "使用 DUIK 的 2D 角色綁定。" },
    { slug: "work6", title: language === "en" ? "Project Six" : "動畫作品六", thumbnail: "/thumb/thumb6.jpg", desc: language === "en" ? "Experimental glitch title sequence." : "實驗性故障效果標題序列。" },
  ];

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="min-h-screen bg-black text-white relative">
      {/* Hamburger Button */}
      <button
        onClick={() => setMenuOpen(true)}
        className="absolute top-4 right-4 z-50 p-2 text-2xl"
      >
        ☰
      </button>
      {/* Menu Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/80 z-40"
          onClick={closeMenu}
        >
          <div
            className="absolute top-8 right-8 bg-zinc-900 text-white rounded-lg p-6 w-64 space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <Link href="/about">
              <span className="block hover:text-gray-300 cursor-pointer">
                {language === "en" ? "About" : "關於我"}
              </span>
            </Link>
            <Link href="/projects">
              <span className="block hover:text-gray-300 cursor-pointer">
                {language === "en" ? "Projects" : "作品集"}
              </span>
            </Link>
            <a href="mailto:youremail@example.com" className="block hover:text-gray-300">
              {language === "en" ? "Contact" : "聯絡我"}
            </a>
            <div className="mt-4 border-t border-zinc-700 pt-4 flex space-x-4">
              <span
                onClick={() => { setLanguage("en"); closeMenu(); }}
                className={`cursor-pointer ${language === "en" ? "text-white" : "text-zinc-400"}`}
              >
                English
              </span>
              <span
                onClick={() => { setLanguage("zh"); closeMenu(); }}
                className={`cursor-pointer ${language === "zh" ? "text-white" : "text-zinc-400"}`}
              >
                中文
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Gallery Section */}
      <section className="px-4 md:px-8 lg:px-16 pt-24">
        <h2 className="text-3xl font-bold text-center mb-8">
          🎬 {language === "en" ? "My Projects" : "我的作品"}
        </h2>
        <div className="max-w-6xl mx-auto">
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-3">
            {items.map((item, index) => {
              // Layout spans
              let spanClass = '';
              if (index === 0) spanClass = 'col-span-full';
              else if (index === 1) spanClass = 'sm:col-span-2';
              else spanClass = 'sm:col-span-1';

              // Set container size: first two large 16:9, others fixed height
              const containerClasses = index <= 1
                ? 'relative overflow-hidden group cursor-pointer aspect-video'
                : 'relative overflow-hidden group cursor-pointer h-72';

              return (
                <motion.div
                  key={item.slug}
                  className={`${spanClass} ${containerClasses}`}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="w-full h-full overflow-hidden">
                    <motion.img
                      src={item.thumbnail}
                      alt={item.title}
                      className="w-full h-full object-cover transform scale-110 transition-transform duration-700 ease-out group-hover:scale-100"
                    />
                  </div>
                  <div className="absolute inset-0 bg-zinc-900/75 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out">
                    <div className="text-center p-4">
                      <div className="text-lg font-semibold text-white">{item.title}</div>
                      <p className="text-sm text-white mt-2">{item.desc}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-900 text-zinc-400 py-12 mt-12">
        <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-16 text-center space-y-4">
          <p>{language === "en" ? "Contact Me:" : "聯絡我："}</p>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="mailto:youremail@example.com" className="hover:text-white">youremail@example.com</a>
            <a href="https://instagram.com/yourhandle" target="_blank" className="hover:text-white">@yourhandle</a>
            <a href="https://github.com/yourhandle" target="_blank" className="hover:text-white">GitHub</a>
          </div>
          <p className="text-sm">© {new Date().getFullYear()} Your Name.</p>
        </div>
      </footer>
    </main>
  );
}
