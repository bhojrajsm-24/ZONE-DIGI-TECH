import { useEffect } from 'react';
import { ArrowRight, Target, Eye, Heart, Users, Award, Globe, Coffee, Sparkles } from 'lucide-react';
import { useScrollAnimation } from '../hooks/UseScrollAnimation';

interface AboutProps {
  onNavigate: (page: string) => void;
}

const team = [
  {
    name: 'Arjun Sharma',
    role: 'Founder & Creative Director',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
    desc: '8+ years in digital design and brand strategy.',
  },
  {
    name: 'Priya Nair',
    role: 'Lead UI/UX Designer',
    image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=400',
    desc: 'Crafting intuitive experiences for global brands.',
  },
  {
    name: 'Rohan Mehta',
    role: 'Full Stack Developer',
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
    desc: 'Building robust, scalable web applications.',
  },
  {
    name: 'Sneha Patel',
    role: 'Digital Marketing Lead',
    image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400',
    desc: 'SEO, content & growth strategist.',
  },
];

const values = [
  { icon: Heart, title: 'Client First', desc: "Every decision we make is guided by what's best for our clients and their growth." },
  { icon: Target, title: 'Results Driven', desc: 'We measure success by the tangible business impact our work creates.' },
  { icon: Sparkles, title: 'Creative Excellence', desc: 'We set new standards in design quality and creative problem-solving.' },
  { icon: Users, title: 'Collaborative Spirit', desc: 'We work as a true partner, not just a vendor, in every engagement.' },
  { icon: Globe, title: 'Global Mindset', desc: 'Indian roots, global standards — we build for the world stage.' },
  { icon: Coffee, title: 'Always Improving', desc: "We're obsessed with learning, iterating, and getting better every day." },
];

const milestones = [
  { year: '2021', title: 'Studio Founded', desc: 'Started with a team of 3 in a Bangalore co-working space.' },
  { year: '2022', title: 'First 20 Clients', desc: 'Expanded services and built our core design system.' },
  { year: '2023', title: 'Awards & Recognition', desc: 'Named among India\'s Top 10 Digital Agencies by StartupIndia.' },
  { year: '2024', title: '80+ Happy Clients', desc: 'Grew to a 12-member team, serving clients across 5 countries.' },
];

export default function About({ onNavigate }: AboutProps) {
  useScrollAnimation();

  const handleNav = (page: string) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="bg-stone-50 dark:bg-[#0a0a0f] pt-20">
      {/* ── HERO ── */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 indian-pattern opacity-50 dark:opacity-10 pointer-events-none" />
        <div className="absolute top-10 right-0 w-96 h-96 rounded-full blur-3xl opacity-8 pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(224,123,0,0.2), transparent)' }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="tag mb-5">Our Story</div>
            <h1 className="section-title text-stone-900 dark:text-white mb-6">
              Built With Passion,<br />
              <span className="gradient-text">Driven by Purpose</span>
            </h1>
            <p className="text-stone-500 dark:text-stone-400 text-lg leading-relaxed max-w-2xl">
              We are KiranDigital — a creative digital studio born in the heart of Bangalore. We exist to help Indian businesses and global startups build digital presences that command attention, build trust, and drive growth.
            </p>
          </div>
        </div>
      </section>

      {/* ── STORY ── */}
      <section className="py-16 bg-white dark:bg-stone-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-on-scroll-left relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Our office"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white dark:bg-stone-900 rounded-2xl p-5 shadow-xl border border-stone-100 dark:border-stone-800 hidden md:block">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: '150+', label: 'Projects' },
                  { value: '80+', label: 'Clients' },
                  { value: '12', label: 'Team' },
                  { value: '3 Yrs', label: 'Experience' },
                ].map((s) => (
                  <div key={s.label} className="text-center">
                    <div className="font-display font-bold text-xl text-stone-900 dark:text-white gradient-text">{s.value}</div>
                    <div className="text-stone-400 text-xs">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="animate-on-scroll-right">
            <h2 className="section-title text-stone-900 dark:text-white mb-5">
              Our <span className="gradient-text">Story</span>
            </h2>
            <p className="text-stone-500 dark:text-stone-400 leading-relaxed mb-4">
              KiranDigital started in 2021 with a simple belief: every Indian business deserves a world-class digital presence. Our founder Arjun Sharma, fresh from working with global design studios, came back to India with a mission to bring that level of quality to local businesses.
            </p>
            <p className="text-stone-500 dark:text-stone-400 leading-relaxed mb-6">
              Starting from a small co-working space in Indiranagar, Bangalore, we've grown into a full-service creative studio with a team of 12 passionate professionals serving clients across India, the UAE, and the UK.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="p-4 rounded-2xl border border-stone-100 dark:border-stone-800 bg-stone-50 dark:bg-stone-900/40">
                <Target size={20} className="text-saffron-600 dark:text-saffron-400 mb-2" />
                <h4 className="font-bold text-stone-900 dark:text-white text-sm mb-1">Our Mission</h4>
                <p className="text-stone-500 dark:text-stone-400 text-xs leading-relaxed">Empower every Indian business with premium digital tools and presence.</p>
              </div>
              <div className="p-4 rounded-2xl border border-stone-100 dark:border-stone-800 bg-stone-50 dark:bg-stone-900/40">
                <Eye size={20} className="text-saffron-600 dark:text-saffron-400 mb-2" />
                <h4 className="font-bold text-stone-900 dark:text-white text-sm mb-1">Our Vision</h4>
                <p className="text-stone-500 dark:text-stone-400 text-xs leading-relaxed">To be India's most trusted creative technology partner by 2026.</p>
              </div>
            </div>
            <button onClick={() => handleNav('contact')} className="btn-primary inline-flex items-center gap-2 text-sm">
              <span>Work With Us</span> <ArrowRight size={15} />
            </button>
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className="py-24 bg-stone-50 dark:bg-[#0a0a0f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="tag mx-auto mb-5">Our Values</div>
            <h2 className="section-title text-stone-900 dark:text-white mb-4">
              What We <span className="gradient-text">Stand For</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {values.map((v, i) => (
              <div
                key={i}
                className="animate-on-scroll group p-6 rounded-2xl bg-white dark:bg-stone-900/60 border border-stone-100 dark:border-stone-800 hover:border-saffron-300 dark:hover:border-saffron-700 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="w-11 h-11 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                  style={{ background: 'linear-gradient(135deg, rgba(224,123,0,0.12), rgba(249,184,74,0.08))' }}>
                  <v.icon size={20} className="text-saffron-600 dark:text-saffron-400" />
                </div>
                <h3 className="font-display font-bold text-stone-900 dark:text-white mb-2">{v.title}</h3>
                <p className="text-stone-500 dark:text-stone-400 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TIMELINE ── */}
      <section className="py-24 bg-white dark:bg-stone-900/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="tag mx-auto mb-5">Our Journey</div>
            <h2 className="section-title text-stone-900 dark:text-white mb-4">
              Milestones That<br />
              <span className="gradient-text">Define Us</span>
            </h2>
          </div>
          <div className="relative">
            <div className="absolute left-[28px] top-0 bottom-0 w-px bg-gradient-to-b from-saffron-400 to-transparent" />
            <div className="space-y-10">
              {milestones.map((m, i) => (
                <div key={i} className="animate-on-scroll flex gap-8 items-start" style={{ transitionDelay: `${i * 100}ms` }}>
                  <div className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 relative z-10 border-2 border-saffron-400 bg-white dark:bg-stone-900"
                    style={{ boxShadow: '0 0 0 4px rgba(224,123,0,0.1)' }}>
                    <span className="font-display font-bold text-saffron-600 dark:text-saffron-400 text-xs">{m.year}</span>
                  </div>
                  <div className="pt-3">
                    <h3 className="font-display font-bold text-stone-900 dark:text-white mb-1">{m.title}</h3>
                    <p className="text-stone-500 dark:text-stone-400 text-sm">{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TEAM ── */}
      <section className="py-24 bg-stone-50 dark:bg-[#0a0a0f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="tag mx-auto mb-5">Our Team</div>
            <h2 className="section-title text-stone-900 dark:text-white mb-4">
              Meet the <span className="gradient-text">Minds Behind</span><br />KiranDigital
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <div
                key={i}
                className="animate-on-scroll group text-center"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="relative w-32 h-32 mx-auto mb-4">
                  <div className="w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-stone-800 shadow-xl transition-transform duration-300 group-hover:scale-105">
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="absolute inset-0 rounded-full border-2 border-saffron-400/30 group-hover:border-saffron-400 transition-colors duration-300 scale-110" />
                </div>
                <h3 className="font-display font-bold text-stone-900 dark:text-white mb-0.5">{member.name}</h3>
                <p className="text-saffron-600 dark:text-saffron-400 text-xs font-semibold mb-2">{member.role}</p>
                <p className="text-stone-500 dark:text-stone-400 text-xs">{member.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AWARDS ── */}
      <section className="py-16 bg-white dark:bg-stone-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-display text-2xl font-bold text-stone-900 dark:text-white mb-2">Recognition & Awards</h2>
            <p className="text-stone-500 dark:text-stone-400 text-sm">Honoured by industry peers and publications</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {[
              { icon: Award, title: 'StartupIndia Top 10', year: '2023' },
              { icon: Globe, title: 'Best Design Studio', year: '2024' },
              { icon: Users, title: 'Client Choice Award', year: '2023–24' },
              { icon: Sparkles, title: 'Innovation in Tech', year: '2024' },
            ].map((a, i) => (
              <div key={i} className="animate-on-scroll text-center p-5 rounded-2xl bg-stone-50 dark:bg-stone-900/60 border border-stone-100 dark:border-stone-800">
                <div className="w-10 h-10 rounded-xl mx-auto mb-3 flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, rgba(224,123,0,0.15), rgba(249,184,74,0.1))' }}>
                  <a.icon size={18} className="text-saffron-600 dark:text-saffron-400" />
                </div>
                <div className="font-display font-bold text-stone-900 dark:text-white text-sm mb-0.5">{a.title}</div>
                <div className="text-stone-400 text-xs">{a.year}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #1a0a00, #2d1a00)' }}>
        <div className="absolute inset-0 indian-pattern opacity-10 pointer-events-none" />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="font-display text-4xl font-bold text-white mb-4">
            Ready to Join Our <span className="gradient-text">Family?</span>
          </h2>
          <p className="text-stone-400 mb-8 leading-relaxed">
            Whether you're a startup, an established business, or an individual creator — we'd love to hear your story and help you build your digital future.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button onClick={() => handleNav('contact')} className="btn-primary px-8 py-3.5 text-sm">
              <span className="flex items-center gap-2">Start a Conversation <ArrowRight size={16} /></span>
            </button>
            <button onClick={() => handleNav('projects')} className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-sm border-2 border-white/20 text-white hover:bg-white/10 transition-all duration-300">
              See Our Work
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
