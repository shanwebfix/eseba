import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Download, Star, ArrowLeft, CheckCircle, ChevronLeft, ChevronRight, ShieldCheck, Info, XCircle, AlertCircle } from 'lucide-react';

const mobileAppsData = {
  "sn": {
    name: "শমসেরনগর ই-সেবা",
    tagline: "Your Digital Gateway to Shamshernagar",
    description: "শমসেরনগর ই-সেবা অ্যাপটি তৈরি করা হয়েছে স্থানীয় জনগণের দুর্ভোগ কমাতে। এখানে আপনি ডাক্তার, রক্তদাতা, ফায়ার সার্ভিস এবং বিদ্যুৎ অফিসের সকল তথ্য এক জায়গায় পাবেন।",
    rating: 4.9,
    size: "6.1 MB",
    version: "1.0.2",
    updated: "৯ ফেব্রুয়ারি, ২০২৬",
    logo: "/image/sn-logo.webp",
    downloadUrl: "/app/Shamshernagar.apk",
    screenshots: ["/image/sn.webp", "/image/sn2.webp", "/image/sn3.webp"],
    features: ["জরুরি রক্তদাতার তালিকা", "অভিজ্ঞ ডাক্তারদের সিরিয়াল", "ফায়ার সার্ভিস নম্বর", "বিদ্যুৎ অভিযোগ সেবা"]
  },
  "mb": {
    name: "মৌলভীবাজার ই-সেবা",
    tagline: "District Services in Your Pocket",
    description: "মৌলভীবাজার জেলার সকল জরুরি সেবা এবং ই-সার্ভিস এখন একটি অ্যাপেই। পাসপোর্ট হেল্পডেস্ক থেকে শুরু করে পর্যটন কেন্দ্রের সকল তথ্য এখানে আপডেট পাবেন।",
    rating: 4.8,
    size: "7.2 MB",
    version: "2.1.0",
    updated: "১০ ফেব্রুয়ারি, ২০২৬",
    logo: "/image/mb4.webp",
    downloadUrl: "/app/Moulvibazar.apk",
    screenshots: ["/image/mb4.webp", "/image/mb.webp", "/image/mb2.webp", "/image/mb3.webp", "/image/mb5.webp"],
    features: ["হাসপাতালের তথ্য", "ই-পাসপোর্ট সহায়তা", "পর্যটন কেন্দ্র তথ্য", "সরকারি হেল্পলাইন"]
  },
  "taskly": {
    name: "Taskly - SaaS App",
    tagline: "Organize Your Projects Effortlessly",
    description: "Taskly helps you manage your team and projects in one place. Perfect for startups and small businesses looking for efficiency.",
    rating: 4.7,
    size: "12.4 MB",
    version: "3.0.1",
    updated: "৮ ফেব্রুয়ারি, ২০২৬",
    logo: "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?w=400",
    downloadUrl: "#",
    screenshots: ["https://images.unsplash.com/photo-1523206489230-c012c64b2b48?w=800"],
    features: ["Team Collaboration", "Real-time Tracking", "Cloud Sync", "Performance Reports"]
  }
};

const MobileAppDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const app = mobileAppsData[id] || mobileAppsData["sn"];

  const [activeImg, setActiveImg] = useState(0);
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const nextImg = () => setActiveImg((prev) => (prev === app.screenshots.length - 1 ? 0 : prev + 1));
  const prevImg = () => setActiveImg((prev) => (prev === 0 ? app.screenshots.length - 1 : prev - 1));

  const startDownload = () => {
    setShowConfirmModal(false);
    window.location.href = app.downloadUrl;
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#030712] pb-20 rounded-3xl relative">
      
      {/* --- Custom Confirm/Cancel Modal --- */}
      {showConfirmModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm transition-all">
          <div className="bg-white dark:bg-slate-900 w-full max-w-sm rounded-[2.5rem] p-8 shadow-2xl border border-indigo-100 dark:border-white/10 text-center animate-in zoom-in-95 duration-200">
            <div className="w-20 h-20 bg-amber-100 dark:bg-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <AlertCircle className="text-amber-600 dark:text-amber-400" size={36} />
            </div>
            
            <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-2">আপনি কি নিশ্চিত?</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
               আপনি <span className="text-indigo-600 font-bold">{app.name}</span> অ্যাপটি ডাউনলোড করতে চাচ্ছেন।
            </p>
            
            <div className="flex flex-col gap-3">
              <button 
                onClick={startDownload}
                className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl font-bold flex items-center justify-center gap-2 transition-all active:scale-95 shadow-lg shadow-indigo-500/20"
              >
                <Download size={18} /> ডাউনলোড শুরু করুন
              </button>
              
              <button 
                onClick={() => setShowConfirmModal(false)}
                className="w-full py-4 bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-300 rounded-2xl font-bold hover:bg-red-50 dark:hover:bg-red-500/10 hover:text-red-500 transition-all"
              >
                বাতিল করুন
              </button>
            </div>
          </div>
        </div>
      )}

      {/* --- Main UI Content --- */}
      <div className="max-w-6xl mx-auto p-6 md:p-12">
        <button onClick={() => navigate(-1)} className="flex items-center text-slate-500 mb-10 hover:text-indigo-600 font-medium transition-colors">
          <ArrowLeft size={18} className="mr-2" /> Back to Apps List
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Slider Section */}
          <div className="lg:col-span-5 space-y-8">
            <div className="relative group bg-white dark:bg-slate-900 rounded-[2.5rem] p-4 shadow-xl border border-slate-100 dark:border-white/5">
              <div className="relative aspect-[9/16] overflow-hidden rounded-[2rem] bg-slate-100 dark:bg-slate-800">
                <img src={app.screenshots[activeImg]} className="w-full h-full object-cover transition-opacity duration-500" alt="screenshot" />
                {app.screenshots.length > 1 && (
                  <>
                    <button onClick={prevImg} className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/30 text-white hover:bg-black/50 backdrop-blur-md"><ChevronLeft size={24} /></button>
                    <button onClick={nextImg} className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/30 text-white hover:bg-black/50 backdrop-blur-md"><ChevronRight size={24} /></button>
                  </>
                )}
              </div>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white dark:bg-slate-900/50 p-4 rounded-2xl text-center border border-slate-100 dark:border-white/5">
                <p className="text-[10px] uppercase font-bold text-slate-400 mb-1">Rating</p>
                <div className="flex items-center justify-center gap-1 font-bold dark:text-white text-lg">{app.rating} <Star size={14} className="fill-amber-400 text-amber-400" /></div>
              </div>
              <div className="bg-white dark:bg-slate-900/50 p-4 rounded-2xl text-center border border-slate-100 dark:border-white/5">
                <p className="text-[10px] uppercase font-bold text-slate-400 mb-1">Size</p>
                <div className="font-bold dark:text-white text-lg">{app.size}</div>
              </div>
              <div className="bg-white dark:bg-slate-900/50 p-4 rounded-2xl text-center border border-slate-100 dark:border-white/5">
                <p className="text-[10px] uppercase font-bold text-slate-400 mb-1">Version</p>
                <div className="font-bold dark:text-white text-lg">{app.version}</div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="lg:col-span-7 space-y-10">
            <header className="flex items-start gap-6">
              <img src={app.logo} className="w-24 h-24 rounded-3xl shadow-lg object-cover ring-4 ring-white dark:ring-slate-800" alt="logo" />
              <div>
                <h1 className="text-4xl font-black text-slate-900 dark:text-white leading-tight">{app.name}</h1>
                <p className="text-indigo-600 font-bold text-lg">{app.tagline}</p>
                <div className="mt-3 flex items-center gap-2 text-sm text-slate-500 font-medium font-sans">
                  <ShieldCheck size={16} className="text-emerald-500" /> Verified Security Scan
                </div>
              </div>
            </header>

            <div className="space-y-4">
              <div className="flex items-center gap-2 font-bold text-xl dark:text-white">
                <Info size={22} className="text-indigo-500" /> About App
              </div>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
                {app.description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {app.features.map((feature, i) => (
                <div key={i} className="flex items-center p-4 bg-white dark:bg-slate-900/40 border border-slate-100 dark:border-white/5 rounded-2xl hover:border-indigo-200 dark:hover:border-indigo-500/30 transition-all group">
                  <CheckCircle size={18} className="mr-3 text-indigo-500 group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-bold text-slate-700 dark:text-slate-200">{feature}</span>
                </div>
              ))}
            </div>

            <button 
              onClick={() => setShowConfirmModal(true)} 
              className="w-full bg-gradient-to-r from-indigo-600 via-indigo-700 to-purple-800 text-white py-6 rounded-[2rem] font-black text-xl flex items-center justify-center gap-4 hover:shadow-[0_20px_50px_rgba(79,70,229,0.3)] transition-all active:scale-[0.98] group"
            >
              <Download size={24} className="group-hover:translate-y-1 transition-transform" /> Download APK Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileAppDetails;