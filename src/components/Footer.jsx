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
          {/* Logo (Non-Clickable) */}
          <div className="flex items-center gap-2 cursor-default select-none">
            <img 
              src="/logo.svg" 
              alt="eSeba Logo" 
              className="h-5 w-auto object-contain" 
            />
          </div>
          <p className="text-sm leading-relaxed max-w-xs">
            The premier digital asset platform for modern creators. We are dedicated to providing high-end developer resources and premium UI assets absolutely free of charge.
          </p>
          <div className="flex gap-4">
            {[Github, Twitter, Linkedin, Facebook].map((Icon, index) => (
              <a 
                key={index} 
                href="#" 
                className="w-10 h-10 flex items-center justify-center rounded-xl bg-slate-900/50 border border-slate-800 hover:border-[#7C3AED] hover:text-[#7C3AED] hover:-translate-y-1 transition-all duration-300"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-bold mb-8 text-sm uppercase tracking-[2px]">Resources</h4>
          <ul className="space-y-4 text-[13px]">
            {['About Us', 'Our Services', 'Recent Projects', 'Career'].map((item) => (
              <li key={item}>
                <a href="#" className="group flex items-center gap-2 hover:text-white transition-all">
                  <ChevronRight size={14} className="text-[#7C3AED] group-hover:translate-x-1 transition-transform" />
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Support & Legal */}
        <div>
          <h4 className="text-white font-bold mb-8 text-sm uppercase tracking-[2px]">Support</h4>
          <ul className="space-y-4 text-[13px]">
            {['Privacy Policy', 'Terms of Service', 'Refund Policy', 'Help Center'].map((item) => (
              <li key={item}>
                <a href="#" className="group flex items-center gap-2 hover:text-white transition-all">
                  <ChevronRight size={14} className="text-[#7C3AED] group-hover:translate-x-1 transition-transform" />
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info (Icons with Background) */}
        <div className="lg:pl-6">
          <h4 className="text-white font-bold mb-8 text-sm uppercase tracking-[2px]">Get in Touch</h4>
          <div className="space-y-6 text-[13px]">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 shrink-0 flex items-center justify-center rounded-xl bg-slate-900 border border-slate-800">
                <MapPin size={18} className="text-[#7C3AED]" />
              </div>
              <span className="leading-relaxed pt-1.5">Silicon Tower, Level 4,<br/>Dhaka, Bangladesh</span>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 shrink-0 flex items-center justify-center rounded-xl bg-slate-900 border border-slate-800">
                <Phone size={18} className="text-[#7C3AED]" />
              </div>
              <span>+880 1234 567 890</span>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 shrink-0 flex items-center justify-center rounded-xl bg-slate-900 border border-slate-800">
                <Mail size={18} className="text-[#7C3AED]" />
              </div>
              <span>hello@eseba.com</span>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="max-w-7xl mx-auto px-6 pt-10 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-6 text-[11px] font-bold uppercase tracking-widest text-slate-500">
        <p>© {currentYear} eSeba Digital. Empowering Developers worldwide.</p>
        <div className="flex gap-8 uppercase">
          <span className="hover:text-white cursor-pointer transition-colors">Security</span>
          <span className="hover:text-white cursor-pointer transition-colors">Sitemap</span>
          <span className="hover:text-white cursor-pointer transition-colors">Status</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;