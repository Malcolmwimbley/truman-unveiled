"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-md border-b border-white/10"
      >
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-xl md:text-2xl font-bold text-gold-500 font-cinzel tracking-wider">
            THE TRUMAN UNVEILED
          </Link>
          <div className="hidden md:flex space-x-8">
            {["Home", "About", "Service", "Contact"].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-300 hover:text-gold-500 transition-colors duration-300 uppercase text-sm tracking-widest"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <header id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black z-10" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-deep-red/20 via-black to-black" />
        </div>

        <div className="container mx-auto px-6 relative z-20 flex flex-col md:flex-row items-center gap-12">
          <motion.div
            className="flex-1 text-center md:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gold-500 to-gold-600 mb-6 drop-shadow-lg">
              THE TRUMAN <br /> UNVEILED
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed">
              Unveiling self-awareness is the key to universal empowerment.
              Forging connections that shape a more conscious and purposeful community.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gold-600 text-black font-bold rounded-full hover:bg-gold-500 transition-colors shadow-[0_0_20px_rgba(212,175,55,0.3)]"
            >
              Discover the Truth
            </motion.button>
          </motion.div>

          <motion.div
            className="flex-1 relative w-full max-w-md aspect-[2/3] group"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-gold-600 to-deep-red rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative h-full w-full rounded-lg overflow-hidden border border-white/10 shadow-2xl">
              <Image
                src="/poster.jpg"
                alt="The Truman Unveiled Poster"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>
      </header>

      {/* Puppet Master Section */}
      <section id="about" className="py-24 bg-zinc-900 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row-reverse items-center gap-16">
            <motion.div
              className="flex-1"
              {...fadeInUp}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Who Pulls the <span className="text-gold-500">Strings?</span>
              </h2>
              <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                In a world of shadows and illusions, understanding the forces that guide our actions is the first step towards true freedom.
                Are we the masters of our destiny, or merely players on a stage set by others?
              </p>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                Break free from the unseen threads. Awaken your consciousness and reclaim your power.
              </p>
            </motion.div>

            <motion.div
              className="flex-1 relative w-full max-w-lg aspect-square"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="absolute inset-0 bg-gold-500/10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
              <div className="relative h-full w-full rounded-xl overflow-hidden shadow-2xl border border-white/5 transform hover:rotate-1 transition-transform duration-500">
                <Image
                  src="/puppet_master.jpg"
                  alt="Puppet Master"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section id="service" className="py-24 bg-black text-center">
        <div className="container mx-auto px-6">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-white mb-16"
            {...fadeInUp}
          >
            Our Core Principles
          </motion.h2>
          <motion.div
            className="grid md:grid-cols-3 gap-12"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {[
              { title: "Awareness", desc: "Seeing beyond the veil of ordinary perception." },
              { title: "Empowerment", desc: "Taking control of your own narrative and destiny." },
              { title: "Community", desc: "Building connections based on truth and purpose." }
            ].map((item, i) => (
              <motion.div
                key={i}
                className="p-8 rounded-2xl bg-zinc-900/50 border border-white/5 hover:border-gold-500/30 transition-colors"
                variants={fadeInUp}
              >
                <h3 className="text-xl font-bold text-gold-500 mb-4">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-zinc-950 py-12 border-t border-white/10">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-2xl font-cinzel text-white mb-8">THE TRUMAN UNVEILED</h3>
          <div className="flex justify-center space-x-8 mb-8">
            {["Twitter", "Instagram", "Discord"].map((social) => (
              <a key={social} href="#" className="text-gray-400 hover:text-gold-500 transition-colors">
                {social}
              </a>
            ))}
          </div>
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} The Truman Unveiled. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
