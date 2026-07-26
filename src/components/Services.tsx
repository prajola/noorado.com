import { motion } from 'framer-motion';
import { Monitor, Smartphone, Globe, Database, Layers, Code, Settings, Package } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Code size={32} />,
      title: 'Custom Web Applications',
      description: 'Tailored web platforms built from scratch to match your exact business requirements and workflows.',
    },
    {
      icon: <Smartphone size={32} />,
      title: 'Mobile App Development',
      description: 'Native iOS and Android apps designed specifically for your users, with seamless performance.',
    },
    {
      icon: <Monitor size={32} />,
      title: 'Enterprise Software',
      description: 'Scalable enterprise solutions that grow with your business, built to your specifications.',
    },
    {
      icon: <Database size={32} />,
      title: 'Custom APIs & Integrations',
      description: 'Connect your systems seamlessly with custom-built APIs and third-party integrations.',
    },
    {
      icon: <Globe size={32} />,
      title: 'SaaS Product Development',
      description: 'Full-stack SaaS platforms designed and built to bring your product vision to market.',
    },
    {
      icon: <Layers size={32} />,
      title: 'Cloud-Native Solutions',
      description: 'Modern cloud applications leveraging AWS, Azure, or Google Cloud for maximum scalability.',
    },
    {
      icon: <Settings size={32} />,
      title: 'Process Automation',
      description: 'Custom automation tools that streamline your operations and eliminate manual workflows.',
    },
    {
      icon: <Package size={32} />,
      title: 'Legacy System Modernization',
      description: 'Transform outdated software into modern, efficient systems tailored to current needs.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-orange/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-orange-dark/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block glass-morphism px-6 py-3 rounded-full mb-4">
            <span className="text-brand-orange text-sm font-semibold">• What We Build</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
            Custom Solutions{' '}
            <span className="gradient-text">Built For You</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-4">
            Every project starts with your requirements. We build custom{' '}
            <span className="gradient-text font-semibold">software</span>,{' '}
            <span className="gradient-text font-semibold">web apps</span>,{' '}
            <span className="gradient-text font-semibold">mobile solutions</span>, and{' '}
            <span className="gradient-text font-semibold">enterprise systems</span>
            {' '}— tailored precisely to your needs.
          </p>
          <p className="text-lg text-brand-orange font-semibold">
            No templates. No limitations. Just your vision, perfectly executed.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group glass-morphism p-6 rounded-xl hover:border-brand-orange transition-all duration-300 cursor-pointer relative overflow-hidden"
            >
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/0 to-brand-orange/0 group-hover:from-brand-orange/10 group-hover:to-transparent transition-all duration-300 rounded-xl"></div>

              {/* Content */}
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-brand-orange/20 to-brand-orange-dark/20 rounded-lg flex items-center justify-center mb-4 text-brand-orange group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-heading font-semibold mb-3 text-white group-hover:text-brand-orange transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <a
                  href="#contact"
                  className="text-brand-orange text-sm font-semibold flex items-center space-x-1 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <span>Learn More</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-gradient-to-r from-brand-orange to-brand-orange-dark text-white font-semibold rounded-lg hover:shadow-2xl hover:shadow-brand-orange/50 transition-all duration-300 hover:scale-105"
          >
            Discuss Your Project
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
