import React from 'react'

const Sidebar = ({setpage}) => {
  return (
    <div className='flex flex-col w-64 h-screen bg-[#161b22] sticky top-0 p-6 border-r border-gray-500 '>
        <h2 className='font-bold text-xl'>MEDIA TRACKER</h2>
        <p className='text-sm text-gray-500 mt-15  '>MENU</p>
        <button
        onClick={()=>setpage("home")}
        className='flex items-center justify-center p-3 bg-blue-400/10 text-blue-500 rounded-xl border border-blue-600/20 mt-3'
        >DASHBOARD</button>
        <button
        onClick={()=>setpage("list")}
        className='flex items-center justify-center p-3 hover:bg-gray-800 text-blue-500 rounded-xl  mt-3'
        >MY MEDIA LIST</button>
    </div>
  )
}

export default Sidebar