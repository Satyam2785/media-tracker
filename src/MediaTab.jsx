import React from 'react'
import { useState } from 'react'

const MediaTab = () => {
    const tabs=["movies","series","anime","manga","manhwa"];
    const[activeTab,setActiveTab]=useState("movies")
  return (
    <div className='w-[45%] h-[8vh] bg-[#0f172a] mx-auto rounded-[25px] border border-[#1e293b] flex items-center justify-around'>
        {tabs.map((tab)=>(
            <button
            key={tab}
            onClick={()=>setActiveTab(tab)}
            className={activeTab==tab?"h-[38px] rounded-[15px] w-[120px] bg-blue-600 text-white font-semibold text-sm shadow-lg shadow-blue-600/30":"h-[38px] rounded-[15px] w-[120px] border border-transparent hover:border-gray-300 text-gray-400  font-semibold text-sm transition duration-500"}
            >
                {tab}
            </button>
        ))}
    </div>
  )  
}

export default MediaTab