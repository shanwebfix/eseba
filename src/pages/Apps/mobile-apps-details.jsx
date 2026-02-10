import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Download, Star, ArrowLeft, CheckCircle, ChevronLeft, ChevronRight, ShieldCheck, Zap, Info } from 'lucide-react';

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
    logo: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400",
    downloadUrl: "/app/Moulvibazar.apk",
    screenshots: ["https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800", "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?w=800"],
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

  const nextImg = () => setActiveImg((prev) => (prev === app.screenshots.length - 1 ? 0 : prev + 1));
  const prevImg = () => setActiveImg((prev) => (prev === 0 ? app.screenshots.length - 1 : prev - 1));

  const handleDownload = () => {
    alert(`Downloading ${app.name}...`);
    window.location.href = app.downloadUrl;
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#030712] pb-20 rounded-3xl">
      <div className="max-w-6xl mx-auto p-6 md:p-12">
        <button onClick={() => navigate(-1)} className="flex items-center text-slate-500 mb-10 hover:text-indigo-600 font-medium">
          <ArrowLeft size={18} className="mr-2" /> Back to Apps List
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Slider Section */}
          <div className="lg:col-span-5 space-y-8">
            <div className="relative group bg-white dark:bg-slate-900 rounded-[2.5rem] p-4 shadow-xl border border-slate-100 dark:border-white/5">
              <div className="relative aspect-[9/16] overflow-hidden rounded-[2rem] bg-slate-100">
                <img src={app.screenshots[activeImg]} className="w-full h-full object-cover transition-opacity duration-500" alt="screenshot" />
                {app.screenshots.length > 1 && (
                  <>
                    <button onClick={prevImg} className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/20 text-white hover:bg-black/40"><ChevronLeft size={24} /></button>
                    <button onClick={nextImg} className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/20 text-white hover:bg-black/40"><ChevronRight size={24} /></button>
                  </>
                )}
              </div>
            </div>
            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white dark:bg-slate-900/50 p-4 rounded-2xl text-center border border-slate-100 dark:border-white/5">
                <p className="text-[10px] uppercase font-bold text-slate-400">Rating</p>
                <div className="flex items-center justify-center gap-1 font-bold dark:text-white">{app.rating} <Star size={14} className="fill-amber-400 text-amber-400" /></div>
              </div>
              <div className="bg-white dark:bg-slate-900/50 p-4 rounded-2xl text-center border border-slate-100 dark:border-white/5">
                <p className="text-[10px] uppercase font-bold text-slate-400">Size</p>
                <div className="font-bold dark:text-white">{app.size}</div>
              </div>
              <div className="bg-white dark:bg-slate-900/50 p-4 rounded-2xl text-center border border-slate-100 dark:border-white/5">
                <p className="text-[10px] uppercase font-bold text-slate-400">Version</p>
                <div className="font-bold dark:text-white">{app.version}</div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="lg:col-span-7 space-y-10">
            <header className="flex items-start gap-6">
              <img src={app.logo} className="w-24 h-24 rounded-3xl shadow-lg object-cover" alt="logo" />
              <div>
                <h1 className="text-4xl font-black text-slate-900 dark:text-white">{app.name}</h1>
                <p className="text-indigo-600 font-semibold">{app.tagline}</p>
                <div className="mt-3 flex items-center gap-2 text-sm text-slate-500"><ShieldCheck size={16} className="text-emerald-500" /> Verified Security Scan</div>
              </div>
            </header>

            <div className="space-y-4">
              <div className="flex items-center gap-2 font-bold text-xl dark:text-white"><Info size={20} className="text-indigo-500" /> About App</div>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">{app.description}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {app.features.map((feature, i) => (
                <div key={i} className="flex items-center p-4 bg-white dark:bg-slate-900/40 border border-slate-100 dark:border-white/5 rounded-2xl">
                  <CheckCircle size={18} className="mr-3 text-indigo-500" />
                  <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">{feature}</span>
                </div>
              ))}
            </div>

            <button onClick={handleDownload} className="w-full bg-gradient-to-r from-indigo-600 to-purple-700 text-white py-6 rounded-[2rem] font-black text-xl flex items-center justify-center gap-4 hover:shadow-2xl transition-all active:scale-95 shadow-indigo-500/30">
              <Download size={24} /> Download APK Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileAppDetails;