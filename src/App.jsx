import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Home from "./pages/Home";



import AI from "./pages/cetegories/ai-tools";
import Ramadan from "./pages/cetegories/RamadanCalander";


{/* Apps Route  */}
import PcAppList from "./pages/Apps/pc-apps";
import PCAppDetails from "./pages/Apps/pc-apps-details";

import Mobileapps from "./pages/Apps/mobile-apps";
import MobileAppDetails from "./pages/Apps/mobile-apps-details";




export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Header />

        <div className="flex flex-1">
          <Sidebar />
          
          <main className="flex-1 p-4 md:p-8">
            <Routes>
              {/* মেইন সাইটে গেলেই যেন Home পেজ (Hero + AppList) দেখায় */}
              <Route path="/" element={<Home />} />
              
              {/* অ্যাপসের আলাদা আলাদা পেজ রুট */}

              <Route path="/cetegories/ai-tools" element={<AI />} />
              <Route path="/cetegories/RamadanCalander" element={<Ramadan />} />


              {/* মোবাইল অ্যাপস সেকশন (আলাদা পাথ) */}
              <Route path="/Apps/mobile-apps" element={<Mobileapps />} />
              <Route path="/Apps/mobile-details/:id" element={<MobileAppDetails />} />

              {/* পিসি অ্যাপস সেকশন (আলাদা পাথ) */}
              <Route path="/Apps/pc-apps" element={<PcAppList />} />
              <Route path="/Apps/pc-details/:id" element={<PCAppDetails />} />
              

             
            </Routes>
          </main>
        </div>

        <Footer />
      </div>
    </Router>
  );
}