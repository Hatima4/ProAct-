"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="container mx-auto px-6 py-32 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-8"
            >
              <svg
                className="w-10 h-10 text-black"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </motion.div>
            <h1 className="text-7xl font-bold mb-6 leading-tight">
              Proactive IT Solutions
            </h1>
            <p className="text-xl mb-8 max-w-2xl text-gray-300 leading-relaxed">
              Empowering businesses with intelligent IT management and
              monitoring. Stay ahead of issues before they impact your
              operations.
            </p>
            <div className="flex gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Start Monitoring
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                View Dashboard
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-dark opacity-[0.15] pointer-events-none"></div>
        <div className="container mx-auto px-6 relative">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "99.9%", label: "System Uptime" },
              { number: "< 15min", label: "Response Time" },
              { number: "1000+", label: "Servers Monitored" },
              { number: "24/7", label: "Active Monitoring" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6 rounded-xl bg-black border border-white/5 hover:border-white/10 transition-colors"
              >
                <div className="text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                  {stat.number}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-dark opacity-[0.15] pointer-events-none"></div>
        <div className="container mx-auto px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
              Why Choose ProAct+?
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Advanced monitoring and management solutions that keep your IT
              infrastructure running smoothly and efficiently.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Predictive Analysis",
                description:
                  "Detect and prevent issues before they impact your business operations",
                icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
              },
              {
                title: "Real-time Monitoring",
                description:
                  "Continuous system monitoring with instant alerts and notifications",
                icon: "M13 10V3L4 14h7v7l9-11h-7z",
              },
              {
                title: "Smart Automation",
                description:
                  "Automated responses and fixes for common IT issues",
                icon: "M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4",
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ y: -5 }}
                className="p-8 rounded-xl bg-black border border-white/5 hover:border-white/10 transition-all relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="w-12 h-12 bg-gradient-to-r from-white/20 to-white/10 rounded-lg flex items-center justify-center mb-6 relative">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d={feature.icon}
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Features Section */}
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-dark opacity-[0.15] pointer-events-none"></div>
        <div className="container mx-auto px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
              Our Solutions
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Comprehensive IT monitoring and management solutions designed for
              modern enterprises.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Infrastructure Monitoring",
                description:
                  "Complete visibility into your IT infrastructure with advanced monitoring capabilities.",
                features: [
                  "Server Health Monitoring",
                  "Network Performance",
                  "Resource Utilization",
                  "Capacity Planning",
                ],
              },
              {
                title: "Intelligent Management",
                description:
                  "Smart management solutions that help you maintain peak system performance.",
                features: [
                  "Automated Issue Resolution",
                  "Predictive Maintenance",
                  "Performance Optimization",
                  "Security Monitoring",
                ],
              },
            ].map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="p-8 rounded-xl bg-black border border-white/5 hover:border-white/10 transition-all relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <h3 className="text-2xl font-semibold mb-4 text-white relative">
                  {solution.title}
                </h3>
                <p className="text-gray-400 mb-6 relative">
                  {solution.description}
                </p>
                <ul className="space-y-3 relative">
                  {solution.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center text-gray-300"
                    >
                      <svg
                        className="w-5 h-5 text-white mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-dark opacity-[0.15] pointer-events-none"></div>
        <div className="container mx-auto px-6 relative">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500"
          >
            Trusted by IT Leaders
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Alex Chen",
                role: "IT Director, TechCorp",
                testimonial:
                  "ProAct+ has revolutionized how we manage our IT infrastructure. The predictive analysis has saved us countless hours of downtime.",
              },
              {
                name: "Sarah Miller",
                role: "CTO, CloudSys",
                testimonial:
                  "The real-time monitoring and automated responses have made our IT operations significantly more efficient and reliable.",
              },
              {
                name: "David Kim",
                role: "Infrastructure Manager, DataFlow",
                testimonial:
                  "ProAct+ is an essential tool in our IT arsenal. Its intelligent automation has reduced our incident response time by 75%.",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ y: -5 }}
                className="bg-black p-8 rounded-xl border border-white/5 hover:border-white/10 transition-all relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="flex items-center mb-6 relative">
                  <div className="w-12 h-12 bg-gradient-to-r from-white/10 to-white/5 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold">
                      {testimonial.name[0]}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-300 relative">
                  {testimonial.testimonial}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-dark opacity-[0.15] pointer-events-none"></div>
        <div className="container mx-auto px-6 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
              Ready to Transform Your IT Management?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-400">
              Join the future of proactive IT monitoring and management. Start
              preventing issues before they occur.
            </p>
            <div className="flex gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Start Monitoring
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-white/10 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/5 transition-colors"
              >
                Schedule Demo
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
