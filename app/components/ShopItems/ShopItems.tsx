'use client';

import { Button } from 'primereact/button'
import React, { useState } from 'react'
import Card from '../ProductCard/Card'
import { Dialog } from 'primereact/dialog'
import { useFormik } from 'formik';
import InputField from '../InputField/InputField';
import { Dropdown } from 'primereact/dropdown';
import { NewItemSchema } from '@/app/utils/validation';

const inputFieldStylingProps = {
    container: {
      className: 'flex flex-col gap-[4px] space w-full pt-2',
    },
    inputlabel: {
      className:
        'text-[14px] leading-[18.12px] font-[700] font-manrope text-[#74858e] ml-[1px]',
    },
    input: {
      className:
        'py-4 px-4 border-[2px] border-[#74858e] outline-none bg-[#ffffff3a] rounded-md border placeholder:text-gray-600',
    },
};

const SHOP_CATEGORIES = [
    {
        name: 'Paid with cash',
        value: 'Paid with cash'
    },
    {
        name: 'Paid with momo',
        value: 'Paid with momo'
    },
    {
        name: 'Debt',
        value: 'Debt'
    },
]

const AllItems = [
    { name: 'Scotch Whiskey.' },
    { name: 'Blended Whiskey.' },
    { name: 'lemon-lime drinks.' },
    { name: 'ginger ale and root beer.' },
    { name: 'orange soda.' },
    { name: 'Frozen vegetables.' },
]

const ShopItems = () => {
  const [isDialogVisible, setIsDialogVisible] = useState(false);

  const formik = useFormik({
      initialValues: {
          itemName: "",
          category: "",
      },
      validationSchema: NewItemSchema,
      onSubmit: async (values) => {
          console.log(values)
      }
  });

  return (
    <div className='w-[79%] flex flex-col gap-4 p-8 overflow-y-auto'>
        <div className='flex flex-col gap-4'>
            <div className='w-full flex justify-between items-center'>
                <h1 className='font-extrabold text-[29px] text-[#71808e]'>Shop Items</h1>

                <Button
                    type="submit"
                    label="Add new item"
                    className="bg-[#fea500] text-[16px] leading-[21.86px] font-[600] text-[#616f70] py-[7px] px-6 rounded-[30px] max-w-[200px]"
                    onClick={() => setIsDialogVisible(true)}
                />
            </div>

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

        <div className='py-8 flex flex-col gap-2'>
            {AllItems?.map((item, index) => (
                <div key={index} className=''>
                    <Card item={item?.name} isEditable={false} />
                </div>
            ))}
        </div>

        <Dialog 
            header="Create Shop"
            visible={isDialogVisible}
            className='md:w-[35%]'
            headerClassName='text-[#198b7b] text-[32px] bg-[#f6dcab] custom-scrollbar'
            modal
            onHide={() => {
                formik?.resetForm();
                setIsDialogVisible(false);
            }}
        >
            <div className='flex flex-col gap-[20px]'>
                <div className="w-full flex flex-col">
                    <InputField
                        value={formik.values.itemName}
                        placeholder="Enter item name"
                        required={false}
                        type="text"
                        name="itemName"
                        className="text-xs"
                        label="Item name"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        {...inputFieldStylingProps}
                    />
                    {formik.touched.itemName && formik.errors.itemName ? (
                        <p className="flex px-[3px] text-[9px] text-center text-red-600 self-stretch">
                            {formik.errors.itemName}
                        </p>
                    ) : null}
                </div>
                <div className="w-full flex flex-col">
                    <h1 className='text-[14px] leading-[18.12px] font-[700] font-manrope text-[#74858e] ml-[1px] mb-1'>Category</h1>
                    <Dropdown
                        value={formik.values.category}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        name="category"
                        options={SHOP_CATEGORIES}
                        optionLabel="name"
                        placeholder="Select category"
                        className="w-full border-[2px] border-[#74858e] bg-[#ffffff3a] placeholder:text-gray-600"
                    />
                    {formik.touched.category && formik.errors.category ? (
                        <p className="flex px-[3px] text-[9px] text-center text-red-600 self-stretch">
                            {formik.errors.category}
                        </p>
                    ) : null}
                </div>
            
                <div className='w-full flex justify-center items-center'>
                    <Button
                        onClick={() => formik.handleSubmit()}
                        type="submit"
                        label="Submit"
                        className="bg-[#fea500] text-[14px] leading-[21.86px] font-[600] text-[#646d74] py-[10px] pr-4 pl-2 rounded-full w-[150px] mt-4"
                    />
                </div>
            </div>
        </Dialog>
    </div>
  )
}

export default ShopItems