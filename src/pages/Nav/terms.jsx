import React from 'react';
import { Scale, Download, AlertTriangle, ShieldAlert, CheckCircle2 } from 'lucide-react';

const TermsPage = () => {
  const terms = [
    {
      icon: <Download size={24} className="text-purple-600 dark:text-purple-400" />,
      title: "Usage Policy",
      content: "Amader provide kora protiti asset (Apps, Themes, AI Tools) sudhu matro personal ebong educational purpose-e bebohar kora jabe. Commercial use-er jonno original developer-er kach theke license neyar onurodh roilo."
    },
    {
      icon: <AlertTriangle size={24} className="text-indigo-600 dark:text-indigo-400" />,
      title: "No Warranty",
      content: "Amra as-is basis-e resources provide kori. Konobhabe software-er error ba device-er khotir jonno eSeba Digital dayi thakbe na. Download korar age obosshoy nijer risk-e scan kore niben."
    },
    {
      icon: <ShieldAlert size={24} className="text-purple-600 dark:text-purple-400" />,
      title: "DMCA & Copyright",
      content: "Amra onnothero intellectual property-ke shomman kori. Jodi apnar mone hoy kono file apnar copyright choron korche, tobe valid proof-shoh amader mail korun, amra 24-48 ghontar modhye ta remove kore debo."
    },
    {
      icon: <Scale size={24} className="text-indigo-600 dark:text-indigo-400" />,
      title: "User Conduct",
      content: "Amader platform-e kono dhoroner spamming, scraping ba malicious activity kora shompurno nishiddho. Policy violation korle temporary ba permanent block kora hote pare."
    }
  ];

  return (
    <div className="min-h-screen rounded-2xl bg-slate-50 dark:bg-[#05070a] text-slate-700 dark:text-slate-300 transition-colors duration-300 py-16 px-6">
      <div className="max-w-4xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 text-xs font-bold uppercase tracking-widest mb-6">
            Legal Agreement
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-6">
            Terms of <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400">Service</span>
          </h1>
          <p className="max-w-2xl mx-auto text-slate-600 dark:text-slate-400 leading-relaxed">
            By accessing eSeba Digital, you agree to follow our rules and regulations. Please read these terms carefully before downloading any digital assets.
          </p>
        </div>

        {/* Content Section */}
        <div className="space-y-6 mb-16">
          {terms.map((term, index) => (
            <div key={index} className="group flex flex-col md:flex-row gap-6 p-8 rounded-3xl bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 hover:border-indigo-500/50 transition-all duration-300 shadow-sm">
              <div className="shrink-0">
                <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-slate-50 dark:bg-slate-800 group-hover:scale-110 transition-transform duration-300">
                  {term.icon}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{term.title}</h3>
                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {term.content}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Acceptance Box */}
        <div className="relative overflow-hidden bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 md:p-12 rounded-[2.5rem] shadow-xl text-center">
          <div className="relative z-10">
            <div className="flex justify-center mb-6">
               <CheckCircle2 size={48} className="text-green-500" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4">You're All Set!</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-lg mx-auto text-sm">
              Amader service bebohar korar mane holo apni uporer shobgulo terms মেনে niyechen. Amra shomoy shomoy ei policy update korte pari, tai niyomito eikhane chokh rakhun.
            </p>
            <a 
              href="/" 
              className="inline-block px-10 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-2xl transition-all shadow-lg shadow-indigo-500/20"
            >
              I Understand & Agree
            </a>
          </div>
          
          {/* Decorative Background Blur */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>

        {/* Footer Link */}
        <div className="mt-12 text-center">
          <p className="text-sm text-slate-500">
            Have questions about our terms? <a href="mailto:support@eseba.vercel.app" className="text-indigo-600 dark:text-indigo-400 font-bold hover:underline">Contact Support</a>
          </p>
        </div>

      </div>
    </div>
  );
};

export default TermsPage;