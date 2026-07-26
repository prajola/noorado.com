import { motion } from 'framer-motion';
import { Award, Target, Users, Rocket } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Target size={32} />,
      title: 'Mission-Driven',
      description: 'We focus on delivering tangible business outcomes, not just technology solutions.',
    },
    {
      icon: <Users size={32} />,
      title: 'Client-Centric',
      description: 'Your success is our success. We partner with you every step of the way.',
    },
    {
      icon: <Award size={32} />,
      title: 'Excellence',
      description: 'Industry-leading expertise with certified professionals and proven methodologies.',
    },
    {
      icon: <Rocket size={32} />,
      title: 'Innovation',
      description: 'Staying ahead with cutting-edge technologies and forward-thinking approaches.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-black relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(255,107,53,0.08),transparent_60%)]"></div>

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
            <span className="text-brand-orange text-sm font-semibold">• About Noorado</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
            We Build Software That
            <br />
            <span className="gradient-text">Fits Like a Glove</span>
          </h2>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto mb-16">
          {/* Left: Description */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-xl text-gray-300 leading-relaxed">
              At <span className="gradient-text font-semibold">Noorado</span>, we believe every business deserves software built specifically for them. For over 15 years, we've turned unique requirements into powerful custom solutions.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed">
              We don't sell packages or templates. We listen to your needs, understand your challenges, and build software from the ground up—tailored precisely to how you work and what you want to achieve.
            </p>
            <p className="text-lg text-brand-orange font-semibold">
              Your vision. Our code. Perfect alignment.
            </p>
            <div className="flex items-center space-x-8 pt-4">
              <div>
                <div className="text-4xl font-heading font-bold gradient-text">15+</div>
                <div className="text-sm text-gray-400">Years Experience</div>
              </div>
              <div>
                <div className="text-4xl font-heading font-bold gradient-text">500+</div>
                <div className="text-sm text-gray-400">Projects Completed</div>
              </div>
              <div>
                <div className="text-4xl font-heading font-bold gradient-text">98%</div>
                <div className="text-sm text-gray-400">Client Retention</div>
              </div>
            </div>
          </motion.div>

          {/* Right: Globe Visual Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="glass-morphism rounded-2xl h-full flex items-center justify-center p-12 relative overflow-hidden">
              {/* Abstract Globe Pattern */}
              <div className="absolute inset-0">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,107,53,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,107,53,0.05)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
              </div>

              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 30,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                className="w-64 h-64 border-2 border-brand-orange/30 rounded-full relative"
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border-2 border-brand-orange/20 rounded-full"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border-2 border-brand-orange/10 rounded-full"></div>

                {/* Dots */}
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0 }}
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.3,
                    }}
                    className="absolute w-2 h-2 bg-brand-orange rounded-full"
                    style={{
                      top: `${50 + 40 * Math.sin((i * Math.PI) / 4)}%`,
                      left: `${50 + 40 * Math.cos((i * Math.PI) / 4)}%`,
                      transform: 'translate(-50%, -50%)',
                    }}
                  />
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Values Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass-morphism p-6 rounded-xl hover:border-brand-orange transition-all duration-300"
            >
              <div className="w-14 h-14 bg-brand-orange/10 rounded-lg flex items-center justify-center text-brand-orange mb-4">
                {value.icon}
              </div>
              <h3 className="text-xl font-heading font-semibold mb-2 text-white">
                {value.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
