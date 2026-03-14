import React from 'react'
import Yuji from './Yuji'
import Gojo from './Gojo'
import Sukuna from './Sukuna'

const rightContentCard = () => {
  return (
    <div>
        <div className='h-5/6 p-5 m-5 rounded-xl flex justify-between'>
            <p className='text-white text-xl font-bold flex'>3 Strongest Characters Ever Existed</p>
            <p className='text-white text-xl font-bold flex'>Caution: Till Modulo</p>
    </div>
    <div>
        <div className='flex justify-between'>
            <Yuji />
            <Gojo />
            <Sukuna />
        </div>
    </div>
    </div>
    
  )
}

export default rightContentCard