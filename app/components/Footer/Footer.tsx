import React from 'react'
import { FacebookIcon, InstagramIcon, LinkedInIcon, TwitterIcon } from '../images/Images'

const Footer = () => {
  return (
    <div className='w-full h-[80px] bg-[#fea500] flex items-center px-12'>
        <div className='w-full flex items-center justify-between'>
            <div className='flex justify-between items-center'>
                <div>
                    <h1 className='text-[25px] font-bold text-[#000000]'>LOGO</h1>
                </div>
            </div>
            <div className='flex'>
                <h1 className='text-[14px] font-semibold text-[#ffffff]'>© 2022 - 2025 Smart ledger Inc.</h1>
            </div>
            <div className='flex'>
                <div className='flex'>
                    <LinkedInIcon />
                    <FacebookIcon />
                    <InstagramIcon />
                    <TwitterIcon />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer