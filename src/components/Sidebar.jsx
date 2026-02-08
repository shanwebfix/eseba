const Sidebar = () => {
  return (
    <aside className="hidden md:flex flex-col w-64 bg-gray-800 text-white h-[calc(100vh-64px)] sticky top-16">
      <div className="p-4 space-y-4">
        <div className="hover:bg-gray-700 p-2 rounded cursor-pointer">📊 Dashboard</div>
        <div className="hover:bg-gray-700 p-2 rounded cursor-pointer">💼 Services</div>
        <div className="hover:bg-gray-700 p-2 rounded cursor-pointer">⚙️ Settings</div>
      </div>
    </aside>
  );
};

export default Sidebar;