import { 
  Facebook, 
  Twitter, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  ChevronRight,
  Github
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#05070a] text-slate-400 pt-24 pb-10 mt-auto border-t border-purple-900/20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
        
        {/* Brand Section */}
        <div className="space-y-8">
          <a href="/" className="flex items-center gap-2 group transition-opacity hover:opacity-80">
            <img 
              src="/logo.svg" 
              alt="eSeba Logo" 
              className="h-5 w-auto object-contain" 
            />
          </a>
          <p className="text-sm leading-relaxed max-w-xs">
            The premier digital asset platform for modern creators. We provide high-end developer resources and premium UI assets for free.
          </p>
          <div className="flex gap-4">
            {[
              { Icon: Github, href: "https://github.com" },
              { Icon: Twitter, href: "https://twitter.com" },
              { Icon: Linkedin, href: "https://linkedin.com" },
              { Icon: Facebook, href: "https://facebook.com" }
            ].map((social, index) => (
              <a 
                key={index} 
                href={social.href} 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-xl bg-slate-900/50 border border-slate-800 hover:border-[#7C3AED] hover:text-[#7C3AED] hover:-translate-y-1 transition-all duration-300"
              >
                <social.Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-bold mb-8 text-sm uppercase tracking-[2px]">Resources</h4>
          <ul className="space-y-4 text-[13px]">
            {[
              { name: 'About Us', link: '/Nav/about' },
              { name: 'Our Services', link: '/Nav/service' },
              { name: 'FAQ', link: '/Nav/faq' },
              { name: 'Career', link: '/Nav/career' }
            ].map((item) => (
              <li key={item.name}>
                <a href={item.link} className="group flex items-center gap-2 hover:text-white transition-all">
                  <ChevronRight size={14} className="text-[#7C3AED] group-hover:translate-x-1 transition-transform" />
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Support & Legal */}
        <div>
          <h4 className="text-white font-bold mb-8 text-sm uppercase tracking-[2px]">Support</h4>
          <ul className="space-y-4 text-[13px]">
            {[
              { name: 'Privacy Policy', link: '/Nav/privacy' },
              { name: 'Terms of Service', link: '/Nav/terms' },
              { name: 'Contact Our Team', link: '/Nav/contact' },
              { name: 'Help Center', link: '/Nav/help' }
            ].map((item) => (
              <li key={item.name}>
                <a href={item.link} className="group flex items-center gap-2 hover:text-white transition-all">
                  <ChevronRight size={14} className="text-[#7C3AED] group-hover:translate-x-1 transition-transform" />
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="lg:pl-6">
          <h4 className="text-white font-bold mb-8 text-sm uppercase tracking-[2px]">Get in Touch</h4>
          <div className="space-y-6 text-[13px]">
            <a href="https://maps.google.com" target="_blank" className="flex items-start gap-4 group">
              <div className="w-10 h-10 shrink-0 flex items-center justify-center rounded-xl bg-slate-900 border border-slate-800 group-hover:border-[#7C3AED] transition-colors">
                <MapPin size={18} className="text-[#7C3AED]" />
              </div>
              <span className="leading-relaxed pt-1.5 group-hover:text-white transition-colors text-left">Moulvibazar<br/>Syhet, Bangladesh</span>
            </a>
            
            <a href="tel:+880123456789" className="flex items-center gap-4 group">
              <div className="w-10 h-10 shrink-0 flex items-center justify-center rounded-xl bg-slate-900 border border-slate-800 group-hover:border-[#7C3AED] transition-colors">
                <Phone size={18} className="text-[#7C3AED]" />
              </div>
              <span className="group-hover:text-white transition-colors">+880 1234 567 ***</span>
            </a>

            <a href="mailto:hello@eseba.vercel.app" className="flex items-center gap-4 group">
              <div className="w-10 h-10 shrink-0 flex items-center justify-center rounded-xl bg-slate-900 border border-slate-800 group-hover:border-[#7C3AED] transition-colors">
                <Mail size={18} className="text-[#7C3AED]" />
              </div>
              <span className="group-hover:text-white transition-colors">hello@eseba.vercel.app</span>
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="max-w-7xl mx-auto px-6 pt-10 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-6 text-[11px] font-bold uppercase tracking-widest text-slate-500">
        <p>© {currentYear} eSeba Digital. Empowering Developers worldwide.</p>
        <div className="flex gap-8 uppercase">
          <a href="/security" className="hover:text-white transition-colors">Security</a>
          <a href="/sitemap" className="hover:text-white transition-colors">Sitemap</a>
          <a href="/status" className="hover:text-white transition-colors">Status</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;