import React from 'react'

const Gojo = () => {
  return (
    <div className='flex-col p-4 m-5 w-90 h-[72vh] rounded-2xl'>
        <div className='h-full w-full rounded-2xl relative'>
        <img src="https://i.pinimg.com/736x/02/a9/bb/02a9bb60612a7e3a311c4f9c022bcf81.jpg" className='object-cover h-full w-full rounded-2xl'/>
        <div className='absolute top-0 left-0 h-full w-full flex flex-col rounded-2xl justify-between p-5'>
                <h3 className='text-white text-xl font-bold bg-black rounded-full w-12 h-12 flex justify-center items-center'>2.</h3>
                <div className='bg-white/50 backdrop-blur-xs p-5 justify-center items-center flex rounded-full border border-black'>
                    <h3 className='text-gray-900 text-3xl font-bold border-color-black uppercase'>Gojo Satoru</h3>
                </div>
            
        </div>
        </div>
    </div>
  )
}

export default Gojo