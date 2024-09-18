'use client'

import { useState } from 'react';

const tabs = [
  { id: 'tab1', label: 'Button 1', content: 'Content for Button 1' },
  { id: 'tab2', label: 'Button 2', content: 'Content for Button 2' },
  { id: 'tab3', label: 'Button 3', content: 'Content for Button 3' },
  // Add more tabs as needed
];

const SerTabs = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  const handleClick = (id: string) => {
    setActiveTab(id);
  };

  return (
    <div className="flex px-10 my-20">
      {/* Left Section: Vertical List of Buttons */}
      <div className="w-1/4 border-r border-gray-300">
        <ul className="list-none p-0 m-0">
          {tabs.map((tab) => (
            <li key={tab.id}>
              <button
                className={`w-full p-4 text-left ${
                  activeTab === tab.id ? 'bg-blue-500 text-white' : 'bg-gray-200'
                }`}
                onClick={() => handleClick(tab.id)}
              >
                {tab.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Right Section: Dynamic Content Based on Active Button */}
      <div className="w-3/4 p-4">
        {tabs.find((tab) => tab.id === activeTab)?.content}
      </div>
    </div>
  );
};

export default SerTabs;
