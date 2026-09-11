import React,{useState} from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import MediaTab from './MediaTab'
import MediaList from './MediaList'
const App = () => {
  const [page,setpage]=useState("home");
  return (
    <div className='flex min-h-screen bg-black text-white'>
        <Sidebar setpage={setpage}/>
        <main className='flex-1 p-8'>
            {page==="home" && <Navbar />}
            {page==="home" && <MediaTab />}
            {page==="list" && <MediaList />}
            
        </main>
        </div>
  )
}

export default App