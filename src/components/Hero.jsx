import React from 'react';
import { Search, Layout, Smartphone, Palette, Code } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative bg-white dark:bg-gray-900 pt-12 pb-16 px-6 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-2xl overflow-hidden transition-all duration-300">
      {/* Decorative Blur Background Elements */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-blue-100 dark:bg-blue-900/20 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-purple-100 dark:bg-purple-900/20 rounded-full blur-3xl opacity-50"></div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Badge */}
        <span className="inline-block py-1 px-3 mb-6 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-semibold tracking-wide uppercase">
          Everything you need to build faster
        </span>

        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white leading-tight mb-6">
          Premium <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">UI Kits, Themes</span> & Apps for Developers
        </h1>

        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-3xl mx-auto">
          Elevate your next project with our hand-crafted collection of professional React components, mobile app templates, and modern website themes.
        </p>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative flex items-center bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-xl p-1">
            <div className="pl-4 text-gray-400">
              <Search size={22} />
            </div>
            <input 
              type="text" 
              placeholder="Search for 'E-commerce Theme', 'React Sidebar'..." 
              className="w-full bg-transparent border-none focus:ring-0 text-gray-800 dark:text-white px-4 py-3"
            />
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-bold transition shadow-lg shadow-blue-500/30">
              Search
            </button>
          </div>
        </div>

        {/* Category Icons / Quick Links */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-12">
          <div className="flex flex-col items-center group cursor-pointer">
            <div className="w-14 h-14 rounded-2xl bg-gray-50 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-300 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm">
              <Smartphone size={28} />
            </div>
            <span className="mt-3 text-sm font-medium text-gray-600 dark:text-gray-400">Mobile Apps</span>
          </div>
          
          <div className="flex flex-col items-center group cursor-pointer">
            <div className="w-14 h-14 rounded-2xl bg-gray-50 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-300 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300 shadow-sm">
              <Layout size={28} />
            </div>
            <span className="mt-3 text-sm font-medium text-gray-600 dark:text-gray-400">Web Themes</span>
          </div>

          <div className="flex flex-col items-center group cursor-pointer">
            <div className="w-14 h-14 rounded-2xl bg-gray-50 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-300 group-hover:bg-pink-600 group-hover:text-white transition-all duration-300 shadow-sm">
              <Palette size={28} />
            </div>
            <span className="mt-3 text-sm font-medium text-gray-600 dark:text-gray-400">UI Kits</span>
          </div>

          <div className="flex flex-col items-center group cursor-pointer">
            <div className="w-14 h-14 rounded-2xl bg-gray-50 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-300 group-hover:bg-green-600 group-hover:text-white transition-all duration-300 shadow-sm">
              <Code size={28} />
            </div>
            <span className="mt-3 text-sm font-medium text-gray-600 dark:text-gray-400">Components</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;