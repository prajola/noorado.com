import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect, useRef } from 'react';

interface CounterProps {
  from: number;
  to: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
}

const Counter = ({ from, to, duration = 2, suffix = '', prefix = '' }: CounterProps) => {
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const controls = animate(count, to, { duration });
    return controls.stop;
  }, [count, to, duration]);

  useEffect(() => {
    const unsubscribe = rounded.on('change', (latest) => {
      if (ref.current) {
        ref.current.textContent = `${prefix}${latest}${suffix}`;
      }
    });
    return unsubscribe;
  }, [rounded, prefix, suffix]);

  return <span ref={ref} />;
};

const Stats = () => {
  const stats = [
    {
      value: 500,
      suffix: '+',
      label: 'Custom Projects',
      description: 'Built from scratch',
    },
    {
      value: 98,
      suffix: '%',
      label: 'Client Satisfaction',
      description: 'Happy customers',
    },
    {
      value: 15,
      suffix: '+',
      label: 'Years Experience',
      description: 'Industry expertise',
    },
    {
      value: 100,
      suffix: '%',
      label: 'Code Ownership',
      description: 'You own everything',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-brand-orange/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Trusted by Businesses{' '}
            <span className="gradient-text">Worldwide</span>
          </h2>
          <p className="text-gray-400">
            Delivering custom solutions that drive real results
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-morphism p-8 rounded-2xl text-center hover:border-brand-orange transition-all duration-300 group"
            >
              <div className="text-5xl md:text-6xl font-heading font-bold gradient-text mb-2 group-hover:scale-110 transition-transform">
                <Counter from={0} to={stat.value} suffix={stat.suffix} duration={2.5} />
              </div>
              <div className="text-white font-semibold mb-1">{stat.label}</div>
              <div className="text-sm text-gray-400">{stat.description}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
