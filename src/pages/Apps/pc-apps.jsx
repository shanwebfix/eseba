import React, { useState } from 'react';
import { Download, Star, Monitor, ShieldCheck, HardDrive, Cpu } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const initialPcAppsData = [
  { id: 1, name: "Adobe Photoshop CS6 (Crack)", category: "Graphics Design", version: "Legacy", rating: 4.8, image: "https://images.unsplash.com/photo-1516383274235-5f42d6c6426d?w=400&h=250&fit=crop", downloads: 5200 },
  { id: 2, name: "Adobe Illustrator CC 18", category: "Graphics Design", version: "v18.0", rating: 4.7, image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=400&h=250&fit=crop", downloads: 3100 },
  { id: 3, name: "MS Office All-in-One", category: "Productivity", version: "2016/2019", rating: 4.9, image: "https://images.unsplash.com/photo-1633119401776-df824709829a?w=400&h=250&fit=crop", downloads: 8500 },
  { id: 4, name: "Photoshop 7.0 (Lite)", category: "Classic Photo Editor", version: "Old Version", rating: 4.6, image: "https://images.unsplash.com/photo-1541462608141-ad60397d4b02?w=400&h=250&fit=crop", downloads: 12000 },
  { id: 8, name: "Microsoft Excel - Pro", category: "Spreadsheet", version: "Office Pack", rating: 4.8, image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=400&h=250&fit=crop", downloads: 6700 }
];

const PcAppList = () => {
  const [apps] = useState(initialPcAppsData);
  const navigate = useNavigate();

  const handleGoToDetails = (id) => {
    // App.jsx-এ দেওয়া পাথের সাথে হুবহু মিল থাকতে হবে
    navigate(`/Apps/pc-details/${id}`); 
  };

  const formatDownloads = (num) => {
    return num >= 1000 ? (num / 1000).toFixed(1) + 'k' : num;
  };

  return (
    <div className="container mx-auto pb-20 px-4 mt-10">
      <div className="max-w-3xl mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-bold mb-6">
          <Monitor size={16} />
          <span>Software Archive</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight mb-6">
          প্রয়োজনীয় সব <span className="text-blue-600">পিসি সফটওয়্যার</span>
        </h2>
        <div className="flex flex-wrap gap-6">
          <div className="flex items-center gap-2 text-sm font-semibold text-slate-500"><ShieldCheck size={18} className="text-emerald-500" /> Pre-Activated</div>
          <div className="flex items-center gap-2 text-sm font-semibold text-slate-500"><HardDrive size={18} className="text-blue-500" /> High Compression</div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {apps.map((app) => (
          <div key={app.id} className="group bg-white dark:bg-[#0a0f1c] rounded-[2.5rem] overflow-hidden shadow-sm border border-slate-100 dark:border-blue-900/20 hover:shadow-2xl transition-all duration-500">
            <div className="relative h-56 overflow-hidden">
              <img src={app.image} alt={app.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute top-6 right-6 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md px-4 py-1.5 rounded-2xl text-xs font-black text-blue-600 shadow-lg">
                {app.version}
              </div>
            </div>

            <div className="p-8">
              <span className="text-[10px] font-bold text-blue-600 uppercase tracking-[2px]">{app.category}</span>
              <h3 className="text-xl font-black text-slate-900 dark:text-white mt-1 group-hover:text-blue-600 line-clamp-1">{app.name}</h3>

              <div className="flex items-center gap-4 text-sm mt-4 mb-8">
                <div className="flex items-center gap-1.5 bg-amber-50 dark:bg-amber-900/20 px-3 py-1 rounded-xl">
                  <Star size={16} className="text-amber-400 fill-amber-400" />
                  <span className="font-bold text-amber-700 dark:text-amber-400">{app.rating}</span>
                </div>
                <div className="flex items-center gap-1.5 bg-slate-50 dark:bg-slate-800/50 px-3 py-1 rounded-xl">
                  <Download size={16} className="text-blue-500" />
                  <span className="font-bold text-slate-700 dark:text-slate-300">{formatDownloads(app.downloads)}</span>
                </div>
              </div>

              <button 
                onClick={() => handleGoToDetails(app.id)}
                className="w-full bg-slate-900 dark:bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-2xl font-bold transition-all flex items-center justify-center gap-3 active:scale-95 shadow-xl shadow-blue-500/10"
              >
                <span>Get Full Version</span>
                <Cpu size={20} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PcAppList;