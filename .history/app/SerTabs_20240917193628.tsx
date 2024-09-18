'use client';

import { useState } from 'react';
import { FaAngleRight } from "react-icons/fa6";

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
    <div className="flex flex-col px-20 my-20">
      <div className="flex flex-col gap-5 w-1/4 my-10">
        <h3 className="text-5xl text-slate-800">Sectors We Serve</h3>
        <p>Experiential and transformational sales and leadership training</p>
      </div>
      <div className="flex flex-row">
        {/* Left Section: Vertical List of Buttons */}
        <div className="w-1/4">
          <ul className="list-none p-0 m-0 flex flex-col gap-5">
            {tabs.map((tab) => (
              <li key={tab.id}>
                <button
                  className={`w-full p-4 text-left flex items-center justify-between gap-2 ${
                    activeTab === tab.id
                      ? 'bg-black text-white border-0 rounded-lg'
                      : 'bg-white text-slate-800 border-[1px] border-gray-200 rounded-lg'
                  }`}
                  onClick={() => handleClick(tab.id)}
                >
                  {tab.label}
                  <FaAngleRight
                    className={`h-4 w-4 ml-2 ${
                      activeTab === tab.id ? 'text-white' : 'text-black'
                    }`}
                  />
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
    </div>
  );
};

export default SerTabs;
