import React, {useState} from 'react'

const MediaList = () => {
  const status=["ALL","COMPLETED","WATCHING","PLAN TO WATCH"];
      const[activeTab,setActiveTab]=useState("ALL");
  
  return (

    <div>
      <h1 className='text-3xl font-bold ml-2 mt-5' >YOUR MEDIA</h1>
      <div className='w-[45%] h-[8vh] bg-[#0f172a] mt-11 mx-auto rounded-[25px] border border-[#1e293b] flex items-center justify-around'>
          {status.map((stat)=>(
            <button
            key={stat}
            onClick={()=>setActiveTab(stat)}
           className={activeTab==stat?"h-[38px] rounded-[15px] w-[120px] bg-blue-600 text-white font-semibold text-sm shadow-lg shadow-blue-600/30":"h-[38px] rounded-[15px] w-[120px] border border-transparent hover:border-gray-300 text-gray-400  font-semibold text-sm transition duration-500"}
           >
              {stat}
            </button>
          ))}
      </div>
    </div>
  )
}

export default MediaList