import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {


  return (
    <>
    <div className='main bg-gray-200 w-full p-4 flex justify-center items-center'>
      <div className="links  flex justify-around items-center gap-5 rounded-lg shadow-lg  border-black w-fit bg-blue py-3 px-6 ">
        <button className='p-2 flex items-center justify-center w-fit h-auto shadow-lg rounded-[10px] border '>add</button>
        <div className="twitterLinks flex gap-5 border-x-2 px-1 border shadow-lg ">
          <a href="#" ><img className='w-[28px] h-[32px] ' src="https://framerusercontent.com/images/6VsfSOtQYSyGYitFmPQcq42SZbs.svg" alt="" /></a>
          <a href="#"><img className='w-[28px] h-[32px] ' src="https://framerusercontent.com/images/6VsfSOtQYSyGYitFmPQcq42SZbs.svg" alt="" /></a>
        </div>
        <button className='p-2 text-white bg-black flex items-center justify-center w-fit h-auto shadow-lg rounded-[10px] border '>Follow ME</button>
      </div>
      
    </div>

    <div className='centerOne w-full h-[500px] border'></div>
    </>
  )
}

export default App
