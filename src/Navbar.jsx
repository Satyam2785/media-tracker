import React from 'react'

const Navbar = () => {
  return (
    <header className='flex justify-between items-center mb-10 px-5 py-3'>
        <div>
            <h1 className='text-3xl font-bold'>
                TOP MEDIAS IN EACH CATEGORY
            </h1>
            <p className='text-gray-500 text-sm mt-1'>
                manage your movies, series, manga and manhwa
            </p>
        </div>
        <button className='bg-blue-600 hover:bg-blue-500 px-6 py-2.5 rounded-xl font-bold transition duration-500 ' >+ ADD</button>

    </header>
  )
}

export default Navbar