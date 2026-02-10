import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, ShieldAlert } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Thank you! Your message has been sent.");
  };

  return (
    <div className="min-h-screen rounded-2xl bg-slate-50 dark:bg-[#05070a] text-slate-700 dark:text-slate-300 transition-colors duration-300 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-6">
            Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400">Touch</span>
          </h1>
          <p className="max-w-2xl mx-auto text-slate-600 dark:text-slate-400 text-lg">
            Kono asset niye shomoshya ba copyright issue thakle amader janate paren. Amra 24 ghontar modhye reply dewar chesta kori.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Contact Info Cards */}
          <div className="space-y-6">
            <div className="p-8 rounded-[2rem] bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-2xl flex items-center justify-center mb-6">
                <Mail className="text-purple-600 dark:text-purple-400" size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Email Us</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">Support-er jonno mail korun:</p>
              <a href="mailto:hello@eseba.vercel.app" className="text-indigo-600 dark:text-indigo-400 font-bold hover:underline">hello@eseba.vercel.app</a>
            </div>

            <div className="p-8 rounded-[2rem] bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-2xl flex items-center justify-center mb-6">
                <ShieldAlert className="text-indigo-600 dark:text-indigo-400" size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Report Content</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">DMCA ba Copyright issue?</p>
              <a href="mailto:legal@eseba.vercel.app" className="text-purple-600 dark:text-purple-400 font-bold hover:underline">legal@eseba.vercel.app</a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 p-8 md:p-12 rounded-[2.5rem] shadow-xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-bold mb-2 text-slate-800 dark:text-slate-200">Your Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full px-5 py-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-purple-500 outline-none transition-all dark:text-white"
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2 text-slate-800 dark:text-slate-200">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="example@mail.com"
                    className="w-full px-5 py-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-purple-500 outline-none transition-all dark:text-white"
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label className="block text-sm font-bold mb-2 text-slate-800 dark:text-slate-200">Subject</label>
                <input 
                  type="text" 
                  placeholder="How can we help?"
                  className="w-full px-5 py-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-purple-500 outline-none transition-all dark:text-white"
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  required
                />
              </div>

              <div className="mb-8">
                <label className="block text-sm font-bold mb-2 text-slate-800 dark:text-slate-200">Message</label>
                <textarea 
                  rows="5"
                  placeholder="Write your message here..."
                  className="w-full px-5 py-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-purple-500 outline-none transition-all dark:text-white resize-none"
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  required
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full md:w-auto px-12 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-bold rounded-2xl transition-all shadow-lg shadow-indigo-500/25 flex items-center justify-center gap-2 group"
              >
                Send Message <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>

        {/* FAQ Shortcut */}
        <div className="mt-20 text-center">
          <p className="text-slate-500 dark:text-slate-500">
            Khub druto somadhan chachhen? <a href="/help" className="text-purple-600 dark:text-purple-400 font-bold hover:underline">Help Center</a> ba <a href="/terms" className="text-indigo-600 dark:text-indigo-400 font-bold hover:underline">FAQ</a> dekhun.
          </p>
        </div>

      </div>
    </div>
  );
};

export default ContactPage;