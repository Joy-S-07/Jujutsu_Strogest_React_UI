import React from 'react'
import HeroText from './HeroText'
import Arrow from './Arrow'

const LeftContent = () => {
  return (
    <div className='w-2/5 flex flex-col justify-between'>
        <HeroText />
        <Arrow />
    </div>
  )
}

export default LeftContent