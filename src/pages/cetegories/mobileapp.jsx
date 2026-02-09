import React, { useState } from 'react';
import { Download, Star, Smartphone, ShieldCheck, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const initialAppsData = [
  { 
    id: 1, 
    name: "মৌলভীবাজার ই-সেবা", 
    category: "Mobile App", 
    price: "Free", 
    rating: 4.9, 
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=250&fit=crop", 
    downloads: 1200, 
    downloadUrl: "/Apps/mb" 
  },
  { 
    id: 3, 
    name: "শমসেরনগর ই-সেবা", 
    category: "Mobile App", 
    price: "Free", 
    rating: 4.9, 
    image: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?w=400&h=250&fit=crop", 
    downloads: 1250, 
    downloadUrl: "/Apps/sn" 
  },
  { 
    id: 6, 
    name: "Taskly - SaaS App", 
    category: "Mobile App", 
    price: "Free", 
    rating: 4.7, 
    image: "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?w=400&h=250&fit=crop", 
    downloads: 3100, 
    downloadUrl: "#" 
  },
];

const AppList = () => {
  const [apps, setApps] = useState(initialAppsData);
  const navigate = useNavigate();

  const handleDownload = (id, url) => {
    setApps(prevApps => 
      prevApps.map(app => 
        app.id === id ? { ...app, downloads: app.downloads + 1 } : app
      )
    );

    if (url.startsWith('/')) {
      navigate(url);
    } else if (url !== "#") {
      window.open(url, "_blank");
    }
  };

  const formatDownloads = (num) => {
    return num >= 1000 ? (num / 1000).toFixed(1) + 'k' : num;
  };

  return (
    <div className="container mx-auto pb-20 px-4">
      {/* Header Section with Mobile App Focus */}
      <div className="max-w-3xl mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 dark:bg-purple-900/30 text-[#7C3AED] dark:text-purple-400 text-sm font-bold mb-6">
          <Smartphone size={16} />
          <span>Mobile Applications</span>
        </div>
        
        <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
          আপনার প্রয়োজনীয় সকল <span className="text-[#7C3AED]">ডিজিটাল সেবা</span> এখন এক অ্যাপে।
        </h2>
        
        <p className="text-slate-600 dark:text-slate-400 mt-6 text-lg leading-relaxed">
          আমরা নিয়ে এসেছি আধুনিক ও সহজতর মোবাইল অ্যাপ্লিকেশন সমাধান। শমসেরনগর ও মৌলভীবাজারের স্থানীয় সেবা থেকে শুরু করে দৈনন্দিন প্রডাক্টিভিটি অ্যাপ—সবই পাবেন এখানে। 
        </p>

        <div className="flex flex-wrap gap-6 mt-8">
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-500">
                <ShieldCheck size={18} className="text-emerald-500" /> Secure Download
            </div>
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-500">
                <Zap size={18} className="text-amber-500" /> Fast Performance
            </div>
        </div>
      </div>

      {/* Grid Layout - Strictly Mobile Apps */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {apps.map((app) => (
          <div key={app.id} className="group bg-white dark:bg-[#0a0f1c] rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-[0_30px_60px_rgba(124,58,237,0.12)] transition-all duration-500 border border-slate-100 dark:border-purple-900/20">
            
            {/* Image Section */}
            <div className="relative h-64 overflow-hidden">
              <img src={app.image} alt={app.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute top-6 right-6 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md px-4 py-1.5 rounded-2xl text-xs font-black text-[#7C3AED] shadow-lg">
                {app.price}
              </div>
            </div>

            {/* Content Section */}
            <div className="p-8">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className="text-[10px] font-bold text-[#7C3AED] uppercase tracking-[2px]">Android App</span>
                  <h3 className="text-2xl font-black text-slate-900 dark:text-white mt-1 group-hover:text-[#7C3AED] transition-colors line-clamp-1">{app.name}</h3>
                </div>
              </div>

              <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400 mb-8">
                <div className="flex items-center gap-1.5 bg-amber-50 dark:bg-amber-900/20 px-3 py-1 rounded-xl">
                  <Star size={16} className="text-amber-400 fill-amber-400" />
                  <span className="font-bold text-amber-700 dark:text-amber-400">{app.rating}</span>
                </div>
                <div className="flex items-center gap-1.5 bg-slate-50 dark:bg-slate-800/50 px-3 py-1 rounded-xl">
                  <Download size={16} className="text-purple-500" />
                  <span className="font-bold text-slate-700 dark:text-slate-300">{formatDownloads(app.downloads)}</span>
                </div>
              </div>

              {/* Action Button */}
              <button 
                onClick={() => handleDownload(app.id, app.downloadUrl)}
                className="w-full bg-slate-900 dark:bg-purple-600 hover:bg-[#7C3AED] dark:hover:bg-purple-700 text-white py-4 rounded-2xl font-bold transition-all flex items-center justify-center gap-3 group/btn shadow-xl shadow-purple-500/10 active:scale-95"
              >
                <span className="text-base">Get App Details</span>
                <Smartphone size={20} className="group-hover/btn:rotate-12 transition-transform" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppList;