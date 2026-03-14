import React from 'react'

const Navbar = () => {
  return (
    <div className='justify-between flex px-10 py-5 uppercase font-bold'>
        <h3 className="text-white rounded-full w-1/12 flex items-center justify-center h-[50] py-2 font-bold text-4xl">呪術廻戦</h3>
        <div className='flex gap-5 text-lg'>
          <a href="https://www.linkedin.com/in/beinggojo/"><i className="ri-linkedin-fill text-white"></i></a>
          <a href="https://github.com/joy-sengupta"><i className="ri-github-fill text-white flex"></i> </a>
        <h3 className="text-white">
          Developed By Joy Sengupta
        </h3>
        </div>
    </div>
  )
}

export default Navbar