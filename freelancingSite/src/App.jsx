import { useRef } from 'react'
import DemoCard from './components/DemoCard'
import { motion } from 'framer-motion'

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
      {/* Header */}
      <div className='main w-full p-4 flex justify-center items-center'>
        <div className="links bg-white/10 backdrop-blur-md z-10 flex justify-around items-center gap-5 rounded-lg shadow-lg border-black w-fit py-3 px-6 ">
          <button className='p-2 border rounded-[10px] shadow-lg'>add</button>
          <div className="twitterLinks flex gap-5 px-1 shadow-sm">
            <a href="#"><img className='w-[28px] h-[32px]' src="https://framerusercontent.com/images/6VsfSOtQYSyGYitFmPQcq42SZbs.svg" alt="" /></a>
            <a href="#"><img className='w-[28px] h-[32px]' src="https://framerusercontent.com/images/6VsfSOtQYSyGYitFmPQcq42SZbs.svg" alt="" /></a>
          </div>
          <button className='p-2 text-white bg-black rounded-[10px] shadow-lg'>Follow ME</button>
        </div>
      </div>

      {/* Scroll Section */}
      <div className='relative flex items-center justify-center'>

        {/* Left Button with framer motion */}
        <motion.button
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollLeft}
          className="absolute left-0 z-10 bg-white/20 backdrop-blur-md hover:bg-white/30 text-black font-bold p-2 rounded-full shadow-lg"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </motion.button>

        {/* Scrollable cards */}
        <div
          ref={scrollRef}
          className='centerOne md:ml-6 w-[1490px] whitespace-nowrap overflow-x-auto scroll-smooth scrollbar-hide h-auto border rounded-lg px-2'
        >
          {/* Motion wrapper for cards row */}
          <motion.div
            className='flex gap-4 py-6 min-w-fit'
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {cards}
          </motion.div>
        </div>

        {/* Right Button with framer motion */}
        <motion.button
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollRight}
          className="absolute right-0 z-10 bg-white/20 backdrop-blur-md hover:bg-white/30 text-black font-bold p-2 rounded-full shadow-lg"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </motion.button>
      </div>
    </>
  )
}

export default App
