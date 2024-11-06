import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Code,
  Rocket,
  Search,
  TrendingUp,
  Share2,
  ChevronRight,
  Users,
  Cloud,
  Shield,
  Database,
} from "lucide-react";

const ServicesSection = () => {
  const [hoveredService, setHoveredService] = useState(null);

  const services = [
    {
      title: "Technology Integrations",
      description:
        "Seamless integration of systems and technologies to enhance your business operations",
      icon: Code,
      features: [
        "Custom API Development",
        "System Integration",
        "Legacy Modernization",
      ],
      color: "emerald",
    },
    {
      title: "Product Delivery",
      description: "End-to-end product development and deployment solutions",
      icon: Rocket,
      features: [
        "Agile Development",
        "Quality Assurance",
        "Continuous Deployment",
      ],
      color: "teal",
    },
    {
      title: "SEO Optimization",
      description: "Boost your online presence and search engine rankings",
      icon: Search,
      features: [
        "Keyword Research",
        "Content Strategy",
        "Performance Optimization",
      ],
      color: "cyan",
    },
    {
      title: "Business Development",
      description: "Strategic planning and execution for sustainable growth",
      icon: TrendingUp,
      features: ["Market Analysis", "Growth Strategy", "Performance Metrics"],
      color: "blue",
    },
    {
      title: "Social Media Marketing",
      description: "Engage and grow your audience across all platforms",
      icon: Share2,
      features: ["Content Creation", "Community Management", "Analytics"],
      color: "indigo",
    },
    {
      title: "Cloud Solutions",
      description: "Scalable and secure cloud infrastructure services",
      icon: Cloud,
      features: ["Cloud Migration", "Infrastructure Setup", "Monitoring"],
      color: "violet",
    },
  ];

  // Additional service features that appear on hover
  const ServiceCard = ({ service, index }) => {
    const isHovered = hoveredService === index;

    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="relative bg-white rounded-xl shadow-lg overflow-hidden group"
        onMouseEnter={() => setHoveredService(index)}
        onMouseLeave={() => setHoveredService(null)}
      >
        <div className="p-6">
          {/* Icon */}
          <motion.div
            animate={{ scale: isHovered ? 1.1 : 1 }}
            transition={{ duration: 0.2 }}
            className={`w-12 h-12 rounded-lg bg-${service.color}-100 flex items-center justify-center mb-4`}
          >
            <service.icon className={`w-6 h-6 text-${service.color}-600`} />
          </motion.div>

          {/* Title and Description */}
          <h3 className="text-xl font-bold mb-2">{service.title}</h3>
          <p className="text-gray-600 mb-4">{service.description}</p>

          {/* Features List */}
          <motion.ul
            animate={{ height: isHovered ? "auto" : 0 }}
            className="space-y-2 overflow-hidden"
          >
            {service.features.map((feature, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : -20 }}
                transition={{ duration: 0.3, delay: idx * 0.1 }}
                className="flex items-center text-gray-600"
              >
                <ChevronRight
                  className={`w-4 h-4 mr-2 text-${service.color}-500`}
                />
                {feature}
              </motion.li>
            ))}
          </motion.ul>

          {/* Learn More Button */}
          <motion.button
            animate={{
              y: isHovered ? 0 : 10,
              opacity: isHovered ? 1 : 0,
            }}
            transition={{ duration: 0.2 }}
            className={`mt-4 px-4 py-2 rounded-full bg-${service.color}-500 text-white flex items-center space-x-2 hover:bg-${service.color}-600 transition-colors`}
          >
            <span>Learn More</span>
            <ChevronRight className="w-4 h-4" />
          </motion.button>
        </div>

        {/* Background Gradient on Hover */}
        <motion.div
          animate={{
            opacity: isHovered ? 0.1 : 0,
          }}
          className={`absolute inset-0 bg-gradient-to-br from-${service.color}-500 to-${service.color}-600`}
        />
      </motion.div>
    );
  };

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Comprehensive solutions tailored to transform your business and
            drive growth
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-bold mb-4">Need a Custom Solution?</h3>
          <p className="text-gray-600 mb-8">
            Let's discuss how we can help you achieve your business goals
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-8 py-3 rounded-full hover:shadow-lg transition-shadow duration-300"
          >
            Contact Us
          </motion.button>
        </motion.div>

        {/* Background Decorations */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-emerald-500/5 to-teal-500/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-br from-teal-500/5 to-emerald-500/5 rounded-full translate-x-1/2 translate-y-1/2" />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
