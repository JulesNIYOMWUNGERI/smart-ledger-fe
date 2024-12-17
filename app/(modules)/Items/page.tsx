'use client';

import InputField from '@/app/components/InputField/InputField'
import Card from '@/app/components/ProductCard/Card'
import { SellProductSchema } from '@/app/utils/validation';
import { useFormik } from 'formik'
import { Button } from 'primereact/button'
import { Dialog } from 'primereact/dialog';
import { Dropdown } from 'primereact/dropdown';
import React, { useState } from 'react'

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

const PAYMENT_STATUS = [
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

const Items = [
    { id: '1', name: 'Scotch Whiskey.' },
    { id: '2', name: 'Blended Whiskey.' },
    { id: '3', name: 'lemon-lime drinks.' },
    { id: '4', name: 'ginger ale and root beer.' },
    { id: '5', name: 'orange soda.' },
    { id: '6', name: 'Frozen vegetables.' },
    { id: '7', name: 'ginger ale and root beer.' },
    { id: '8', name: 'orange soda.' },
    { id: '9', name: 'Frozen vegetables.' },
    { id: '10', name: 'ginger ale and root beer.' },
    { id: '11', name: 'orange soda.' },
    { id: '12', name: 'Frozen vegetables.' },
    { id: '13', name: 'ginger ale and root beer.' },
    { id: '14', name: 'orange soda.' },
    { id: '15', name: 'Frozen vegetables.' },
    { id: '16', name: 'ginger ale and root beer.' },
    { id: '17', name: 'orange soda.' },
    { id: '18', name: 'Frozen vegetables.' },
]

const AllItems = () => {
  const [isDialogVisible, setIsDialogVisible] = useState(false);
  const [isProductNew, setIsProductNew] = useState(false);

  const formatWithCommas = (value: any) => {
    // Remove all non-numeric characters (except periods if you allow decimals)
    const numericValue = value.replace(/\D/g, "");
    // Format the number with commas
    return numericValue.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const formik = useFormik({
    initialValues: {
      productName: "",
      amount: "",
      paymentStatus: ""
    },
    validationSchema: SellProductSchema,
    onSubmit: async (values) => {
      console.log(values)
    }
  });

  const handleAddNewProduct = () => {
    setIsProductNew(true);
    setIsDialogVisible(true);
  }

  const handleSelectProduct = (id: string) => {
    setIsProductNew(false);
    const product = Items?.find((i) => i?.id === id);

    formik?.setValues({
        productName: product ? product.name : "",
        amount: "",
        paymentStatus: ""
    });

    setIsDialogVisible(true);
  }

  return (
    <div className='w-full flex flex-col gap-4 p-8 overflow-y-auto'>
        <div className='flex flex-col gap-4'>
            <div className='w-full flex justify-between items-center'>
                <Button
                    type="submit"
                    label="Add new item"
                    className="bg-[#fea500] text-[16px] leading-[21.86px] font-[600] text-[#616f70] py-[7px] px-6 rounded-[30px] max-w-[200px]"
                    onClick={() => handleAddNewProduct()}
                />
            </div>
        </div>

        <div className='py-8 flex flex-wrap gap-2 w-full'>
            {Items?.map((item, index) => (
                <div key={index} className='md:w-[49.4%] w-full'>
                    <Card item={item?.name} isEditable={true} onSelect={() => handleSelectProduct(item?.id)} />
                </div>
            ))}
        </div>

        <Dialog 
            header={!isProductNew ? formik?.values?.productName : "New product"}
            visible={isDialogVisible}
            className='md:w-[35%]'
            headerClassName='text-[#198b7b] text-[32px] bg-[#f6dcab]'
            modal
            onHide={() => {
                formik?.resetForm();
                setIsDialogVisible(false);
            }}
        >
            <div className='flex flex-col gap-[20px]'>
                <div className="w-full flex flex-col">
                    <InputField
                        value={formik.values.productName}
                        placeholder="Enter product name"
                        required={false}
                        type="text"
                        name="productName"
                        className="text-xs"
                        label="Product name"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        {...inputFieldStylingProps}
                    />
                    {formik.touched.productName && formik.errors.productName ? (
                        <p className="flex px-[3px] text-[9px] text-center text-red-600 self-stretch">
                            {formik.errors.productName}
                        </p>
                    ) : null}
                </div>
                <div className="w-full flex flex-col">
                    <InputField
                        value={formik.values.amount}
                        placeholder="Enter amount"
                        required={false}
                        moneyIcon
                        type="text"
                        name="amount"
                        className="text-xs"
                        label="Amount"
                        // onChange={formik.handleChange}
                        onChange={(e) => {
                            const formattedValue = formatWithCommas(e.target.value);
                            formik.setFieldValue("amount", formattedValue);
                        }}
                        onBlur={formik.handleBlur}
                        {...inputFieldStylingProps}
                    />
                    {formik.touched.amount && formik.errors.amount ? (
                        <p className="flex px-[3px] text-[9px] text-center text-red-600 self-stretch">
                            {formik.errors.amount}
                        </p>
                    ) : null}
                </div>
                <div className="w-full flex flex-col">
                    <h1 className='text-[14px] leading-[18.12px] font-[700] font-manrope text-[#74858e] ml-[1px] mb-1'>Payment status</h1>
                    <Dropdown
                        value={formik.values.paymentStatus}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        name="paymentStatus"
                        options={PAYMENT_STATUS}
                        optionLabel="name"
                        placeholder="Select payment status"
                        className="w-full border-[2px] border-[#74858e] bg-[#ffffff3a] placeholder:text-gray-600"
                    />
                    {formik.touched.paymentStatus && formik.errors.paymentStatus ? (
                        <p className="flex px-[3px] text-[9px] text-center text-red-600 self-stretch">
                            {formik.errors.paymentStatus}
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

export default AllItems