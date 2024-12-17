'use client';


import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React from 'react'

const Items = [
    {
        name: 'Shop Summary'
    },
    {
        name: 'Shop Items'
    },
    {
        name: 'Employees'
    },
    {
        name: 'Settings'
    },
]

const Sidebar = () => {
  const currentPath = usePathname();
  const searchParams = useSearchParams()
  const currentPage = searchParams?.get("currentPage");
  const router = useRouter()

  const updateQuery = (searchQuery: string) => {
    const currentQuery = currentPath.includes('?')
      ? currentPath.slice(currentPath.indexOf('?') + 1)
      : '';
  
    const parsedQuery = new URLSearchParams(currentQuery);
  
    const queryParams = new URLSearchParams(parsedQuery);
  
    queryParams.set('currentPage', searchQuery);
  
    const newPath = `${currentPath}?${queryParams.toString()}`;

    router.replace(newPath);
  };

  return (
    <div className='flex flex-col self-stretch bg-[#f6dcab] w-[21%] p-8'>
        <div className='w-full h-full flex flex-col gap-10'>
            <div className='flex flex-col w-auto'>
                <h1 className='font-extrabold text-[25px] text-[#70808f]'>
                    Chez karisa shop
                </h1>
                <div className='h-1 self-stretch bg-[#fea500] rounded-sm'/>
            </div>

            <div className='flex flex-col gap-8'>
                {Items?.map((i, index) => (
                    <div key={index} className='flex cursor-pointer justify-start items-center gap-1' onClick={() => updateQuery(i?.name)}>
                        <h1 className='font-bold text-[20px] text-[#636c72]'>
                            {i?.name}
                        </h1>
                        {currentPage === i?.name && (<div className='h-2 w-2 rounded-full bg-[#fea500]' />)}
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Sidebar;
