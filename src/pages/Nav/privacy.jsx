import React from 'react';
import { ShieldCheck, Lock, Eye, FileText, ArrowLeft } from 'lucide-react';

const PrivacyPolicy = () => {
  const sections = [
    {
      icon: <Eye size={24} className="text-purple-600 dark:text-purple-400" />,
      title: "Data Collection",
      content: "Amra khub shimanito tottho collect kori jemon apnar browser type ebong amader site-e apnar activity. Eiti amader service aro bhalo korar jonno bebohar kora hoy."
    },
    {
      icon: <Lock size={24} className="text-indigo-600 dark:text-indigo-400" />,
      title: "Data Protection",
      content: "Apnader data amader kache 100% secure. Amra kono third-party platform-er kache apnader personal information bikri ba share kori na."
    },
    {
      icon: <FileText size={24} className="text-purple-600 dark:text-purple-400" />,
      title: "Cookies Policy",
      content: "Amader site-e user experience bhalo korar jonno amra 'Cookies' bebohar kori. Apni chaile apnar browser setting theke cookies disable korte paren."
    },
    {
      icon: <ShieldCheck size={24} className="text-indigo-600 dark:text-indigo-400" />,
      title: "Third-Party Links",
      content: "Amader site-e third-party tools er link thakte pare. Oi shob site-er privacy policy amader theke alada hote pare, tai tader terms dekhe neyar onurodh roilo."
    }
  ];

  return (
    <div className="min-h-screen rounded-2xl bg-slate-50 dark:bg-[#05070a] text-slate-700 dark:text-slate-300 transition-colors duration-300 py-16 px-6">
      <div className="max-w-4xl mx-auto">
        
        {/* Back Button & Header */}
        <div className="mb-12">
          <a href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-purple-600 dark:text-purple-400 hover:underline mb-6">
            <ArrowLeft size={16} /> Back to Home
          </a>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4">
            Privacy <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400">Policy</span>
          </h1>
          <p className="text-slate-500 dark:text-slate-500 font-medium">Last Updated: February 2026</p>
        </div>

        {/* Introduction Section */}
        <section className="mb-12 bg-white dark:bg-slate-900/50 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Introduction</h2>
          <p className="leading-relaxed">
            Welcome to **eSeba Digital**. Amra apnar privacy-ke shobcheye beshi gurutto dei. Amader platform-e premium apps, themes, ebong AI tools provide korar shomoy amra kivabe data handle kori, ta eikhane clear kora hoyeche.
          </p>
        </section>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {sections.map((item, index) => (
            <div key={index} className="p-8 rounded-3xl bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 hover:border-purple-500 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-purple-500/5">
              <div className="mb-4 p-3 bg-purple-50 dark:bg-purple-900/20 w-fit rounded-2xl">{item.icon}</div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{item.title}</h3>
              <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">{item.content}</p>
            </div>
          ))}
        </div>

        {/* Contact/Support Section */}
        <div className="bg-gradient-to-br from-purple-600 to-indigo-700 dark:from-purple-900/40 dark:to-indigo-900/40 p-10 rounded-[2.5rem] text-white overflow-hidden relative border border-purple-500/20">
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-4">Questions or Concerns?</h2>
            <p className="text-purple-50 dark:text-purple-200/80 mb-8 max-w-lg">
              Jodi apnar amader privacy policy niye kono proshno thake ba kono asset niye copyright issue thake, tobe sorasori amader mail korun.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="mailto:legal@eseba.vercel.app" 
                className="px-8 py-3 bg-white text-purple-700 font-bold rounded-2xl hover:bg-purple-50 transition-colors shadow-lg"
              >
                Email Support
              </a>
              <a 
                href="/contact" 
                className="px-8 py-3 bg-purple-500/20 backdrop-blur-md border border-white/30 text-white font-bold rounded-2xl hover:bg-white/10 transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
          {/* Decorative Circle */}
          <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        </div>

        {/* Footer Note */}
        <div className="mt-16 text-center text-slate-400 dark:text-slate-600 text-[12px] font-bold uppercase tracking-widest">
          © {new Date().getFullYear()} eSeba Digital Hub • Secure & Premium Assets
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;