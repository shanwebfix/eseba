import React, { useState } from 'react';
import { Download, Star, ArrowLeft, CheckCircle, ChevronLeft, ChevronRight, ShieldCheck, Zap, Info } from 'lucide-react';

const AppDetails = () => {
  const [downloadCount, setDownloadCount] = useState(1250);
  const [activeImg, setActiveImg] = useState(0);

  const appData = {
    name: "মৌলভীবাজার ই-সেবা",
    tagline: "Your Digital Gateway to Moulvibazar",
    description: "মৌলভীবাজার ই-সেবা অ্যাপটি তৈরি করা হয়েছে স্থানীয় জনগণের দুর্ভোগ কমাতে। এখানে আপনি ডাক্তার, রক্তদাতা, ফায়ার সার্ভিস এবং বিদ্যুৎ অফিসের সকল তথ্য এক জায়গায় পাবেন।",
    rating: 4.9,
    reviews: "4.2k",
    size: "6.1 MB",
    version: "1.0.2",
    updated: "৯ ফেব্রুয়ারি, ২০২৬",
    screenshots: [
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600",
      "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?w=600",
      "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?w=600",
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600"
    ],
    features: [
      "জরুরি রক্তদাতার তালিকা ও যোগাযোগ",
      "অভিজ্ঞ ডাক্তারদের সিরিয়াল ও চেম্বার তথ্য",
      "ফায়ার সার্ভিস ও পুলিশের কন্টাক্ট নম্বর",
      "পল্লী বিদ্যুৎ ও অনলাইন অভিযোগ সেবা"
    ]
  };

  const nextImg = () => setActiveImg((prev) => (prev === appData.screenshots.length - 1 ? 0 : prev + 1));
  const prevImg = () => setActiveImg((prev) => (prev === 0 ? appData.screenshots.length - 1 : prev - 1));

  const handleDownload = () => {
    setDownloadCount(prev => prev + 1);
    const link = document.createElement('a');
    link.href = '/app/Moulvibazar.apk';
    link.download = 'Moulvibazar.apk';
    link.click();
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#030712] transition-colors duration-500 rounded-3xl">
      <div className="max-w-6xl mx-auto p-6 md:p-12">
        
        {/* Breadcrumb Navigation */}
        <button className="group flex items-center text-slate-500 dark:text-slate-400 mb-10 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all font-medium">
          <ArrowLeft size={18} className="mr-2 group-hover:-translate-x-1 transition-transform" /> 
          Back to Apps
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Section 1: Visuals (Slider) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="relative group bg-white dark:bg-slate-900 rounded-[2.5rem] p-4 shadow-2xl shadow-indigo-500/10 border border-slate-100 dark:border-white/5">
              <div className="relative aspect-[9/16] overflow-hidden rounded-[2rem] bg-slate-100 dark:bg-slate-800">
                <img 
                  src={appData.screenshots[activeImg]} 
                  className="w-full h-full object-cover animate-in fade-in zoom-in duration-500" 
                  alt="App Screenshot" 
                />
                
                {/* Navigation Arrows */}
                <button onClick={prevImg} className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white/40 transition">
                  <ChevronLeft size={24} />
                </button>
                <button onClick={nextImg} className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white/40 transition">
                  <ChevronRight size={24} />
                </button>

                {/* Dots */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                  {appData.screenshots.map((_, i) => (
                    <button 
                      key={i} 
                      onClick={() => setActiveImg(i)}
                      className={`h-1.5 rounded-full transition-all ${activeImg === i ? 'w-8 bg-white' : 'w-2 bg-white/50'}`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-3 gap-4">
               {[
                 { label: 'Rating', val: appData.rating, icon: <Star size={14} className="fill-amber-400 text-amber-400" /> },
                 { label: 'Size', val: appData.size, icon: <Zap size={14} className="text-indigo-500" /> },
                 { label: 'Downloads', val: `${downloadCount}+`, icon: <Download size={14} className="text-emerald-500" /> }
               ].map((stat, i) => (
                 <div key={i} className="bg-white dark:bg-slate-900/50 p-4 rounded-2xl border border-slate-100 dark:border-white/5 text-center">
                    <p className="text-[10px] uppercase tracking-wider text-slate-400 font-bold mb-1">{stat.label}</p>
                    <div className="flex items-center justify-center gap-1 font-bold dark:text-white">
                      {stat.val} {stat.icon}
                    </div>
                 </div>
               ))}
            </div>
          </div>

          {/* Section 2: Content & Action */}
          <div className="lg:col-span-7 space-y-10">
            <header className="flex items-start gap-6">
              <div className="w-24 h-24 shrink-0 bg-gradient-to-br from-indigo-600 to-purple-700 rounded-3xl flex items-center justify-center text-white text-4xl font-bold shadow-2xl shadow-indigo-500/40">
                S
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight">{appData.name}</h1>
                <p className="mt-2 text-indigo-600 dark:text-indigo-400 font-semibold text-lg">{appData.tagline}</p>
                <div className="mt-3 flex items-center gap-2 text-sm text-slate-500 font-medium">
                  <ShieldCheck size={16} className="text-emerald-500" /> Verified Security Scan Passed
                </div>
              </div>
            </header>

            <div className="space-y-6">
              <div className="flex items-center gap-2 text-xl font-bold dark:text-white">
                <Info size={20} className="text-indigo-500" />
                About App
              </div>
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl">
                {appData.description}
              </p>
            </div>

            {/* Features Glass Card */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {appData.features.map((feature, i) => (
                <div key={i} className="group flex items-center p-4 bg-white dark:bg-slate-900/40 border border-slate-100 dark:border-white/5 rounded-2xl hover:border-indigo-500/50 transition-all">
                  <div className="mr-4 p-2 bg-indigo-50 dark:bg-indigo-500/10 rounded-lg text-indigo-600 dark:text-indigo-400 group-hover:scale-110 transition-transform">
                    <CheckCircle size={18} />
                  </div>
                  <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">{feature}</span>
                </div>
              ))}
            </div>

            {/* Call to Action Section */}
            <div className="p-8 bg-gradient-to-r from-indigo-600 to-purple-700 rounded-[2.5rem] shadow-2xl shadow-indigo-500/30 text-white relative overflow-hidden">
               {/* Decorative Circles */}
               <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
               
               <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
                  <div>
                    <h4 className="text-2xl font-bold">Ready to get started?</h4>
                    <p className="text-indigo-100 opacity-80">Version {appData.version} • Updated {appData.updated}</p>
                  </div>
                  
                  <button 
                    onClick={handleDownload}
                    className="group bg-white text-indigo-700 px-8 py-4 rounded-2xl font-black text-lg flex items-center gap-3 hover:bg-slate-50 transition-all active:scale-95 shadow-lg"
                  >
                    <Download size={22} className="group-hover:animate-bounce" />
                    Download APK
                  </button>
               </div>
            </div>
            
            <p className="text-center md:text-left text-slate-400 text-xs font-medium px-2">
              Requires Android 7.0+ | Scanned by eSeba Protect | {appData.size}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppDetails;