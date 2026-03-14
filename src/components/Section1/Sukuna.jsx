import React from 'react'

const Sukuna = () => {
  return (
    <div className='flex-col p-4 m-5 w-90 h-[72vh] rounded-2xl'>
        <div className='h-full w-full rounded-2xl relative'>
        <img src="https://i.redd.it/which-version-of-sukuna-you-like-the-most-v0-vbn1zrrvg7tb1.png?width=1080&format=png&auto=webp&s=ab4c0c5a3383d96e2507b0667c6ec80ba8764a42" className='object-cover h-full w-full rounded-2xl'/>
        <div className='absolute top-0 left-0 h-full w-full flex flex-col rounded-2xl justify-between p-5'>
                <h3 className='text-white text-xl font-bold bg-black rounded-full w-12 h-12 flex justify-center items-center'>3.</h3>
                <div className='bg-white/50 backdrop-blur-xs p-5 justify-center items-center flex rounded-full border border-black'>
                    <h3 className='text-gray-900 text-2xl font-bold border-color-black uppercase'>Ryomen Sukuna</h3>
                </div>
            
        </div>
        </div>
    </div>
  )
}

export default Sukuna