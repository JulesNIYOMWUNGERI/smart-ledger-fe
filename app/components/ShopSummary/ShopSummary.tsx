'use client';

import React, { useState } from 'react'
import Table from '../table/table'

const ShopSummary = () => {
  const [currentTab, setCurrentTab] = useState(0);
  const [productData, setProductData] = useState([
    { employeeName: 'Kalisa jean', productName: 'Vodka', quantity: '5', price: '60000', total: '300000' },
    { employeeName: 'Kalisa jean', productName: 'Vodka', quantity: '5', price: '60000', total: '300000' },
    { employeeName: 'Kalisa jean', productName: 'Vodka', quantity: '5', price: '60000', total: '300000' },
    { employeeName: 'Kalisa jean', productName: 'Vodka', quantity: '5', price: '60000', total: '300000' },
    { employeeName: 'Kalisa jean', productName: 'Vodka', quantity: '5', price: '60000', total: '300000' },
    { employeeName: 'Kalisa jean', productName: 'Vodka', quantity: '5', price: '60000', total: '300000' },
    { employeeName: 'Kalisa jean', productName: 'Vodka', quantity: '5', price: '60000', total: '300000' },
  ]);

  const totalPrice = productData.reduce((accumulator, item) => {
    return accumulator + Number(item.total);
  }, 0);

  const handleSwitchPage = (tab: number) => {
    setCurrentTab(tab)
  }
  
  const columns = [
    {field: 'employeeName', header: 'Employee name'},
    {field: 'productName', header: 'Product name'},
    {field: 'quantity', header: 'Quantity'},
    {field: 'price', header: 'Price'},
    {field: 'total', header: 'Total'}
  ];

  return (
    <div className='w-[79%] flex flex-col gap-4 p-8 overflow-y-auto'>
        <div className='flex flex-col gap-4'>
            <h1 className='font-extrabold text-[29px] text-[#71808e]'>Shop summary</h1>

            <p className='font-bold text-[#656c73] text-[16px] text-justify'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Sed do eiusmod tempor incididunt ut labore et dolore 
                magna aliqua. Ut enim ad minim veniam, quis nostrud 
                exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                consequat. Duis aute irure dolor in reprehenderit in voluptate 
                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur 
                sint occaecat cupidatat non proident, sunt in culpa qui 
                officia deserunt mollit anim id est laborum.
            </p>
        </div>

        <div className='w-full flex gap-8 py-2 px-4 bg-[#f6f6f6] rounded-sm'>
            <div className='flex flex-col cursor-pointer' onClick={() => handleSwitchPage(0)}>
                <h1 className='text-[#008080] font-bold text-[16px] text-justify'>Sold products</h1>
                {currentTab === 0 && (<div className='h-1 self-stretch bg-[#fea500] rounded-sm' />)}
            </div>
            <div className='flex flex-col cursor-pointer' onClick={() => handleSwitchPage(1)}>
                <h1 className='text-[#008080] font-bold text-[16px] text-justify'>Overview</h1>
                {currentTab === 1 && (<div className='h-1 self-stretch bg-[#fea500] rounded-sm' />)}
            </div>
        </div>

        <div className='bg-[#f6dcab] py-8 px-4 rounded-lg'>
            <Table
                columns={columns}
                data={productData}
            />

            <div className='w-full pt-6 px-6'>
                <h1>
                    <span className='text-[#008080] font-extrabold text-[16px]'>Over all Total:{" "}</span>
                    <span className='text-[#008080] font-extrabold text-[16px]'>{totalPrice}</span>
                </h1>
            </div>
        </div>
    </div>
  )
}

export default ShopSummary