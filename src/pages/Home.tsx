import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Heart, Recycle, Sparkles, ArrowRight, Calendar, MapPin } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Slideshow from '../components/Slideshow';

const Snowfall = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ 
            opacity: 0, 
            y: -20, 
            x: Math.random() * 100 + "%" 
          }}
          animate={{ 
            opacity: [0, 1, 1, 0],
            y: "110vh",
            x: (Math.random() * 100 - 10) + "%"
          }}
          transition={{ 
            duration: Math.random() * 10 + 10, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: Math.random() * 10
          }}
          className="absolute w-1 h-1 bg-white rounded-full blur-[1px]"
        />
      ))}
    </div>
  );
};

const Home = () => {
  const { scrollYProgress } = useScroll();
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 1.1]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-stone-50"
    >
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[95vh] flex items-center justify-center overflow-hidden">
        <motion.div 
          style={{ scale: heroScale }}
          className="absolute inset-0 z-0"
        >
          <img 
            src="https://images.unsplash.com/photo-1543589077-47d81606c1bf?auto=format&fit=crop&q=80&w=2000" 
            alt="Vintage Christmas Ornaments" 
            className="w-full h-full object-cover brightness-[0.4]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/60 via-transparent to-stone-50" />
        </motion.div>

        <Snowfall />

        <div className="relative z-20 max-w-4xl mx-auto px-6 text-center text-white">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            style={{ opacity: heroOpacity }}
          >
            <motion.span 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-6 py-2 bg-red-600/90 backdrop-blur-md rounded-full text-sm font-bold tracking-[0.2em] uppercase mb-8 shadow-lg border border-red-500/30"
            >
              Opening Half November 2026
            </motion.span>
            <h1 className="text-6xl md:text-8xl font-serif font-bold mb-8 leading-[1.1]">
              Geef Kerst een <br />
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 1 }}
                className="italic text-emerald-300 inline-block"
              >
                Tweede Leven
              </motion.span>
            </h1>
            <p className="text-xl md:text-2xl text-stone-200 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
              Ontdek unieke vintage kerstdecoratie, steun een lokaal goed doel en vier de feestdagen duurzaam in Lelystad.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <motion.a 
                whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgb(220 38 38 / 0.3)" }}
                whileTap={{ scale: 0.95 }}
                href="/vrijwilligers" 
                className="w-full sm:w-auto bg-red-600 text-white px-12 py-5 rounded-full text-lg font-bold transition-colors shadow-xl flex items-center justify-center gap-3"
              >
                Word Vrijwilliger <ArrowRight className="w-5 h-5" />
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.2)" }}
                whileTap={{ scale: 0.95 }}
                href="#info" 
                className="w-full sm:w-auto bg-white/10 backdrop-blur-md text-white border border-white/30 px-12 py-5 rounded-full text-lg font-bold transition-all"
              >
                Ontdek Meer
              </motion.a>
            </div>
          </motion.div>
        </div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-white/50"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-white/50 rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* Core Values + Slideshow */}
      <section id="info" className="py-32 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-10 xl:gap-14 items-start">
          {/* Core Values Cards */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 gap-6"
          >
            {[
              {
                icon: <Recycle className="w-8 h-8 text-emerald-700" />,
                title: "Duurzaamheid",
                desc: "Wij geloven in hergebruik. Geef prachtige kerstspullen een nieuwe plek en verminder afval."
              },
              {
                icon: <Heart className="w-8 h-8 text-red-600" />,
                title: "Lokaal Goed Doel",
                desc: "De volledige winst van onze pop-up shop gaat direct naar een maatschappelijk project in Lelystad."
              },
              {
                icon: <Sparkles className="w-8 h-8 text-amber-500" />,
                title: "Nostalgische Sfeer",
                desc: "Beleef de magie van vroeger met onze zorgvuldig geselecteerde vintage en tweedehands collectie."
              }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="bg-white p-6 rounded-[2rem] shadow-sm border border-stone-100 hover:shadow-2xl transition-all group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-20 h-20 bg-stone-50 rounded-bl-[3rem] -mr-8 -mt-8 transition-transform group-hover:scale-110" />
                <div className="relative z-10">
                  <div className="mb-4 p-3 bg-stone-50 rounded-xl inline-block group-hover:bg-emerald-50 transition-colors">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-serif font-bold mb-2 text-emerald-900">{item.title}</h3>
                  <p className="text-stone-600 leading-relaxed text-sm">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Slideshow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-[2.25rem] overflow-hidden shadow-2xl h-72 md:h-80 lg:h-[520px]"
          >
            <Slideshow 
              images={[
                '/fotos/kerstballen.jpg',
                '/fotos/kerstboom.jpg',
                '/fotos/kerstroom.jpg',
                '/fotos/kersttafel.jpg'
              ]}
            />
          </motion.div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-32 bg-emerald-950 text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <div className="absolute top-20 left-20 w-64 h-64 border-8 border-white rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 border-8 border-red-500 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-6xl font-serif font-bold mb-10 leading-tight">Een Jaarlijks <br /><span className="text-emerald-400 italic">Terugkerend</span> Feest</h2>
            <p className="text-emerald-100/80 text-xl mb-12 leading-relaxed font-light">
              De Kerst Pop-up Shop is meer dan alleen een winkel. Het is een plek waar studenten, vrijwilligers en buurtbewoners samenkomen om iets moois te creëren voor de stad Lelystad.
            </p>
            <div className="space-y-8">
              <motion.div 
                whileHover={{ x: 10 }}
                className="flex items-start gap-6 p-6 bg-white/5 rounded-3xl border border-white/10"
              >
                <div className="p-4 bg-emerald-800/50 rounded-2xl shadow-inner"><Calendar className="text-red-400 w-6 h-6" /></div>
                <div>
                  <h4 className="font-bold text-2xl mb-1">Wanneer?</h4>
                  <p className="text-emerald-200 text-lg">Half november tot kerst 2026</p>
                </div>
              </motion.div>
              <motion.div 
                whileHover={{ x: 10 }}
                className="flex items-start gap-6 p-6 bg-white/5 rounded-3xl border border-white/10"
              >
                <div className="p-4 bg-emerald-800/50 rounded-2xl shadow-inner"><MapPin className="text-red-400 w-6 h-6" /></div>
                <div>
                  <h4 className="font-bold text-2xl mb-1">Waar?</h4>
                  <p className="text-emerald-200 text-lg">Een sfeervol pand in het hart van Lelystad</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 3 }}
            viewport={{ once: true }}
            transition={{ duration: 1, type: "spring" }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white/10">
              <img 
                src="https://images.unsplash.com/photo-1512909006721-3d6018887383?auto=format&fit=crop&q=80&w=1000" 
                alt="Cozy Christmas Shop" 
                className="w-full h-full object-cover"
              />
            </div>
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-10 -left-10 bg-red-600 p-10 rounded-[2rem] shadow-2xl -rotate-6 hidden md:block border-4 border-white/20"
            >
              <p className="text-5xl font-serif font-bold text-white mb-1">100%</p>
              <p className="text-sm uppercase tracking-[0.2em] font-black text-red-100">Voor het goede doel</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto bg-stone-900 rounded-[4rem] p-16 md:p-24 text-center relative overflow-hidden shadow-2xl"
        >
          <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
            <motion.div 
              animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
              transition={{ duration: 20, repeat: Infinity }}
              className="absolute -top-20 -left-20 w-64 h-64 border-[20px] border-white/10 rounded-full" 
            />
            <motion.div 
              animate={{ scale: [1, 1.3, 1], rotate: [0, -90, 0] }}
              transition={{ duration: 25, repeat: Infinity }}
              className="absolute -bottom-32 -right-32 w-96 h-96 border-[30px] border-red-500/10 rounded-full" 
            />
          </div>
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-white mb-10 relative z-10 leading-tight">Help jij mee de <br /><span className="text-red-500">kerstmagie</span> te verspreiden?</h2>
          <p className="text-stone-400 text-xl mb-14 max-w-2xl mx-auto relative z-10 font-light">
            We zoeken enthousiaste vrijwilligers voor de opbouw, verkoop en styling van onze pop-up shop.
          </p>
          <motion.a 
            whileHover={{ scale: 1.05, backgroundColor: "#dc2626", color: "white" }}
            whileTap={{ scale: 0.95 }}
            href="/vrijwilligers" 
            className="inline-block bg-white text-stone-900 px-16 py-6 rounded-full text-xl font-bold transition-all relative z-10 shadow-xl"
          >
            Meld je nu aan
          </motion.a>
        </motion.div>
      </section>

      <Footer />
    </motion.div>
  );
};

export default Home;