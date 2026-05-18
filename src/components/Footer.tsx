import React from 'react';
    import { TreeDeciduous, Instagram, Facebook, Mail, MapPin } from 'lucide-react';

    const Footer = () => {
      return (
        <footer className="bg-emerald-950 text-emerald-50 pt-20 pb-10">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <TreeDeciduous className="w-8 h-8 text-red-500" />
                <span className="text-2xl font-serif font-bold">Kerst Pop-up</span>
              </div>
              <p className="text-emerald-200/80 leading-relaxed mb-6">
                Een duurzaam initiatief in Lelystad voor een sfeervolle en betaalbare kerst. Alle opbrengsten gaan naar het lokale goede doel.
              </p>
              <div className="flex gap-4">
                <a href="#" className="p-2 bg-emerald-900 rounded-full hover:bg-red-600 transition-colors" aria-label="Instagram">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="p-2 bg-emerald-900 rounded-full hover:bg-red-600 transition-colors" aria-label="Facebook">
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-6 text-white">Navigatie</h4>
              <ul className="space-y-4 text-emerald-200/80">
                <li><a href="/" className="hover:text-red-400 transition-colors">Home</a></li>
                <li><a href="/over-ons" className="hover:text-red-400 transition-colors">Over Ons</a></li>
                <li><a href="/vrijwilligers" className="hover:text-red-400 transition-colors">Vrijwilligers</a></li>
                <li><a href="#" className="hover:text-red-400 transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-6 text-white">Bezoek Ons</h4>
              <ul className="space-y-4 text-emerald-200/80">
                <li className="flex gap-3">
                  <MapPin className="w-5 h-5 text-red-500 shrink-0" />
                  <span>Centrum Lelystad<br />(Locatie volgt binnenkort)</span>
                </li>
                <li className="flex gap-3">
                  <Mail className="w-5 h-5 text-red-500 shrink-0" />
                  <span>info@kerstpopuplelystad.nl</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-6 text-white">Openingstijden</h4>
              <p className="text-emerald-200/80 mb-4 italic">Vanaf half november t/m kerst</p>
              <ul className="space-y-2 text-emerald-200/80 text-sm">
                <li className="flex justify-between"><span>Woensdag</span> <span>10:00 - 17:00</span></li>
                <li className="flex justify-between"><span>Vrijdag</span> <span>10:00 - 17:00</span></li>
                <li className="flex justify-between"><span>Zaterdag</span> <span>10:00 - 16:00</span></li>
              </ul>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-emerald-900 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-emerald-400">
            <p>© 2026 Kerst Pop-up Shop Lelystad. Alle rechten voorbehouden.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white">Privacybeleid</a>
              <a href="#" className="hover:text-white">Algemene Voorwaarden</a>
            </div>
          </div>
        </footer>
      );
    };

    export default Footer;