import React from "react";
import Hero from "../components/Hero";
import AppList from "../components/App";
import MenuList from "../components/Menu";
import TodayRamadan from "../components/TodayeRamadan";

const Home = () => {
  return (
    <div className="space-y-12 animate-fade-in">
      {/* ১. হিরো সেকশন */}
      <TodayRamadan />
      <Hero />

      {/* ২. অ্যাপ লিস্ট সেকশন */}
      <section>

        <AppList />
        <MenuList />
      </section>
    </div>
  );
};

export default Home;