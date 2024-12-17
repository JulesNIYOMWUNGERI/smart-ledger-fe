'use client';

import { Button } from 'primereact/button'
import React, { useState } from 'react'
import shopImage from '../../../public/supermarket.jpg'
import Image from 'next/image'
import { Dialog } from 'primereact/dialog'
import { NewShopSchema } from '@/app/utils/validation'
import { useFormik } from 'formik'
import InputField from '@/app/components/InputField/InputField'
import axios from 'axios'

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

const ShopList = () => {
  const [isDialogVisible, setIsDialogVisible] = useState(false);
  const [imageUrl, setImageUrl] = useState('');
  const [uploading, setUploading] = useState(false);

  const handleFileChange = async (e: any) => {
    const file = e.target.files[0];
    if (!file) return;
  
    const formData = new FormData();
    formData.append('file', file);
  
    try {
      setUploading(true);
      const response = await axios.post('/api/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
  
      formik?.setFieldValue('shopImage', response.data.url)
      setImageUrl(response.data.url);
      alert('Image uploaded successfully!');
    } catch (err) {
      alert('Error uploading image');
    } finally {
      setUploading(false);
    }
  };
  
  


  const formik = useFormik({
    initialValues: {
        shopName: "",
        location: "",
        description: "",
        shopImage: ""
    },
    validationSchema: NewShopSchema,
    onSubmit: async (values) => {
        console.log(values)
    }
  });


  return (
    <div className='bg-[#ffffff] px-10 pb-20'>
        <div className='flex flex-col w-full gap-4'>
            <Button
                type="submit"
                label="Add new shop"
                onClick={() => setIsDialogVisible(true)}
                className="bg-[#fea500] text-[16px] leading-[21.86px] font-[600] text-[#616f70] py-[7px] px-6 rounded-[30px] mt-4 max-w-[200px]"
            />

            <div className='flex flex-col justify-center items-center w-full gap-4'>
                {[1, 2, 3]?.map((shop: any, index: number) => (
                    <div key={index} className='h-150px bg-[#f6dcab] w-full flex md:flex-row flex-col justify-center items-center gap-8 p-4 rounded-2xl'>
                        <div className='md:w-[25%] self-stretch'>
                            <Image
                                src={shopImage}
                                alt="Supermarket"
                                className="rounded-lg shadow-lg w-full"
                            />
                        </div>
                        <div className='flex flex-col gap-2 justify-center items-start h-full md:w-[75%] self-stretch'>
                            <h1 className='font-extrabold text-[25px] text-[#616f70]'>Shop 1</h1>
                            <p className='text-[#868993] font-[600] text-[15px] text-justify'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Sed do eiusmod tempor incididunt ut labore et dolore magna 
                                aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                                ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                                Duis aute irure dolor in reprehenderit in voluptate velit 
                                esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
                                occaecat cupidatat non proident, sunt in culpa qui officia 
                                deserunt mollit anim id est laborum.
                            </p>
                        </div>
                    </div>
                ))}
            </div>
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
                        value={formik.values.shopName}
                        placeholder="Enter shop name"
                        required={false}
                        type="text"
                        name="shopName"
                        className="text-xs"
                        label="Shop name"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        {...inputFieldStylingProps}
                    />
                    {formik.touched.shopName && formik.errors.shopName ? (
                        <p className="flex px-[3px] text-[9px] text-center text-red-600 self-stretch">
                            {formik.errors.shopName}
                        </p>
                    ) : null}
                </div>
                <div className="w-full flex flex-col">
                    <InputField
                        value={formik.values.location}
                        placeholder="Enter location"
                        required={false}
                        type="text"
                        name="location"
                        className="text-xs"
                        label="Shop location"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        {...inputFieldStylingProps}
                    />
                    {formik.touched.location && formik.errors.location ? (
                        <p className="flex px-[3px] text-[9px] text-center text-red-600 self-stretch">
                            {formik.errors.location}
                        </p>
                    ) : null}
                </div>
                <div className="w-full flex flex-col">
                    <h1 className='text-[14px] leading-[18.12px] font-[700] font-manrope text-[#74858e] ml-[1px] mb-1'>Payment status</h1>
                    <textarea 
                        value={formik.values.description}
                        rows={4}
                        name='description'
                        placeholder='Enter your shop description'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className='py-2 px-4 border-[2px] text-[12px] border-[#74858e] outline-none bg-[#ffffff3a] rounded-md placeholder:text-gray-600'
                    />
                    {formik.touched.description && formik.errors.description ? (
                        <p className="flex px-[3px] text-[9px] text-center text-red-600 self-stretch">
                            {formik.errors.description}
                        </p>
                    ) : null}
                </div>
                <div className='w-[97%] my-2.5'>
                    <input type="file" onChange={handleFileChange} />
                    {uploading && <p>Uploading...</p>}
                    {imageUrl && (
                        <div>
                        <p>Uploaded Image:</p>
                        <img src={imageUrl} alt="Uploaded" width="300" />
                        </div>
                    )}
                    {formik.touched.shopImage && formik.errors.shopImage ? (
                        <p className="flex px-[3px] text-[9px] text-center text-red-600 self-stretch">
                            {formik.errors.shopImage}
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

export default ShopList