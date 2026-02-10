import { useState, useEffect } from "react";
// Added 'X' icon for the open state
import { Sun, Moon, ArrowRight, Github, Twitter, Linkedin, TextAlignEnd, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    document.documentElement.classList.toggle("dark", newMode);
    localStorage.setItem("theme", newMode ? "dark" : "light");
  };

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/Nav/about' },
    { name: 'Help', href: '/Nav/help' },
    { name: 'Contact', href: '/Nav/contact' }
  ];

  return (
    <nav className="bg-white dark:bg-[#05070a] sticky top-0 z-[100] border-b border-gray-100 dark:border-purple-900/20 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex justify-between h-20 items-center">
          
          {/* Logo */}
          <div className="flex-shrink-0 relative z-[110]">
            <a href="/" className="block">
              <img src="/logo.svg" alt="eSeba" className="h-5 w-auto transition-transform hover:scale-105" />
            </a>
          </div>
          
          {/* PC Menu */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href} 
                className="relative text-slate-600 dark:text-slate-300 hover:text-[#7C3AED] dark:hover:text-purple-400 font-semibold text-sm transition-all group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#7C3AED] transition-all group-hover:w-full"></span>
              </a>
            ))}
            
            <button 
              onClick={toggleDarkMode}
              className="ml-4 p-2 rounded-xl bg-slate-50 dark:bg-slate-800/50 text-slate-500 dark:text-yellow-400 hover:ring-2 hover:ring-purple-500/20 transition-all"
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>

          {/* Mobile Actions */}
          <div className="md:hidden flex items-center gap-4 relative z-[110]">
            <button onClick={toggleDarkMode} className="text-slate-500 dark:text-yellow-400">
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            
            {/* Hamburger using TextAlignEnd Icon */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="p-1 text-slate-800 dark:text-white transition-all active:scale-90"
            >
              {isOpen ? (
                <X size={22} className="transition-all" />
              ) : (
                <TextAlignEnd size={22} className="transition-all" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* --- Modern Off-Canvas Drawer --- */}
      <div className={`fixed inset-0 z-[100] md:hidden transition-all duration-500 ${isOpen ? 'visible' : 'invisible pointer-events-none'}`}>
        <div 
          className={`absolute inset-0 bg-slate-900/20 dark:bg-black/40 backdrop-blur-md transition-opacity duration-500 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setIsOpen(false)}
        />

        <div className={`absolute top-0 right-0 h-full w-[300px] bg-white dark:bg-[#0a0f1c] shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="p-8 flex flex-col h-full">
            <div className="mt-16 space-y-2">
              <p className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-[2px] mb-6">Navigation</p>
              {navLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.href} 
                  className="flex items-center justify-between py-4 text-1xl font-bold text-slate-800 dark:text-white border-b border-slate-50 dark:border-slate-900/50 hover:text-[#7C3AED] dark:hover:text-purple-400 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                  <ArrowRight size={20} className="opacity-20" />
                </a>
              ))}
            </div>

            <div className="mt-auto pt-10">
              <div className="flex gap-6 mb-8 justify-center">
                <Github size={20} className="text-slate-400 hover:text-purple-500 transition-colors cursor-pointer" />
                <Twitter size={20} className="text-slate-400 hover:text-purple-500 transition-colors cursor-pointer" />
                <Linkedin size={20} className="text-slate-400 hover:text-purple-500 transition-colors cursor-pointer" />
              </div>
              <button className="w-full bg-[#7C3AED] py-4 rounded-2xl text-white font-bold text-sm shadow-xl shadow-purple-500/20 transition-transform active:scale-95">
                Join eSeba Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;