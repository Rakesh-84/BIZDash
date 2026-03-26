import React from 'react';
import { SidebarData } from '../data/SidebarData';
import SidebarItem from './SidebarItem';
function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-blue-900 text-white flex flex-col">
      {/* Logo */}
      <div className="p-4 text-xl font-bold border-b border-blue-700">
        BizDash
      </div>

      {/* Menu */}
<nav className="flex-1 py-4">
        {SidebarData.map((item, index) => (
          <SidebarItem key={index} item={item} />
        ))}
      </nav>
      {/* User */}
      <div className="p-4 border-t border-blue-700">
        <p className="text-sm">Rex</p>
        <button className="text-xs text-blue-300">Logout</button>
      </div>
    </aside>
  );
}

export default Sidebar;
