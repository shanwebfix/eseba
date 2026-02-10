import React from 'react';
import { 
  Smartphone, 
  Monitor, 
  Layout, 
  Cpu, 
  Code2, 
  Zap, 
  ShieldCheck, 
  RefreshCw 
} from 'lucide-react';

const ServicesPage = () => {
  const mainServices = [
    {
      title: "Mobile Apps",
      desc: "Get access to premium Android and iOS applications for free. From productivity tools to high-end editors.",
      icon: <Smartphone className="text-purple-600" />,
      color: "from-purple-500/20 to-transparent"
    },
    {
      title: "PC Software",
      desc: "Download full-version software for Windows and macOS. We cover creative suites, development tools, and more.",
      icon: <Monitor className="text-indigo-600" />,
      color: "from-indigo-500/20 to-transparent"
    },
    {
      title: "Premium Themes",
      desc: "A vast collection of WordPress themes, Shopify templates, and HTML5 landing pages for your business.",
      icon: <Layout className="text-purple-600" />,
      color: "from-purple-500/20 to-transparent"
    },
    {
      title: "AI Tools",
      desc: "Explore the latest AI-powered software and automation tools to enhance your daily productivity.",
      icon: <Cpu className="text-indigo-600" />,
      color: "from-indigo-500/20 to-transparent"
    },
    {
      title: "UI Components",
      desc: "Ready-to-use React, Tailwind, and Figma components for developers and UI/UX designers.",
      icon: <Code2 className="text-purple-600" />,
      color: "from-purple-500/20 to-transparent"
    },
    {
      title: "Plugins & Extensions",
      desc: "Boost your workflow with premium WordPress plugins, Chrome extensions, and IDE add-ons.",
      icon: <Zap className="text-indigo-600" />,
      color: "from-indigo-500/20 to-transparent"
    }
  ];

  return (
    <div className="min-h-screen rounded-2xl bg-slate-50 dark:bg-[#05070a] text-slate-700 dark:text-slate-300 transition-colors duration-300 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-6">
            Our Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400">Offerings</span>
          </h1>
          <p className="max-w-2xl mx-auto text-slate-500 dark:text-slate-400 text-lg">
            We bridge the gap between premium digital assets and creators by providing high-quality resources without any cost.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {mainServices.map((service, index) => (
            <div 
              key={index} 
              className="group relative p-8 rounded-[2.5rem] bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 hover:border-purple-500/50 transition-all duration-500 overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-purple-500/10"
            >
              {/* Decorative Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              <div className="relative z-10">
                <div className="w-14 h-14 bg-slate-50 dark:bg-slate-800 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 shadow-inner">
                  {React.cloneElement(service.icon, { size: 28 })}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-sm">
                  {service.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Features / Why Us Section */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[3rem] p-8 md:p-16 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
                Why Creators Trust <br/>eSeba Digital Assets?
              </h2>
              <div className="space-y-6">
                {[
                  { icon: <ShieldCheck className="text-green-500" />, title: "Secure & Clean Files", text: "Every asset is scanned for malware and verified manually." },
                  { icon: <RefreshCw className="text-blue-500" />, title: "Daily Regular Updates", text: "We keep our library updated with the latest software versions." },
                  { icon: <Zap className="text-orange-500" />, title: "Direct Fast Downloads", text: "No annoying redirects. Get your files with just one click." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="shrink-0 mt-1">{item.icon}</div>
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white">{item.title}</h4>
                      <p className="text-sm text-slate-500 dark:text-slate-400">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-purple-600 to-indigo-600 rounded-[3rem] rotate-3 flex items-center justify-center p-1">
                 <div className="w-full h-full bg-[#05070a] rounded-[2.8rem] flex flex-col items-center justify-center text-center p-8">
                    <h3 className="text-5xl font-black text-white mb-2">100%</h3>
                    <p className="text-purple-400 font-bold uppercase tracking-widest text-sm">Free Forever</p>
                    <div className="mt-8 px-6 py-2 bg-white/10 border border-white/20 rounded-full text-white text-xs">
                       Community Driven Platform
                    </div>
                 </div>
              </div>
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-purple-600/30 blur-[80px] -z-10"></div>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-24 text-center">
          <p className="text-slate-400 dark:text-slate-600 text-sm font-medium">
             Looking for something specific? <a href="/contact" className="text-indigo-600 dark:text-indigo-400 font-bold hover:underline">Request an Asset</a>
          </p>
        </div>

      </div>
    </div>
  );
};

export default ServicesPage;