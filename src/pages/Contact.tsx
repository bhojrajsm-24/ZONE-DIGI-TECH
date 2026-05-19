import { useEffect, useState } from 'react';
import {
  Mail, Phone, MapPin, MessageCircle, Clock, Send, CheckCircle,
  Instagram, Twitter, Linkedin, Youtube
} from 'lucide-react';
import { useScrollAnimation } from '../hooks/UseScrollAnimation';


const services = [
  'UI/UX Design', 'Static Website', 'Dynamic Website', 'E-Commerce',
  'Social Media', 'SEO Optimization', 'Video Editing', 'Photo Editing',
  'Video Shoot', 'Photography', 'Other',
];

const contactDetails = [
  {
    icon: Mail,
    label: 'Email Us',
    value: 'hello@kirandigital.in',
    sub: 'We reply within 2 hours',
    color: '#e07b00',
    href: 'mailto:hello@kirandigital.in',
  },
  {
    icon: Phone,
    label: 'Call Us',
    value: '+91 98765 43210',
    sub: 'Mon–Sat, 9 AM – 7 PM IST',
    color: '#10b981',
    href: 'tel:+919876543210',
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: '+91 98765 43210',
    sub: 'Quick responses guaranteed',
    color: '#25D366',
    href: 'https://wa.me/919876543210',
  },
  {
    icon: MapPin,
    label: 'Visit Us',
    value: 'Indiranagar, Bangalore',
    sub: 'Karnataka, India - 560038',
    color: '#0ea5e9',
    href: '#map',
  },
];

const socials = [
  { icon: Instagram, label: 'Instagram', href: '#', color: '#E1306C' },
  { icon: Twitter, label: 'Twitter', href: '#', color: '#1DA1F2' },
  { icon: Linkedin, label: 'LinkedIn', href: '#', color: '#0A66C2' },
  { icon: Youtube, label: 'YouTube', href: '#', color: '#FF0000' },
];

interface FormState {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

export default function Contact() {
  useScrollAnimation();
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const [form, setForm] = useState<FormState>({ name: '', email: '', phone: '', service: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Partial<FormState>>({});

  const validate = () => {
    const e: Partial<FormState> = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Valid email is required';
    if (!form.service) e.service = 'Please select a service';
    if (!form.message.trim() || form.message.length < 20) e.message = 'Message must be at least 20 characters';
    return e;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setErrors({});
    setLoading(true);
    await new Promise(r => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    if (errors[e.target.name as keyof FormState]) {
      setErrors(prev => ({ ...prev, [e.target.name]: undefined }));
    }
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
            <div className="tag mb-5">Contact Us</div>
            <h1 className="section-title text-stone-900 dark:text-white mb-5">
              Let's Build<br />
              <span className="gradient-text">Something Great</span>
            </h1>
            <p className="text-stone-500 dark:text-stone-400 text-lg leading-relaxed">
              Ready to start your project? Have a question? Or just want to say hello? We'd love to hear from you. Fill out the form or reach us directly.
            </p>
          </div>
        </div>
      </section>

      {/* ── MAIN CONTACT ── */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-10">
            {/* Sidebar */}
            <div className="lg:col-span-2 space-y-5">
              {/* Contact Cards */}
              {contactDetails.map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="animate-on-scroll flex items-start gap-4 p-5 rounded-2xl bg-white dark:bg-stone-900/60 border border-stone-100 dark:border-stone-800 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 group"
                  style={{ transitionDelay: `${i * 60}ms` }}
                >
                  <div className="w-11 h-11 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
                    style={{ background: `${item.color}18` }}>
                    <item.icon size={20} style={{ color: item.color }} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-stone-400 dark:text-stone-500 uppercase tracking-wider mb-0.5">{item.label}</p>
                    <p className="font-bold text-stone-900 dark:text-white text-sm">{item.value}</p>
                    <p className="text-stone-400 text-xs mt-0.5">{item.sub}</p>
                  </div>
                </a>
              ))}

              {/* Hours */}
              <div className="animate-on-scroll p-5 rounded-2xl bg-white dark:bg-stone-900/60 border border-stone-100 dark:border-stone-800">
                <div className="flex items-center gap-2 mb-3">
                  <Clock size={16} className="text-saffron-600 dark:text-saffron-400" />
                  <h4 className="font-bold text-stone-900 dark:text-white text-sm">Business Hours</h4>
                </div>
                <div className="space-y-1.5 text-sm">
                  <div className="flex justify-between">
                    <span className="text-stone-500">Monday – Friday</span>
                    <span className="font-medium text-stone-700 dark:text-stone-300">9 AM – 7 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-stone-500">Saturday</span>
                    <span className="font-medium text-stone-700 dark:text-stone-300">10 AM – 5 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-stone-500">Sunday</span>
                    <span className="font-medium text-stone-400">Closed</span>
                  </div>
                </div>
                <div className="mt-3 pt-3 border-t border-stone-100 dark:border-stone-800">
                  <p className="text-xs text-stone-400">All times are IST (India Standard Time)</p>
                </div>
              </div>

              {/* Social */}
              <div className="animate-on-scroll p-5 rounded-2xl bg-white dark:bg-stone-900/60 border border-stone-100 dark:border-stone-800">
                <h4 className="font-bold text-stone-900 dark:text-white text-sm mb-3">Follow Us</h4>
                <div className="grid grid-cols-4 gap-2">
                  {socials.map(({ icon: Icon, label, href, color }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="flex flex-col items-center gap-1.5 p-2.5 rounded-xl hover:scale-105 transition-transform duration-200 group"
                      style={{ background: `${color}12` }}
                    >
                      <Icon size={18} style={{ color }} />
                      <span className="text-[10px] text-stone-500 dark:text-stone-400">{label}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/919876543210?text=Hi%20KiranDigital!%20I%27d%20like%20to%20discuss%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="animate-on-scroll flex items-center gap-3 p-4 rounded-2xl text-white font-semibold hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
                style={{ background: 'linear-gradient(135deg, #128C7E, #25D366)' }}
              >
                <MessageCircle size={22} />
                <div>
                  <p className="font-bold text-sm">Chat on WhatsApp</p>
                  <p className="text-white/70 text-xs">We're online now</p>
                </div>
                <div className="ml-auto w-2 h-2 rounded-full bg-green-200 animate-pulse" />
              </a>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              {submitted ? (
                <div className="h-full flex items-center justify-center bg-white dark:bg-stone-900/60 rounded-3xl border border-stone-100 dark:border-stone-800 p-10 text-center">
                  <div>
                    <div className="w-16 h-16 rounded-full mx-auto mb-5 flex items-center justify-center"
                      style={{ background: 'linear-gradient(135deg, rgba(224,123,0,0.15), rgba(249,184,74,0.1))' }}>
                      <CheckCircle size={30} className="text-saffron-600 dark:text-saffron-400" />
                    </div>
                    <h3 className="font-display font-bold text-2xl text-stone-900 dark:text-white mb-3">
                      Message Sent!
                    </h3>
                    <p className="text-stone-500 dark:text-stone-400 mb-6 leading-relaxed">
                      Thank you for reaching out. We've received your message and will get back to you within 2–4 business hours.
                    </p>
                    <button
                      onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', service: '', message: '' }); }}
                      className="btn-primary text-sm px-6 py-2.5 inline-flex"
                    >
                      <span>Send Another Message</span>
                    </button>
                  </div>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="bg-white dark:bg-stone-900/60 rounded-3xl border border-stone-100 dark:border-stone-800 p-6 md:p-8 space-y-5"
                >
                  <div>
                    <h2 className="font-display font-bold text-2xl text-stone-900 dark:text-white mb-1">Send Us a Message</h2>
                    <p className="text-stone-500 dark:text-stone-400 text-sm">Tell us about your project and we'll get back to you with a custom proposal.</p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label className="block text-sm font-semibold text-stone-700 dark:text-stone-300 mb-1.5">
                        Full Name <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Rahul Sharma"
                        className={`w-full px-4 py-3 rounded-xl border text-sm bg-stone-50 dark:bg-stone-800 text-stone-900 dark:text-white placeholder:text-stone-400 transition-all duration-200 outline-none focus:ring-2 focus:ring-saffron-400/40 focus:border-saffron-400 ${
                          errors.name ? 'border-red-400' : 'border-stone-200 dark:border-stone-700'
                        }`}
                      />
                      {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-sm font-semibold text-stone-700 dark:text-stone-300 mb-1.5">
                        Email Address <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="rahul@company.com"
                        className={`w-full px-4 py-3 rounded-xl border text-sm bg-stone-50 dark:bg-stone-800 text-stone-900 dark:text-white placeholder:text-stone-400 transition-all duration-200 outline-none focus:ring-2 focus:ring-saffron-400/40 focus:border-saffron-400 ${
                          errors.email ? 'border-red-400' : 'border-stone-200 dark:border-stone-700'
                        }`}
                      />
                      {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-sm font-semibold text-stone-700 dark:text-stone-300 mb-1.5">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3 rounded-xl border border-stone-200 dark:border-stone-700 text-sm bg-stone-50 dark:bg-stone-800 text-stone-900 dark:text-white placeholder:text-stone-400 transition-all duration-200 outline-none focus:ring-2 focus:ring-saffron-400/40 focus:border-saffron-400"
                      />
                    </div>

                    {/* Service */}
                    <div>
                      <label className="block text-sm font-semibold text-stone-700 dark:text-stone-300 mb-1.5">
                        Service Required <span className="text-red-400">*</span>
                      </label>
                      <select
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-xl border text-sm bg-stone-50 dark:bg-stone-800 text-stone-900 dark:text-white transition-all duration-200 outline-none focus:ring-2 focus:ring-saffron-400/40 focus:border-saffron-400 ${
                          errors.service ? 'border-red-400' : 'border-stone-200 dark:border-stone-700'
                        } ${!form.service ? 'text-stone-400' : ''}`}
                      >
                        <option value="" disabled>Select a service</option>
                        {services.map(s => <option key={s} value={s}>{s}</option>)}
                      </select>
                      {errors.service && <p className="text-red-400 text-xs mt-1">{errors.service}</p>}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-semibold text-stone-700 dark:text-stone-300 mb-1.5">
                      Message <span className="text-red-400">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Tell us about your project — what you need, your timeline, and any specific requirements..."
                      className={`w-full px-4 py-3 rounded-xl border text-sm bg-stone-50 dark:bg-stone-800 text-stone-900 dark:text-white placeholder:text-stone-400 transition-all duration-200 outline-none focus:ring-2 focus:ring-saffron-400/40 focus:border-saffron-400 resize-none ${
                        errors.message ? 'border-red-400' : 'border-stone-200 dark:border-stone-700'
                      }`}
                    />
                    {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
                    <p className="text-stone-400 text-xs mt-1 text-right">{form.message.length} characters</p>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full btn-primary justify-center py-3.5 text-sm font-semibold disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    <span className="flex items-center gap-2">
                      {loading ? (
                        <>
                          <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message <Send size={16} />
                        </>
                      )}
                    </span>
                  </button>

                  <p className="text-stone-400 text-xs text-center">
                    By submitting, you agree to our Privacy Policy. We never share your data.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── MAP ── */}
      <section id="map" className="py-0 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-on-scroll rounded-3xl overflow-hidden border border-stone-200 dark:border-stone-800 shadow-xl" style={{ height: 380 }}>
            <iframe
              title="KiranDigital Office Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.9966497855497!2d77.63850231482107!3d12.97194189085538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1709050eebbf%3A0x2a4ef9c53fad7ba6!2sIndiranagar%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1614253684950!5m2!1sen!2sin"
              className="w-full h-full border-0 grayscale dark:grayscale"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
