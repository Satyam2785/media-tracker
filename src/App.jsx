import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import MediaTab from './MediaTab'
const App = () => {
  return (
    <div className='flex min-h-screen bg-black text-white'>
        <Sidebar />
        <main className='flex-1 p-8'>
            <Navbar />
            <MediaTab />
            
        </main>
        </div>
  )
}

export default App