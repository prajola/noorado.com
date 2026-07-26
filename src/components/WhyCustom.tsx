import { motion } from 'framer-motion';
import { CheckCircle2, XCircle } from 'lucide-react';

const WhyCustom = () => {
  const comparison = {
    templates: [
      'Limited to preset features',
      'Generic design everyone uses',
      'Hard to modify or scale',
      'Security vulnerabilities',
      'Monthly subscription fees',
      'No ownership of code',
    ],
    custom: [
      'Built exactly to your needs',
      'Unique design & branding',
      'Infinitely scalable',
      'Security built-in from day one',
      'One-time investment',
      'Full code ownership',
    ],
  };

  const benefits = [
    {
      title: 'Own Your Code',
      description: 'Complete ownership. No vendor lock-in. No monthly fees forever.',
    },
    {
      title: 'Scale Unlimited',
      description: 'Built to grow with you. Add features anytime without restrictions.',
    },
    {
      title: 'Perfect Fit',
      description: 'Every feature serves your business. No bloat. No unused modules.',
    },
    {
      title: 'Competitive Edge',
      description: 'Unique solutions your competitors can\'t replicate or copy.',
    },
  ];

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,107,53,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,107,53,0.03)_1px,transparent_1px)] bg-[size:100px_100px]"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block glass-morphism px-6 py-3 rounded-full mb-6">
            <span className="text-brand-orange text-sm font-semibold">• Why Custom?</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
            Templates vs{' '}
            <span className="gradient-text">Custom Built</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Stop compromising. Your business deserves software that works exactly the way you need it to.
          </p>
        </motion.div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          {/* Template/Off-the-shelf Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-morphism p-8 rounded-2xl border-red-500/30"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center">
                <XCircle className="text-red-400" size={24} />
              </div>
              <h3 className="text-2xl font-heading font-bold text-white">Template Solutions</h3>
            </div>
            <ul className="space-y-4">
              {comparison.templates.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start space-x-3"
                >
                  <XCircle className="text-red-400 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-400">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Custom Software Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-morphism p-8 rounded-2xl border-brand-orange/50 relative overflow-hidden"
          >
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/10 to-transparent"></div>

            <div className="flex items-center space-x-3 mb-6 relative z-10">
              <div className="w-12 h-12 bg-gradient-to-br from-brand-orange to-brand-orange-dark rounded-lg flex items-center justify-center">
                <CheckCircle2 className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-heading font-bold gradient-text">Custom Built By Noorado</h3>
            </div>
            <ul className="space-y-4 relative z-10">
              {comparison.custom.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start space-x-3"
                >
                  <CheckCircle2 className="text-brand-orange flex-shrink-0 mt-1" size={20} />
                  <span className="text-white font-medium">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Benefits Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-morphism p-6 rounded-xl hover:border-brand-orange transition-all duration-300 text-center group hover:scale-105"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-brand-orange/20 to-brand-orange-dark/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <CheckCircle2 className="text-brand-orange" size={28} />
              </div>
              <h4 className="text-xl font-heading font-bold text-white mb-2">
                {benefit.title}
              </h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyCustom;
