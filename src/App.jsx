import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Home from "./pages/Home";

// তোমার অ্যাপসের পেজগুলো এখানে ইম্পোর্ট করো
import Sn from "./pages/Apps/sn"; 


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
              <Route path="/Apps/sn" element={<Sn />} />
              {/* <Route path="/apps/app-two" element={<AppTwo />} /> */}
            </Routes>
          </main>
        </div>

        <Footer />
      </div>
    </Router>
  );
}