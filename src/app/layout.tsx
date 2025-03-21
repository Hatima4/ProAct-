"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-black text-white min-h-screen`}>
        <div className="fixed inset-0 bg-[linear-gradient(to_bottom_right,#000000,#000000,#000000)] pointer-events-none"></div>
        <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.8),rgba(0,0,0,1))] pointer-events-none"></div>
        <div className="fixed inset-0 bg-grid-dark opacity-[0.15] pointer-events-none"></div>
        <nav className="fixed w-full bg-black/90 backdrop-blur-sm z-50 border-b border-white/5">
          <div className="max-w-[1400px] mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="text-xl font-bold text-white flex items-center">
                <svg
                  className="w-6 h-6 mr-2 text-blue-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
                Zeriux Labs
              </div>
              <div className="hidden md:flex items-center space-x-8">
                <a
                  href="#"
                  className="text-sm text-gray-300 hover:text-white transition-colors"
                >
                  Product
                </a>
                <a
                  href="#"
                  className="text-sm text-gray-300 hover:text-white transition-colors"
                >
                  Why Zeriux
                </a>
                <a
                  href="#"
                  className="text-sm text-gray-300 hover:text-white transition-colors"
                >
                  Developers
                </a>
                <a
                  href="#"
                  className="text-sm text-gray-300 hover:text-white transition-colors"
                >
                  Enterprise
                </a>
                <a
                  href="#"
                  className="text-sm text-gray-300 hover:text-white transition-colors"
                >
                  Docs
                </a>
                <div className="flex items-center space-x-4 ml-4">
                  <a
                    href="https://github.com/zeriuxlabs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.009-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"
                      />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="text-sm text-gray-300 hover:text-white transition-colors"
                  >
                    Login
                  </a>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-600 transition-colors"
                  >
                    Get Started
                  </motion.button>
                </div>
              </div>
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden relative z-50"
              >
                <div className="w-6 h-6 flex flex-col justify-center items-center">
                  <span
                    className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                      isMenuOpen ? "rotate-45 translate-y-1" : ""
                    }`}
                  ></span>
                  <span
                    className={`block w-6 h-0.5 bg-white mt-1.5 transition-all duration-300 ${
                      isMenuOpen ? "opacity-0" : ""
                    }`}
                  ></span>
                  <span
                    className={`block w-6 h-0.5 bg-white mt-1.5 transition-all duration-300 ${
                      isMenuOpen ? "-rotate-45 -translate-y-1" : ""
                    }`}
                  ></span>
                </div>
              </motion.button>
            </div>
          </div>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed inset-0 bg-black z-40 md:hidden"
            >
              <div className="container mx-auto px-6 py-24">
                <div className="flex flex-col space-y-6">
                  <a
                    href="#"
                    className="text-lg text-gray-300 hover:text-white transition-colors"
                  >
                    Product
                  </a>
                  <a
                    href="#"
                    className="text-lg text-gray-300 hover:text-white transition-colors"
                  >
                    Why Zeriux
                  </a>
                  <a
                    href="#"
                    className="text-lg text-gray-300 hover:text-white transition-colors"
                  >
                    Developers
                  </a>
                  <a
                    href="#"
                    className="text-lg text-gray-300 hover:text-white transition-colors"
                  >
                    Enterprise
                  </a>
                  <a
                    href="#"
                    className="text-lg text-gray-300 hover:text-white transition-colors"
                  >
                    Docs
                  </a>
                  <div className="pt-6 border-t border-white/5">
                    <a
                      href="#"
                      className="text-lg text-gray-300 hover:text-white transition-colors block mb-4"
                    >
                      Login
                    </a>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-blue-500 text-white w-full py-3 rounded-lg text-lg font-medium hover:bg-blue-600 transition-colors"
                    >
                      Get Started
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="relative">{children}</div>

        <footer className="relative bg-black text-white py-16 mt-20 border-t border-white/5">
          <div className="max-w-[1400px] mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
              <div>
                <div className="flex items-center mb-4">
                  <svg
                    className="w-6 h-6 mr-2 text-blue-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                  <h3 className="text-xl font-bold">Zeriux Labs</h3>
                </div>
                <p className="text-gray-400 text-sm">
                  Building tomorrow's technology solutions today.
                </p>
              </div>
              <div>
                <h4 className="text-sm font-semibold mb-4 text-gray-300">
                  Product
                </h4>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#"
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      Features
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      Solutions
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      Pricing
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold mb-4 text-gray-300">
                  Company
                </h4>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#"
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      Careers
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      Blog
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold mb-4 text-gray-300">
                  Legal
                </h4>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#"
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      Privacy
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      Terms
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      Security
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="border-t border-white/5 mt-12 pt-8 text-center text-gray-400 text-sm">
              <p>
                &copy; {new Date().getFullYear()} Zeriux Labs. All rights
                reserved.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
