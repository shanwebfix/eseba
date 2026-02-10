import React from 'react';

const DigitalAssetAbout = () => {
  const assets = [
    { title: 'Mobile & PC Apps', icon: '📱', desc: 'Premium software available for all platforms.' },
    { title: 'Themes & Plugins', icon: '🎨', desc: 'World-class WordPress & Web resources.' },
    { title: 'AI Tools', icon: '🤖', desc: 'Latest AI-powered solutions for productivity.' },
    { title: 'UI Components', icon: '💎', desc: 'Ready-to-use elements for developers.' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        
        {/* Main Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-black mb-6">
            Your Ultimate <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-500">Digital Resource Hub</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Amader uddeshyo holo premium digital assets-ke shobar kache shohojloppo kora. Developer theke designer—shobar proyojon metate amra niye eshechi free premium tools.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {assets.map((asset, index) => (
            <div key={index} className="p-6 bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-300 group">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{asset.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-indigo-600 dark:text-indigo-400">{asset.title}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">{asset.desc}</p>
            </div>
          ))}
        </div>

        {/* Content Section with Dark UI */}
        <div className="bg-gradient-to-br from-indigo-900 to-purple-900 rounded-3xl p-8 md:p-12 text-white overflow-hidden relative">
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6 italic">"Premium Resources, Zero Cost."</h2>
              <p className="text-indigo-100 leading-relaxed mb-6">
                Amra jani ekta project shuru korte koto dhoroner tools proyojon hoy. Tai amra eikhane ekotrito korechi top-rated Themes, Plugins, ebong AI tools ja apnar productivity 10x bariye dibe. Shob kichu eikhane safe ebong secure bhabe provide kora hoy.
              </p>
              <div className="flex gap-4 font-semibold">
                <div className="bg-white/10 px-4 py-2 rounded-lg border border-white/20">100% Secure</div>
                <div className="bg-white/10 px-4 py-2 rounded-lg border border-white/20">Daily Updates</div>
              </div>
            </div>
            
            <div className="md:w-1/2 grid grid-cols-2 gap-4">
               {/* Stats or Visual Elements */}
               <div className="h-32 bg-white/5 rounded-xl backdrop-blur-sm flex flex-col justify-center items-center border border-white/10">
                  <span className="text-3xl font-black">5K+</span>
                  <span className="text-xs uppercase tracking-widest text-indigo-300">Downloads</span>
               </div>
               <div className="h-32 bg-white/5 rounded-xl backdrop-blur-sm flex flex-col justify-center items-center border border-white/10">
                  <span className="text-3xl font-black">1.2K+</span>
                  <span className="text-xs uppercase tracking-widest text-indigo-300">Premium Apps</span>
               </div>
            </div>
          </div>
          {/* Background Decorative Blur */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-purple-500 rounded-full blur-[100px] opacity-30"></div>
        </div>

      </div>
    </div>
  );
};

export default DigitalAssetAbout;