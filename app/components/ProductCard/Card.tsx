import React from 'react';
import { MdOutlineModeEdit } from "react-icons/md";
import { RiDeleteBinFill } from "react-icons/ri";
import { IoMdMore } from "react-icons/io";

type Props = {
    item: string;
    isEditable: boolean;
    onSelect?: any
}

const Card = ({ item, isEditable, onSelect }: Props ) => {
  return (
    <div className='w-full p-4 bg-[#f6dcab] rounded-sm'>
        <div className='flex justify-between items-center'>
            <h1 className='font-bold text-[#008080]'>{item}</h1>

            {!isEditable && (<div className='flex gap-4'>
                <MdOutlineModeEdit style={{ height: '21px', width: '21px' }} />
                <RiDeleteBinFill style={{ height: '20px', width: '20px' }} />
            </div>)}
            {isEditable && (
                <div 
                    onClick={() => onSelect()} 
                    className='flex gap-4 cursor-pointer'
                >
                    <IoMdMore 
                        style={{ height: '21px', width: '21px' }} 
                    />
                </div>
            )}
        </div>
    </div>
  )
}

export default Card