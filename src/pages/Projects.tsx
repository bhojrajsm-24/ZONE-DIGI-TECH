import { useEffect, useState } from 'react';
import { ArrowRight, ExternalLink, MessageCircle } from 'lucide-react';
import { useScrollAnimation } from '../hooks/UseScrollAnimation';

interface ProjectsProps {
  onNavigate: (page: string) => void;
}

const categories = ['All', 'Web Design', 'E-Commerce', 'Branding', 'Mobile App', 'SEO & Marketing'];

const projects = [
  {
    title: 'Arya Naturals',
    category: 'E-Commerce',
    client: 'Arya Organic Foods, Delhi',
    desc: 'Complete e-commerce platform for an organic food brand — from brand identity to a full-featured online store with 500+ SKUs and automated inventory management.',
    image: 'https://images.pexels.com/photos/3735218/pexels-photo-3735218.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['React', 'Supabase', 'Stripe', 'SEO'],
    result: '340% increase in online sales in 3 months',
    featured: true,
  },
  {
    title: 'TechNova Dashboard',
    category: 'Web Design',
    client: 'TechNova SaaS, Bangalore',
    desc: 'A comprehensive B2B analytics SaaS platform with real-time dashboards, multi-tenant architecture, and white-label capabilities.',
    image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['UI/UX', 'React', 'TypeScript', 'Charts'],
    result: 'Raised ₹2Cr seed funding post-launch',
    featured: true,
  },
  {
    title: 'Meera Jewels',
    category: 'Branding',
    client: 'Meera Jewellery, Rajasthan',
    desc: 'Heritage jewellery brand rebranding project — complete visual identity, brand guidelines, e-commerce store, and social media strategy.',
    image: 'https://images.pexels.com/photos/1485894/pexels-photo-1485894.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Branding', 'E-Commerce', 'Photography'],
    result: '5x social media growth in 6 months',
    featured: false,
  },
  {
    title: 'GreenGrow Farms',
    category: 'SEO & Marketing',
    client: 'GreenGrow AgriTech, Pune',
    desc: 'Full digital marketing overhaul for an agri-tech startup — content strategy, SEO, social media, and a lead-gen focused website redesign.',
    image: 'https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['SEO', 'Social Media', 'Redesign'],
    result: '280% organic traffic growth in 4 months',
    featured: false,
  },
  {
    title: 'Zest Fitness App',
    category: 'Mobile App',
    client: 'Zest Health, Mumbai',
    desc: 'UI/UX design for a fitness tracking mobile app targeting urban Indian millennials. Included user research, wireframes, and complete design system.',
    image: 'https://images.pexels.com/photos/3822864/pexels-photo-3822864.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Mobile UI', 'UX Research', 'Figma'],
    result: '4.8★ App Store rating at launch',
    featured: false,
  },
  {
    title: 'Lakshmee Sarees',
    category: 'E-Commerce',
    client: 'Lakshmee Textiles, Surat',
    desc: 'Traditional saree brand\'s entry into D2C e-commerce. Custom shopping experience with fabric visualizer, size guide, and regional language support.',
    image: 'https://images.pexels.com/photos/2148342/pexels-photo-2148342.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['E-Commerce', 'D2C', 'Multilingual'],
    result: '₹50L revenue in first quarter',
    featured: true,
  },
  {
    title: 'Veda Ayurveda Clinic',
    category: 'Web Design',
    client: 'Veda Clinic, Chennai',
    desc: 'Modern healthcare website with online appointment booking, doctor profiles, treatment pages, and patient portal for an Ayurvedic wellness clinic.',
    image: 'https://images.pexels.com/photos/3997989/pexels-photo-3997989.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Web App', 'Booking System', 'Healthcare'],
    result: 'Appointments up 220% month-on-month',
    featured: false,
  },
  {
    title: 'BharatBites Food Delivery',
    category: 'Web Design',
    client: 'BharatBites, Hyderabad',
    desc: 'Food delivery platform UI/UX design with restaurant listings, real-time tracking, and a rider management dashboard — designed for Tier 2 cities.',
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Product Design', 'Dashboard', 'Maps'],
    result: 'Successful launch in 3 cities',
    featured: false,
  },
];

const testimonials = [
  {
    name: 'Vikram Reddy',
    company: 'TechNova SaaS',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200',
    text: 'KiranDigital transformed our product design from something functional to something truly world-class. Their attention to detail and understanding of our users was exceptional.',
    rating: 5,
  },
  {
    name: 'Ananya Krishnamurthy',
    company: 'Meera Jewels',
    image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=200',
    text: 'They understood our traditional brand value while giving it a modern digital edge. The results have been phenomenal — our Instagram following grew 5x in 6 months.',
    rating: 5,
  },
  {
    name: 'Rahul Gupta',
    company: 'Arya Naturals',
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200',
    text: 'Professional, creative, and incredibly fast. They delivered our e-commerce platform ahead of schedule and the results speak for themselves — 340% sales growth!',
    rating: 5,
  },
];

export default function Projects({ onNavigate }: ProjectsProps) {
  useScrollAnimation();
  const [activeCategory, setActiveCategory] = useState('All');
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const handleNav = (page: string) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const filtered = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <div className="bg-stone-50 dark:bg-[#0a0a0f] pt-20">
      {/* ── HERO ── */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 indian-pattern opacity-40 dark:opacity-10 pointer-events-none" />
        <div className="absolute top-10 right-10 w-96 h-96 rounded-full blur-3xl opacity-8 pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(224,123,0,0.2), transparent)' }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl">
            <div className="tag mb-5">Our Portfolio</div>
            <h1 className="section-title text-stone-900 dark:text-white mb-5">
              Work That<br />
              <span className="gradient-text">Speaks for Itself</span>
            </h1>
            <p className="text-stone-500 dark:text-stone-400 text-lg leading-relaxed">
              Explore real projects, real clients, and real results. Every case study here represents a challenge we solved with creativity, strategy, and craft.
            </p>
          </div>
        </div>
      </section>

      {/* ── FILTERS ── */}
      <div className="sticky top-[65px] z-30 bg-stone-50/80 dark:bg-[#0a0a0f]/80 backdrop-blur-xl border-b border-stone-200 dark:border-stone-800 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 overflow-x-auto scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeCategory === cat
                    ? 'text-white shadow-md'
                    : 'text-stone-500 dark:text-stone-400 hover:text-stone-800 dark:hover:text-stone-200 bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-700'
                }`}
                style={activeCategory === cat ? { background: 'linear-gradient(135deg, #e07b00, #f9b84a)' } : {}}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── PROJECTS GRID ── */}
      <section className="py-12 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project, i) => (
              <div
                key={i}
                className={`animate-on-scroll group rounded-3xl overflow-hidden bg-white dark:bg-stone-900/60 border border-stone-100 dark:border-stone-800 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${
                  project.featured ? 'ring-1 ring-saffron-300 dark:ring-saffron-700' : ''
                }`}
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                {/* Image */}
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-transparent" />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-stone-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                    <button
                      onClick={() => handleNav('contact')}
                      className="px-4 py-2 rounded-full text-white text-xs font-semibold border border-white/50 backdrop-blur-sm hover:bg-white/20 transition-colors flex items-center gap-1.5"
                    >
                      <MessageCircle size={12} /> Similar Project?
                    </button>
                  </div>

                  {/* Badge */}
                  <div className="absolute top-3 left-3 flex gap-2">
                    <span className="px-2.5 py-1 rounded-full text-xs font-semibold text-white backdrop-blur-sm"
                      style={{ background: 'linear-gradient(135deg, rgba(224,123,0,0.85), rgba(249,184,74,0.85))' }}>
                      {project.category}
                    </span>
                    {project.featured && (
                      <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-white/90 text-stone-800">
                        Featured
                      </span>
                    )}
                  </div>

                  {/* Result */}
                  <div className="absolute bottom-3 left-3 right-3">
                    <div className="glass rounded-xl px-3 py-2">
                      <p className="text-white text-xs font-semibold">{project.result}</p>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="font-display font-bold text-stone-900 dark:text-white">{project.title}</h3>
                    <ExternalLink size={14} className="text-stone-400 flex-shrink-0 mt-0.5 group-hover:text-saffron-500 transition-colors" />
                  </div>
                  <p className="text-stone-400 dark:text-stone-500 text-xs mb-2 font-medium">{project.client}</p>
                  <p className="text-stone-500 dark:text-stone-400 text-sm leading-relaxed mb-4">{project.desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-2.5 py-0.5 rounded-full text-xs bg-stone-100 dark:bg-stone-800 text-stone-500 dark:text-stone-400">
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

      {/* ── TESTIMONIALS ── */}
      <section className="py-24 bg-white dark:bg-stone-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="tag mx-auto mb-5">Client Love</div>
            <h2 className="section-title text-stone-900 dark:text-white mb-4">
              What Our Clients<br />
              <span className="gradient-text">Say About Us</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="animate-on-scroll p-6 rounded-3xl bg-stone-50 dark:bg-stone-900/60 border border-stone-100 dark:border-stone-800 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="flex items-center gap-0.5 mb-4">
                  {[...Array(t.rating)].map((_, j) => (
                    <svg key={j} className="w-4 h-4 text-amber-400 fill-amber-400" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-stone-600 dark:text-stone-300 text-sm leading-relaxed mb-5 italic">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <img src={t.image} alt={t.name} className="w-10 h-10 rounded-full object-cover" />
                  <div>
                    <p className="font-bold text-stone-900 dark:text-white text-sm">{t.name}</p>
                    <p className="text-stone-400 text-xs">{t.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 bg-stone-50 dark:bg-[#0a0a0f]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-on-scroll">
            <div className="tag mx-auto mb-5">Start Your Project</div>
            <h2 className="section-title text-stone-900 dark:text-white mb-5">
              Your Success Story<br />
              <span className="gradient-text">Starts Here</span>
            </h2>
            <p className="section-subtitle max-w-lg mx-auto mb-8">
              Ready to see your brand featured in our portfolio? Let's create something extraordinary together.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button onClick={() => handleNav('contact')} className="btn-primary px-8 py-3.5 text-sm">
                <span className="flex items-center gap-2">Start Your Project <ArrowRight size={16} /></span>
              </button>
              <button onClick={() => handleNav('services')} className="btn-outline px-8 py-3.5 text-sm flex items-center gap-2">
                View Services
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
