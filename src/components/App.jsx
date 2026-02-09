import React, { useState } from 'react';
import { Download, Star } from 'lucide-react';
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
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=250&fit=crop", 
    downloads: 1200, 
    downloadUrl: "/Apps/sn" 
  },
  { id: 4, name: "Pro-Portfolio Theme", category: "Web Theme", price: "Free", rating: 4.5, image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop", downloads: 850, downloadUrl: "#" },
  { id: 5, name: "Modern Admin UI", category: "UI Kit", price: "Free", rating: 4.9, image: "https://images.unsplash.com/photo-1551288049-bbbda5366391?w=400&h=250&fit=crop", downloads: 2400, downloadUrl: "#" },
  { id: 6, name: "Taskly - SaaS App", category: "Mobile App", price: "Free", rating: 4.7, image: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?w=400&h=250&fit=crop", downloads: 3100, downloadUrl: "#" },
  { id: 7, name: "Landing Hero Pro", category: "Web Theme", price: "Free", rating: 4.6, image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=250&fit=crop", downloads: 900, downloadUrl: "#" },
  { id: 8, name: "Glassmorphism Pack", category: "Components", price: "Free", rating: 5.0, image: "https://images.unsplash.com/photo-1541462608141-ad511a7ee5f6?w=400&h=250&fit=crop", downloads: 5500, downloadUrl: "#" },
];

const AppList = () => {
  const [apps, setApps] = useState(initialAppsData);
  const [filter, setFilter] = useState("All");
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

  const filteredApps = filter === "All" 
    ? apps 
    : apps.filter(app => app.category === filter);

  return (
    <div className="container mx-auto pb-20 px-4">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Digital <span className="text-[#7C3AED]">Assets</span> Library
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mt-2 text-lg">Explore premium apps, themes, and UI kits for free</p>
        </div>

        {/* Filter Buttons with Purple Theme */}
        <div className="flex flex-wrap gap-2">
          {["All", "Mobile App", "Web Theme", "UI Kit", "Components"].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 ${
                filter === cat 
                ? "bg-[#7C3AED] text-white shadow-lg shadow-purple-500/30 translate-y-[-2px]" 
                : "bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:border-purple-300 dark:hover:border-purple-500/30"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredApps.map((app) => (
          <div key={app.id} className="group bg-white dark:bg-[#0a0f1c] rounded-[2rem] overflow-hidden shadow-sm hover:shadow-[0_20px_50px_rgba(124,58,237,0.1)] transition-all duration-500 border border-slate-100 dark:border-purple-900/20">
            
            {/* Image Section */}
            <div className="relative h-56 overflow-hidden">
              <img src={app.image} alt={app.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute top-4 right-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold text-[#7C3AED] shadow-sm">
                {app.price}
              </div>
            </div>

            {/* Content Section */}
            <div className="p-7">
              <span className="text-[10px] font-bold text-[#7C3AED] uppercase tracking-[2px]">{app.category}</span>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-2 mb-4 group-hover:text-[#7C3AED] transition-colors">{app.name}</h3>

              <div className="flex items-center gap-5 text-sm text-slate-500 dark:text-slate-400 mb-8">
                <div className="flex items-center gap-1.5 bg-slate-50 dark:bg-slate-800/50 px-3 py-1 rounded-lg">
                  <Star size={16} className="text-yellow-400 fill-yellow-400" />
                  <span className="font-bold text-slate-700 dark:text-slate-200">{app.rating}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Download size={16} className="text-purple-500" />
                  <span className="font-medium">{formatDownloads(app.downloads)} Downloads</span>
                </div>
              </div>

              {/* Action Button */}
              <button 
                onClick={() => handleDownload(app.id, app.downloadUrl)}
                className="w-full bg-slate-900 dark:bg-purple-600 hover:bg-[#7C3AED] dark:hover:bg-purple-700 text-white py-4 rounded-2xl font-bold transition-all flex items-center justify-center gap-2 group/btn shadow-xl shadow-purple-500/10 active:scale-95"
              >
                <span>View Details</span>
                <Download size={19} className="group-hover/btn:translate-y-0.5 transition-transform" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppList;