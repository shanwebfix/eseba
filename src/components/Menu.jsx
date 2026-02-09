import React from 'react';
import { 
  Smartphone, 
  Monitor, 
  Cpu, 
  Layout, 
  Palette, 
  Code2, 
  FileJson, 
  PlugZap,
  ArrowUpRight 
} from 'lucide-react';

const categories = [
  {
    id: 1,
    title: "Mobile Apps",
    desc: "Premium applications for Android and iOS devices.",
    icon: <Smartphone strokeWidth={1.5} />,
    link: "/cetegories/mobileapp"
  },
  {
    id: 2,
    title: "PC Apps",
    desc: "Essential software and tools for Windows and macOS.",
    icon: <Monitor strokeWidth={1.5} />,
    link: "/categories/pc-apps"
  },
  {
    id: 3,
    title: "AI Tools",
    desc: "Curated directory of the world's smartest AI solutions.",
    icon: <Cpu strokeWidth={1.5} />,
    link: "/cetegories/ai-tools"
  },
  {
    id: 4,
    title: "Themes",
    desc: "Modern and responsive layouts for various platforms.",
    icon: <Layout strokeWidth={1.5} />,
    link: "/categories/themes"
  },
  {
    id: 5,
    title: "Plugins",
    desc: "Powerful extensions to enhance your workflow.",
    icon: <PlugZap strokeWidth={1.5} />,
    link: "/categories/plugins"
  },
  {
    id: 6,
    title: "Web Scripts",
    desc: "Robust backend and frontend scripts for developers.",
    icon: <Code2 strokeWidth={1.5} />,
    link: "/categories/web-scripts"
  },
  {
    id: 7,
    title: "Graphics",
    desc: "High-quality design assets and visual resources.",
    icon: <Palette strokeWidth={1.5} />,
    link: "/categories/graphics"
  },
  {
    id: 8,
    title: "UI Components",
    desc: "Reusable building blocks for modern interfaces.",
    icon: <FileJson strokeWidth={1.5} />,
    link: "/categories/components"
  }
];

const SimpleCategory = () => {
  return (
    <div className="py-20 px-0">
      <div className="max-w-6xl mx-auto">
        {/* Simple Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Assets Library</h2>
            <p className="text-slate-500 text-sm mt-1">Select a category to explore our digital assets.</p>
          </div>
          <div className="h-px flex-1 bg-slate-100 dark:bg-slate-800 mx-8 hidden md:block"></div>
        </div>

        {/* Grid Layout - Responsive columns */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <a 
              href={cat.link} 
              key={cat.id}
              className="group p-4 border border-slate-100 dark:border-slate-800 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-all duration-300 relative overflow-hidden flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-start">
                  <div className="text-slate-900 dark:text-slate-400 group-hover:text-[#7C3AED] transition-colors duration-300">
                    {cat.icon}
                  </div>
                  <ArrowUpRight 
                    size={16} 
                    className="text-slate-300 dark:text-slate-600 group-hover:text-[#7C3AED] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" 
                  />
                </div>

                <div className="mt-4">
                  <h3 className="text-md font-bold text-slate-900 dark:text-white mb-2">
                    {cat.title}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-2">
                    {cat.desc}
                  </p>
                </div>
              </div>
              
              {/* Subtle hover line */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#7C3AED] transition-all duration-500 group-hover:w-full"></div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SimpleCategory;