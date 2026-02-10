import React from 'react';
import { 
  Search, 
  Download, 
  LifeBuoy, 
  Smartphone, 
  Key, 
  FileWarning, 
  ExternalLink,
  ArrowRight
} from 'lucide-react';

const HelpPage = () => {
  const categories = [
    {
      title: "Getting Started",
      icon: <Download className="text-purple-500" />,
      links: ["How to download?", "Extraction guide", "Installation steps", "System requirements"]
    },
    {
      title: "Mobile Support",
      icon: <Smartphone className="text-indigo-500" />,
      links: ["Installing APKs", "iOS sideloading", "App permissions", "Update notifications"]
    },
    {
      title: "License & Keys",
      icon: <Key className="text-purple-500" />,
      links: ["How keys work", "Trial reset guides", "Activation errors", "Offline use"]
    },
    {
      title: "Troubleshooting",
      icon: <FileWarning className="text-indigo-500" />,
      links: ["Corrupt file fix", "Antivirus blocking", "Password issues", "Broken links"]
    }
  ];

  return (
    <div className="min-h-screen rounded-2xl bg-slate-50 dark:bg-[#05070a] text-slate-700 dark:text-slate-300 transition-colors duration-300">
      
      {/* Search Hero Section */}
      <div className=" bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 pt-20 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-6">
            How can we <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">help you?</span>
          </h1>
          
          <div className="relative max-w-2xl mx-auto mt-8">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
            <input 
              type="text" 
              placeholder="Search for apps, installation guides, or fixes..."
              className="w-full pl-14 pr-6 py-5 bg-slate-100 dark:bg-slate-800 border-none rounded-3xl focus:ring-2 focus:ring-purple-500 outline-none transition-all dark:text-white shadow-inner"
            />
          </div>
          
          <div className="mt-6 flex flex-wrap justify-center gap-3 text-sm">
            <span className="text-slate-500">Popular:</span>
            {['Extracting .zip', 'DMCA', 'APK Install', 'Update Fix'].map((tag) => (
              <button key={tag} className="hover:text-purple-600 dark:hover:text-purple-400 font-medium underline underline-offset-4 transition-colors">
                {tag}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-20 px-6 ">
        {/* Resource Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((cat, index) => (
            <div key={index} className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800">
                  {cat.icon}
                </div>
                <h3 className="font-bold text-xl text-slate-900 dark:text-white">{cat.title}</h3>
              </div>
              <ul className="space-y-4">
                {cat.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="flex items-center justify-between group text-sm hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                      {link}
                      <ArrowRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Support Banner */}
        <div className="mt-32 relative overflow-hidden bg-gradient-to-br from-purple-900 to-indigo-950 rounded-[3rem] p-10 md:p-16 text-center text-white">
          <div className="relative z-10">
            <LifeBuoy className="mx-auto mb-6 text-purple-400" size={48} />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Still stuck? No worries!</h2>
            <p className="text-indigo-200 mb-10 max-w-xl mx-auto">
              Our community and support staff are here to help. Reach out to us directly or join our developer community for real-time assistance.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/contact" className="px-10 py-4 bg-white text-indigo-900 font-bold rounded-2xl hover:scale-105 transition-transform flex items-center gap-2">
                Open a Ticket
              </a>
              <a href="#" className="px-10 py-4 bg-white/10 border border-white/20 backdrop-blur-md font-bold rounded-2xl hover:bg-white/20 transition-all flex items-center gap-2">
                Join Community <ExternalLink size={16} />
              </a>
            </div>
          </div>
          
          {/* Decorative Circles */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-purple-500/20 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-indigo-500/20 rounded-full blur-[100px]"></div>
        </div>
      </div>
    </div>
  );
};

export default HelpPage;