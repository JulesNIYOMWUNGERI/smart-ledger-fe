import Button from '@/app/components/Button/Button';
import InputField from '@/app/components/InputField/InputField';
import React from 'react'
import { FaRegUserCircle } from 'react-icons/fa';
import { TbLockPassword } from 'react-icons/tb';
import { MdOutlineEmail } from "react-icons/md";
import { FaPhoneSquare } from "react-icons/fa";

const inputFieldStylingProps = {
  container: {
    className: 'flex flex-col space w-full pt-2',
  },
  inputlabel: {
    className:
      'text-[14px] leading-[19.12px] font-[600] font-manrope text-black ml-[1px]',
  },
  input: {
    className:
      'py-3 px-2 border-b-[2px] focus:outline-none border-0 border-b-[#636C75] bg-transparent mt-2 border border-gray-300 text-[#636C75] placeholder:text-gray-600',
  },
};

const Register = () => {
  return (
    <div className="relative min-h-screen bg-white">
      <div
        className="absolute top-[-35%] left-[-17%] w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[600px] bg-[#FFA500] -rotate-65"
        style={{ transform: "rotate(-35deg)" }}
      ></div>

      <div className="relative z-10 p-10 text-center h-[100vh] w-full flex flex-col justify-center items-center">
        <div className='w-1/3 flex flex-col justify-center items-center gap-4 mt-20'>

            <div className='w-[90%] p-5 bg-[#F6DCAA] flex flex-col justify-center items-center rounded-[10%]'>
                <div className='flex flex-col mb-4'>
                    <h1 className="text-3xl font-bold text-[#636C75]">Sign up</h1>
                    <div className='w-full h-1 bg-[#FFA500]'></div>
                </div>
                <div className="relative w-full h-[70px] flex flex-col justify-start items-center">
                    <FaRegUserCircle className='absolute right-[5px] top-[30px] pointer-events-none'/>
                    <InputField
                      // value={formik.values.email}
                      placeholder="Full name"
                      required={false}
                      type="test"
                      name="fullName"
                      className="text-xs"
                      // onChange={formik.handleChange}
                      // onBlur={formik.handleBlur}
                      {...inputFieldStylingProps}
                    />
                </div>

                <div className="relative w-full h-[70px] flex flex-col justify-start items-center">
                  <MdOutlineEmail className='absolute right-[5px] top-[30px] pointer-events-none'/>
                  <InputField
                    // value={formik.values.email}
                    placeholder="Email"
                    required={false}
                    type="email"
                    name="email"
                    className="text-xs"
                    // onChange={formik.handleChange}
                    // onBlur={formik.handleBlur}
                    {...inputFieldStylingProps}
                  />
                </div>

                <div className="relative w-full h-[70px] flex flex-col justify-start items-center">
                  <FaPhoneSquare className='absolute right-[5px] top-[30px] pointer-events-none'/>
                  <InputField
                    // value={formik.values.email}
                    placeholder="Phone number"
                    required={false}
                    type="email"
                    name="email"
                    className="text-xs"
                    // onChange={formik.handleChange}
                    // onBlur={formik.handleBlur}
                    {...inputFieldStylingProps}
                  />
                </div>

                <div className="relative w-full h-[70px] flex flex-col justify-start items-center">
                  <TbLockPassword className='absolute right-[5px] top-[30px] pointer-events-none'/>
                  <InputField
                    // value={formik.values.email}
                    placeholder="Password"
                    required={false}
                    type="password"
                    name="password"
                    className="text-xs"
                    // onChange={formik.handleChange}
                    // onBlur={formik.handleBlur}
                    {...inputFieldStylingProps}
                  />
                </div>

                <div className='mb-5 w-1/3'>
                   <Button
                        isDisabled={false}
                        LoaderStyle='animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-black'
                        styling='bg-[#FFA500] font-manrope text-[15px] leading-[24.59px] font-[600] text-[#636C75] py-[8px] px-4 rounded-[50px] w-full'
                        value='sign up'
                    />
                </div>

            </div>
        </div>
      </div>

    </div>
  )
}

export default Register;
