import React from "react";
import Hero from "../components/Hero";
import AppList from "../components/App"; // তোমার ফাইল নাম অনুযায়ী path ঠিক আছে

const Home = () => {
  return (
    <div className="space-y-12 animate-fade-in">
      {/* ১. হিরো সেকশন */}
      <Hero />

      {/* ২. অ্যাপ লিস্ট সেকশন */}
      <section>
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Our Digital Services</h2>
          <p className="text-gray-500 dark:text-gray-400">Select an asset to see details</p>
        </div>
        <AppList />
      </section>
    </div>
  );
};

export default Home;