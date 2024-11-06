import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ChevronRight,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Facebook,
  Star,
  Users,
  Award,
  TrendingUp,
  ArrowRight,
} from "lucide-react";
import HeroSection from "./HeroSection";
import ServicesSection from "./ServicesSection";
import Footer from "./Footer";
import CareerSection from "./CareerSection";

// Color scheme constants
const colors = {
  primary: {
    gradient: "from-emerald-600 to-teal-500",
    solid: "emerald-500",
    hover: "emerald-600",
    light: "emerald-50",
  },
  secondary: {
    gradient: "from-violet-600 to-purple-500",
    solid: "violet-500",
    hover: "violet-600",
    light: "violet-50",
  },
  accent: {
    gradient: "from-teal-500 to-cyan-500",
    solid: "teal-500",
    hover: "teal-600",
    light: "teal-50",
  },
  text: {
    primary: "gray-800",
    secondary: "gray-600",
    light: "gray-400",
  },
  background: {
    primary: "white",
    secondary: "gray-50",
    dark: "gray-900",
  },
};

// About Section Component
const AboutSection = () => {
  const stats = [
    { number: "500+", label: "Clients Served", icon: <Users /> },
    { number: "50+", label: "Team Members", icon: <Star /> },
    { number: "15+", label: "Years Experience", icon: <Award /> },
    { number: "98%", label: "Client Satisfaction", icon: <TrendingUp /> },
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6">About Ocavior</h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Pioneering digital transformation through innovative solutions and
            strategic partnerships. We're committed to delivering excellence in
            every project we undertake.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center p-6 rounded-lg bg-gradient-to-br from-emerald-50 to-teal-50"
            >
              <div className="flex justify-center mb-4 text-emerald-500">
                {stat.icon}
              </div>
              <h3 className="text-3xl font-bold mb-2 text-gray-800">
                {stat.number}
              </h3>
              <p className="text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Case Studies Component
const CaseStudies = () => {
  const [activeCase, setActiveCase] = useState(0);
  const cases = [
    {
      title: "Digital Transformation for Fortune 500 Company",
      description: "Complete digital overhaul resulting in 150% ROI",
      image: "/api/placeholder/600/400",
      results: [
        "45% increase in efficiency",
        "2x revenue growth",
        "Reduced operational costs by 30%",
      ],
    },
    {
      title: "E-commerce Platform Optimization",
      description: "Revolutionized online shopping experience",
      image: "/api/placeholder/600/400",
      results: [
        "200% increase in conversions",
        "Mobile traffic up by 80%",
        "4.9/5 customer satisfaction",
      ],
    },
    {
      title: "Cloud Migration Success Story",
      description: "Seamless transition to cloud infrastructure",
      image: "/api/placeholder/600/400",
      results: [
        "Zero downtime during migration",
        "40% cost reduction",
        "Enhanced security protocols",
      ],
    },
  ];

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6">Case Studies</h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Explore how we've helped businesses achieve their digital goals
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {cases.map((caseStudy, index) => (
            <motion.div
              key={caseStudy.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              onMouseEnter={() => setActiveCase(index)}
            >
              <img
                src={caseStudy.image}
                alt={caseStudy.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{caseStudy.title}</h3>
                <p className="text-gray-600 mb-4">{caseStudy.description}</p>
                <ul className="space-y-2">
                  {caseStudy.results.map((result, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-sm text-gray-600"
                    >
                      <ArrowRight className="w-4 h-4 mr-2 text-emerald-500" />
                      {result}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Interactive Features Section
const InteractiveFeatures = () => {
  const [activeTab, setActiveTab] = useState(0);
  const features = [
    {
      title: "Technology Integration",
      content: "Seamlessly connect your systems for maximum efficiency",
      image: "/api/placeholder/600/400",
    },
    {
      title: "Data Analytics",
      content: "Transform raw data into actionable insights",
      image: "/api/placeholder/600/400",
    },
    {
      title: "Cloud Solutions",
      content: "Scale your infrastructure with secure cloud services",
      image: "/api/placeholder/600/400",
    },
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/3">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`p-6 cursor-pointer rounded-lg mb-4 transition-all duration-300 ${
                  activeTab === index
                    ? "bg-gradient-to-r from-emerald-600 to-teal-500 text-white"
                    : "bg-gray-50 hover:bg-gray-100"
                }`}
                onClick={() => setActiveTab(index)}
              >
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p
                  className={
                    activeTab === index ? "text-white" : "text-gray-600"
                  }
                >
                  {feature.content}
                </p>
              </motion.div>
            ))}
          </div>
          <div className="md:w-2/3">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="rounded-lg overflow-hidden shadow-xl"
              >
                <img
                  src={features[activeTab].image}
                  alt={features[activeTab].title}
                  className="w-full h-96 object-cover"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

// Testimonials Carousel
const TestimonialsCarousel = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const testimonials = [
    {
      text: "Ocavior transformed our business with their innovative solutions. The results exceeded our expectations.",
      author: "John Smith",
      position: "CEO, TechCorp",
      image: "/api/placeholder/80/80",
    },
    {
      text: "Working with Ocavior was a game-changer for our digital presence. Highly recommended!",
      author: "Sarah Johnson",
      position: "Marketing Director, InnovateX",
      image: "/api/placeholder/80/80",
    },
    {
      text: "The team at Ocavior delivers exceptional results with professionalism and expertise.",
      author: "Michael Brown",
      position: "CTO, FutureScale",
      image: "/api/placeholder/80/80",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-emerald-600 to-teal-500">
      <div className="max-w-7xl mx-auto">
        <div className="text-center text-white mb-12">
          <h2 className="text-4xl font-bold mb-6">What Our Clients Say</h2>
        </div>
        <div className="relative h-80">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 flex flex-col items-center justify-center text-center text-white"
            >
              <img
                src={testimonials[currentTestimonial].image}
                alt={testimonials[currentTestimonial].author}
                className="w-20 h-20 rounded-full mb-6"
              />
              <p className="text-xl mb-6 max-w-2xl">
                "{testimonials[currentTestimonial].text}"
              </p>
              <h3 className="font-bold text-lg">
                {testimonials[currentTestimonial].author}
              </h3>
              <p className="text-teal-200">
                {testimonials[currentTestimonial].position}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="flex justify-center space-x-2 mt-6">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentTestimonial === index ? "bg-white" : "bg-teal-200"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// Update the main App component
const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen">
      {/* Header remains the same */}
      <header className="fixed w-full bg-white shadow-md z-40">
        {/* ... existing header code ... */}
      </header>

      {/* Main Content */}
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <CaseStudies />
        <InteractiveFeatures />
        <TestimonialsCarousel />
        <CareerSection />
      </main>

      <Footer />
    </div>
  );
};

export default App;
