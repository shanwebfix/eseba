import React, { useState } from 'react';
import { Bot, ExternalLink, Search, Sparkles, Brain, Code, Image as ImageIcon, MessageSquare } from 'lucide-react';

const aiTools = [
  {
    id: 1,
    name: "ChatGPT",
    desc: "OpenAI-এর শক্তিশালী এআই যা আপনার যেকোনো প্রশ্নের উত্তর দিতে এবং লেখালেখিতে সাহায্য করে।",
    category: "Chatbot",
    icon: <MessageSquare className="text-emerald-500" />,
    url: "https://chat.openai.com",
    trending: true
  },
  {
    id: 2,
    name: "Claude AI",
    desc: "অত্যন্ত বুদ্ধিমান এবং ন্যাচারাল রাইটিং এ দক্ষ এআই, যা বড় ফাইল এনালাইসিস করতে পারে।",
    category: "Writing",
    icon: <Brain className="text-orange-500" />,
    url: "https://claude.ai",
    trending: true
  },
  {
    id: 3,
    name: "Midjourney",
    desc: "টেক্সট থেকে অসাধারণ এবং প্রফেশনাল ইমেজ জেনারেট করার জন্য সেরা এআই টুল।",
    category: "Image Gen",
    icon: <ImageIcon className="text-purple-500" />,
    url: "https://midjourney.com",
    trending: false
  },
  {
    id: 4,
    name: "GitHub Copilot",
    desc: "প্রোগ্রামারদের জন্য বেস্ট এআই যা কোড লিখতে এবং বাগ ফিক্স করতে সাহায্য করে।",
    category: "Coding",
    icon: <Code className="text-slate-900 dark:text-white" />,
    url: "https://github.com/features/copilot",
    trending: false
  },
  {
    id: 5,
    name: "Gemini",
    desc: "Google-এর নিজস্ব এআই যা গুগল সার্চ এবং অন্যান্য টুলসের সাথে ইন্টিগ্রেটেড।",
    category: "Multimodal",
    icon: <Sparkles className="text-blue-500" />,
    url: "https://gemini.google.com",
    trending: true
  },
  {
    id: 6,
    name: "Perplexity AI",
    desc: "সার্চ ইঞ্জিনের বিকল্প হিসেবে রিয়েল-টাইম সোর্স সহ যেকোনো তথ্য খুঁজে দেয়।",
    category: "Search",
    icon: <Search className="text-cyan-500" />,
    url: "https://perplexity.ai",
    trending: false
  }
];

const AIToolsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredTools = aiTools.filter(tool =>
    tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    tool.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen  transition-colors duration-500 pb-20">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-lg bg-white dark:bg-[#0a0f1c] border-b border-slate-100 dark:border-purple-900/10 px-6 py-20 mb-12">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 dark:bg-purple-900/20 text-[#7C3AED] dark:text-purple-400 text-sm font-bold mb-6">
            <Bot size={18} />
            <span>Smart AI Directory</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">
            সেরা সব <span className="text-[#7C3AED]">AI Tools</span> এক জায়গায়
          </h1>
          <p className="text-slate-600 dark:text-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            আপনার কাজকে আরও সহজ এবং দ্রুত করতে আমরা বাছাই করেছি বর্তমান বিশ্বের সেরা কিছু কৃত্রিম বুদ্ধিমত্তা সম্পন্ন টুলস।
          </p>

          {/* Search Bar */}
          <div className="mt-10 max-w-xl mx-auto relative">
            <input
              type="text"
              placeholder="Search AI tools (e.g. Chatbot, Coding...)"
              className="w-full px-6 py-4 rounded-2xl bg-slate-100 dark:bg-slate-800 border-none focus:ring-2 focus:ring-[#7C3AED] dark:text-white outline-none transition-all pl-14"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
          </div>
        </div>
        
        {/* Background Decor */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-10 left-10 w-64 h-64 bg-purple-500 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-10 right-10 w-64 h-64 bg-blue-500 rounded-full blur-[120px]"></div>
        </div>
      </div>

      {/* Tools Grid */}
      <div className="max-w-6xl mx-auto px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTools.map((tool) => (
            <div 
              key={tool.id} 
              className="group bg-white dark:bg-[#0a0f1c] p-8 rounded-[2rem] border border-slate-100 dark:border-purple-900/10 hover:border-[#7C3AED]/40 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-purple-500/5"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 group-hover:scale-110 transition-transform duration-300">
                  {tool.icon}
                </div>
                {tool.trending && (
                  <span className="flex items-center gap-1 text-[10px] font-bold bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 px-3 py-1 rounded-full uppercase tracking-wider">
                    <Sparkles size={10} /> Trending
                  </span>
                )}
              </div>

              <h3 className="text-xl font-black text-slate-900 dark:text-white mb-2">{tool.name}</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6">
                {tool.desc}
              </p>

              <div className="flex items-center justify-between mt-auto">
                <span className="text-xs font-bold px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-lg">
                  {tool.category}
                </span>
                <a 
                  href={tool.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-bold text-[#7C3AED] hover:underline transition-all"
                >
                  Visit Tool <ExternalLink size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {filteredTools.length === 0 && (
          <div className="text-center py-20">
            <p className="text-slate-500 dark:text-slate-400 text-lg">No tools found matching your search.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AIToolsPage;