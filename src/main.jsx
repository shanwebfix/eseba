import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

const CodeProtection = () => {
  useEffect(() => {
    // ১. মাউসের রাইট ক্লিক (Context Menu) বন্ধ করা
    const handleContextMenu = (e) => e.preventDefault();

    // ২. কীবোর্ড শর্টকাট বন্ধ করা (F12, Inspect, View Source, Save)
    const handleKeyDown = (e) => {
      if (
        e.keyCode === 123 || // F12
        (e.ctrlKey && e.shiftKey && (e.keyCode === 73 || e.keyCode === 74 || e.keyCode === 67)) || // Ctrl+Shift+I/J/C
        (e.ctrlKey && e.keyCode === 85) || // Ctrl+U (View Source)
        (e.ctrlKey && e.keyCode === 83)    // Ctrl+S (Save)
      ) {
        e.preventDefault();
        return false;
      }
    };

    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return null;
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CodeProtection />
    <App />
  </React.StrictMode>
);