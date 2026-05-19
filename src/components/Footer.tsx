import { Zap, Mail, Phone, MapPin, ArrowRight, Instagram, Twitter, Linkedin, Youtube } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

const services = ['UI/UX Design', 'Web Development', 'E-Commerce', 'SEO Optimization', 'Social Media', 'Video Editing'];
const quickLinks = ['Home', 'About', 'Services', 'Projects', 'Contact'];
const pageMap: Record<string, string> = {
  Home: 'home', About: 'about', Services: 'services', Projects: 'projects', Contact: 'contact',
};

export default function Footer({ onNavigate }: FooterProps) {
  const handleNav = (page: string) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-stone-950 dark:bg-[#060609] text-stone-300 overflow-hidden">
      {/* Decorative top border */}
      <div className="h-px w-full" style={{ background: 'linear-gradient(90deg, transparent, #e07b00, #f9b84a, transparent)' }} />

      {/* Background glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full opacity-5 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #e07b00, transparent)' }} />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full opacity-5 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #f9b84a, transparent)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <button onClick={() => handleNav('home')} className="flex items-center gap-2.5 mb-5 group">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, #e07b00, #f9b84a)' }}>
                <Zap size={18} className="text-white" fill="white" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-display font-bold text-lg text-white">
                  Kiran<span className="gradient-text">Digital</span>
                </span>
                <span className="text-[9px] font-semibold tracking-[0.2em] uppercase text-stone-500">
                  Creative Studio
                </span>
              </div>
            </button>
            <p className="text-stone-400 text-sm leading-relaxed mb-6">
              A premium creative digital agency helping Indian startups and businesses build powerful digital presences.
            </p>
            <div className="flex items-center gap-3">
              {[
                { icon: Instagram, label: 'Instagram' },
                { icon: Twitter, label: 'Twitter' },
                { icon: Linkedin, label: 'LinkedIn' },
                { icon: Youtube, label: 'YouTube' },
              ].map(({ icon: Icon, label }) => (
                <button
                  key={label}
                  aria-label={label}
                  className="w-8 h-8 rounded-lg flex items-center justify-center bg-stone-800 hover:bg-saffron-600 text-stone-400 hover:text-white transition-all duration-200"
                >
                  <Icon size={15} />
                </button>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-white mb-5 text-sm uppercase tracking-widest">Services</h4>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s}>
                  <button
                    onClick={() => handleNav('services')}
                    className="text-stone-400 hover:text-saffron-400 text-sm transition-colors duration-200 flex items-center gap-1.5 group"
                  >
                    <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity -ml-4 group-hover:ml-0 duration-200" />
                    {s}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-white mb-5 text-sm uppercase tracking-widest">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link}>
                  <button
                    onClick={() => handleNav(pageMap[link])}
                    className="text-stone-400 hover:text-saffron-400 text-sm transition-colors duration-200 flex items-center gap-1.5 group"
                  >
                    <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity -ml-4 group-hover:ml-0 duration-200" />
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-white mb-5 text-sm uppercase tracking-widest">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ background: 'rgba(224,123,0,0.15)' }}>
                  <Mail size={13} className="text-saffron-400" />
                </div>
                <span className="text-stone-400 text-sm">hello@kirandigital.in</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ background: 'rgba(224,123,0,0.15)' }}>
                  <Phone size={13} className="text-saffron-400" />
                </div>
                <span className="text-stone-400 text-sm">+91 98765 43210</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ background: 'rgba(224,123,0,0.15)' }}>
                  <MapPin size={13} className="text-saffron-400" />
                </div>
                <span className="text-stone-400 text-sm">Bangalore, Karnataka<br />India - 560001</span>
              </li>
            </ul>

            <button
              onClick={() => handleNav('contact')}
              className="mt-5 w-full btn-primary justify-center text-sm py-2.5"
            >
              <span>Start a Project</span>
            </button>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-6 border-t border-stone-800/60 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-stone-500 text-sm">
            &copy; {new Date().getFullYear()} KiranDigital Creative Studio. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-stone-500 text-sm">
            <button className="hover:text-stone-300 transition-colors">Privacy Policy</button>
            <span className="w-1 h-1 rounded-full bg-stone-600" />
            <button className="hover:text-stone-300 transition-colors">Terms of Service</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
