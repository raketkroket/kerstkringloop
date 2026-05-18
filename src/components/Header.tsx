import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { TreeDeciduous, Menu, X, Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Over Ons', path: '/over-ons' },
    { name: 'Vrijwilligers', path: '/vrijwilligers' },
  ];

  const shouldShowSolidBg = !isHomePage || isScrolled;
  const bgColor = shouldShowSolidBg ? 'bg-white/95 backdrop-blur-xl shadow-lg py-4' : 'bg-transparent py-8';
  const logoColor = shouldShowSolidBg ? 'text-emerald-800' : 'text-white';
  const textColor = shouldShowSolidBg ? 'text-emerald-900' : 'text-white';

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${bgColor}`}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <motion.div
            whileHover={{ rotate: [0, -10, 10, 0] }}
            transition={{ duration: 0.5 }}
          >
            <TreeDeciduous className={`w-10 h-10 transition-colors duration-500 ${logoColor}`} />
          </motion.div>
          <span className={`text-2xl font-serif font-bold tracking-tight transition-colors duration-500 ${textColor}`}>
            Kerst Pop-up <span className="text-red-600">Lelystad</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`relative text-sm font-bold tracking-wide transition-colors duration-300 hover:text-red-600 ${
                location.pathname === link.path 
                  ? 'text-red-600' 
                  : textColor
              }`}
            >
              {link.name}
              {location.pathname === link.path && (
                <motion.div 
                  layoutId="nav-underline"
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-red-600 rounded-full"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </Link>
          ))}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link 
              to="/vrijwilligers"
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full text-sm font-bold transition-all shadow-lg flex items-center gap-2"
            >
              <Heart className="w-4 h-4 fill-current" />
              Help Mee
            </Link>
          </motion.div>
        </div>

        {/* Mobile Toggle */}
        <motion.button 
          whileTap={{ scale: 0.9 }}
          className={`md:hidden p-2 rounded-xl transition-colors ${shouldShowSolidBg ? 'text-emerald-900 bg-stone-100' : 'text-white bg-white/10'}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </motion.button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 right-0 bg-white border-t border-stone-100 shadow-2xl overflow-hidden md:hidden"
          >
            <div className="flex flex-col gap-2 p-6">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    to={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block py-4 px-4 rounded-2xl text-lg font-bold transition-colors ${
                      location.pathname === link.path ? 'bg-red-50 text-red-600' : 'text-emerald-900 hover:bg-stone-50'
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="mt-4"
              >
                <Link 
                  to="/vrijwilligers"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block bg-red-600 text-white px-6 py-5 rounded-2xl text-center font-bold text-lg shadow-xl"
                >
                  Word Vrijwilliger
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;