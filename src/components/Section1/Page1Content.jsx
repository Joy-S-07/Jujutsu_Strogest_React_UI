import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './rightContent'

const Page1Content = () => {
  return (
    <div className='gap-10 px-10 py-5 h-[90vh] flex'>
            <LeftContent />
            <RightContent />
    </div>
  )
}

export default Page1Content