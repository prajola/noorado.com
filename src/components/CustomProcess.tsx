import { motion } from 'framer-motion';
import { MessageSquare, Lightbulb, Code, Rocket } from 'lucide-react';

const CustomProcess = () => {
  const steps = [
    {
      number: '01',
      icon: <MessageSquare size={40} />,
      title: 'Tell Us What You Need',
      description: 'Share your vision, challenges, and goals. We listen carefully to understand your unique requirements.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      number: '02',
      icon: <Lightbulb size={40} />,
      title: 'We Design Your Solution',
      description: 'Our experts create a tailored architecture and strategy that perfectly fits your business needs.',
      color: 'from-purple-500 to-pink-500',
    },
    {
      number: '03',
      icon: <Code size={40} />,
      title: 'Built Exactly For You',
      description: 'Custom development from scratch. No templates. No compromises. Pure innovation designed for your success.',
      color: 'from-orange-500 to-red-500',
    },
    {
      number: '04',
      icon: <Rocket size={40} />,
      title: 'Launch & Scale',
      description: 'Deploy with confidence. We provide ongoing support and scale as your business grows.',
      color: 'from-green-500 to-teal-500',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,107,53,0.1),transparent_70%)]"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-block glass-morphism px-6 py-3 rounded-full mb-6">
            <span className="text-brand-orange text-sm font-semibold">• Our Process</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
            From Your{' '}
            <span className="gradient-text">Vision</span>
            {' '}to Reality
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A transparent, collaborative process that puts your requirements at the center of everything we build.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
            >
              {/* Connector Line (hidden on mobile and last item) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-20 left-full w-full h-0.5 bg-gradient-to-r from-brand-orange/50 to-transparent -translate-x-1/2 z-0"></div>
              )}

              {/* Card */}
              <div className="glass-morphism p-8 rounded-2xl hover:border-brand-orange transition-all duration-300 h-full relative z-10 group-hover:scale-105">
                {/* Step Number */}
                <div className="text-6xl font-heading font-bold text-white/10 absolute top-4 right-4">
                  {step.number}
                </div>

                {/* Icon with Gradient Background */}
                <div className={`w-20 h-20 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center mb-6 text-white relative z-10 group-hover:scale-110 transition-transform duration-300`}>
                  {step.icon}
                </div>

                {/* Content */}
                <h3 className="text-2xl font-heading font-bold mb-4 text-white">
                  {step.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 text-center"
        >
          <div className="glass-morphism p-12 rounded-3xl max-w-4xl mx-auto border-brand-orange/30">
            <h3 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Your Requirements.{' '}
              <span className="gradient-text">Our Expertise.</span>
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              No cookie-cutter solutions. No unnecessary features. Just clean, powerful software tailored to solve your specific challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="#contact"
                className="px-8 py-4 bg-gradient-to-r from-brand-orange to-brand-orange-dark text-white font-semibold rounded-lg hover:shadow-2xl hover:shadow-brand-orange/50 transition-all duration-300 hover:scale-105"
              >
                Start Your Project
              </a>
              <a
                href="#portfolio"
                className="px-8 py-4 glass-morphism text-white font-semibold rounded-lg hover:border-brand-orange transition-all duration-300"
              >
                See What We've Built
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CustomProcess;
