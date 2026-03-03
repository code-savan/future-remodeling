import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  ArrowRight, 
  CheckCircle2, 
  Star, 
  ShieldCheck, 
  Clock, 
  Award, 
  Menu, 
  X,
  ChevronRight,
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
  Youtube
} from 'lucide-react';

const LOGO_URL = "https://futureremodeling.com/wp-content/uploads/2024/10/Future_Remodeling_Logo.webp";

const services = [
  {
    title: "Roofing",
    description: "Top-quality roof installation with GAF MasterElite expertise. We offer the GAF Golden Pledge™ warranty for ultimate peace of mind.",
    image: "https://futureremodeling.com/wp-content/uploads/2025/04/12.jpg",
    icon: <ShieldCheck className="w-6 h-6" />
  },
  {
    title: "Siding",
    description: "Elite Preferred James Hardie® fiber cement siding installers. Transform your home's exterior with America's #1 siding choice.",
    image: "https://futureremodeling.com/wp-content/uploads/2025/04/10-1.png",
    icon: <CheckCircle2 className="w-6 h-6" />
  },
  {
    title: "Windows",
    description: "Energy-efficient, high-performance window installation. Maximize natural light and insulation with expert craftsmanship.",
    image: "https://futureremodeling.com/wp-content/uploads/2025/07/Window-Replacement-1.jpeg",
    icon: <Star className="w-6 h-6" />
  },
  {
    title: "Gutters",
    description: "Seamless gutter systems designed for maximum flow and durability. Protect your foundation from water damage.",
    image: "https://futureremodeling.com/wp-content/uploads/2025/07/Gutter-Installation.jpeg",
    icon: <Clock className="w-6 h-6" />
  }
];

const partners = [
  "https://futureremodeling.com/wp-content/uploads/2025/07/12.jpg",
  "https://futureremodeling.com/wp-content/uploads/2025/07/16.jpg",
  "https://futureremodeling.com/wp-content/uploads/2025/07/20.jpg",
  "https://futureremodeling.com/wp-content/uploads/2025/07/4.jpg",
  "https://futureremodeling.com/wp-content/uploads/2025/07/14.jpg",
  "https://futureremodeling.com/wp-content/uploads/2025/07/8.jpg",
  "https://futureremodeling.com/wp-content/uploads/2025/07/21.jpg",
  "https://futureremodeling.com/wp-content/uploads/2025/07/18.jpg"
];

const testimonials = [
  {
    image: "https://futureremodeling.com/wp-content/uploads/2025/06/video-one.webp",
    text: "Future Remodeling transformed our home. The process was seamless and the results are stunning."
  },
  {
    image: "https://futureremodeling.com/wp-content/uploads/2025/06/video-four.webp",
    text: "Professional, reliable, and high-quality work. Highly recommend for any exterior project."
  },
  {
    image: "https://futureremodeling.com/wp-content/uploads/2025/06/video-three.webp",
    text: "The team was exceptional. They treated our home like their own and delivered beyond expectations."
  }
];

const projectImages = [
  "https://futureremodeling.com/wp-content/uploads/2025/04/1.png",
  "https://futureremodeling.com/wp-content/uploads/2025/04/3.png",
  "https://futureremodeling.com/wp-content/uploads/2025/04/2.png",
  "https://futureremodeling.com/wp-content/uploads/2025/04/19.jpg",
  "https://futureremodeling.com/wp-content/uploads/2025/07/34.jpg",
  "https://futureremodeling.com/wp-content/uploads/2025/04/20-1.jpg",
  "https://futureremodeling.com/wp-content/uploads/2025/04/21.jpg",
  "https://futureremodeling.com/wp-content/uploads/2025/04/17.jpg"
];

const stats = [
  { label: "Square Feet Installed", value: "1M+" },
  { label: "Projects Completed", value: "5,000+" },
  { label: "Years of Excellence", value: "10+" },
  { label: "Google Rating", value: "5.0" }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="glass-nav">
        <div className="max-w-7xl mx-auto px-6 h-20 md:h-24 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src={LOGO_URL} alt="Future Remodeling" className="h-8 sm:h-10 md:h-10 object-contain brightness-0 invert" />
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            <a href="#about" className="text-xs font-black tracking-widest hover:text-emerald-400 transition-colors">ABOUT</a>
            <a href="#services" className="text-xs font-black tracking-widest hover:text-emerald-400 transition-colors">SERVICES</a>
            <a href="#gallery" className="text-xs font-black tracking-widest hover:text-emerald-400 transition-colors">GALLERY</a>
            <a href="#blog" className="text-xs font-black tracking-widest hover:text-emerald-400 transition-colors">BLOG</a>
            <a href="#careers" className="text-xs font-black tracking-widest hover:text-emerald-400 transition-colors">CAREERS</a>
            <div className="h-4 w-px bg-white/20 mx-2" />
            <div className="flex items-center gap-2 text-white font-black">
              <Phone className="w-4 h-4 text-emerald-400" />
              <span className="tracking-tighter">(201) 379-9928</span>
            </div>
            <button className="btn-primary text-xs py-3 px-6">FREE CONSULTATION</button>
          </div>

          {/* Mobile Toggle */}
          <button className="lg:hidden p-2 text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="lg:hidden absolute top-24 left-0 w-full bg-black border-b border-white/10 p-8 flex flex-col gap-6 shadow-2xl z-50"
            >
              <a href="#about" className="text-xl font-black tracking-widest text-white" onClick={() => setIsMenuOpen(false)}>ABOUT</a>
              <a href="#services" className="text-xl font-black tracking-widest text-white" onClick={() => setIsMenuOpen(false)}>SERVICES</a>
              <a href="#gallery" className="text-xl font-black tracking-widest text-white" onClick={() => setIsMenuOpen(false)}>GALLERY</a>
              <a href="#blog" className="text-xl font-black tracking-widest text-white" onClick={() => setIsMenuOpen(false)}>BLOG</a>
              <a href="#careers" className="text-xl font-black tracking-widest text-white" onClick={() => setIsMenuOpen(false)}>CAREERS</a>
              <button className="btn-primary w-full py-5">FREE CONSULTATION</button>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main>
        {/* Hero Section */}
        <section id="hero" className="relative min-h-[90vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <video 
              autoPlay 
              muted 
              loop 
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="https://futureremodeling.com/wp-content/uploads/2024/10/FUTURE%20REMODELING%202.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-[1px]" />
          </div>

          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10 py-12 md:py-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500 text-slate-900 text-[10px] sm:text-xs font-black tracking-tighter mb-6 md:mb-8">
                THE FUTURE OF REMODELING IS HERE
              </div>
              <h1 className="heading-xl text-white mb-6 md:mb-8">
                Expert <br />
                <span className="text-emerald-400">Exterior</span> <br />
                Remodeling
              </h1>
              <p className="text-lg md:text-xl text-slate-200 mb-8 md:mb-10 max-w-lg font-medium leading-relaxed">
                Trusted for quality, reliability, and service. We transform homes with innovative solutions and exceptional craftsmanship.
              </p>
              <div className="flex flex-wrap gap-4 md:gap-6">
                <button className="btn-primary text-sm md:text-base px-6 md:px-8">
                  GET A FREE QUOTE
                </button>
                <button className="btn-secondary border-white text-white hover:bg-white hover:text-slate-900 text-sm md:text-base px-6 md:px-8">
                 <span className="text-white"> VIEW OUR WORK </span>
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white p-6 sm:p-10 shadow-[10px_10px_0px_0px_rgba(16,185,129,1)] md:shadow-[20px_20px_0px_0px_rgba(16,185,129,1)]"
            >
              <h3 className="text-2xl md:text-3xl font-black mb-6 md:mb-8 uppercase tracking-tight">Free Consultation</h3>
              <form className="space-y-4 md:space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">First Name</label>
                    <input type="text" className="w-full px-4 py-3 md:py-4 bg-slate-50 border-2 border-slate-200 focus:outline-none focus:border-emerald-500 transition-all font-bold" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Last Name</label>
                    <input type="text" className="w-full px-4 py-3 md:py-4 bg-slate-50 border-2 border-slate-200 focus:outline-none focus:border-emerald-500 transition-all font-bold" placeholder="Doe" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Email Address</label>
                  <input type="email" className="w-full px-4 py-3 md:py-4 bg-slate-50 border-2 border-slate-200 focus:outline-none focus:border-emerald-500 transition-all font-bold" placeholder="john@example.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Service of Interest</label>
                  <select className="w-full px-4 py-3 md:py-4 bg-slate-50 border-2 border-slate-200 focus:outline-none focus:border-emerald-500 transition-all font-bold appearance-none">
                    <option>Select a service</option>
                    <option>Roofing</option>
                    <option>Siding</option>
                    <option>Windows</option>
                    <option>Gutters</option>
                  </select>
                </div>
                <button className="w-full btn-primary py-4 md:py-5 mt-2 md:mt-4">SUBMIT REQUEST</button>
              </form>
            </motion.div>
          </div>
        </section>

        {/* Vision Section */}
        <section id="about" className="section-padding bg-white">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img 
                src="https://futureremodeling.com/wp-content/uploads/2025/07/FUTURE-REMODELING-TEAM-scaled-e1753905611757.webp" 
                alt="Future Remodeling Team" 
                className="w-full aspect-[4/3] object-cover shadow-[15px_15px_0px_0px_rgba(241,245,249,1)] md:shadow-[30px_30px_0px_0px_rgba(241,245,249,1)]"
              />
              <div className="absolute -bottom-6 -right-6 md:-bottom-12 md:-right-12 bg-slate-900 text-white p-6 md:p-12 hidden sm:block max-w-[200px] md:max-w-sm shadow-2xl">
                <p className="text-xl md:text-3xl font-black italic mb-4 md:mb-6 leading-tight uppercase">"Transforming homes, transforming lives."</p>
                <div className="h-1 w-12 md:w-20 bg-emerald-500" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="construction-border"
            >
              <span className="text-emerald-600 font-black tracking-[0.2em] text-xs sm:text-sm uppercase mb-4 md:mb-6 block">Our Vision</span>
              <h2 className="heading-lg mb-6 md:mb-10">Why NJ Homeowners Choose Future Remodeling</h2>
              <div className="space-y-6 md:space-y-8 text-muted text-lg md:text-xl">
                <p className="font-bold text-slate-900">
                  At Future Remodeling, we believe that by transforming our homes, we can transform our lives. Experience remodeling like never before.
                </p>
                <p>
                  From the first consultation to the final reveal, we make every step effortless and transparent. Forward-thinking is part of our DNA, and we apply it to everything we do to ensure results exceed expectations.
                </p>
                <div className="grid grid-cols-2 gap-6 md:gap-10 pt-4 md:pt-8">
                  <div className="space-y-2 md:space-y-3">
                    <ShieldCheck className="w-8 h-8 md:w-10 md:h-10 text-emerald-600" />
                    <h4 className="font-black uppercase tracking-tighter text-base md:text-lg">Certified</h4>
                    <p className="text-[10px] md:text-sm font-bold text-slate-400 uppercase">Manufacturer Certified</p>
                  </div>
                  <div className="space-y-2 md:space-y-3">
                    <Clock className="w-8 h-8 md:w-10 md:h-10 text-emerald-600" />
                    <h4 className="font-black uppercase tracking-tighter text-base md:text-lg">Reliable</h4>
                    <p className="text-[10px] md:text-sm font-bold text-slate-400 uppercase">Dedicated Managers</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="section-padding bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12 md:mb-20 construction-border border-emerald-500">
              <span className="text-emerald-400 font-black tracking-[0.2em] text-xs sm:text-sm uppercase mb-4 md:mb-6 block">Our Expertise</span>
              <h2 className="heading-lg mb-6 md:mb-8">Comprehensive <br /> Exterior Solutions</h2>
              <p className="text-slate-400 max-w-2xl text-lg md:text-xl font-medium">
                We specialize in high-performance products and expert installation to ensure your home is protected and beautiful.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group bg-slate-800 p-8 md:p-10 hover:bg-emerald-500 transition-all duration-500 cursor-pointer"
                >
                  <div className="mb-8 md:mb-10 text-emerald-400 group-hover:text-slate-900 transition-colors">
                    {React.cloneElement(service.icon as React.ReactElement, { className: "w-10 h-10 md:w-12 md:h-12" })}
                  </div>
                  <h3 className="text-xl md:text-2xl font-black mb-4 md:mb-6 uppercase tracking-tighter group-hover:text-slate-900 transition-colors">{service.title}</h3>
                  <p className="text-slate-400 text-xs md:text-sm font-bold leading-relaxed mb-8 md:mb-10 group-hover:text-slate-800 transition-colors">
                    {service.description}
                  </p>
                  <div className="flex items-center gap-3 text-emerald-400 font-black text-[10px] md:text-xs tracking-widest group-hover:text-slate-900 transition-colors">
                    EXPLORE {service.title.toUpperCase()}
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="section-padding bg-slate-900 text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-500/20 via-transparent to-transparent" />
          </div>
          
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="text-5xl md:text-6xl font-bold mb-2 text-emerald-400">{stat.value}</div>
                  <div className="text-slate-400 uppercase tracking-widest text-xs font-semibold">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="section-padding bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-emerald-600 font-black tracking-[0.2em] text-sm uppercase mb-4 block">Testimonials</span>
              <h2 className="heading-lg mb-6">What Our Customers Say</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((t, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white p-8 shadow-xl border-b-4 border-emerald-500"
                >
                  <img src={t.image} alt="Testimonial" className="w-full aspect-video object-cover mb-6 grayscale hover:grayscale-0 transition-all" />
                  <p className="text-slate-600 font-medium italic mb-6">"{t.text}"</p>
                  <div className="flex text-emerald-500">
                    {[1, 2, 3, 4, 5].map((i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Us Section */}
        <section id="gallery" className="section-padding bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="construction-border"
              >
                <h2 className="heading-lg mb-6 md:mb-10">Craftsmanship That Lasts</h2>
                <p className="text-muted text-lg md:text-xl mb-8 md:mb-12 font-bold">
                  For over a decade, we’ve been a trusted choice for New Jersey homeowners. We treat every home like it’s our own—no shortcuts, just exceptional value.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
                  {[
                    "Locally Owned & Operated",
                    "Fully Licensed & Insured",
                    "Manufacturer Certified",
                    "Dedicated Project Manager",
                    "Future® Lifetime Warranty",
                    "Premium Materials Only"
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3 md:gap-4">
                      <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-emerald-500 flex-shrink-0" />
                      <span className="font-black uppercase tracking-tighter text-sm md:text-base text-slate-900">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-10 md:mt-16 p-6 md:p-10 bg-slate-900 text-white flex flex-col sm:flex-row items-center gap-6 md:gap-8 shadow-2xl">
                  <div className="flex -space-x-3 md:-space-x-4">
                    {[1, 2, 3, 4].map((i) => (
                      <img 
                        key={i}
                        src={`https://i.pravatar.cc/100?u=${i}`} 
                        alt="Customer" 
                        className="w-10 h-10 md:w-14 md:h-14 rounded-none border-2 md:border-4 border-slate-900 object-cover"
                      />
                    ))}
                  </div>
                  <div className="text-center sm:text-left">
                    <div className="flex justify-center sm:justify-start text-emerald-400 mb-1 md:mb-2">
                      {[1, 2, 3, 4, 5].map((i) => <Star key={i} className="w-4 h-4 md:w-5 md:h-5 fill-current" />)}
                    </div>
                    <p className="text-[10px] md:text-sm font-black uppercase tracking-widest">5,000+ NJ Homeowners</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="grid grid-cols-2 gap-6"
              >
                {projectImages.slice(0, 3).map((img, idx) => (
                  <img 
                    key={idx}
                    src={img} 
                    alt={`Project ${idx + 1}`} 
                    className={`w-full object-cover shadow-2xl ${idx === 1 ? 'aspect-[3/4] mt-16' : 'aspect-[3/4]'}`}
                  />
                ))}
                <img 
                  src={projectImages[3]} 
                  alt="Project 4" 
                  className="w-full aspect-video object-cover shadow-2xl"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Partners Section */}
        <section className="py-20 bg-white overflow-hidden border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-6 mb-12">
            <h3 className="text-center text-xs font-black tracking-[0.3em] uppercase text-slate-400">Our Trusted Partners</h3>
          </div>
          <div className="flex gap-12 items-center animate-marquee whitespace-nowrap">
            {[...partners, ...partners].map((logo, idx) => (
              <img key={idx} src={logo} alt="Partner" className="h-16 md:h-24 object-contain grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all" />
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-emerald-500">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-8">Ready to transform your home?</h2>
            <p className="text-xl text-slate-800 mb-10">
              Schedule your free, no-obligation consultation today and see why we're NJ's top-rated exterior experts.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="btn-primary bg-slate-900 text-white px-10 py-5 text-lg">
                BOOK YOUR FREE CONSULTATION
              </button>
              <a href="tel:2013799928" className="flex items-center gap-3 font-bold text-slate-900 text-xl">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-lg">
                  <Phone className="w-6 h-6" />
                </div>
                (201) 379-9928
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
            <div className="space-y-6">
              <img src={LOGO_URL} alt="Future Remodeling" className="h-12 brightness-0 invert" />
              <p className="text-slate-400 text-sm leading-relaxed">
                Premium exterior home remodeling services in New Jersey. We combine vision with skillful execution to transform dreams into reality.
              </p>
              <div className="flex gap-4">
                <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors"><Instagram className="w-5 h-5" /></a>
                <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors"><Facebook className="w-5 h-5" /></a>
                <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors"><Twitter className="w-5 h-5" /></a>
                <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors"><Linkedin className="w-5 h-5" /></a>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-6">COMPANY</h4>
              <ul className="space-y-4 text-slate-400 text-sm">
                <li><a href="#about" className="hover:text-emerald-400 transition-colors">ABOUT</a></li>
                <li><a href="#services" className="hover:text-emerald-400 transition-colors">SERVICES</a></li>
                <li><a href="#gallery" className="hover:text-emerald-400 transition-colors">GALLERY</a></li>
                <li><a href="#blog" className="hover:text-emerald-400 transition-colors">BLOG</a></li>
                <li><a href="#careers" className="hover:text-emerald-400 transition-colors">CAREERS</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-6">LEGAL</h4>
              <ul className="space-y-4 text-slate-400 text-sm">
                <li><a href="#" className="hover:text-emerald-400 transition-colors">PRIVACY POLICY</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">TERMS & CONDITIONS</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-6">CONTACT</h4>
              <ul className="space-y-4 text-slate-400 text-sm">
                <li className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-emerald-400" />
                  info@futureremodeling.com
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-emerald-400" />
                  (201) 379-9928
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-emerald-400 mt-1" />
                  37A Woodbine St, <br /> Bergenfield, NJ 07621
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-slate-500 text-xs">
              © 2026 Future Remodeling. All rights reserved.
            </p>
            <div className="flex gap-8 opacity-50 grayscale">
              <span className="text-[10px] font-bold">GAF MASTER ELITE</span>
              <span className="text-[10px] font-bold">JAMES HARDIE ELITE</span>
              <span className="text-[10px] font-bold">GOOGLE 5 STARS</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
