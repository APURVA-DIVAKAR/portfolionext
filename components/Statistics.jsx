

import React from 'react'

const Statistics = () => {
  return (
    <div id='statistics' className='w-full lg:h-screen p-2'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
        Statistics
        </p>
        <h2 className='py-4'>What I Have Done So Far</h2>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-8'>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <h2 >1200+</h2>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Hours of Full-Stack Coding</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <h2>454+</h2>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Git contribution</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <h2>100+</h2>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Hours of soft skill sessions</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <h2>2+</h2>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Full-Stack Projects</h3>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Statistics