import React, { useState, useEffect } from 'react';
import { Calendar, MapPin, ChevronDown } from 'lucide-react';

const DISTRICTS_BN = [
    { en: "dhaka", bn: "ঢাকা" }, 
    { en: "faridpur", bn: "ফরিদপুর" }, 
    { en: "gazipur", bn: "গাজীপুর" },
    { en: "gopalganj", bn: "গোপালগঞ্জ" }, 
    { en: "kishoreganj", bn: "কিশোরগঞ্জ" }, 
    { en: "madaripur", bn: "মাদারীপুর" },
    { en: "manikganj", bn: "মানিকগঞ্জ" }, 
    { en: "munshiganj", bn: "মুন্সীগঞ্জ" }, 
    { en: "narayanganj", bn: "নারায়ণগঞ্জ" },
    { en: "narsingdi", bn: "নরসিংদী" }, 
    { en: "rajbari", bn: "রাজবাড়ী" }, 
    { en: "shariatpur", bn: "শরীয়তপুর" },
    { en: "tangail", bn: "টাঙ্গাইল" }, 
    { en: "barishal", bn: "বরিশাল" }, 
    { en: "barguna", bn: "বরগুনা" },
    { en: "bhola", bn: "ভোলা" }, 
    { en: "jhalokati", bn: "ঝালকাঠি" }, 
    { en: "patuakhali", bn: "পটুয়াখালী" },
    { en: "pirojpur", bn: "পিরোজপুর" }, 
    { en: "chottagong", bn: "চট্টগ্রাম" }, 
    { en: "bandarban", bn: "বান্দরবান" },
    { en: "brahmanbaria", bn: "ব্রাহ্মণবাড়িয়া" }, 
    { en: "chandpur", bn: "চাঁদপুর" }, 
    { en: "comilla", bn: "কুমিল্লা" },
    { en: "coxsbazar", bn: "কক্সবাজার" }, 
    { en: "feni", bn: "ফেনী" }, 
    { en: "khagrachhari", bn: "খাগড়াছড়ি" },
    { en: "lakshmipur", bn: "লক্ষ্মীপুর" }, 
    { en: "noakhali", bn: "নোয়াখালী" }, 
    { en: "rangamati", bn: "রাঙামাটি" },
    { en: "rajshahi", bn: "রাজশাহী" }, 
    { en: "bogra", bn: "বগুড়া" }, 
    { en: "joypurhat", bn: "জয়পুরহাট" },
    { en: "naogaon", bn: "নওগাঁ" }, 
    { en: "natore", bn: "নাটোর" }, 
    { en: "chapainawabganj", bn: "চাঁপাইনবাবগঞ্জ" },
    { en: "pabna", bn: "পাবনা" }, 
    { en: "sirajganj", bn: "সিরাজগঞ্জ" }, 
    { en: "rangpur", bn: "রংপুর" },
    { en: "dinajpur", bn: "দিনাজপুর" }, 
    { en: "gaibandha", bn: "গাইবান্ধা" }, 
    { en: "kurigram", bn: "কুড়িগ্রাম" },
    { en: "lalmonirhat", bn: "লালমনিরহাট" }, 
    { en: "nilphamari", bn: "নীলফামারী" }, 
    { en: "panchagarh", bn: "পঞ্চগড়" },
    { en: "thakurgaon", bn: "ঠাকুরগাঁও" }, 
    { en: "khulna", bn: "খুলনা" }, 
    { en: "bagerhat", bn: "বাগেরহাট" },
    { en: "chuadanga", bn: "চুয়াডাঙ্গা" }, 
    { en: "jashore", bn: "যশোর" }, 
    { en: "jhenaidah", bn: "ঝিনাইদহ" },
    { en: "kushtia", bn: "কুষ্টিয়া" }, 
    { en: "magura", bn: "মাগুরা" }, 
    { en: "meherpur", bn: "মেহেরপুর" },
    { en: "narail", bn: "নড়াইল" }, 
    { en: "satkhira", bn: "সাতক্ষীরা" }, 
    { en: "sylhet", bn: "সিলেট" },
    { en: "habiganj", bn: "হবিগঞ্জ" }, 
    { en: "maulvibazar", bn: "মৌলভীবাজার" }, 
    { en: "sunamganj", bn: "সুনামগঞ্জ" },
    { en: "mymensingh", bn: "ময়মনসিংহ" }, 
    { en: "jamalpur", bn: "জামালপুর" }, 
    { en: "netrokona", bn: "নেত্রকোণা" },
    { en: "sherpur", bn: "শেরপুর" }
].sort((a, b) => a.bn.localeCompare(b.bn));

const RamadanCalendar = () => {
    const [schedule, setSchedule] = useState([]);
    const [selectedDistrict, setSelectedDistrict] = useState(DISTRICTS_BN.find(d => d.en === "dhaka"));
    const [todayString, setTodayString] = useState('');

    const toBengaliNumber = (num) => {
        if (!num) return "";
        const bengaliDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
        return num.toString().replace(/\d/g, digit => bengaliDigits[digit]);
    };

    const translateDate = (dateStr) => {
        if (!dateStr) return "";
        return dateStr
            .replace("Feb", "ফেব্রুয়ারি")
            .replace("Mar", "মার্চ")
            .replace(/\d+/g, (match) => toBengaliNumber(match));
    };

    useEffect(() => {
        fetch('/data/ramadan64.json')
            .then(res => res.json())
            .then(data => {
                // selectedDistrict.en এখন সরাসরি আপনার দেওয়া স্পেলিং লিস্টের সাথে মিলবে
                setSchedule(data[selectedDistrict.en] || []);
            })
            .catch(err => console.error("ডেটা পাওয়া যায়নি:", err));
    }, [selectedDistrict]);

    useEffect(() => {
        const now = new Date();
        setTodayString(`${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`);
    }, []);

    return (
        <div className="max-w-4xl mx-auto p-2">
            
            {/* জিলা সিলেক্টর */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 bg-white dark:bg-gray-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm">
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-xl text-green-600">
                        <MapPin size={24} />
                    </div>
                    <div>
                        <h2 className="text-xl font-bold text-slate-900 dark:text-white leading-tight">জেলা নির্বাচন করুন</h2>
                        <p className="text-sm text-slate-500 font-medium">সঠিক জেলা সিলেক্ট করুন</p>
                    </div>
                </div>

                <div className="relative">
                    <select 
                        value={selectedDistrict.en}
                        onChange={(e) => setSelectedDistrict(DISTRICTS_BN.find(d => d.en === e.target.value))}
                        className="appearance-none w-full md:w-64 px-5 py-3 bg-slate-100 dark:bg-slate-800 border-none rounded-2xl focus:ring-2 focus:ring-green-500 outline-none cursor-pointer font-bold text-slate-800 dark:text-slate-200 transition-all"
                    >
                        {DISTRICTS_BN.map(d => (
                            <option key={d.en} value={d.en}>{d.bn}</option>
                        ))}
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400" size={18} />
                </div>
            </div>

            {/* টেবিল কার্ড */}
            <div className="bg-white dark:bg-gray-900 rounded-[2rem] shadow-xl overflow-hidden border border-slate-200 dark:border-slate-800">
                <div className="px-6 py-5 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 flex items-center gap-2">
                    <Calendar className="text-green-600" size={22} />
                    <h3 className="font-bold text-lg text-slate-900 dark:text-white">রমজান ক্যালেন্ডার ২০২৬ — <span className="text-green-600">{selectedDistrict.bn}</span></h3>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead className="bg-green-600 text-white font-bold">
                            <tr>
                                <th className="py-5 px-6 text-center text-sm">তারিখ</th>
                                <th className="py-5 px-6 text-center text-sm">রমজান</th>
                                <th className="py-5 px-6 text-center text-sm">সেহরী শেষ</th>
                                <th className="py-5 px-6 text-center text-sm">ইফতার শুরু</th>
                            </tr>
                        </thead>
                        <tbody className="text-sm font-medium">
                            {schedule.length > 0 ? schedule.map((item) => (
                                <tr 
                                    key={item.R} 
                                    className={`border-b dark:border-slate-800 last:border-0 transition-colors ${
                                        todayString === item.fd 
                                        ? 'bg-green-50 dark:bg-green-900/30 border-l-4 border-l-green-600' 
                                        : 'hover:bg-slate-50 dark:hover:bg-slate-800/30'
                                    }`}
                                >
                                    <td className="py-5 px-6 text-center dark:text-slate-300">
                                        {translateDate(item.d)}
                                    </td>
                                    <td className="py-5 px-6 text-center">
                                        <span className={`inline-block px-3 py-1 rounded-lg font-bold text-xs ${
                                            todayString === item.fd ? 'bg-green-600 text-white' : 'bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-400'
                                        }`}>
                                            {toBengaliNumber(item.R)} তম
                                        </span>
                                    </td>
                                    <td className={`py-5 px-6 text-center font-bold text-base ${todayString === item.fd ? 'text-green-600 dark:text-green-400' : 'text-blue-600 dark:text-blue-400'}`}>
                                        {toBengaliNumber(item.s)}
                                    </td>
                                    <td className={`py-5 px-6 text-center font-bold text-base ${todayString === item.fd ? 'text-green-600 dark:text-green-400' : 'text-orange-600 dark:text-orange-400'}`}>
                                        {toBengaliNumber(item.i)}
                                    </td>
                                </tr>
                            )) : (
                                <tr>
                                    <td colSpan="4" className="py-24 text-center text-slate-400 font-bold italic">তথ্য লোড হচ্ছে... অনুগ্রহ করে অপেক্ষা করুন।</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            <p className="mt-6 text-center text-[10px] text-slate-400 font-medium">
                * ইসলামিক ফাউন্ডেশন অনুযায়ী সময়সূচী। স্থানভেদে ১-২ মিনিট কম-বেশি হতে পারে।
            </p>
        </div>
    );
};

export default RamadanCalendar;