import { motion } from 'framer-motion';
import { Cloud, Shield, Zap, Brain, GitBranch, BarChart3, Boxes, Cog } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Cloud size={32} />,
      title: 'Cloud Computing',
      description: 'Migrate to cloud infrastructure with AWS, Azure, or Google Cloud for scalability and performance.',
    },
    {
      icon: <Shield size={32} />,
      title: 'Cybersecurity',
      description: 'Protect your digital assets with comprehensive security audits, compliance, and threat management.',
    },
    {
      icon: <Zap size={32} />,
      title: 'Digital Transformation',
      description: 'Modernize your business processes with cutting-edge technologies and strategic consulting.',
    },
    {
      icon: <Brain size={32} />,
      title: 'AI & Machine Learning',
      description: 'Leverage intelligent automation and predictive analytics to gain competitive advantages.',
    },
    {
      icon: <GitBranch size={32} />,
      title: 'DevOps & Automation',
      description: 'Streamline development workflows with CI/CD pipelines and infrastructure as code.',
    },
    {
      icon: <BarChart3 size={32} />,
      title: 'Data Analytics',
      description: 'Transform raw data into actionable insights with advanced analytics and visualization.',
    },
    {
      icon: <Boxes size={32} />,
      title: 'Legacy Modernization',
      description: 'Upgrade outdated systems to modern architectures without disrupting operations.',
    },
    {
      icon: <Cog size={32} />,
      title: 'IT Strategy',
      description: 'Develop comprehensive technology roadmaps aligned with your business objectives.',
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
          <div className="inline-block glass-morphism px-4 py-2 rounded-full mb-4">
            <span className="text-brand-orange text-sm font-semibold">• Portfolio</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
            Explore Our{' '}
            <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We help businesses elevate their value through custom{' '}
            <span className="text-white font-semibold">software development</span>,{' '}
            <span className="text-white font-semibold">product design</span>,{' '}
            <span className="text-white font-semibold">QA</span> and{' '}
            <span className="text-white font-semibold">consulting services</span>.
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
