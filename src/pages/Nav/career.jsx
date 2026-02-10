import React from 'react';
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  ArrowUpRight, 
  Code, 
  Search, 
  Heart,
  Zap
} from 'lucide-react';

const CareerPage = () => {
  const jobs = [
    {
      title: "Content Curator (Premium Assets)",
      type: "Remote",
      time: "Part-time",
      location: "Global",
      description: "Find and verify the latest premium apps, themes, and AI tools for our community."
    },
    {
      title: "Frontend Developer (React/Tailwind)",
      type: "Remote",
      time: "Full-time",
      location: "Bangladesh / Remote",
      description: "Work on our core platform to build a seamless downloading experience for users."
    },
    {
      title: "Community Moderator",
      type: "Remote",
      time: "Flexible",
      location: "Global",
      description: "Manage our community groups, handle user requests, and ensure site safety."
    }
  ];

  return (
    <div className="min-h-screen rounded-2xl bg-slate-50 dark:bg-[#05070a] text-slate-700 dark:text-slate-300 transition-colors duration-300 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Hero Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 text-xs font-bold uppercase tracking-widest mb-6">
            We are hiring
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-6">
            Build the future of <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400">Digital Access</span>
          </h1>
          <p className="max-w-2xl mx-auto text-slate-600 dark:text-slate-400 text-lg">
            Join eSeba Digital and help us make premium resources accessible to everyone. We are a remote-first team of creators and tech enthusiasts.
          </p>
        </div>

        {/* Culture / Perks Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {[
            { icon: <Heart className="text-red-500" />, title: "Work From Anywhere", desc: "We don't care where you are, as long as you have an internet connection." },
            { icon: <Zap className="text-yellow-500" />, title: "Fast Growth", desc: "Grow your skills by working on a platform used by thousands of users." },
            { icon: <Code className="text-indigo-500" />, title: "Latest Tech", desc: "Work with React, Next.js, Tailwind, and modern AI infrastructures." }
          ].map((perk, i) => (
            <div key={i} className="p-8 bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 rounded-3xl text-center">
              <div className="flex justify-center mb-4">{perk.icon}</div>
              <h3 className="font-bold text-slate-900 dark:text-white mb-2">{perk.title}</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{perk.desc}</p>
            </div>
          ))}
        </div>

        {/* Job Listings */}
        <div className="space-y-6">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Open Positions</h2>
            <div className="text-sm text-indigo-600 dark:text-indigo-400 font-bold">{jobs.length} roles available</div>
          </div>

          {jobs.map((job, index) => (
            <div 
              key={index} 
              className="group p-6 md:p-8 bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 rounded-[2rem] hover:border-purple-500/50 hover:shadow-xl hover:shadow-purple-500/5 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                    {job.title}
                  </h3>
                  <div className="flex flex-wrap gap-4 text-sm text-slate-500 dark:text-slate-500">
                    <span className="flex items-center gap-1"><Briefcase size={14}/> {job.type}</span>
                    <span className="flex items-center gap-1"><Clock size={14}/> {job.time}</span>
                    <span className="flex items-center gap-1"><MapPin size={14}/> {job.location}</span>
                  </div>
                  <p className="pt-2 text-sm text-slate-600 dark:text-slate-400 max-w-xl">
                    {job.description}
                  </p>
                </div>
                <button className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold rounded-2xl hover:bg-purple-600 dark:hover:bg-purple-400 dark:hover:text-white hover:text-white transition-all">
                  Apply Now <ArrowUpRight size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-24 p-10 md:p-16 rounded-[3rem] bg-indigo-600 dark:bg-indigo-900/20 border border-indigo-500/20 text-center relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl font-bold text-white mb-4">Don't see a perfect fit?</h2>
            <p className="text-indigo-100 dark:text-indigo-300 mb-8 max-w-md mx-auto">
              We are always looking for talented people. Send us your CV at <span className="font-bold text-white">hr@eseba.vercel.app</span> and we’ll keep you in mind.
            </p>
            <a href="mailto:hr@eseba.vercel.app" className="px-10 py-4 bg-white text-indigo-600 font-bold rounded-2xl shadow-lg hover:bg-indigo-50 transition-colors">
              Send your CV
            </a>
          </div>
          {/* Decorative Blur */}
          <div className="absolute -top-10 -right-10 w-48 h-48 bg-purple-500/30 rounded-full blur-3xl"></div>
        </div>

      </div>
    </div>
  );
};

export default CareerPage;