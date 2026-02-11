import React, { useState, useEffect } from 'react';

const TodayRamadan = () => {
    const [todayData, setTodayData] = useState(null);
    const [currentTime, setCurrentTime] = useState('');

    const RAMADAN_DATA = [
        { day: 1, date: '১৮ ফেব্রুয়ারি', fullDate: '2026-02-18', seheri: '05:15', iftar: '18:05' },
        { day: 2, date: '১৯ ফেব্রুয়ারি', fullDate: '2026-02-19', seheri: '05:14', iftar: '18:06' },
        { day: 3, date: '২০ ফেব্রুয়ারি', fullDate: '2026-02-20', seheri: '05:13', iftar: '18:06' },
        { day: 4, date: '২১ ফেব্রুয়ারি', fullDate: '2026-02-21', seheri: '05:12', iftar: '18:07' },
        { day: 5, date: '২২ ফেব্রুয়ারি', fullDate: '2026-02-22', seheri: '05:11', iftar: '18:07' },
        { day: 6, date: '২৩ ফেব্রুয়ারি', fullDate: '2026-02-23', seheri: '05:10', iftar: '18:08' },
        { day: 7, date: '২৪ ফেব্রুয়ারি', fullDate: '2026-02-24', seheri: '05:09', iftar: '18:08' },
        { day: 8, date: '২৫ ফেব্রুয়ারি', fullDate: '2026-02-25', seheri: '05:08', iftar: '18:09' },
        { day: 9, date: '২৬ ফেব্রুয়ারি', fullDate: '2026-02-26', seheri: '05:07', iftar: '18:09' },
        { day: 10, date: '২৭ ফেব্রুয়ারি', fullDate: '2026-02-27', seheri: '05:06', iftar: '18:10' },
        { day: 11, date: '২৮ ফেব্রুয়ারি', fullDate: '2026-02-28', seheri: '05:05', iftar: '18:10' },
        { day: 12, date: '১ মার্চ', fullDate: '2026-03-01', seheri: '05:04', iftar: '18:11' },
        { day: 13, date: '২ মার্চ', fullDate: '2026-03-02', seheri: '05:03', iftar: '18:11' },
        { day: 14, date: '৩ মার্চ', fullDate: '2026-03-03', seheri: '05:02', iftar: '18:12' },
        { day: 15, date: '৪ মার্চ', fullDate: '2026-03-04', seheri: '05:01', iftar: '18:12' },
        { day: 16, date: '৫ মার্চ', fullDate: '2026-03-05', seheri: '05:00', iftar: '18:13' },
        { day: 17, date: '৬ মার্চ', fullDate: '2026-03-06', seheri: '04:59', iftar: '18:13' },
        { day: 18, date: '৭ মার্চ', fullDate: '2026-03-07', seheri: '04:58', iftar: '18:14' },
        { day: 19, date: '৮ মার্চ', fullDate: '2026-03-08', seheri: '04:57', iftar: '18:14' },
        { day: 20, date: '৯ মার্চ', fullDate: '2026-03-09', seheri: '04:56', iftar: '18:15' },
        { day: 21, date: '১০ মার্চ', fullDate: '2026-03-10', seheri: '04:55', iftar: '18:15' },
        { day: 22, date: '১১ মার্চ', fullDate: '2026-03-11', seheri: '04:54', iftar: '18:16' },
        { day: 23, date: '১২ মার্চ', fullDate: '2026-03-12', seheri: '04:53', iftar: '18:16' },
        { day: 24, date: '১৩ মার্চ', fullDate: '2026-03-13', seheri: '04:52', iftar: '18:17' },
        { day: 25, date: '১৪ মার্চ', fullDate: '2026-03-14', seheri: '04:51', iftar: '18:17' },
        { day: 26, date: '১৫ মার্চ', fullDate: '2026-03-15', seheri: '04:50', iftar: '18:18' },
        { day: 27, date: '১৬ মার্চ', fullDate: '2026-03-16', seheri: '04:49', iftar: '18:18' },
        { day: 28, date: '১৭ মার্চ', fullDate: '2026-03-17', seheri: '04:48', iftar: '18:19' },
        { day: 29, date: '১৮ মার্চ', fullDate: '2026-03-18', seheri: '04:47', iftar: '18:19' },
        { day: 30, date: '১৯ মার্চ', fullDate: '2026-03-19', seheri: '04:46', iftar: '18:20' },
    ];

    const toBengaliNumber = (num) => {
        const bengaliDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
        return num.toString().replace(/\d/g, digit => bengaliDigits[digit]);
    };

    useEffect(() => {
        const updateTimer = () => {
            const now = new Date();
            setCurrentTime(now.toLocaleTimeString('bn-BD', { hour: '2-digit', minute: '2-digit', hour12: true }));

            const todayStr = now.toISOString().split('T')[0];
            const dataIndex = RAMADAN_DATA.findIndex(item => item.fullDate === todayStr);
            const data = dataIndex !== -1 ? RAMADAN_DATA[dataIndex] : RAMADAN_DATA[0];
            
            setTodayData(data);
        };

        const interval = setInterval(updateTimer, 1000);
        updateTimer();
        return () => clearInterval(interval);
    }, []);

    if (!todayData) return null;

    return (
        <div className="w-full bg-gradient-to-br from-white to-green-50 dark:from-[#05070a] dark:to-gray-950 rounded-xl p-3 mb-4 border border-purple-100 dark:border-gray-700 shadow-sm">
            <div className="text-center mb-3">
                <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="text-[11px] text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded-full">
                        {currentTime}
                    </span>
                </div>
                
                <h2 className="text-base font-bold text-gray-800 dark:text-gray-100">
                    আজ <span className="text-purple-600 dark:text-purple-400">{toBengaliNumber(todayData.day)}</span>তম রমজান
                </h2>
                <p className="text-[11px] text-gray-600 dark:text-gray-400 mt-0.5">
                    {todayData.date}, ২০২৬
                </p>
            </div>

            <div className="mb-3">
                <div className="flex justify-between text-[10px] text-gray-500 mb-1">
                    <span>রমজান অগ্রগতি</span>
                    <span>{toBengaliNumber(todayData.day)}/৩০</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 overflow-hidden">
                    <div 
                        className="bg-purple-500 h-1.5 rounded-full transition-all duration-700" 
                        style={{ width: `${(todayData.day / 30) * 100}%` }}
                    ></div>
                </div>
            </div>

            <div className="text-center pt-1">
                <a 
                    href="./cetegories/Ramadan64"
                    className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-purple-500 hover:bg-purple-700 text-white text-xs font-medium rounded-lg transition-colors shadow-sm active:scale-95"
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    পূর্ণ রমজান ক্যালেন্ডার
                </a>
            </div>
        </div>
    );
};

export default TodayRamadan;