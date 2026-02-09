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

        <AppList />
      </section>
    </div>
  );
};

export default Home;