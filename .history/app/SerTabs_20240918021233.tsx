'use client';

import { Button } from '@/components/ui/button';
import { useState, useEffect, useRef } from 'react';
import { FaAngleRight } from "react-icons/fa6";
const tabs = [
    {
      id: 'tab1',
      label: 'Agriculture',
      image: '/assets/agriculture.jpg', // Background image path
      heading: 'Agriculture Sector',
      paragraph: '<p>In the Agriculture Sector, Euroconsult offers specialized guidance and support to clients engaged in agricultural activities. Our wide range of services aims to enhance efficiency, sustainability, and productivity in the industry. We play a key role in tackling industry challenges, promoting innovation, and championing sustainable practices to ensure the long-term success of agricultural businesses. Backed by extensive and dynamic experience in agricultural projects, we are committed to driving positive change.<br></br></p><p><b>Our Services include:</b></p><ul><li>&#x2022; Farm Operations Management</li><li>&#x2022; Advanced Irrigation Systems</li><li>&#x2022; Sustainable Farming and Environmental Conservation</li><li>&#x2022; Agribusiness Development and Value Chain Optimization</li><li>&#x2022; Agricultural Equipment & Technological Solutions</li><li>&#x2022; Rural Community Development</li></ul>',
      buttonText: 'Learn More',
      buttonRoute: '/agriculture', // Route for the button
    },
    {
      id: 'tab2',
      label: 'Construction',
      image: '/assets/construction.jpg',
      heading: 'Construction Sector',
      paragraph: '<p>Euroconsult provides expert guidance and support to clients involved in construction and infrastructure development. Our diverse range of services is designed to enhance project efficiency, sustainability, and overall quality in the industry. We play a critical role in addressing sector challenges, fostering innovation, and advocating for sustainable construction practices to ensure the long-term success of construction projects. With extensive experience in construction and infrastructure initiatives, we are dedicated to driving progress and delivering high-impact solutions.<br></br></p><p><b>Our Services Include:</b></p><ul><li>&#x2022; Project Management and Planning</li><li>&#x2022; Sustainable Construction Practices</li><li>&#x2022; Infrastructure Development</li><li>&#x2022; Construction Technology and Innovation</li><li>&#x2022; Building Materials and Equipment Solutions</li><li>&#x2022; Urban and Rural Development</li></ul>',
      buttonText: 'Explore Services',
      buttonRoute: '/construction',
    },
    {
      id: 'tab3',
      label: 'Education',
      image: '/assets/education.jpg',
      heading: 'Education Sector',
      paragraph: '<p>For the Education Sector, Euroconsult offers expert guidance and support to institutions engaged in educational development and innovation. Our comprehensive services aim to improve educational quality, access, and sustainability. We address key challenges within the sector, promote innovative teaching methods, and advocate for inclusive practices to ensure the long-term success of educational initiatives. With deep experience in educational projects, we are committed to empowering institutions and fostering positive change.<br></br></p><p><b>Our Services Include:</b></p><ul><li>&#x2022; Educational Program Development</li><li>&#x2022; Curriculum Design and Innovation</li><li>&#x2022; Teacher Training and Capacity Building</li><li>&#x2022; Digital Learning Solutions</li><li>&#x2022; School Infrastructure Planning and Management</li><li>&#x2022; Inclusive Education Strategies</li></ul>',
      buttonText: 'Discover More',
      buttonRoute: '/education',
    },
    {
      id: 'tab4',
      label: 'Environment',
      image: '/assets/environment.jpg',
      heading: 'Environment Sector',
      paragraph: '<p>In the Environment Sector, Euroconsult provides expert guidance and solutions to organizations involved in environmental protection and sustainability. Our services are tailored to enhance environmental management, promote sustainable practices, and mitigate the impacts of climate change. We play a vital role in addressing environmental challenges, driving innovation in eco-friendly technologies, and advocating for the long-term preservation of natural resources. With extensive experience in environmental projects, we are dedicated to supporting a greener future.<br></br></p><p><b>Our Service Include:</b></p><ul><li>&#x2022; Environmental Impact Assessments</li><li>&#x2022; Climate Change Mitigation Strategies</li><li>&#x2022; Sustainable Resource Management</li><li>&#x2022; Ecosystem Restoration and Conservation</li><li>&#x2022; Pollution Control and Waste Management</li><li>&#x2022; Renewable Energy Solutions</li></ul>',
      buttonText: 'Learn About Our Work',
      buttonRoute: '/environment',
    },
    {
      id: 'tab5',
      label: 'Energy',
      image: '/assets/energy.jpg',
      heading: 'Energy Sector',
      paragraph: '<p>We support the energy sector with innovative solutions for energy production, distribution, and management, ensuring efficient and sustainable energy usage.</p>',
      buttonText: 'View Our Projects',
      buttonRoute: '/energy',
    },
    {
      id: 'tab6',
      label: 'Hydropower',
      image: '/assets/hydropower.jpg',
      heading: 'Hydropower Sector',
      paragraph: '<p>Our expertise in hydropower includes design, construction, and management of hydropower plants. We aim to harness the power of water for sustainable energy.</p>',
      buttonText: 'Explore Hydropower',
      buttonRoute: '/hydropower',
    },
    {
      id: 'tab7',
      label: 'Management Consulting',
      image: '/assets/management-consulting.jpg',
      heading: 'Management Consulting',
      paragraph: '<p>We offer strategic management consulting to help businesses improve performance and achieve their goals through effective strategies and solutions.</p>',
      buttonText: 'Get In Touch',
      buttonRoute: '/management-consulting',
    },
    {
      id: 'tab8',
      label: 'Roads & Bridges',
      image: '/assets/roads-bridges.jpg',
      heading: 'Roads & Bridges Sector',
      paragraph: '<p>Our services include the planning, design, and construction of roads and bridges. We focus on creating infrastructure that meets safety and quality standards.</p>',
      buttonText: 'Learn More',
      buttonRoute: '/roads-bridges',
    },
    {
        id: 'tab9',
        label: 'Oil & Gas',
        image: '/assets/oilgas.jpg',
        heading: 'Oil & Gas',
        paragraph: '<p>We provide engineering solutions for public health projects, including water supply, sanitation, and environmental health initiatives to improve community well-being.</p>',
        buttonText: 'See Our Work',
        buttonRoute: '/public-health-engineering',
      },
    {
      id: 'tab10',
      label: 'Public Health Engineering',
      image: '/assets/publichealth.jpg',
      heading: 'Public Health Engineering',
      paragraph: '<p>We provide engineering solutions for public health projects, including water supply, sanitation, and environmental health initiatives to improve community well-being.</p>',
      buttonText: 'See Our Work',
      buttonRoute: '/public-health-engineering',
    },
    {
      id: 'tab11',
      label: 'Solid Waste Management',
      image: '/assets/solidwaste.jpg',
      heading: 'Solid Waste Management',
      paragraph: '<p>Our solutions for solid waste management include collection, recycling, and disposal services aimed at reducing environmental impact and promoting sustainability.</p>',
      buttonText: 'Find Out More',
      buttonRoute: '/solid-waste-management',
    },
    // Add more tabs as needed
  ];
  
  const SerTabs = () => {
    const [activeTab, setActiveTab] = useState(tabs[0].id);
    const [isClient, setIsClient] = useState(false);
    const activeTabContent = tabs.find((tab) => tab.id === activeTab);
  
    useEffect(() => {
      setIsClient(true);
    }, []);
  
    const handleClick = (id: string) => {
      setActiveTab(id);
    };
  
    return (
      <div className="flex flex-col px-20 my-20">
        <div className="flex flex-col gap-5 w-[40%] my-10">
          <h3 className="text-5xl text-slate-800">Sectors We Serve</h3>
          <p className="font-light text-slate-800 text-justify">Leverage our comprehensive suite of services, from cutting-edge technology to construction, consulting and efficient engineering.</p>
        </div>
        <div className="flex flex-row">
          {/* Left Section: Vertical List of Buttons */}
          <div className="w-[40%]">
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
          <div className="w-[60%] pl-20">
            {activeTabContent && isClient && (
              <div className="flex flex-col gap-4">
                <div
                  className="h-80 bg-cover bg-center rounded-2xl"
                  style={{ backgroundImage: `url(${activeTabContent.image})` }}
                ></div>
                <h2 className="text-3xl my-3">{activeTabContent.heading}</h2>
                <p dangerouslySetInnerHTML={{ __html: activeTabContent.paragraph }} className="text-slate-800 font-light text-justify"/>
                {/*}
                <a
                  href={activeTabContent.buttonRoute}
                  className="mt-3"
                >
                  <Button variant="outline" className="px-5 py-6 text-lg font-light">
                    Learn More <FaAngleRight className="mr-2 ml-2 h-4 w-4" />
                  </Button>
                </a> */}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };
  
  export default SerTabs;