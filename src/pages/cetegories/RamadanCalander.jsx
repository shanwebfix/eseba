import React, { useState, useEffect } from 'react';
import { Moon, Sun, Calendar, Clock } from 'lucide-react';

// ১৮ ফেব্রুয়ারি থেকে ৩০ দিনের পূর্ণাঙ্গ তালিকা
const RAMADAN_SCHEDULE = [
    { ramadanDay: 1, date: '১৮ ফেব্রুয়ারি', fullDate: '2026-02-18', seheri: '৫:১৫', iftar: '৬:০৫' },
    { ramadanDay: 2, date: '১৯ ফেব্রুয়ারি', fullDate: '2026-02-19', seheri: '৫:১৪', iftar: '৬:০৬' },
    { ramadanDay: 3, date: '২০ ফেব্রুয়ারি', fullDate: '2026-02-20', seheri: '৫:১৩', iftar: '৬:০৬' },
    { ramadanDay: 4, date: '২১ ফেব্রুয়ারি', fullDate: '2026-02-21', seheri: '৫:১২', iftar: '৬:০৭' },
    { ramadanDay: 5, date: '২২ ফেব্রুয়ারি', fullDate: '2026-02-22', seheri: '৫:১১', iftar: '৬:০৭' },
    { ramadanDay: 6, date: '২৩ ফেব্রুয়ারি', fullDate: '2026-02-23', seheri: '৫:১০', iftar: '৬:০৮' },
    { ramadanDay: 7, date: '২৪ ফেব্রুয়ারি', fullDate: '2026-02-24', seheri: '৫:০৯', iftar: '৬:০৮' },
    { ramadanDay: 8, date: '২৫ ফেব্রুয়ারি', fullDate: '2026-02-25', seheri: '৫:০৮', iftar: '৬:০৯' },
    { ramadanDay: 9, date: '২৬ ফেব্রুয়ারি', fullDate: '2026-02-26', seheri: '৫:০৭', iftar: '৬:০৯' },
    { ramadanDay: 10, date: '২৭ ফেব্রুয়ারি', fullDate: '2026-02-27', seheri: '৫:০৬', iftar: '৬:১০' },
    { ramadanDay: 11, date: '২৮ ফেব্রুয়ারি', fullDate: '2026-02-28', seheri: '৫:০৫', iftar: '৬:১০' },
    { ramadanDay: 12, date: '১ মার্চ', fullDate: '2026-03-01', seheri: '৫:০৪', iftar: '৬:১১' },
    { ramadanDay: 13, date: '২ মার্চ', fullDate: '2026-03-02', seheri: '৫:০৩', iftar: '৬:১১' },
    { ramadanDay: 14, date: '৩ মার্চ', fullDate: '2026-03-03', seheri: '৫:০২', iftar: '৬:১২' },
    { ramadanDay: 15, date: '৪ মার্চ', fullDate: '2026-03-04', seheri: '৫:০১', iftar: '৬:১২' },
    { ramadanDay: 16, date: '৫ মার্চ', fullDate: '2026-03-05', seheri: '৫:০০', iftar: '৬:১৩' },
    { ramadanDay: 17, date: '৬ মার্চ', fullDate: '2026-03-06', seheri: '৪:৫৯', iftar: '৬:১৩' },
    { ramadanDay: 18, date: '৭ মার্চ', fullDate: '2026-03-07', seheri: '৪:৫৮', iftar: '৬:১৪' },
    { ramadanDay: 19, date: '৮ মার্চ', fullDate: '2026-03-08', seheri: '৪:৫৭', iftar: '৬:১৪' },
    { ramadanDay: 20, date: '৯ মার্চ', fullDate: '2026-03-09', seheri: '৪:৫৬', iftar: '৬:১৫' },
    { ramadanDay: 21, date: '১০ মার্চ', fullDate: '2026-03-10', seheri: '৪:৫৫', iftar: '৬:১৫' },
    { ramadanDay: 22, date: '১১ মার্চ', fullDate: '2026-03-11', seheri: '৪:৫৪', iftar: '৬:১৬' },
    { ramadanDay: 23, date: '১২ মার্চ', fullDate: '2026-03-12', seheri: '৪:৫৩', iftar: '৬:১৬' },
    { ramadanDay: 24, date: '১৩ মার্চ', fullDate: '2026-03-13', seheri: '৪:৫২', iftar: '৬:১৭' },
    { ramadanDay: 25, date: '১৪ মার্চ', fullDate: '2026-03-14', seheri: '৪:৫১', iftar: '৬:১৭' },
    { ramadanDay: 26, date: '১৫ মার্চ', fullDate: '2026-03-15', seheri: '৪:৫০', iftar: '৬:১৮' },
    { ramadanDay: 27, date: '১৬ মার্চ', fullDate: '2026-03-16', seheri: '৪:৪৯', iftar: '৬:১৮' },
    { ramadanDay: 28, date: '১৭ মার্চ', fullDate: '2026-03-17', seheri: '৪:৪৮', iftar: '৬:১৯' },
    { ramadanDay: 29, date: '১৮ মার্চ', fullDate: '2026-03-18', seheri: '৪:৪৭', iftar: '৬:১৯' },
    { ramadanDay: 30, date: '১৯ মার্চ', fullDate: '2026-03-19', seheri: '৪:৪৬', iftar: '৬:২০' },
];

const toBengaliNumber = (num) => {
    const bengaliDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
    return num.toString().replace(/\d/g, digit => bengaliDigits[digit]);
};

const RamadanCalendar = () => {
    const [currentTime, setCurrentTime] = useState('');
    const [todayData, setTodayData] = useState(RAMADAN_SCHEDULE[0]);

    useEffect(() => {
        const updateTodayInfo = () => {
            const now = new Date();
            // সঠিক YYYY-MM-DD ফরম্যাট তৈরি
            const year = now.getFullYear();
            const month = String(now.getMonth() + 1).padStart(2, '0');
            const day = String(now.getDate()).padStart(2, '0');
            const todayString = `${year}-${month}-${day}`;

            const found = RAMADAN_SCHEDULE.find(item => item.fullDate === todayString);
            if (found) {
                setTodayData(found);
            }
        };

        updateTodayInfo();

        const timer = setInterval(() => {
            const now = new Date();
            // ১২ ঘণ্টার ফরম্যাট (১২ এর পর ১টা দেখাবে)
            setCurrentTime(now.toLocaleTimeString('bn-BD', { 
                hour: '2-digit', minute: '2-digit', hour12: true 
            }));
            updateTodayInfo();
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="min-h-screen dark:from-gray-900 dark:to-gray-800 p-3 md:p-6 font-sans">
            
            <div className="max-w-4xl mx-auto w-full bg-gradient-to-br from-white to-green-50 dark:from-gray-900 dark:to-gray-800 rounded-xl p-4 mb-6 border border-green-100 dark:border-gray-700 shadow-sm">
                
                <div className="text-center mb-3">
                    <div className="flex items-center justify-center gap-2 mb-2">
                        <span className="text-[11px] text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded-full">
                            শমসেরনগর, মৌলভীবাজার
                        </span>
                        <span className="text-[10px] text-gray-400">•</span>
                        <div className="flex items-center gap-1 text-[11px] text-gray-600 dark:text-gray-300">
                            <Clock className="w-3 h-3" />
                            {currentTime}
                        </div>
                    </div>
                    
                    <h2 className="text-base font-bold text-gray-800 dark:text-gray-100">
                        আজ <span className="text-green-600 dark:text-green-400">{toBengaliNumber(todayData.ramadanDay)}</span>তম রমজান
                    </h2>
                    <p className="text-[11px] text-gray-600 dark:text-gray-400 mt-0.5">
                        {todayData.date}, ২০২৬
                    </p>
                </div>

                <div className="flex items-center justify-between gap-3 mb-4">
                    <div className="flex-1 bg-white dark:bg-gray-800 p-3 rounded-lg border border-blue-100 dark:border-gray-700 shadow-sm">
                        <div className="flex items-center">
                            <div className="mr-3">
                                <div className="w-8 h-8 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-600">
                                    <Moon className="w-4 h-4" />
                                </div>
                            </div>
                            <div>
                                <p className="text-[10px] uppercase tracking-wider text-gray-500">সেহরী শেষ</p>
                                <p className="text-lg font-bold text-gray-800 dark:text-gray-100">{todayData.seheri} <span className="text-xs font-normal">AM</span></p>
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 bg-white dark:bg-gray-800 p-3 rounded-lg border border-orange-100 dark:border-gray-700 shadow-sm">
                        <div className="flex items-center">
                            <div className="mr-3">
                                <div className="w-8 h-8 rounded-full bg-orange-50 dark:bg-orange-900/20 flex items-center justify-center text-orange-600">
                                    <Sun className="w-4 h-4" />
                                </div>
                            </div>
                            <div>
                                <p className="text-[10px] uppercase tracking-wider text-gray-500">ইফতার শুরু</p>
                                <p className="text-lg font-bold text-gray-800 dark:text-gray-100">{todayData.iftar} <span className="text-xs font-normal">PM</span></p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mb-2 text-[11px] text-gray-500 flex justify-between">
                    <span>রমজান অগ্রগতি</span>
                    <span>{toBengaliNumber(todayData.ramadanDay)}/৩০ দিন</span>
                </div>
                <div className="w-full bg-gray-100 dark:bg-gray-700 rounded-full h-1.5 overflow-hidden">
                    <div className="bg-green-500 h-full transition-all duration-700" style={{ width: `${(todayData.ramadanDay / 30) * 100}%` }}></div>
                </div>
            </div>

            <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700">
                <div className="px-4 py-4 border-b border-gray-100 dark:border-gray-700 bg-gray-50/50 dark:bg-gray-800/50">
                    <h3 className="text-md font-bold text-gray-800 dark:text-gray-200 flex items-center gap-2">
                        <Calendar className="w-5 h-5 text-green-600" />
                        রমজান ক্যালেন্ডার ২০২৬
                    </h3>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead className="bg-green-600 text-white text-xs uppercase">
                            <tr>
                                <th className="py-3 px-4 text-center font-bold">তারিখ</th>
                                <th className="py-3 px-4 text-center font-bold">রমজান</th>
                                <th className="py-3 px-4 text-center font-bold">সেহরী</th>
                                <th className="py-3 px-4 text-center font-bold">ইফতার</th>
                            </tr>
                        </thead>
                        <tbody className="text-sm">
                            {RAMADAN_SCHEDULE.map((item) => (
                                <tr key={item.ramadanDay} className={`border-b dark:border-gray-700 last:border-0 transition-colors ${todayData.fullDate === item.fullDate ? 'bg-green-50 dark:bg-green-900/30' : 'hover:bg-gray-50 dark:hover:bg-gray-700/50'}`}>
                                    <td className="py-3 px-4 text-center dark:text-gray-300">{item.date}</td>
                                    <td className="py-3 px-4 text-center">
                                        <span className={`inline-block px-2 py-1 rounded-md text-[12px] font-bold ${todayData.fullDate === item.fullDate ? 'bg-green-600 text-white' : 'bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-400'}`}>
                                            {toBengaliNumber(item.ramadanDay)}ম
                                        </span>
                                    </td>
                                    <td className="py-3 px-4 text-center font-semibold text-blue-600 dark:text-blue-400">{item.seheri} AM</td>
                                    <td className="py-3 px-4 text-center font-semibold text-orange-600 dark:text-orange-400">{item.iftar} PM</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default RamadanCalendar;