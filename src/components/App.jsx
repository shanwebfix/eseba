import React, { useState } from 'react';
import { Download, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom'; // useNavigate ইম্পোর্ট করা হয়েছে

const initialAppsData = [
  { 
    id: 1, 
    name: "Shamshernagar E-Seba", 
    category: "Mobile App", 
    price: "Free", 
    rating: 4.9, 
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=250&fit=crop", 
    downloads: 1200, 
    downloadUrl: "/Apps/sn" // ইন্টারনাল রুট (App.jsx এর সাথে মিল থাকতে হবে)
  },
  { id: 2, name: "Pro-Portfolio Theme", category: "Web Theme", price: "$12", rating: 4.5, image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop", downloads: 850, downloadUrl: "#" },
  { id: 3, name: "Modern Admin UI", category: "UI Kit", price: "$25", rating: 4.9, image: "https://images.unsplash.com/photo-1551288049-bbbda5366391?w=400&h=250&fit=crop", downloads: 2400, downloadUrl: "#" },
  { id: 4, name: "Taskly - SaaS App", category: "Mobile App", price: "Free", rating: 4.7, image: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?w=400&h=250&fit=crop", downloads: 3100, downloadUrl: "#" },
  { id: 5, name: "Landing Hero Pro", category: "Web Theme", price: "$10", rating: 4.6, image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=250&fit=crop", downloads: 900, downloadUrl: "#" },
  { id: 6, name: "Glassmorphism Pack", category: "Components", price: "Free", rating: 5.0, image: "https://images.unsplash.com/photo-1541462608141-ad511a7ee5f6?w=400&h=250&fit=crop", downloads: 5500, downloadUrl: "#" },
];

const AppList = () => {
  const [apps, setApps] = useState(initialAppsData);
  const [filter, setFilter] = useState("All");
  const navigate = useNavigate(); // নেভিগেশন হুক

  const handleDownload = (id, url) => {
    // ডাউনলোড কাউন্ট আপডেট
    setApps(prevApps => 
      prevApps.map(app => 
        app.id === id ? { ...app, downloads: app.downloads + 1 } : app
      )
    );

    // লিংক চেক: যদি রুট দিয়ে শুরু হয় তবে navigate করবে, নাহলে নতুন ট্যাব খুলবে
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
    <div className="container mx-auto pb-12">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white font-sans">Digital Assets List</h1>
          <p className="text-gray-600 dark:text-gray-400">Explore premium apps, themes, and UI kits</p>
        </div>

        <div className="flex flex-wrap gap-2">
          {["All", "Mobile App", "Web Theme", "UI Kit", "Components"].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                filter === cat 
                ? "bg-blue-600 text-white shadow-lg shadow-blue-500/30" 
                : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredApps.map((app) => (
          <div key={app.id} className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
            <div className="relative h-48 overflow-hidden">
              <img src={app.image} alt={app.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute top-3 right-3 bg-white/90 dark:bg-gray-900/90 px-3 py-1 rounded-full text-xs font-bold text-blue-600 dark:text-blue-400">
                {app.price}
              </div>
            </div>

            <div className="p-5">
              <span className="text-xs font-semibold text-blue-500 uppercase tracking-wider">{app.category}</span>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-1 mb-3">{app.name}</h3>

              <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-6">
                <div className="flex items-center gap-1">
                  <Star size={16} className="text-yellow-400 fill-yellow-400" />
                  <span>{app.rating}</span>
                </div>
                <div className="flex items-center gap-1 font-mono">
                  <Download size={16} />
                  <span>{formatDownloads(app.downloads)}</span>
                </div>
              </div>

              <button 
                onClick={() => handleDownload(app.id, app.downloadUrl)}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-bold transition-all flex items-center justify-center gap-2 active:scale-95 shadow-lg shadow-blue-500/20"
              >
                <Download size={20} /> View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppList;