import Carousel from '@/app/components/Slider/slider';
import { Button } from 'primereact/button';
import React from 'react'

const AdminHomePage = () => {
  return (
    <div className='h-[74.7vh] bg-[#f6dcab] px-10'>
        <div className='flex w-full justify-center items-center h-full gap-2'>
            <div className='flex flex-col gap-4 py-2 px-1'>
                <h1 className='font-bold text-[40px] text-[#6b848a]'>Smart Ledger</h1>
                <p className='font-bold '>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Sed do eiusmod tempor incididunt ut labore et dolore magna 
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                    ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit 
                    esse cillum dolore .
                </p>
                <div>
                <Button
                    type="submit"
                    label="Start"
                    className="bg-[#fea500] text-[18px] leading-[21.86px] font-[600] text-[#F1FFFF] py-[6px] pr-4 pl-2 rounded-[30px] mt-4 w-[120px]"
                    // loading={isSaving}
                />
                </div>
            </div>
            <div className='flex flex-col mt-20 w-[2000px]'>
                <Carousel />
            </div>
        </div>
    </div>
  )
}

export default AdminHomePage;
