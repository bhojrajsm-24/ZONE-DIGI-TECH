import { useEffect, useRef, useState } from 'react';
import { ArrowRight, ChevronDown, Star, Users, Briefcase, Award, Zap, Palette, Globe, ShoppingCart, Share2, Search, Video, Camera, Image as ImageIcon, Monitor, CheckCircle, Clock, TrendingUp, HeartHandshake, DollarSign, Layers, ChevronDown as ChevronDownIcon, MessageCircle, Play, Sparkles } from 'lucide-react';
import { useScrollAnimation } from '../hooks/UseScrollAnimation';

interface HomeProps {
  onNavigate: (page: string) => void;
}

const stats = [
  { value: '150+', label: 'Projects Delivered', icon: Briefcase },
  { value: '80+', label: 'Happy Clients', icon: Users },
  { value: '5★', label: 'Average Rating', icon: Star },
  { value: '3 Yrs', label: 'Experience', icon: Award },
];

const whyUs = [
  { icon: Zap, title: 'Fast Delivery', desc: 'We deliver projects on time, every time. Your deadline is our commitment.' },
  { icon: Palette, title: 'Modern UI/UX', desc: 'Pixel-perfect designs inspired by global trends and Indian aesthetics.' },
  { icon: Search, title: 'SEO Friendly', desc: 'Every website we build is optimized for search engines from the ground up.' },
  { icon: HeartHandshake, title: 'Dedicated Support', desc: '24/7 support team ready to help you with any issues or questions.' },
  { icon: Sparkles, title: 'Creative Team', desc: 'A passionate team of designers, developers, and strategists.' },
  { icon: DollarSign, title: 'Affordable Pricing', desc: 'Premium quality at startup-friendly prices with transparent billing.' },
  { icon: TrendingUp, title: 'Scalable Solutions', desc: 'Build today, scale tomorrow. Our solutions grow with your business.' },
  { icon: Layers, title: 'Professional Workflow', desc: 'Agile process, milestone-based delivery, and regular client updates.' },
];

const services = [
  { icon: Palette, title: 'UI/UX Design', desc: 'Intuitive, beautiful interfaces that delight users and drive conversions.', color: '#e07b00' },
  { icon: Monitor, title: 'Static Websites', desc: 'Fast, secure, and beautifully designed static sites for any business.', color: '#0ea5e9' },
  { icon: Globe, title: 'Dynamic Websites', desc: 'Feature-rich dynamic web apps with CMS, dashboards, and more.', color: '#10b981' },
  { icon: ShoppingCart, title: 'E-Commerce', desc: 'Complete online stores with payment gateway, inventory, and analytics.', color: '#f59e0b' },
  { icon: Share2, title: 'Social Media', desc: 'End-to-end social media management, content, and growth strategies.', color: '#8b5cf6' },
  { icon: Search, title: 'SEO Optimization', desc: 'Data-driven SEO to rank higher and drive organic traffic consistently.', color: '#ef4444' },
  { icon: Video, title: 'Video Editing', desc: 'Professional video editing for ads, reels, YouTube, and brand films.', color: '#06b6d4' },
  { icon: ImageIcon, title: 'Photo Editing', desc: 'Stunning photo retouching, compositing, and brand-ready visuals.', color: '#ec4899' },
  { icon: Camera, title: 'Video Shoot', desc: 'On-location video production for products, brands, and testimonials.', color: '#84cc16' },
  { icon: Camera, title: 'Photo Shoot', desc: 'Professional photography for products, teams, events, and campaigns.', color: '#f97316' },
];

const projects = [
  {
    title: 'Arya Naturals',
    category: 'E-Commerce',
    desc: 'Organic products brand with full e-commerce platform and inventory management.',
    image: 'https://images.pexels.com/photos/3735218/pexels-photo-3735218.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['React', 'Supabase', 'Stripe'],
  },
  {
    title: 'TechNova SaaS',
    category: 'Web App',
    desc: 'B2B SaaS dashboard for startup analytics with real-time data visualization.',
    image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['UI/UX', 'Dashboard', 'React'],
  },
  {
    title: 'Meera Jewels',
    category: 'Branding',
    desc: 'Complete brand identity and e-commerce for a heritage Indian jewellery brand.',
    image: 'https://images.pexels.com/photos/1485894/pexels-photo-1485894.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Branding', 'E-Commerce', 'SEO'],
  },
  {
    title: 'GreenGrow Farms',
    category: 'Marketing',
    desc: 'Digital marketing and social media campaign for an agri-tech startup.',
    image: 'https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Social Media', 'SEO', 'Video'],
  },
];

const faqs = [
  { q: 'What is the cost of a website?', a: 'Our website packages start from ₹8,999 for a basic static site, ₹24,999 for dynamic websites, and ₹49,999+ for full e-commerce solutions. All packages are customizable based on your requirements.' },
  { q: 'How long does it take to build a website?', a: 'A static website is delivered in 5–7 working days. Dynamic websites take 2–4 weeks, and full e-commerce projects take 4–8 weeks. Complex projects have custom timelines.' },
  { q: 'How many revisions do I get?', a: 'We offer unlimited minor revisions during the project. After delivery, you get 2 free rounds of major revisions within 30 days. We want you to be 100% satisfied.' },
  { q: 'Do you offer SEO services?', a: 'Yes! We offer on-page SEO, technical SEO, keyword research, and monthly SEO management packages. SEO is also built into every website we develop.' },
  { q: 'Do you provide website hosting and maintenance?', a: 'Yes, we offer managed hosting plans starting at ₹1,499/month and maintenance packages that include updates, backups, uptime monitoring, and security patches.' },
  { q: 'What payment methods do you accept?', a: 'We accept UPI, bank transfer, credit/debit cards, and international payments via PayPal or Wise. We typically work on a 50% advance, 50% on delivery basis.' },
];

const marqueeItems = [
  'UI/UX Design', 'Web Development', 'E-Commerce', 'SEO', 'Social Media', 'Branding', 'Video Production', 'Photography', 'Digital Marketing', 'App Development',
];

export default function Home({ onNavigate }: HomeProps) {
  useScrollAnimation();
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
      }
    };
    const el = heroRef.current;
    el?.addEventListener('mousemove', handleMouseMove);
    return () => el?.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleNav = (page: string) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-stone-50 dark:bg-[#0a0a0f]">
      {/* ── HERO ── */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center overflow-hidden bg-mesh-light dark:bg-mesh-dark"
      >
        {/* Mouse follow glow */}
        <div
          className="absolute w-[500px] h-[500px] rounded-full pointer-events-none transition-transform duration-700 ease-out"
          style={{
            background: 'radial-gradient(circle, rgba(224,123,0,0.1), transparent 70%)',
            left: mousePos.x - 250,
            top: mousePos.y - 250,
          }}
        />

        {/* Background shapes */}
        <div className="absolute top-20 right-0 w-[600px] h-[600px] rounded-full blur-3xl opacity-10 pointer-events-none"
          style={{ background: 'radial-gradient(circle, #e07b00 0%, transparent 70%)' }} />
        <div className="absolute bottom-0 left-10 w-[400px] h-[400px] rounded-full blur-3xl opacity-8 pointer-events-none"
          style={{ background: 'radial-gradient(circle, #0ea5e9 0%, transparent 70%)' }} />

        {/* Indian pattern overlay */}
        <div className="absolute inset-0 indian-pattern opacity-60 dark:opacity-20 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 grid lg:grid-cols-2 gap-16 items-center relative z-10">
          {/* Left */}
          <div>
            <div className="tag mb-6 inline-flex">
              <Sparkles size={11} />
              India's Premier Digital Creative Studio
            </div>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight text-stone-900 dark:text-white mb-6">
              We Build{' '}
              <span className="gradient-text">Digital</span>
              <br />
              Experiences<br />
              <span className="text-stone-400 dark:text-stone-500">That Convert</span>
            </h1>
            <p className="text-stone-500 dark:text-stone-400 text-lg leading-relaxed mb-8 max-w-lg">
              From startups to enterprises — we design, develop, and launch digital products that look premium and perform exceptionally. Made in India, built for the world.
            </p>
            <div className="flex flex-wrap gap-4">
              <button onClick={() => handleNav('services')} className="btn-primary px-7 py-3.5 text-sm font-semibold">
                <span className="flex items-center gap-2">
                  Explore Services <ArrowRight size={16} />
                </span>
              </button>
              <button onClick={() => handleNav('projects')} className="btn-outline px-7 py-3.5 text-sm font-semibold flex items-center gap-2">
                <Play size={15} /> View Projects
              </button>
            </div>

            {/* Social proof */}
            <div className="mt-10 flex items-center gap-5">
              <div className="flex -space-x-2">
                {['https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=80',
                  'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=80',
                  'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=80'].map((src, i) => (
                  <img key={i} src={src} alt="Client" className="w-9 h-9 rounded-full border-2 border-white dark:border-stone-900 object-cover" />
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1 mb-0.5">
                  {[...Array(5)].map((_, i) => <Star key={i} size={12} className="text-amber-400" fill="#fbbf24" />)}
                </div>
                <p className="text-stone-500 dark:text-stone-400 text-xs">Trusted by <strong className="text-stone-700 dark:text-stone-300">80+</strong> clients across India</p>
              </div>
            </div>
          </div>

          {/* Right — Visual */}
          <div className="relative hidden lg:block">
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Main card */}
              <div className="absolute inset-8 rounded-3xl glass dark:glass-dark shadow-2xl overflow-hidden border border-white/20 dark:border-white/5">
                <img
                  src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Team working"
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="glass rounded-2xl p-4 border border-white/20">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-white text-xs font-semibold">New Project Started</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-white font-bold text-sm">E-Commerce Launch</p>
                        <p className="text-white/60 text-xs">Client: Meera Jewels</p>
                      </div>
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                        style={{ background: 'linear-gradient(135deg, #e07b00, #f9b84a)' }}>
                        <ShoppingCart size={16} className="text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating stat cards */}
              <div className="absolute -left-4 top-1/4 glass dark:glass-dark rounded-2xl p-3.5 border border-white/20 dark:border-white/5 shadow-xl animate-float">
                <p className="text-2xl font-bold text-stone-900 dark:text-white">150+</p>
                <p className="text-stone-500 text-xs">Projects Done</p>
              </div>

              <div className="absolute -right-4 top-1/3 glass dark:glass-dark rounded-2xl p-3.5 border border-white/20 dark:border-white/5 shadow-xl animate-float-delayed">
                <div className="flex items-center gap-2 mb-1">
                  {[...Array(5)].map((_, i) => <Star key={i} size={9} className="text-amber-400" fill="#fbbf24" />)}
                </div>
                <p className="text-stone-700 dark:text-stone-300 text-xs font-semibold">5.0 Rating</p>
              </div>

              <div className="absolute -bottom-2 right-8 glass dark:glass-dark rounded-2xl px-4 py-3 border border-white/20 dark:border-white/5 shadow-xl">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center"
                    style={{ background: 'linear-gradient(135deg, #e07b00, #f9b84a)' }}>
                    <CheckCircle size={12} className="text-white" />
                  </div>
                  <span className="text-stone-700 dark:text-stone-300 text-xs font-semibold">On-time Delivery</span>
                </div>
              </div>

              {/* Background circle */}
              <div className="absolute inset-0 rounded-full border border-saffron-200/20 dark:border-saffron-700/20 animate-spin-slow pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-stone-400">
          <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
          <ChevronDown size={16} className="animate-bounce" />
        </div>
      </section>

      {/* ── MARQUEE ── */}
      <div className="py-4 overflow-hidden border-y border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900/40">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="inline-flex items-center gap-3 mx-6 text-sm font-medium text-stone-400 dark:text-stone-500">
              <span className="w-1.5 h-1.5 rounded-full bg-saffron-400" />
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* ── STATS ── */}
      <section className="py-16 bg-white dark:bg-stone-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <div key={i} className="animate-on-scroll text-center p-6 rounded-2xl bg-stone-50 dark:bg-stone-900/60 border border-stone-100 dark:border-stone-800 card-hover">
                <div className="w-10 h-10 rounded-xl mx-auto mb-3 flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, rgba(224,123,0,0.12), rgba(249,184,74,0.12))' }}>
                  <s.icon size={18} className="text-saffron-600 dark:text-saffron-400" />
                </div>
                <div className="font-display text-3xl font-bold text-stone-900 dark:text-white mb-1">{s.value}</div>
                <div className="text-stone-500 dark:text-stone-400 text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT TEASER ── */}
      <section className="py-24 bg-stone-50 dark:bg-[#0a0a0f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-on-scroll-left relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Our team"
                className="w-full aspect-[4/3] object-cover"
              />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(224,123,0,0.15), transparent)' }} />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-4 -right-4 bg-white dark:bg-stone-900 rounded-2xl p-4 shadow-xl border border-stone-100 dark:border-stone-800">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, #e07b00, #f9b84a)' }}>
                  <Award size={18} className="text-white" />
                </div>
                <div>
                  <p className="font-bold text-stone-900 dark:text-white text-sm">Top Rated Agency</p>
                  <p className="text-stone-400 text-xs">India 2024</p>
                </div>
              </div>
            </div>
          </div>

          <div className="animate-on-scroll-right">
            <div className="tag mb-5">About Us</div>
            <h2 className="section-title text-stone-900 dark:text-white mb-5">
              We Turn Ideas Into<br />
              <span className="gradient-text">Digital Realities</span>
            </h2>
            <p className="section-subtitle mb-4">
              Founded in Bangalore, KiranDigital is a full-service creative agency blending modern design sensibility with India's rich visual heritage.
            </p>
            <p className="text-stone-500 dark:text-stone-400 leading-relaxed mb-8">
              We are a passionate team of designers, developers, and digital strategists who believe great design isn't just about aesthetics — it's about creating experiences that solve real problems and drive real results.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { title: 'Our Mission', desc: 'Empower Indian businesses with world-class digital presence.' },
                { title: 'Our Vision', desc: 'Become India\'s most trusted creative technology partner.' },
              ].map((item) => (
                <div key={item.title} className="p-4 rounded-2xl bg-white dark:bg-stone-900/60 border border-stone-100 dark:border-stone-800">
                  <h4 className="font-bold text-stone-900 dark:text-white text-sm mb-1">{item.title}</h4>
                  <p className="text-stone-500 dark:text-stone-400 text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
            <button onClick={() => handleNav('about')} className="btn-primary inline-flex items-center gap-2 text-sm">
              <span>Learn More About Us</span>
              <ArrowRight size={15} />
            </button>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="py-24 bg-white dark:bg-stone-900/20 relative overflow-hidden">
        <div className="absolute inset-0 indian-pattern opacity-40 dark:opacity-10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="tag mx-auto mb-5">Why Choose Us</div>
            <h2 className="section-title text-stone-900 dark:text-white mb-4">
              Why 80+ Businesses Trust<br />
              <span className="gradient-text">KiranDigital</span>
            </h2>
            <p className="section-subtitle max-w-xl mx-auto">
              We don't just build websites. We craft digital experiences that convert visitors into customers and customers into brand advocates.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {whyUs.map((item, i) => (
              <div
                key={i}
                className="animate-on-scroll group p-6 rounded-2xl bg-stone-50 dark:bg-stone-900/60 border border-stone-100 dark:border-stone-800 hover:border-saffron-300 dark:hover:border-saffron-700 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                <div className="w-11 h-11 rounded-2xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
                  style={{ background: 'linear-gradient(135deg, rgba(224,123,0,0.12), rgba(249,184,74,0.08))' }}>
                  <item.icon size={20} className="text-saffron-600 dark:text-saffron-400 transition-colors" />
                </div>
                <h3 className="font-display font-bold text-stone-900 dark:text-white mb-2 text-sm">{item.title}</h3>
                <p className="text-stone-500 dark:text-stone-400 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="py-24 bg-stone-50 dark:bg-[#0a0a0f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="tag mx-auto mb-5">Our Services</div>
            <h2 className="section-title text-stone-900 dark:text-white mb-4">
              Everything Your Brand<br />
              <span className="gradient-text">Needs to Grow</span>
            </h2>
            <p className="section-subtitle max-w-xl mx-auto">
              From design to development to digital marketing — we offer a comprehensive suite of services to help your business thrive online.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {services.map((service, i) => (
              <div
                key={i}
                className="animate-on-scroll group p-5 rounded-2xl bg-white dark:bg-stone-900/60 border border-stone-100 dark:border-stone-800 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                style={{ transitionDelay: `${i * 40}ms` }}
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3 transition-all duration-300 group-hover:scale-110"
                  style={{ background: `${service.color}18` }}>
                  <service.icon size={18} style={{ color: service.color }} />
                </div>
                <h3 className="font-display font-bold text-stone-900 dark:text-white text-sm mb-1.5">{service.title}</h3>
                <p className="text-stone-500 dark:text-stone-400 text-xs leading-relaxed mb-3">{service.desc}</p>
                <button onClick={() => handleNav('services')} className="text-xs font-semibold flex items-center gap-1 transition-colors duration-200 group-hover:gap-2"
                  style={{ color: service.color }}>
                  Learn More <ArrowRight size={11} />
                </button>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <button onClick={() => handleNav('services')} className="btn-outline inline-flex items-center gap-2">
              View All Services <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section className="py-24 bg-white dark:bg-stone-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <div className="tag mb-5">Our Work</div>
              <h2 className="section-title text-stone-900 dark:text-white">
                Featured<br />
                <span className="gradient-text">Projects</span>
              </h2>
            </div>
            <button onClick={() => handleNav('projects')} className="btn-outline flex items-center gap-2 self-start md:self-auto">
              View All Projects <ArrowRight size={16} />
            </button>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {projects.map((p, i) => (
              <div
                key={i}
                className="animate-on-scroll group rounded-2xl overflow-hidden bg-stone-50 dark:bg-stone-900/60 border border-stone-100 dark:border-stone-800 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-stone-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button onClick={() => handleNav('projects')} className="px-4 py-2 rounded-full text-white text-xs font-semibold border border-white/50 backdrop-blur-sm hover:bg-white/20 transition-colors">
                      View Case Study
                    </button>
                  </div>
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-full text-xs font-semibold text-white backdrop-blur-sm"
                      style={{ background: 'linear-gradient(135deg, rgba(224,123,0,0.8), rgba(249,184,74,0.8))' }}>
                      {p.category}
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-display font-bold text-stone-900 dark:text-white mb-1.5 text-sm">{p.title}</h3>
                  <p className="text-stone-500 dark:text-stone-400 text-xs leading-relaxed mb-3">{p.desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {p.tags.map((tag) => (
                      <span key={tag} className="px-2 py-0.5 rounded-full text-xs bg-stone-100 dark:bg-stone-800 text-stone-500 dark:text-stone-400">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-24 bg-stone-50 dark:bg-[#0a0a0f]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="tag mx-auto mb-5">FAQ</div>
            <h2 className="section-title text-stone-900 dark:text-white mb-4">
              Common Questions<br />
              <span className="gradient-text">Answered</span>
            </h2>
            <p className="section-subtitle">
              Everything you need to know before starting your project with us.
            </p>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="animate-on-scroll rounded-2xl bg-white dark:bg-stone-900/60 border border-stone-100 dark:border-stone-800 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <span className="font-semibold text-stone-900 dark:text-white text-sm pr-4">{faq.q}</span>
                  <ChevronDownIcon
                    size={18}
                    className={`flex-shrink-0 text-saffron-600 dark:text-saffron-400 transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`}
                  />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${openFaq === i ? 'max-h-48' : 'max-h-0'}`}>
                  <p className="px-5 pb-5 text-stone-500 dark:text-stone-400 text-sm leading-relaxed">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 bg-white dark:bg-stone-900/20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full blur-3xl opacity-8"
            style={{ background: 'radial-gradient(circle, rgba(224,123,0,0.15), transparent)' }} />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="animate-on-scroll">
            <div className="tag mx-auto mb-5">Start Today</div>
            <h2 className="section-title text-stone-900 dark:text-white mb-5">
              Ready to Build Something<br />
              <span className="gradient-text">Extraordinary?</span>
            </h2>
            <p className="section-subtitle max-w-lg mx-auto mb-8">
              Let's turn your idea into a powerful digital product. Book a free consultation and get a custom proposal within 24 hours.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <button onClick={() => handleNav('contact')} className="btn-primary px-8 py-3.5 text-sm font-semibold">
                <span className="flex items-center gap-2">Get Free Consultation <ArrowRight size={16} /></span>
              </button>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-sm border-2 border-emerald-500 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500 hover:text-white transition-all duration-300"
              >
                <MessageCircle size={16} /> WhatsApp Us
              </a>
            </div>
            <p className="mt-6 text-stone-400 dark:text-stone-500 text-xs">
              <Clock size={11} className="inline mr-1" />
              We typically respond within 2 hours during business hours
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
