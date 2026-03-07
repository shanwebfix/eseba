import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Home, Grid, Wrench, BookOpen } from 'lucide-react';

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { name: 'হোম', icon: <Home size={18} />, path: '/' },
    { name: 'অ্যাপস', icon: <Grid size={18} />, path: '/Apps/mobile-apps' },
    { name: 'টুলস', icon: <Wrench size={18} />, path: '/tools' },
    { name: 'ব্লগ', icon: <BookOpen size={18} />, path: '/blog' },
  ];

  return (
    <div className="fixed bottom-4 left-0 right-0 z-[100] px-4 pointer-events-none">
      <div className="max-w-md mx-auto h-12 bg-white/95 dark:bg-[#151221] backdrop-blur-md border border-slate-200 dark:border-indigo-500/10 rounded-2xl flex items-center justify-around px-2 pointer-events-auto">
        
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          
          return (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              className="relative flex flex-col items-center justify-center w-14 h-9 transition-all duration-300"
            >
              {/* Active Background: Light Blue Tint (No Glow) */}
              {isActive && (
                <div className="absolute inset-0 bg-blue-500/10 dark:bg-blue-400/10 rounded-xl transition-all duration-300" />
              )}

              <div className={`transition-all duration-300 z-10 ${
                isActive 
                  ? 'text-blue-600 dark:text-blue-400' 
                  : 'text-slate-400 dark:text-slate-500'
              }`}>
                {item.icon}
              </div>

              <span className={`text-[8px] font-black mt-0.5 uppercase transition-all duration-300 z-10 ${
                isActive 
                  ? 'text-blue-600 dark:text-blue-400' 
                  : 'text-slate-400 dark:text-slate-500 opacity-60'
              }`}>
                {item.name}
              </span>
            </button>
          );
        })}
        
      </div>
    </div>
  );
};

export default Footer;