import React from 'react';
import { Search, Layout, Smartphone, Palette, Code, Sparkles, Laptop, StarHalf } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative bg-[#fafaff] dark:bg-[#05070a] pt-16 pb-20 px-6 rounded-[1rem] border border-purple-100 dark:border-purple-900/20 shadow-[0_20px_50px_rgba(124,58,237,0.1)] overflow-hidden transition-all duration-500">
      
      {/* Background Blurs */}
      <div className="absolute top-[-10%] right-[-10%] w-[400px] h-[400px] bg-purple-200/40 dark:bg-purple-600/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-indigo-200/40 dark:bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 py-1.5 px-4 mb-6 rounded-full bg-white dark:bg-purple-500/10 border border-purple-100 dark:border-purple-500/20 text-purple-700 dark:text-purple-300 text-[11px] md:text-xs font-bold tracking-wide uppercase shadow-sm">
          <Sparkles size={14} className="text-purple-500" />
          <span>100% Free for Everyone</span>
        </div>

        {/* Title */}
       <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 dark:text-white leading-[1.1] mb-6 tracking-tight">
         Premium <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] to-indigo-400">Services, Themes</span> <br className="hidden md:block" /> Now Completely <span className="text-[#7C3AED]">Free</span>
         </h1>

<p className="text-base md:text-lg text-slate-600 dark:text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
  Experience world-class premium services at absolutely zero cost. Access our hand-crafted collection of professional React components and modern themes without spending a dime.
</p>

        {/* --- Compact Search Bar --- */}
        <div className="max-w-lg mx-auto mb-2 px-2">
          <div className="relative flex items-center bg-white dark:bg-slate-900 border border-purple-100 dark:border-white/10 rounded-2xl p-1.5 shadow-lg transition-all focus-within:ring-2 focus-within:ring-purple-500/20">
            <div className="flex items-center flex-1 px-3">
              <Search size={18} className="text-purple-500" />
              <input 
                type="text" 
                placeholder="Find your free service..." 
                className="w-full bg-transparent border-none focus:ring-0 text-slate-800 dark:text-slate-100 px-3 py-2 text-sm md:text-base placeholder:text-slate-400"
              />
            </div>
            <button className="bg-[#7C3AED] hover:bg-purple-700 text-white px-6 py-2 rounded-xl text-sm font-bold transition-all shadow-md">
              Search
            </button>
          </div>
        </div>

        
      </div>

      {/* Subtle Bottom Glow */}
  
    </section>
  );
};

export default Hero;