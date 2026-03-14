import React from 'react'

const Yuji = () => {
  return (
    <div className='flex-col p-4 m-5 w-90 h-[72vh] rounded-2xl'>
        <div className='h-full w-full rounded-2xl relative'>
        <img src="https://imgs.search.brave.com/bCNIBNJLokDcrYk65IyGmMNirbDaD4HWoStXtyIslck/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9md21l/ZGlhLmZhbmRvbXdp/cmUuY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDI2LzAzLzA5/MDgzMDQwL2p1anV0/c3Uta2Fpc2VuLW1v/ZHVsby1lbmRpbmct/eXVqaS1zdWt1bmEu/anBnP3dpZHRoPTgw/MCZoZWlnaHQ9NTAw/JnF1YWxpdHk9ODUm/c2hhcnBlbj10cnVl/JmZvcm1hdD13ZWJw/JmFzcGVjdF9yYXRp/bz04MDA6NTAwJmNy/b3A9Y2VudGVy" className='object-cover h-full w-full rounded-2xl'/>
        <div className='absolute top-0 left-0 h-full w-full flex flex-col rounded-2xl justify-between p-5'>
                <h3 className='text-white text-xl font-bold bg-black rounded-full w-12 h-12 flex justify-center items-center'>1.</h3>
                <div className='bg-white/50 backdrop-blur-xs p-5 justify-center items-center flex rounded-full border border-black'>
                    <h3 className='text-gray-900 text-3xl font-bold border-color-black uppercase'>Yuji Itadori</h3>
                </div>
            
        </div>
        </div>
    </div>
  )
}

export default Yuji