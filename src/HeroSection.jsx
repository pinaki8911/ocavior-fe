import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ChevronRight, Menu, X } from "lucide-react";
import React, { useEffect, useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/10 backdrop-blur-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-3xl font-bold text-white"
          >
            Ocavior
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {["Home", "About", "Services", "Case Studies", "Contact"].map(
              (item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                  className="text-white hover:text-white/80 transition-colors relative group"
                  whileHover={{ scale: 1.05 }}
                >
                  {item}
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform" />
                </motion.a>
              )
            )}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white/10 backdrop-blur-lg rounded-lg mt-2 overflow-hidden"
            >
              {["Home", "About", "Services", "Case Studies", "Contact"].map(
                (item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase().replace(" ", "-")}`}
                    className="block px-4 py-3 text-white hover:bg-white/10 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item}
                  </a>
                )
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

const HeroSection = () => {
  const [currentText, setCurrentText] = useState(0);
  const heroTexts = [
    "Transform Your Digital Future",
    "Innovate with Confidence",
    "Build Lasting Solutions",
  ];

  const descriptions = [
    "Cutting-edge technology solutions to drive your business forward",
    "Expert teams delivering exceptional results",
    "Strategic partnerships for sustainable growth",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % heroTexts.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  // Background animated shapes
  const shapes = Array(5)
    .fill(null)
    .map((_, i) => ({
      className: `absolute opacity-10 bg-white rounded-full blur-xl animate-pulse`,
      style: {
        width: `${Math.random() * 200 + 100}px`,
        height: `${Math.random() * 200 + 100}px`,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        animationDelay: `${i * 0.5}s`,
        animationDuration: `${Math.random() * 4 + 6}s`,
      },
    }));

  return (
    <>
      <Header />
      <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-emerald-600 to-teal-500">
        {/* Animated background shapes */}
        {shapes.map((shape, index) => (
          <div key={index} className={shape.className} style={shape.style} />
        ))}

        {/* Main hero content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 min-h-screen flex flex-col justify-center">
          <div className="w-full">
            <div className="text-center">
              {/* Animated text cycling */}
              <div className="min-h-[160px] md:min-h-[128px] mb-6">
                <AnimatePresence mode="wait">
                  <motion.h1
                    key={currentText}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl md:text-6xl font-bold text-white mb-4"
                  >
                    {heroTexts[currentText]}
                  </motion.h1>
                  <motion.p
                    key={`desc-${currentText}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto"
                  >
                    {descriptions[currentText]}
                  </motion.p>
                </AnimatePresence>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group bg-white text-emerald-600 px-8 py-3 rounded-full hover:bg-opacity-90 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Get Started</span>
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-emerald-600 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </div>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto px-4"
            >
              {[
                { label: "Clients", value: "500+" },
                { label: "Projects", value: "1000+" },
                { label: "Team Members", value: "50+" },
                { label: "Success Rate", value: "98%" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
                  className="text-center text-white"
                >
                  <div className="text-2xl md:text-3xl font-bold mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-white/80">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
