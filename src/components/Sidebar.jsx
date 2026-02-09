import React from 'react';
import { 
  LayoutDashboard, 
  Briefcase, 
  Settings, 
  ChevronRight, 
  Layers, 
  Users, 
  HelpCircle 
} from 'lucide-react';

const Sidebar = () => {
  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', active: true },
    { icon: Briefcase, label: 'Services', active: false },
    { icon: Layers, label: 'Projects', active: false },
    { icon: Users, label: 'Community', active: false },
    { icon: Settings, label: 'Settings', active: false },
  ];

  return (
    <aside className="hidden md:flex flex-col w-72 bg-white dark:bg-[#05070a] text-slate-600 dark:text-slate-400 h-[calc(100vh-80px)] sticky top-20 border-r border-purple-100 dark:border-purple-900/20 transition-all duration-300">
      
      <div className="flex-1 px-4 py-8 space-y-2 overflow-y-auto custom-scrollbar">
        <p className="px-4 text-[10px] font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-4">
          Main Menu
        </p>

        {menuItems.map((item, index) => (
          <div
            key={index}
            className={`group flex items-center justify-between p-3.5 rounded-2xl cursor-pointer transition-all duration-300 ${
              item.active 
                ? 'bg-purple-50 dark:bg-purple-500/10 text-[#7C3AED] dark:text-purple-400 shadow-sm' 
                : 'hover:bg-slate-50 dark:hover:bg-slate-800/50 hover:text-slate-900 dark:hover:text-slate-200'
            }`}
          >
            <div className="flex items-center gap-3">
              <item.icon size={20} strokeWidth={item.active ? 2.5 : 2} />
              <span className="font-semibold text-sm">{item.label}</span>
            </div>
            {item.active && (
              <div className="w-1.5 h-1.5 rounded-full bg-[#7C3AED] dark:bg-purple-400 shadow-[0_0_8px_#7C3AED]"></div>
            )}
            {!item.active && (
              <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
            )}
          </div>
        ))}
      </div>

      {/* Sidebar Footer / Support */}
      <div className="p-4 mt-auto">
        <div className="bg-gradient-to-br from-purple-600 to-indigo-600 rounded-2xl p-4 text-white shadow-lg shadow-purple-500/20">
          <div className="flex items-center gap-3 mb-2">
            <HelpCircle size={18} />
            <span className="text-sm font-bold">Need Help?</span>
          </div>
          <p className="text-[11px] text-purple-100 mb-3 leading-relaxed">
            Check our documentation or contact support.
          </p>
          <button className="w-full py-2 bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-xl text-xs font-bold transition-all">
            Get Support
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;