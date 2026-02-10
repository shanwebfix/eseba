import React, { useState } from 'react';
import { Plus, Minus, HelpCircle, MessageCircle } from 'lucide-react';

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Are these apps and tools really free?",
      answer: "Yes, every digital asset on our platform—including premium apps, themes, and AI tools—is completely free to download. We aim to provide high-quality resources for educational and testing purposes."
    },
    {
      question: "Is it safe to download from eSeba Digital?",
      answer: "We manually verify every file before uploading. However, since these are third-party tools, we highly recommend using a reliable antivirus and proceeding at your own risk."
    },
    {
      question: "How do I update an app downloaded from here?",
      answer: "We regularly update our library. Whenever a new version is released, we post it on our site. Keep an eye on our recent uploads to stay up-to-date with the latest versions."
    },
    {
      question: "Can I request a specific app or theme?",
      answer: "Absolutely! If you need a specific premium tool that isn't available yet, feel free to reach out via our 'Contact Us' page. We will do our best to source it for you."
    },
    {
      question: "Do you provide technical support for these tools?",
      answer: "We primarily act as a resource hub and do not provide official technical support for individual software. However, if you face installation issues, you can contact our community or support team."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen rounded-2xl bg-slate-50 dark:bg-[#05070a] text-slate-700 dark:text-slate-300 transition-colors duration-300 py-20 px-6">
      <div className="max-w-3xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-indigo-100 dark:bg-indigo-900/30 rounded-2xl shadow-inner">
              <HelpCircle className="text-indigo-600 dark:text-indigo-400" size={32} />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4">
            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400">Questions</span>
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-lg">
            Find answers to common questions about eSeba Digital.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`border transition-all duration-300 rounded-[2rem] overflow-hidden ${
                openIndex === index 
                ? 'bg-white dark:bg-slate-900 border-indigo-500/50 shadow-xl shadow-indigo-500/5' 
                : 'bg-white/50 dark:bg-slate-900/20 border-slate-200 dark:border-slate-800'
              }`}
            >
              <button 
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 md:p-8 text-left outline-none"
              >
                <span className={`text-lg font-bold transition-colors ${openIndex === index ? 'text-indigo-600 dark:text-indigo-400' : 'text-slate-800 dark:text-slate-200'}`}>
                  {faq.question}
                </span>
                <div className={`shrink-0 ml-4 transition-all duration-300 ${openIndex === index ? 'rotate-180 text-indigo-500' : 'text-slate-400'}`}>
                  {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                </div>
              </button>
              
              <div 
                className={`transition-all duration-500 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
                }`}
              >
                <div className="px-6 md:px-8 pb-8 text-slate-600 dark:text-slate-400 leading-relaxed border-t border-slate-100 dark:border-slate-800 pt-6">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Support CTA Section */}
        <div className="mt-20 p-10 rounded-[2.5rem] bg-gradient-to-br from-purple-600 to-indigo-700 text-white text-center relative overflow-hidden shadow-2xl shadow-indigo-500/20">
          <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-3">Still have questions?</h3>
            <p className="text-purple-100 mb-8 max-w-md mx-auto">If you couldn't find your answer here, feel free to contact our support team directly.</p>
            <a 
              href="/Nav/contact" 
              className="inline-flex items-center gap-2 px-10 py-4 bg-white text-indigo-700 font-bold rounded-2xl hover:bg-purple-50 transition-all hover:scale-105 active:scale-95 shadow-lg"
            >
              <MessageCircle size={18} /> Contact Support
            </a>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-16 -mt-16 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-indigo-400/20 rounded-full -ml-10 -mb-10 blur-2xl"></div>
        </div>

        {/* Footer Note */}
        <div className="mt-16 text-center text-slate-400 dark:text-slate-600 text-[11px] font-bold uppercase tracking-widest">
          © {new Date().getFullYear()} eSeba Digital Hub • Providing Excellence
        </div>
      </div>
    </div>
  );
};

export default FAQPage;