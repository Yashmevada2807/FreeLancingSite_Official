import { useRef } from 'react'
import DemoCard from './components/DemoCard'
import { motion } from 'framer-motion'
import { Card } from './components/Card'
import { Hero } from './components/Hero'

function App() {
  const scrollRef = useRef(null)

  const scrollLeft = () => {
    const container = scrollRef.current
    if (container.scrollLeft <= 0) {
      container.scrollLeft += container.scrollWidth / 2
    } else {
      container.scrollLeft -= 300
    }
  }

  const scrollRight = () => {
    const container = scrollRef.current
    if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 1) {
      container.scrollLeft -= container.scrollWidth / 2
    } else {
      container.scrollLeft += 300
    }
  }

  // Duplicate cards to fake infinite scroll
  const cards = Array(2).fill([
    <DemoCard key="1" />,
    <DemoCard key="2" />,
    <DemoCard key="3" />,
    <DemoCard key="4" />,
    <DemoCard key="5" />,
  ]).flat()

  return (
    <>
      <div className="w-full min-h-screen bg-gray-100 text-black  flex flex-col items-center px-4 font-inter">


        <Hero/>


        {/* Header */}
        {/* <div className="w-fit flex items-center justify-center max-w-7xl py-6">
          <div className="bg-white/10 backdrop-blur-md z-10 flex flex-wrap justify-center sm:justify-between items-center gap-4 rounded-lg shadow-lg border  p-4">
            <button className="p-2 px-4 border rounded-[10px] shadow-lg bg-white/20 hover:bg-white/30">add</button>
            <div className="flex gap-3 items-center">
              <a href="#"><img className="w-6 h-6" src="https://framerusercontent.com/images/6VsfSOtQYSyGYitFmPQcq42SZbs.svg" alt="" /></a>
              <a href="#"><img className="w-6 h-6" src="https://framerusercontent.com/images/6VsfSOtQYSyGYitFmPQcq42SZbs.svg" alt="" /></a>
            </div>
            <button className="p-2 px-4 text-white bg-black rounded-[10px] shadow-lg">Follow ME</button>
          </div>
        </div> */}

        {/* Scroll Section */}




        <div className="relative w-full ">

          {/* Left Button */}
          <motion.button
            // whileHover={{ scale: 1.2 }}
            // whileTap={{ scale: 0.9 }}
            onClick={scrollLeft}
            className="absolute left-3 top-1/2  z-10 bg-white/50 backdrop-blur-md hover:bg-white/60 p-2 rounded-full shadow-lg"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-black " fill="none" viewBox="0 0 24 24" stroke="currentColor" >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </motion.button>

          {/* Scrollable cards */}
          <div
            ref={scrollRef}
            className="w-full overflow-x-auto whitespace-nowrap scroll-smooth scrollbar-hide  rounded-lg px-2"
          >
            <motion.div
              className="flex gap-4 py-6 min-w-fit"
              initial={{ opacity: 0, y: -25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.4 }}
            >
              {cards.map((card, index) => (
              <div key={index} >
                {card}
              </div>
            ))}
            </motion.div>
          </div>

          {/* Right Button */}
          <motion.button
            // whileHover={{ scale: 1.2 }}
            // whileTap={{ scale: 0.9 }}
            onClick={scrollRight}
            className="absolute right-3 top-1/2  z-10 bg-white/50 backdrop-blur-md hover:bg-white/60 p-2 rounded-full shadow-lg"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 text-black ">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </motion.button>
        </div>
        <Card/>
      </div>
    </>
  )
}

export default App
