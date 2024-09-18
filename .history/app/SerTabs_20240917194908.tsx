'use client';

import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { FaAngleRight } from "react-icons/fa6";

const tabs = [
    {
      id: 'tab1',
      label: 'Agriculture',
      image: '/assets/hero2.jpg', // Background image path
      heading: 'Agriculture Sector',
      paragraph: '<p>This sector involves the cultivation of crops and the raising of livestock. We provide comprehensive solutions for sustainable agricultural practices.</p>',
      buttonText: 'Learn More',
      buttonRoute: '/agriculture', // Route for the button
    },
    {
      id: 'tab2',
      label: 'Construction',
      image: '/images/construction.jpg',
      heading: 'Construction Sector',
      paragraph: '<p>Our construction services range from residential to commercial projects. We ensure high-quality construction with timely delivery.</p>',
      buttonText: 'Explore Services',
      buttonRoute: '/construction',
    },
    {
      id: 'tab3',
      label: 'Education',
      image: '/images/education.jpg',
      heading: 'Education Sector',
      paragraph: '<p>We offer innovative educational solutions to enhance learning and teaching experiences. Our services include training programs and educational tools.</p>',
      buttonText: 'Discover More',
      buttonRoute: '/education',
    },
    {
      id: 'tab4',
      label: 'Environment',
      image: '/images/environment.jpg',
      heading: 'Environment Sector',
      paragraph: '<p>Our environmental services focus on sustainability and conservation. We provide solutions for waste management, pollution control, and ecological balance.</p>',
      buttonText: 'Learn About Our Work',
      buttonRoute: '/environment',
    },
    {
      id: 'tab5',
      label: 'Energy',
      image: '/images/energy.jpg',
      heading: 'Energy Sector',
      paragraph: '<p>We support the energy sector with innovative solutions for energy production, distribution, and management, ensuring efficient and sustainable energy usage.</p>',
      buttonText: 'View Our Projects',
      buttonRoute: '/energy',
    },
    {
      id: 'tab6',
      label: 'Hydropower',
      image: '/images/hydropower.jpg',
      heading: 'Hydropower Sector',
      paragraph: '<p>Our expertise in hydropower includes design, construction, and management of hydropower plants. We aim to harness the power of water for sustainable energy.</p>',
      buttonText: 'Explore Hydropower',
      buttonRoute: '/hydropower',
    },
    {
      id: 'tab7',
      label: 'Management Consulting',
      image: '/images/management-consulting.jpg',
      heading: 'Management Consulting',
      paragraph: '<p>We offer strategic management consulting to help businesses improve performance and achieve their goals through effective strategies and solutions.</p>',
      buttonText: 'Get In Touch',
      buttonRoute: '/management-consulting',
    },
    {
      id: 'tab8',
      label: 'Roads & Bridges',
      image: '/images/roads-bridges.jpg',
      heading: 'Roads & Bridges Sector',
      paragraph: '<p>Our services include the planning, design, and construction of roads and bridges. We focus on creating infrastructure that meets safety and quality standards.</p>',
      buttonText: 'Learn More',
      buttonRoute: '/roads-bridges',
    },
    {
      id: 'tab9',
      label: 'Public Health Engineering',
      image: '/images/public-health-engineering.jpg',
      heading: 'Public Health Engineering',
      paragraph: '<p>We provide engineering solutions for public health projects, including water supply, sanitation, and environmental health initiatives to improve community well-being.</p>',
      buttonText: 'See Our Work',
      buttonRoute: '/public-health-engineering',
    },
    {
      id: 'tab10',
      label: 'Solid Waste Management',
      image: '/images/solid-waste-management.jpg',
      heading: 'Solid Waste Management',
      paragraph: '<p>Our solutions for solid waste management include collection, recycling, and disposal services aimed at reducing environmental impact and promoting sustainability.</p>',
      buttonText: 'Find Out More',
      buttonRoute: '/solid-waste-management',
    },
    // Add more tabs as needed
  ];
  

const SerTabs = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  const handleClick = (id: string) => {
    setActiveTab(id);
  };

  const activeTabContent = tabs.find((tab) => tab.id === activeTab);

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
        <div className="w-3/4">
          {activeTabContent && (
            <div className="flex flex-col gap-4">
              <div
                className="h-80 bg-cover bg-center rounded-2xl"
                style={{ backgroundImage: `url(${activeTabContent.image})` }}
              ></div>
              <h2 className="text-2xl font-bold">{activeTabContent.heading}</h2>
              <p dangerouslySetInnerHTML={{ __html: activeTabContent.paragraph }} />
              <a
                href={activeTabContent.buttonRoute}
                
              >
                <Button className="px-5 py-6 text-lg font-light  hover:bg-blue-600">Learn More  <FaAngleRight className="mr-2 ml-2 h-4 w-4" /></Button>
                
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SerTabs;
