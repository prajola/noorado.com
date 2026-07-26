import { motion } from 'framer-motion';
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const Portfolio = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const caseStudies = [
    {
      title: 'FinTech Platform',
      category: 'Financial Technology',
      description: 'Built a robust cloud-based platform handling 1M+ transactions daily with 99.99% uptime. The community succeeded in enhancing their financial operations.',
      metrics: ['1M+ Daily Transactions', '99.99% Uptime', '40% Cost Reduction'],
      tags: ['Cloud Migration', 'DevOps', 'Security'],
      gradient: 'from-blue-500 to-purple-600',
    },
    {
      title: 'E-Commerce Transformation',
      category: 'Retail & E-commerce',
      description: 'Modernized legacy systems for a major retailer, resulting in 3x faster page loads and 50% increase in conversion rates.',
      metrics: ['3x Faster Performance', '50% More Conversions', '200K+ Users'],
      tags: ['Digital Transformation', 'AI/ML', 'Analytics'],
      gradient: 'from-green-500 to-teal-600',
    },
    {
      title: 'Healthcare Data Platform',
      category: 'Healthcare',
      description: 'Developed a HIPAA-compliant data analytics platform enabling real-time insights across multiple hospitals.',
      metrics: ['100% HIPAA Compliant', '5 Hospitals Connected', '2M+ Records'],
      tags: ['Data Analytics', 'Cybersecurity', 'Compliance'],
      gradient: 'from-red-500 to-pink-600',
    },
    {
      title: 'Manufacturing IoT',
      category: 'Industrial IoT',
      description: 'Implemented IoT sensors and predictive maintenance AI, reducing downtime by 60% and saving millions annually.',
      metrics: ['60% Less Downtime', '$5M+ Saved', '10K+ Sensors'],
      tags: ['IoT', 'AI/ML', 'Automation'],
      gradient: 'from-orange-500 to-yellow-600',
    },
    {
      title: 'SaaS Product Launch',
      category: 'Software as a Service',
      description: 'End-to-end product development from MVP to market leader, serving 50K+ businesses globally.',
      metrics: ['50K+ Customers', '$10M ARR', '4.8★ Rating'],
      tags: ['Product Development', 'Cloud', 'Scaling'],
      gradient: 'from-indigo-500 to-purple-600',
    },
  ];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? caseStudies.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === caseStudies.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="portfolio" className="py-20 bg-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,107,53,0.1),transparent_50%)]"></div>

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
            Stories of{' '}
            <span className="gradient-text">Growth</span>
            <br />
            and Impact
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            From startups to established brands, we transform clients' vision into measurable results and drive business success.
          </p>
        </motion.div>

        {/* Case Study Carousel */}
        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Cards Container */}
            <div className="flex items-center justify-center overflow-hidden">
              <div className="flex space-x-6 transition-transform duration-500 ease-out" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
                {caseStudies.map((study, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`flex-shrink-0 w-full md:w-[calc(100%-2rem)] ${
                      index === activeIndex ? 'opacity-100' : 'opacity-40'
                    } transition-opacity duration-500`}
                  >
                    <div className="glass-morphism rounded-2xl overflow-hidden hover:border-brand-orange transition-all duration-300 group">
                      {/* Card Header with Gradient */}
                      <div className={`h-48 bg-gradient-to-br ${study.gradient} relative flex items-center justify-center`}>
                        <div className="absolute inset-0 bg-black/40"></div>
                        <div className="relative z-10 text-center">
                          <h3 className="text-3xl font-heading font-bold text-white mb-2">
                            {study.title}
                          </h3>
                          <p className="text-white/80 text-sm">{study.category}</p>
                        </div>
                      </div>

                      {/* Card Body */}
                      <div className="p-8">
                        <p className="text-gray-300 text-lg leading-relaxed mb-6">
                          {study.description}
                        </p>

                        {/* Metrics */}
                        <div className="grid grid-cols-3 gap-4 mb-6">
                          {study.metrics.map((metric, idx) => (
                            <div key={idx} className="text-center p-4 bg-white/5 rounded-lg">
                              <div className="text-brand-orange font-heading font-bold text-sm">
                                {metric}
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-6">
                          {study.tags.map((tag, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 bg-brand-orange/10 text-brand-orange text-xs rounded-full border border-brand-orange/30"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* CTA */}
                        <a
                          href="#contact"
                          className="inline-flex items-center space-x-2 text-brand-orange font-semibold group-hover:space-x-3 transition-all"
                        >
                          <span>View Case Study</span>
                          <ArrowUpRight size={20} />
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center justify-center space-x-4 mt-8">
              <button
                onClick={handlePrev}
                className="w-12 h-12 glass-morphism rounded-full flex items-center justify-center hover:border-brand-orange hover:text-brand-orange transition-all duration-300"
                aria-label="Previous case study"
              >
                <ChevronLeft size={24} />
              </button>

              {/* Dots Indicator */}
              <div className="flex space-x-2">
                {caseStudies.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === activeIndex
                        ? 'bg-brand-orange w-8'
                        : 'bg-white/30 hover:bg-white/50'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={handleNext}
                className="w-12 h-12 glass-morphism rounded-full flex items-center justify-center hover:border-brand-orange hover:text-brand-orange transition-all duration-300"
                aria-label="Next case study"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
