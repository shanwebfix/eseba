import React, { useState } from 'react';
import { Download, Star, ArrowLeft, CheckCircle, Smartphone, ShieldCheck, Zap } from 'lucide-react';

const AppDetails = () => {
  const [downloadCount, setDownloadCount] = useState(1250);

  const appData = {
    name: "Shamshernagar E-Seba",
    tagline: "আপনার হাতের মুঠোয় শমশেরনগরের সকল ডিজিটাল সেবা",
    description: "শমশেরনগর ই-সেবা অ্যাপটি তৈরি করা হয়েছে স্থানীয় জনগণের দুর্ভোগ কমাতে। এখানে আপনি ডাক্তার, রক্তদাতা, ফায়ার সার্ভিস এবং বিদ্যুৎ অফিসের সকল তথ্য এক জায়গায় পাবেন।",
    rating: 4.9,
    size: "8.5 MB",
    version: "1.0.2",
    updated: "৯ ফেব্রুয়ারি, ২০২৬",
    screenshots: [
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=300",
      "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?w=300",
      "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?w=300"
    ],
    features: [
      "জরুরি রক্তদাতার তালিকা ও যোগাযোগ",
      "অভিজ্ঞ ডাক্তারদের সিরিয়াল ও চেম্বার তথ্য",
      "ফায়ার সার্ভিস ও পুলিশের কন্টাক্ট নম্বর",
      "পল্লী বিদ্যুৎ ও অনলাইন অভিযোগ সেবা"
    ]
  };

  const handleDownload = () => {
    setDownloadCount(prev => prev + 1);
    window.open("YOUR_DIRECT_DOWNLOAD_LINK", "_blank");
  };

  return (
    <div className="max-w-6xl mx-auto p-4 md:p-8 animate-fade-in">
      {/* Back Button */}
      <button className="flex items-center text-gray-600 dark:text-gray-400 mb-6 hover:text-blue-600 transition">
        <ArrowLeft size={20} className="mr-2" /> Back to Marketplace
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        
        {/* Left Side: App Icon & Gallery */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-xl flex justify-center border dark:border-gray-700">
            <div className="w-32 h-32 bg-blue-600 rounded-3xl flex items-center justify-center text-white text-5xl font-bold shadow-lg shadow-blue-500/30">
              S
            </div>
          </div>
          
          <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-hide">
            {appData.screenshots.map((src, i) => (
              <img key={i} src={src} className="h-48 rounded-xl border dark:border-gray-700 object-cover shadow-sm" alt="screenshot" />
            ))}
          </div>
        </div>

        {/* Right Side: Details & Action */}
        <div className="lg:col-span-2 space-y-8">
          <div>
            <h1 className="text-4xl font-black text-gray-900 dark:text-white mb-2">{appData.name}</h1>
            <p className="text-lg text-blue-600 dark:text-blue-400 font-medium">{appData.tagline}</p>
          </div>

          <div className="flex flex-wrap gap-6 py-4 border-y dark:border-gray-700">
            <div className="flex flex-col">
              <span className="text-xs text-gray-500 uppercase font-bold">Rating</span>
              <span className="text-lg font-bold flex items-center dark:text-white">
                {appData.rating} <Star size={16} className="ml-1 text-yellow-400 fill-yellow-400" />
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-gray-500 uppercase font-bold">Size</span>
              <span className="text-lg font-bold dark:text-white">{appData.size}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-gray-500 uppercase font-bold">Downloads</span>
              <span className="text-lg font-bold dark:text-white">{downloadCount}+</span>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold dark:text-white">About this App</h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              {appData.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {appData.features.map((feature, i) => (
              <div key={i} className="flex items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-xl">
                <CheckCircle size={18} className="text-green-500 mr-3" />
                <span className="text-sm dark:text-gray-200">{feature}</span>
              </div>
            ))}
          </div>

          <div className="pt-6">
            <button 
              onClick={handleDownload}
              className="w-full md:w-auto px-12 py-4 bg-blue-600 hover:bg-blue-700 text-white text-lg font-bold rounded-2xl shadow-xl shadow-blue-500/40 transition-all transform active:scale-95 flex items-center justify-center gap-3"
            >
              <Download size={24} /> Download APK Now
            </button>
            <p className="mt-3 text-xs text-gray-500 text-center md:text-left">
              Compatible with Android 7.0 and above. Latest version: {appData.version}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppDetails;