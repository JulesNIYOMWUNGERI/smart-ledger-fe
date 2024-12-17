import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full h-[80px] bg-[#fea500] flex items-center px-12'>
        <div className='w-full flex items-center justify-between'>
            <div className='flex justify-between items-center w-1/2'>
                <div>
                    <h1 className='text-[25px] font-bold text-[#000000]'>LOGO</h1>
                </div>
                <div className='flex justify-center items-center gap-5'>
                    <h1 className='text-[12px] font-semibold text-[#ffffff]'>Home</h1>
                    <h1 className='text-[12px] font-semibold text-[#ffffff]'>About</h1>
                    <h1 className='text-[12px] font-semibold text-[#ffffff]'>Contact us</h1>
                    <h1 className='text-[12px] font-semibold text-[#ffffff]'>Terms & Conditions</h1>
                </div>
            </div>
            <div className='flex'>
                <div className='bg-[#c4c4c4] w-[50px] h-[50px] rounded-full'>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar;
