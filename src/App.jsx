import React from 'react'
import Section1 from './components/Section1/Section1';
import "remixicon/fonts/remixicon.css";

const App = () => {
  return (
    <div className='overflow'>
      <div className='bg-[url("https://imgs.search.brave.com/vKEFMZtV_9Qsq-HDH-LMHGb4KH9gcXuAjEbEZdptVJM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDEzNTQy/NjU5LmpwZw")] bg-cover bg-center bg-no-repeat bg-fixed h-screen w-screen blur-xs absolute z-[-1] brightness-50'></div>
      <Section1 />
    </div>
  )
}

export default App