import { useState } from 'react'
import DemoCard from './components/DemoCard'

function App() {


  return (
    <>
      <div className='main  w-full p-4 flex justify-center items-center'>
        <div className="links bg-white/10 backdrop-blur-md z-10 flex justify-around items-center gap-5 rounded-lg shadow-lg  border-black w-fit py-3 px-6 ">
          <button className='p-2 flex items-center justify-center w-fit h-auto shadow-lg rounded-[10px] border '>add</button>
          <div className="twitterLinks flex gap-5 px-1  shadow-sm ">
            <a href="#" ><img className='w-[28px] h-[32px] ' src="https://framerusercontent.com/images/6VsfSOtQYSyGYitFmPQcq42SZbs.svg" alt="" /></a>
            <a href="#"><img className='w-[28px] h-[32px] ' src="https://framerusercontent.com/images/6VsfSOtQYSyGYitFmPQcq42SZbs.svg" alt="" /></a>
          </div>
          <button className='p-2 text-white bg-black flex items-center justify-center w-fit h-auto shadow-lg rounded-[10px] border '>Follow ME</button>
        </div>

      </div>

      <div className='centerOne w-full whitespace-nowrap overflow-hidden overflow-x-auto scroll-smooth scrollbar-hide h-auto border '>
        <div className='flex gap-4 px-4 py-6 min-w-fit'>
          <DemoCard />
          <DemoCard />
          <DemoCard />
          <DemoCard />
          <DemoCard />
          <DemoCard />
          <DemoCard />
          <DemoCard />
          <DemoCard />
        </div>
      </div>
    </>
  )
}

export default App
