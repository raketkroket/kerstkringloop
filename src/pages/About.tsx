import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { TreeDeciduous, Heart, Recycle, Globe } from 'lucide-react';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-stone-50"
    >
      <Header />
      
      <section className="pt-48 pb-32 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none opacity-10">
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] border border-emerald-900 rounded-full"
          />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="text-6xl md:text-8xl font-serif font-bold text-emerald-950 mb-10"
          >
            Onze <span className="text-red-600 italic">Missie</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-2xl text-stone-600 leading-relaxed font-light"
          >
            De Kerst Pop-up Shop Lelystad is ontstaan uit een passie voor duurzaamheid en de wens om iets terug te doen voor onze lokale gemeenschap. Wij geloven dat de mooiste kerst een gedeelde kerst is.
          </motion.p>
        </div>
      </section>

      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="order-2 md:order-1 relative"
          >
            <div className="absolute -inset-4 bg-emerald-50 rounded-[4rem] -rotate-3" />
            <img 
              src="https://images.unsplash.com/photo-1544273677-c433136021d4?auto=format&fit=crop&q=80&w=1000" 
              alt="Vintage Christmas Market" 
              className="rounded-[3.5rem] shadow-2xl relative z-10"
            />
          </motion.div>
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="order-1 md:order-2"
          >
            <motion.h2 variants={itemVariants} className="text-5xl font-serif font-bold text-emerald-950 mb-12">Waarom een Pop-up Shop?</motion.h2>
            <div className="space-y-12">
              {[
                { 
                  icon: <Recycle />, 
                  color: "bg-red-50 text-red-600", 
                  title: "Circulaire Kerst", 
                  desc: "Jaarlijks worden er tonnen aan kerstdecoratie weggegooid. Wij geven deze items een tweede kans en stimuleren hergebruik." 
                },
                { 
                  icon: <Heart />, 
                  color: "bg-emerald-50 text-emerald-600", 
                  title: "Lelystads Goed Doel", 
                  desc: "Elke euro die we verdienen vloeit direct terug naar een lokaal project dat hulp biedt aan mensen die het nodig hebben." 
                },
                { 
                  icon: <Globe />, 
                  color: "bg-amber-50 text-amber-600", 
                  title: "Toegankelijkheid", 
                  desc: "Door lage prijzen te hanteren, zorgen we ervoor dat een sfeervol huis tijdens de feestdagen voor iedereen in Lelystad bereikbaar is." 
                }
              ].map((item, i) => (
                <motion.div key={i} variants={itemVariants} className="flex gap-8 group">
                  <div className={`shrink-0 w-16 h-16 ${item.color} rounded-[1.5rem] flex items-center justify-center transition-transform group-hover:scale-110 duration-300`}>
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-2xl mb-3 text-emerald-900">{item.title}</h4>
                    <p className="text-stone-600 text-lg leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-32 px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto bg-emerald-900 rounded-[4rem] p-16 md:p-24 text-center text-white relative overflow-hidden shadow-2xl"
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <TreeDeciduous className="w-20 h-20 mx-auto mb-10 text-red-400" />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8">Een Jaarlijks Initiatief</h2>
          <p className="text-emerald-100 text-xl leading-relaxed mb-12 font-light max-w-3xl mx-auto">
            Dit is pas het begin. We bouwen aan een traditie waarbij we elk jaar studenten, vrijwilligers en partners betrekken om Lelystad een stukje mooier en duurzamer te maken tijdens de mooiste tijd van het jaar.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <motion.div whileHover={{ scale: 1.1 }} className="px-8 py-3 bg-emerald-800/50 backdrop-blur-sm rounded-full text-sm font-black tracking-widest border border-white/10">#DUURZAAMLELYSTAD</motion.div>
            <motion.div whileHover={{ scale: 1.1 }} className="px-8 py-3 bg-emerald-800/50 backdrop-blur-sm rounded-full text-sm font-black tracking-widest border border-white/10">#KERSTMAGIE</motion.div>
          </div>
        </motion.div>
      </section>

      <Footer />
    </motion.div>
  );
};

export default About;