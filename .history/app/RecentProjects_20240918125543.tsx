import React from 'react'

const RecentProjects = () => {
  return (
    <div className="flex flex-col mx-20">
        <div>
            <h3 className="text-4xl mt-10 text-slate-800 px-64 text-center">Recent projects carried out by Euroconsult</h3>
            <p className="text-slate-800 font-light text-center mt-5">Experimental and transformational sales & leadership training</p>
        </div>
        <div className="flex flex-row gap-5 my-5 mt-10 items-center justify-center">
        <div className="w-1/2 flex flex-col gap-3 border-[1px] border-gray-200 rounded-2xl p-10">
        <div><div className="bg-gray-100 inline-flex w-auto border-gray-200 border-[1px] rounded-full px-2 py-1 text-sm text-blue-700 font-light">Water & Sewerage</div></div>
        <h3 className="font-light text-slate-800 text-2xl">KWSSIP SOP-2 Group-4</h3>
        <p className="font-light text-slate-800 text-justify">Euroconsult led the implementation of SOP-2 in the Karachi Water and Sewerage Services Improvement Project (KWSSIP), focusing on enhancing infrastructure and capacity building. Our efforts supported sustainable water supply improvements and operational reforms to strengthen Karachi's water and sanitation services.</p>
        <a href="#" >Learn More</a>
        </div>
        <div className="w-1/2 flex flex-col gap-3 border-[1px] border-gray-200 rounded-2xl p-10">
        <div><div className="bg-gray-100 w-auto inline-flex border-gray-200 border-[1px] rounded-full px-2 py-1 text-sm text-blue-700 font-light">Hydropower & Energy</div></div>
        <h3 className="font-light text-slate-800 text-2xl">Pindiali Small Dam</h3>
        <p className="font-light text-slate-800">Euroconsult was engaged by the KPK Government for the Pindiali Small Dam project, delivering specialized design and construction services. This initiative aimed to enhance water storage capacity and improve irrigation infrastructure, supporting sustainable water management and boosting agricultural productivity in the region.</p>
        <a href="#" >Learn More</a>
        </div>     
        </div>
        <div className="flex flex-row gap-5 items-center justify-center">
        <div className="flex flex-col gap-3 border-[1px] border-gray-200 rounded-2xl p-10">
        <div><div className="bg-gray-100 inline-flex w-auto border-gray-200 border-[1px] rounded-full px-2 py-1 text-sm text-blue-700 font-light">Construction</div></div>
        <h3 className="font-light text-slate-800 text-2xl">Citibank Karachi</h3>
        <p className="font-light text-slate-800">Euroconsult provided comprehensive services for the SITE, Phase I Building project for CITIBANK Karachi, including feasibility studies, surveys, design, project management, and cost management. Our role ensured efficient planning and execution, contributing to the successful development of a key commercial infrastructure in Karachi.</p>
        <a href="#" >Learn More</a>
        </div>
        <div className="flex flex-col gap-3 border-[1px] border-gray-200 rounded-2xl p-10">
        <div><div className="bg-gray-100 w-auto inline-flex border-gray-200 border-[1px] rounded-full px-2 py-1 text-sm text-blue-700 font-light">Hydropower & Energy</div></div>
        <h3 className="font-light text-slate-800 text-2xl">Sales & Business Development</h3>
        <p className="font-light text-slate-800">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae harum recusandae iusto rem sapiente qui voluptatem enim rerum, obcaecati neque asperiores possimus tempora, numquam consequuntur voluptatum? Earum porro eaque magnam!</p>
        <a href="#" >Learn More</a>
        </div>     
        </div>
        
    </div>
  )
}

export default RecentProjects