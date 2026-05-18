import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion } from 'framer-motion';
import { Heart, CheckCircle2, Users, Clock, Star } from 'lucide-react';
import { toast } from 'react-toastify';
import Header from '../components/Header';
import Footer from '../components/Footer';

const schema = z.object({
  name: z.string().min(2, 'Naam is verplicht'),
  email: z.string().email('Ongeldig e-mailadres'),
  phone: z.string().min(10, 'Telefoonnummer is verplicht'),
  role: z.string().min(1, 'Selecteer een rol'),
  availability: z.string().min(1, 'Geef je beschikbaarheid aan'),
  motivation: z.string().min(10, 'Vertel ons kort waarom je wilt helpen'),
});

type FormData = z.infer<typeof schema>;

const Volunteer = () => {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<FormData>({
    resolver: zodResolver(schema)
  });

  const onSubmit = async (data: FormData) => {
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log(data);
    toast.success('Bedankt voor je aanmelding! We nemen snel contact met je op.');
    reset();
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-stone-50"
    >
      <Header />
      
      <div className="pt-40 pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
            
            {/* Info Column */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.span 
                variants={itemVariants}
                className="text-red-600 font-black tracking-[0.2em] uppercase text-sm mb-6 block"
              >
                Word onderdeel van het team
              </motion.span>
              <motion.h1 
                variants={itemVariants}
                className="text-6xl font-serif font-bold text-emerald-950 mb-10 leading-tight"
              >
                Samen maken we <br /><span className="italic text-emerald-700">Kerst bijzonder</span>
              </motion.h1>
              <motion.p 
                variants={itemVariants}
                className="text-xl text-stone-600 mb-16 leading-relaxed font-light"
              >
                Zonder vrijwilligers geen Kerst Pop-up Shop. Of je nu een middagje wilt helpen in de verkoop, handig bent met decoratie of graag achter de schermen werkt: jouw hulp is goud waard voor het goede doel in Lelystad.
              </motion.p>

              <div className="space-y-10">
                {[
                  { icon: <Users className="text-emerald-600 w-6 h-6" />, title: "Gezellig Team", desc: "Werk samen met andere enthousiaste inwoners van Lelystad." },
                  { icon: <Clock className="text-emerald-600 w-6 h-6" />, title: "Flexibele Tijden", desc: "Help een paar uur per week of vaker, wat jou uitkomt." },
                  { icon: <Star className="text-emerald-600 w-6 h-6" />, title: "Maak Impact", desc: "Draag direct bij aan een duurzamere wereld en een lokaal goed doel." }
                ].map((item, i) => (
                  <motion.div 
                    key={i} 
                    variants={itemVariants}
                    whileHover={{ x: 10 }}
                    className="flex gap-8 group"
                  >
                    <div className="shrink-0 w-16 h-16 bg-white rounded-[1.5rem] shadow-sm border border-stone-100 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-2xl text-emerald-900 mb-2">{item.title}</h4>
                      <p className="text-stone-600 text-lg leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Form Column */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white p-10 md:p-16 rounded-[3.5rem] shadow-2xl border border-stone-100 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-50 rounded-bl-[10rem] -mr-20 -mt-20" />
              
              <h2 className="text-4xl font-serif font-bold text-emerald-950 mb-10 relative z-10">Meld je aan</h2>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="block text-sm font-bold text-stone-700 ml-1">Naam</label>
                    <input 
                      {...register('name')}
                      className="w-full px-6 py-4 rounded-2xl border border-stone-200 focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 outline-none transition-all bg-stone-50/50"
                      placeholder="Je volledige naam"
                    />
                    {errors.name && <p className="text-red-500 text-xs font-bold">{errors.name.message}</p>}
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-bold text-stone-700 ml-1">E-mail</label>
                    <input 
                      {...register('email')}
                      className="w-full px-6 py-4 rounded-2xl border border-stone-200 focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 outline-none transition-all bg-stone-50/50"
                      placeholder="je@email.nl"
                    />
                    {errors.email && <p className="text-red-500 text-xs font-bold">{errors.email.message}</p>}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-bold text-stone-700 ml-1">Telefoonnummer</label>
                  <input 
                    {...register('phone')}
                    className="w-full px-6 py-4 rounded-2xl border border-stone-200 focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 outline-none transition-all bg-stone-50/50"
                    placeholder="06 12345678"
                  />
                  {errors.phone && <p className="text-red-500 text-xs font-bold">{errors.phone.message}</p>}
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-bold text-stone-700 ml-1">Wat zou je willen doen?</label>
                  <select 
                    {...register('role')}
                    className="w-full px-6 py-4 rounded-2xl border border-stone-200 focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 outline-none transition-all bg-stone-50/50 appearance-none"
                  >
                    <option value="">Kies een rol...</option>
                    <option value="verkoop">Verkoop & Klantenservice</option>
                    <option value="styling">Styling & Inrichting</option>
                    <option value="logistiek">Logistiek & Sorteren</option>
                    <option value="allround">Allround Helper</option>
                  </select>
                  {errors.role && <p className="text-red-500 text-xs font-bold">{errors.role.message}</p>}
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-bold text-stone-700 ml-1">Beschikbaarheid</label>
                  <input 
                    {...register('availability')}
                    className="w-full px-6 py-4 rounded-2xl border border-stone-200 focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 outline-none transition-all bg-stone-50/50"
                    placeholder="Bijv: Woensdagmiddag en zaterdag"
                  />
                  {errors.availability && <p className="text-red-500 text-xs font-bold">{errors.availability.message}</p>}
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-bold text-stone-700 ml-1">Motivatie</label>
                  <textarea 
                    {...register('motivation')}
                    rows={4}
                    className="w-full px-6 py-4 rounded-2xl border border-stone-200 focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 outline-none transition-all resize-none bg-stone-50/50"
                    placeholder="Waarom wil je graag helpen?"
                  />
                  {errors.motivation && <p className="text-red-500 text-xs font-bold">{errors.motivation.message}</p>}
                </div>

                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-emerald-900 hover:bg-emerald-800 text-white py-5 rounded-2xl font-bold text-xl transition-all flex items-center justify-center gap-3 disabled:opacity-70 shadow-xl shadow-emerald-900/20"
                >
                  {isSubmitting ? (
                    <motion.div 
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full"
                    />
                  ) : (
                    <>
                      Verstuur Aanmelding <CheckCircle2 className="w-6 h-6" />
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>

          </div>
        </div>
      </div>

      <Footer />
    </motion.div>
  );
};

export default Volunteer;