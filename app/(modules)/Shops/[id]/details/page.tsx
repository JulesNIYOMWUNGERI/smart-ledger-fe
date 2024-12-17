'use client';

import Employees from '@/app/components/Employees/Employees';
import ShopItems from '@/app/components/ShopItems/ShopItems';
import ShopSummary from '@/app/components/ShopSummary/ShopSummary';
import Sidebar from '@/app/components/Sidebar/Sidebar';
import Table from '@/app/components/table/table';
import { useSearchParams } from 'next/navigation';
import React, { useState } from 'react'

const ShopDetails = () => {
  const searchParams = useSearchParams()
  const currentPage = searchParams?.get("currentPage");

  return (
    <div className='flex w-full min-h-[80vh]'>
        <Sidebar />

        {currentPage === 'Shop Summary' && (<ShopSummary />)}
        {currentPage === 'Shop Items' && (<ShopItems />)}
        {currentPage === 'Employees' && (<Employees />)}
    </div>
  )
}

export default ShopDetails;
