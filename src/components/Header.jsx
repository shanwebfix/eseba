import { useState, useEffect } from "react";
import { Sun, Moon, Menu, X } from "lucide-react"; // Lucide Icons import

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // থিম চেক করার লজিক
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    if (darkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setDarkMode(true);
    }
  };

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <span className="text-2xl font-extrabold text-blue-600 dark:text-blue-400">eSeba</span>
          </div>
          
          {/* PC Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 dark:text-gray-200 hover:text-blue-600 font-medium">Home</a>
            <a href="#" className="text-gray-700 dark:text-gray-200 hover:text-blue-600 font-medium">Services</a>
            
            {/* Dark Mode Toggle Button */}
            <button 
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-yellow-400 hover:ring-2 hover:ring-blue-400 transition-all"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          {/* Mobile Menu & Dark Toggle */}
          <div className="md:hidden flex items-center space-x-4">
            <button 
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 dark:text-yellow-400"
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 dark:text-gray-200">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Content */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800 border-t dark:border-gray-700 p-4 space-y-2">
          <a href="#" className="block text-gray-700 dark:text-gray-200 hover:bg-blue-500 hover:text-white p-2 rounded">Home</a>
          <a href="#" className="block text-gray-700 dark:text-gray-200 hover:bg-blue-500 hover:text-white p-2 rounded">Services</a>
        </div>
      )}
    </nav>
  );
};

export default Header;