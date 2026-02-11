import React, { useState } from 'react';
import { Download, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const initialAppsData = [
  { 
    id: "mb", // আইডি স্ট্রিং করে দিলাম যাতে ডিটেইলস পেজের সাথে মিলে যায়
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
    downloads: 1200, 
  },
  { 
    id: "1", // পিসি অ্যাপ আইডি
    name: "Adobe Photoshop CS6", 
    category: "PC Software", 
    price: "Free", 
    rating: 4.8, 
    image: "https://images.unsplash.com/photo-1516383274235-5f42d6c6426d?w=400&h=250&fit=crop", 
    downloads: 5200 
  },
  { id: "taskly", name: "Taskly - SaaS App", category: "Mobile App", price: "Free", rating: 4.7, image: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?w=400&h=250&fit=crop", downloads: 3100 },
];

const AppList = () => {
  const [apps, setApps] = useState(initialAppsData);
  const [filter, setFilter] = useState("All");
  const navigate = useNavigate();

  const handleNavigate = (app) => {
    // ১. মোবাইল অ্যাপের জন্য রাউটিং
    if (app.category === "Mobile App") {
      navigate(`/Apps/mobile-details/${app.id}`);
    } 
    // ২. পিসি সফটওয়্যারের জন্য রাউটিং (যদি ক্যাটাগরি PC Software হয়)
    else if (app.category === "PC Software") {
      navigate(`/Apps/pc-details/${app.id}`);
    }
    // ৩. অন্যান্য (যেমন থিম বা ইউআই কিট) যদি ডিটেইলস না থাকে তবে ডিফল্ট কোথাও
    else {
      alert("Details for this category coming soon!");
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
          <p className="text-slate-600 dark:text-slate-400 mt-2 text-lg">Premium apps & software collections</p>
        </div>

        <div className="flex flex-wrap gap-2">
          {["All", "Mobile App", "PC Software", "Web Theme"].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 ${
                filter === cat 
                ? "bg-[#7C3AED] text-white shadow-lg shadow-purple-500/30" 
                : "bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredApps.map((app) => (
          <div key={app.id} className="group bg-white dark:bg-[#0a0f1c] rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 dark:border-purple-900/20">
            <div className="relative h-56 overflow-hidden">
              <img src={app.image} alt={app.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            </div>

            <div className="p-7">
              <span className="text-[10px] font-bold text-[#7C3AED] uppercase tracking-[2px]">{app.category}</span>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-2 mb-4 line-clamp-1">{app.name}</h3>

              <div className="flex items-center gap-5 text-sm mb-8">
                <div className="flex items-center gap-1.5 bg-slate-50 dark:bg-slate-800 px-3 py-1 rounded-lg">
                  <Star size={16} className="text-yellow-400 fill-yellow-400" />
                  <span className="font-bold dark:text-white">{app.rating}</span>
                </div>
                <div className="flex items-center gap-1.5 text-slate-500">
                  <Download size={16} className="text-purple-500" />
                  <span>{formatDownloads(app.downloads)}</span>
                </div>
              </div>

              <button 
                onClick={() => handleNavigate(app)}
                className="w-full bg-slate-900 dark:bg-purple-600 hover:bg-[#7C3AED] text-white py-4 rounded-2xl font-bold transition-all flex items-center justify-center gap-2 active:scale-95"
              >
                <span>View Full Details</span>
                <Download size={19} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppList;