import React, {useEffect, useState} from 'react'
import axios from "axios";


const Card = ({media}) => {

  

  return (
    <div className='grid grid-cols-4 sm:grid-cols-3 xl:grid-cols-5 gap-6'>
        {media.map((move)=>
        (

           <div key={move.id} className='bg-[#1c2128] rounded-2xl border border-gray-800 overflow-hidden hover:border-blue-500/50 mt-6 transition-all duration-500 group'>
            <div className='aspect-[3/4] bg-gray-800 relative overflow-hidden '><img src={move.img} alt="" className='h-full w-full object-cover transition-transform duration-500 group-hover:scale-110 '/>
            
             <div className="
      absolute inset-0
      bg-black/0
      group-hover:bg-black/50
      transition-all duration-300
      flex items-center justify-center
    ">
      <button className='absolute inset-0 m-auto w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-bold text-2xl'>+</button>
    </div>
            </div>
            <div className='p-4'>
                <span className='text-[10px] font-bold uppercase tracking-widest text-blue-500'>{move.type}</span>
                <h3 className='font-bold text-sm truncate text-gray-100 mb-2'>{move.name}</h3>
                <p className='font-bold text-sm truncate text-gray-100 mb-2'>⭐ {move.rating}</p>

            </div>
           </div> 
           
        )
        )}
    </div>
  )
}

export default Card