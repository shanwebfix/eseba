import React, { useState } from 'react';
import { Download, Star, Smartphone, ShieldCheck, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const initialAppsData = [
  { 
    id: "mb", 
    name: "মৌলভীবাজার ই-সেবা", 
    category: "Mobile App", 
    price: "Free", 
    rating: 4.9, 
    image: "/image/mb4.webp", 
    downloads: 1200, 
  },
  { 
    id: "sn", 
    name: "শমসেরনগর ই-সেবা", 
    category: "Mobile App", 
    price: "Free", 
    rating: 4.9, 
    image: "/image/sn.webp", 
    downloads: 1250, 
  },
  { 
    id: "taskly", 
    name: "Taskly - SaaS App", 
    category: "Mobile App", 
    price: "Free", 
    rating: 4.7, 
    image: "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?w=400&h=250&fit=crop", 
    downloads: 3100, 
  },
];

const AppList = () => {
  const [apps] = useState(initialAppsData);
  const navigate = useNavigate();

  const handleGoToDetails = (id) => {
    // App.jsx এর রাউটের সাথে মিল রেখে রিডাইরেক্ট
    navigate(`/Apps/mobile-details/${id}`);
  };

  const formatDownloads = (num) => {
    return num >= 1000 ? (num / 1000).toFixed(1) + 'k' : num;
  };

  return (
    <div className="container mx-auto pb-20 px-4">
      <div className="max-w-3xl mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 dark:bg-purple-900/30 text-[#7C3AED] dark:text-purple-400 text-sm font-bold mb-6">
          <Smartphone size={16} />
          <span>Mobile Applications</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
          আপনার প্রয়োজনীয় সকল <span className="text-[#7C3AED]">ডিজিটাল সেবা</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {apps.map((app) => (
          <div key={app.id} className="group bg-white dark:bg-[#0a0f1c] rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100 dark:border-purple-900/20">
            <div className="relative h-64 overflow-hidden">
              <img src={app.image} alt={app.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute top-6 right-6 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md px-4 py-1.5 rounded-2xl text-xs font-black text-[#7C3AED]">
                {app.price}
              </div>
            </div>

            <div className="p-8">
              <span className="text-[10px] font-bold text-[#7C3AED] uppercase tracking-[2px]">Android App</span>
              <h3 className="text-2xl font-black text-slate-900 dark:text-white mt-1 line-clamp-1">{app.name}</h3>

              <div className="flex items-center gap-4 text-sm mt-4 mb-8">
                <div className="flex items-center gap-1.5 bg-amber-50 px-3 py-1 rounded-xl">
                  <Star size={16} className="text-amber-400 fill-amber-400" />
                  <span className="font-bold text-amber-700">{app.rating}</span>
                </div>
                <div className="flex items-center gap-1.5 bg-slate-50 px-3 py-1 rounded-xl">
                  <Download size={16} className="text-purple-500" />
                  <span className="font-bold text-slate-700">{formatDownloads(app.downloads)}</span>
                </div>
              </div>

              <button 
                onClick={() => handleGoToDetails(app.id)}
                className="w-full bg-slate-900 dark:bg-purple-600 hover:bg-[#7C3AED] text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-3 transition-all active:scale-95 shadow-lg shadow-purple-500/10"
              >
                <span>Get App Details</span>
                <Smartphone size={20} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppList;