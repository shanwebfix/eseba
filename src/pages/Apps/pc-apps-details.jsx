import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Download, Star, ArrowLeft, ShieldCheck, Cpu, HardDrive, CheckCircle2, Monitor } from 'lucide-react';

const appsData = {
  "1": {
    name: "Adobe Photoshop CS6",
    category: "Graphics Design",
    version: "Legacy Crack",
    rating: 4.8,
    downloads: "5.2k",
    size: "1.2 GB",
    os: "Windows 7/10/11",
    ram: "4GB Minimum",
    image: "https://images.unsplash.com/photo-1516383274235-5f42d6c6426d?w=800",
    description: "Adobe Photoshop CS6 একটি ক্লাসিক ফটো এডিটিং টুল যা আজও প্রফেশনালদের পছন্দের তালিকায় শীর্ষে। এটি কম কনফিগারেশনের পিসিতেও দারুণ কাজ করে।",
    features: ["Pre-Activated Full Version", "Offline Installer", "No Cloud Subscription Required", "Low System Impact"],
    downloadPath: "/apps/photoshop-cs6.zip" // এখানে আপনার লিঙ্ক দিন
  },
  "2": {
    name: "Adobe Illustrator CC 18",
    category: "Graphics Design",
    version: "v18.0",
    rating: 4.7,
    downloads: "3.1k",
    size: "2.5 GB",
    os: "Windows 10/11",
    ram: "8GB Recommended",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800",
    description: "Adobe Illustrator CC 2018 ভেক্টর ডিজাইনের জন্য একটি শক্তিশালী টুল। এটি দিয়ে আপনি লোগো, আইকন এবং ইলাস্ট্রেশন তৈরি করতে পারেন সহজেই।",
    features: ["Stable Version", "Crack Included", "Advanced Vector Tools", "Professional Presets"],
    downloadPath: "/apps/illustrator-cc18.zip"
  },
  "3": {
    name: "MS Office All-in-One",
    category: "Productivity",
    version: "2016/2019",
    rating: 4.9,
    downloads: "8.5k",
    size: "4.0 GB",
    os: "Windows 10/11",
    ram: "4GB Minimum",
    image: "https://images.unsplash.com/photo-1633119401776-df824709829a?w=800",
    description: "MS Office প্যাকের মধ্যে পাচ্ছেন Word, Excel, PowerPoint এবং আরও অনেক কিছু। এটি অফিসিয়াল কাজের জন্য একটি কমপ্লিট সল্যুশন।",
    features: ["One-Click Installation", "Lifetime Activation", "Offline Use Support", "Multiple Language Support"],
    downloadPath: "/apps/ms-office.zip"
  },
  "4": {
    name: "Photoshop 7.0 (Lite)",
    category: "Classic Editor",
    version: "Classic",
    rating: 4.9,
    downloads: "12k",
    size: "160 MB",
    os: "All Windows Versions",
    ram: "512MB Minimum",
    image: "https://images.unsplash.com/photo-1541462608141-ad60397d4b02?w=800",
    description: "পুরানো পিসি বা দ্রুত ছোটখাটো ফটো এডিটিং এর জন্য Photoshop 7.0 এর কোনো বিকল্প নেই। এটি অত্যন্ত লাইটওয়েট এবং সুপার ফাস্ট।",
    features: ["Super Fast Loading", "Supports Old Plugins", "Runs on Pentium PC", "Zero Lag"],
    downloadPath: "/apps/photoshop-7.zip"
  },
  "8": {
    name: "Microsoft Excel - Pro",
    category: "Spreadsheet",
    version: "Office Pack",
    rating: 4.8,
    downloads: "6.7k",
    size: "800 MB",
    os: "Windows 7/10/11",
    ram: "2GB Minimum",
    image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=800",
    description: "ডেটা এনালাইসিস এবং বড় ক্যালকুলেশনের জন্য এক্সেল একটি অপরিহার্য সফটওয়্যার। আমাদের কাছে পাচ্ছেন এটি প্রি-অ্যাক্টিভেটেড ভার্সনে।",
    features: ["Macros Supported", "All Formulas Unlocked", "Professional Templates", "Dark Mode Support"],
    downloadPath: "/apps/excel-pro.zip"
  }
};

const AppDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const app = appsData[id] || appsData["1"];

  // ডাউনলোড হ্যান্ডলার ফাংশন
  const handleDownload = () => {
    if (app.downloadPath) {
      // যদি এটি ইন্টারনাল ফাইল হয় (public ফোল্ডারে থাকে)
      const link = document.createElement('a');
      link.href = app.downloadPath;
      link.setAttribute('download', `${app.name}.zip`); // ফাইল নেম হিসেবে সেভ হবে
      document.body.appendChild(link);
      link.click();
      link.remove();
      
      // অথবা যদি এক্সটারনাল লিঙ্ক হয় তবে নিচের কোডটি ব্যবহার করুন:
      // window.open(app.downloadPath, "_blank");
    } else {
      alert("Download link not available!");
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#050810] pb-20">
      <nav className="container mx-auto p-6">
        <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-blue-600 font-bold transition-all">
          <ArrowLeft size={20} /> Back to Software List
        </button>
      </nav>

      <div className="container mx-auto px-4 mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <div className="sticky top-8">
              <div className="rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white dark:border-slate-800">
                <img src={app.image} alt={app.name} className="w-full h-auto object-cover" />
              </div>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-100 dark:border-slate-800">
                  <Cpu className="text-blue-500 mb-2" size={24} />
                  <p className="text-xs text-slate-500 font-bold uppercase">RAM</p>
                  <p className="text-lg font-black dark:text-white">{app.ram}</p>
                </div>
                <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-100 dark:border-slate-800">
                  <HardDrive className="text-emerald-500 mb-2" size={24} />
                  <p className="text-xs text-slate-500 font-bold uppercase">Size</p>
                  <p className="text-lg font-black dark:text-white">{app.size}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-bold mb-6">
              <Monitor size={16} /> {app.category}
            </div>
            <h1 className="text-5xl font-black text-slate-900 dark:text-white mb-4 leading-tight">{app.name}</h1>
            
            <div className="flex items-center gap-6 mb-8">
              <div className="flex items-center gap-1.5 bg-amber-50 dark:bg-amber-900/20 px-4 py-2 rounded-2xl">
                <Star size={20} className="text-amber-400 fill-amber-400" />
                <span className="font-black text-amber-700 dark:text-amber-400">{app.rating} Rating</span>
              </div>
              <div className="text-slate-600 dark:text-slate-400 font-bold">{app.downloads} Downloads</div>
            </div>

            <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed mb-10">{app.description}</p>

            <div className="space-y-4 mb-10">
              <h3 className="text-2xl font-black dark:text-white mb-4">Key Features:</h3>
              {app.features.map((f, i) => (
                <div key={i} className="flex items-center gap-3 text-slate-700 dark:text-slate-300 font-semibold">
                  <CheckCircle2 size={20} className="text-blue-500" /> {f}
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              {/* মডিফাইড ডাউনলোড বাটন */}
              <button 
                onClick={handleDownload}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-xl font-black py-6 rounded-[2rem] flex items-center justify-center gap-3 active:scale-95 transition-all shadow-lg shadow-blue-500/25"
              >
                <Download size={24} /> Direct Download
              </button>
              
              <button className="px-10 bg-slate-900 dark:bg-slate-800 text-white font-bold py-6 rounded-[2rem] flex items-center justify-center gap-3 border border-slate-700">
                <ShieldCheck size={24} className="text-emerald-400" /> Virus Free
              </button>
            </div>
            
            <p className="mt-6 text-sm text-slate-500 text-center lg:text-left">
                * By clicking download, you agree to our terms of service.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppDetails;