import { useEffect } from 'react';
import { Palette, Monitor, Globe, ShoppingCart, Share2, Search, Video, Image as ImageIcon, Camera, ArrowRight, CheckCircle, MessageCircle } from 'lucide-react';
import { useScrollAnimation } from '../hooks/UseScrollAnimation';

interface ServicesProps {
  onNavigate: (page: string) => void;
}

const services = [
  {
    icon: Palette,
    title: 'UI/UX Design',
    color: '#e07b00',
    tagline: 'Design that captivates and converts',
    desc: 'We create intuitive, beautiful digital experiences that delight your users. From wireframes to high-fidelity prototypes, every pixel is purposeful.',
    features: ['User Research & Persona Building', 'Wireframing & Prototyping', 'Design Systems', 'Usability Testing', 'Mobile App Design', 'Brand Identity Design'],
    deliverables: 'Figma files, style guide, component library',
    timeline: '1–3 weeks',
    price: 'From ₹15,000',
  },
  {
    icon: Monitor,
    title: 'Static Websites',
    color: '#0ea5e9',
    tagline: 'Fast, secure, and stunning',
    desc: 'Lightning-fast static websites for businesses, portfolios, and landing pages. Built with modern frameworks, optimized for performance and SEO.',
    features: ['Custom Design', 'Mobile Responsive', 'SEO Ready', 'Fast Load Times', 'Contact Forms', 'Google Analytics Integration'],
    deliverables: 'Live website, source code, admin guide',
    timeline: '5–10 days',
    price: 'From ₹8,999',
  },
  {
    icon: Globe,
    title: 'Dynamic Websites',
    color: '#10b981',
    tagline: 'Powerful apps, seamless experiences',
    desc: 'Feature-rich dynamic web applications with CMS, user dashboards, real-time data, and complex business logic. Built to scale with your business.',
    features: ['CMS Integration', 'User Authentication', 'Database Design', 'Admin Dashboard', 'API Integration', 'Custom Workflows'],
    deliverables: 'Live app, source code, documentation',
    timeline: '2–6 weeks',
    price: 'From ₹24,999',
  },
  {
    icon: ShoppingCart,
    title: 'E-Commerce Websites',
    color: '#f59e0b',
    tagline: 'Sell more, grow faster',
    desc: 'Complete online stores with product management, payment gateways, inventory tracking, and analytics. Turn your products into a revenue machine.',
    features: ['Product Catalog', 'Cart & Checkout', 'Payment Gateway', 'Inventory Management', 'Order Tracking', 'Customer Accounts'],
    deliverables: 'Fully functional store, training, support',
    timeline: '4–8 weeks',
    price: 'From ₹49,999',
  },
  {
    icon: Share2,
    title: 'Social Media Handling',
    color: '#8b5cf6',
    tagline: 'Your brand, amplified',
    desc: 'End-to-end social media management including strategy, content creation, scheduling, community management, and monthly performance reports.',
    features: ['Content Strategy', 'Post Design & Copy', 'Scheduling & Publishing', 'Community Management', 'Analytics Reporting', 'Influencer Outreach'],
    deliverables: 'Monthly content calendar, reports',
    timeline: 'Monthly retainer',
    price: 'From ₹7,999/mo',
  },
  {
    icon: Search,
    title: 'SEO Optimization',
    color: '#ef4444',
    tagline: 'Rank higher, grow organically',
    desc: 'Data-driven SEO strategies to improve your search rankings, drive organic traffic, and generate qualified leads. We build lasting visibility.',
    features: ['Keyword Research', 'On-Page SEO', 'Technical SEO Audit', 'Content Optimization', 'Link Building', 'Monthly Reports'],
    deliverables: 'SEO audit, strategy doc, monthly reports',
    timeline: 'Ongoing (3+ months)',
    price: 'From ₹9,999/mo',
  },
  {
    icon: Video,
    title: 'Video Editing',
    color: '#06b6d4',
    tagline: 'Stories that move people',
    desc: 'Professional video editing for ads, YouTube, reels, brand films, and corporate videos. We transform raw footage into compelling visual stories.',
    features: ['Color Grading', 'Motion Graphics', 'Sound Design', 'Subtitles & Captions', 'Thumbnail Design', 'YouTube SEO'],
    deliverables: 'Master file + social cuts',
    timeline: '3–7 days per video',
    price: 'From ₹3,999/video',
  },
  {
    icon: ImageIcon,
    title: 'Photo Editing',
    color: '#ec4899',
    tagline: 'Visuals that tell your story',
    desc: 'Professional photo retouching, background removal, composite creation, and brand-ready image processing for all your marketing needs.',
    features: ['Color Correction', 'Background Removal', 'Product Photography Edit', 'Composite Designs', 'Batch Processing', 'Social Media Sized Exports'],
    deliverables: 'High-res edited files, web-optimized versions',
    timeline: '1–3 days per batch',
    price: 'From ₹999/batch',
  },
  {
    icon: Camera,
    title: 'Video Production',
    color: '#84cc16',
    tagline: 'Cinematic quality, real-world results',
    desc: 'On-location video shoots for product demos, brand documentaries, testimonials, and corporate films. Full production from pre to post.',
    features: ['Concept & Scripting', 'Location Scouting', 'Professional Equipment', 'Direction', 'Voiceover', 'Full Post Production'],
    deliverables: 'Edited video, social cuts, raw footage',
    timeline: '1–3 week project',
    price: 'From ₹25,000',
  },
  {
    icon: Camera,
    title: 'Photography',
    color: '#f97316',
    tagline: 'Images that speak volumes',
    desc: 'Professional photography for products, corporate headshots, events, and brand campaigns. Capturing your brand\'s essence in every frame.',
    features: ['Product Photography', 'Corporate Headshots', 'Event Coverage', 'Brand Lifestyle Shoots', 'Studio & Location', 'Same-day Previews'],
    deliverables: 'Edited high-res photos, web versions',
    timeline: '1–3 day shoot + 1 week editing',
    price: 'From ₹15,000',
  },
];

const process = [
  { step: '01', title: 'Discovery Call', desc: 'We understand your goals, audience, and vision through a free consultation.' },
  { step: '02', title: 'Strategy & Proposal', desc: 'You receive a custom proposal with timeline, scope, and transparent pricing.' },
  { step: '03', title: 'Design & Build', desc: 'Our team gets to work with regular check-ins and milestone updates.' },
  { step: '04', title: 'Review & Refine', desc: 'We incorporate your feedback through our revision process.' },
  { step: '05', title: 'Launch & Support', desc: 'We launch your project and provide post-launch support and training.' },
];

export default function Services({ onNavigate }: ServicesProps) {
  useScrollAnimation();
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const handleNav = (page: string) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-stone-50 dark:bg-[#0a0a0f] pt-20">
      {/* ── HERO ── */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 indian-pattern opacity-50 dark:opacity-10 pointer-events-none" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-3xl opacity-8"
          style={{ background: 'radial-gradient(circle, rgba(224,123,0,0.2), transparent)' }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl">
            <div className="tag mb-5">Our Services</div>
            <h1 className="section-title text-stone-900 dark:text-white mb-5">
              Full-Service Digital<br />
              <span className="gradient-text">Creative Agency</span>
            </h1>
            <p className="text-stone-500 dark:text-stone-400 text-lg leading-relaxed">
              From a single landing page to a full digital transformation — we offer everything your brand needs to dominate online. Explore our services and find the perfect fit.
            </p>
          </div>
        </div>
      </section>

      {/* ── SERVICES GRID ── */}
      <section className="py-8 pb-24 bg-stone-50 dark:bg-[#0a0a0f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-5 lg:grid-cols-2">
            {services.map((service, i) => (
              <div
                key={i}
                className="animate-on-scroll group bg-white dark:bg-stone-900/60 rounded-3xl border border-stone-100 dark:border-stone-800 p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                style={{ transitionDelay: `${i * 40}ms` }}
              >
                <div className="flex gap-5">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
                    style={{ background: `${service.color}18` }}
                  >
                    <service.icon size={22} style={{ color: service.color }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-3 flex-wrap mb-1">
                      <h3 className="font-display font-bold text-stone-900 dark:text-white">{service.title}</h3>
                      <span className="text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap"
                        style={{ background: `${service.color}15`, color: service.color }}>
                        {service.price}
                      </span>
                    </div>
                    <p className="text-xs font-semibold mb-2" style={{ color: service.color }}>{service.tagline}</p>
                    <p className="text-stone-500 dark:text-stone-400 text-sm leading-relaxed mb-4">{service.desc}</p>

                    <div className="grid grid-cols-2 gap-1.5 mb-4">
                      {service.features.map((f) => (
                        <div key={f} className="flex items-center gap-1.5 text-xs text-stone-600 dark:text-stone-400">
                          <CheckCircle size={11} style={{ color: service.color }} className="flex-shrink-0" />
                          {f}
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-3 border-t border-stone-100 dark:border-stone-800">
                      <div className="flex gap-4 text-xs text-stone-400">
                        <span>Timeline: <strong className="text-stone-600 dark:text-stone-300">{service.timeline}</strong></span>
                      </div>
                      <button
                        onClick={() => handleNav('contact')}
                        className="flex items-center gap-1.5 text-xs font-semibold transition-all duration-200 group-hover:gap-2"
                        style={{ color: service.color }}
                      >
                        Get Quote <ArrowRight size={12} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="py-24 bg-white dark:bg-stone-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="tag mx-auto mb-5">Our Process</div>
            <h2 className="section-title text-stone-900 dark:text-white mb-4">
              How We <span className="gradient-text">Work</span>
            </h2>
            <p className="section-subtitle max-w-lg mx-auto">
              A transparent, collaborative process designed to keep you informed and in control at every stage.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {process.map((step, i) => (
              <div
                key={i}
                className="animate-on-scroll text-center group"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="relative w-14 h-14 rounded-full mx-auto mb-4 flex items-center justify-center border-2 border-saffron-300 dark:border-saffron-700 group-hover:border-saffron-500 transition-colors"
                  style={{ background: 'linear-gradient(135deg, rgba(224,123,0,0.08), rgba(249,184,74,0.05))' }}>
                  <span className="font-display font-bold text-saffron-600 dark:text-saffron-400 text-sm">{step.step}</span>
                  {i < process.length - 1 && (
                    <div className="hidden lg:block absolute left-full top-1/2 -translate-y-1/2 w-full h-px bg-gradient-to-r from-saffron-300 to-transparent dark:from-saffron-700" />
                  )}
                </div>
                <h3 className="font-display font-bold text-stone-900 dark:text-white mb-2 text-sm">{step.title}</h3>
                <p className="text-stone-500 dark:text-stone-400 text-xs leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, rgba(224,123,0,0.06), rgba(250,204,21,0.04))' }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="section-title text-stone-900 dark:text-white mb-5">
            Not Sure Where to<br />
            <span className="gradient-text">Start?</span>
          </h2>
          <p className="section-subtitle mb-8 max-w-lg mx-auto">
            Book a free 30-minute consultation and we'll help you figure out exactly what your business needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button onClick={() => handleNav('contact')} className="btn-primary px-8 py-3.5 text-sm">
              <span className="flex items-center gap-2">Book Free Consultation <ArrowRight size={16} /></span>
            </button>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-sm border-2 border-emerald-500 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500 hover:text-white transition-all duration-300"
            >
              <MessageCircle size={16} /> Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
