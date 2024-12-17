import { Button } from 'primereact/button'
import React, { useState } from 'react'
import Table from '../table/table'
import { useFormik } from 'formik';
import { Dialog } from 'primereact/dialog';
import InputField from '../InputField/InputField';
import { NewEmployeeSchema } from '@/app/utils/validation';

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

const Employees = () => {
  const [isDialogVisible, setIsDialogVisible] = useState(false);
  const [employeesData, setEmployeesData] = useState([
    { employeeName: 'Kalisa jean', phoneNumber: '250783928930', date: '25-06-2024' },
    { employeeName: 'Kalisa jean', phoneNumber: '250783928930', date: '25-06-2024' },
    { employeeName: 'Kalisa jean', phoneNumber: '250783928930', date: '25-06-2024' },
    { employeeName: 'Kalisa jean', phoneNumber: '250783928930', date: '25-06-2024' },
    { employeeName: 'Kalisa jean', phoneNumber: '250783928930', date: '25-06-2024' },
    { employeeName: 'Kalisa jean', phoneNumber: '250783928930', date: '25-06-2024' },
    { employeeName: 'Kalisa jean', phoneNumber: '250783928930', date: '25-06-2024' },
  ]);


  const formik = useFormik({
    initialValues: {
        employeeName: "",
        phoneNumber: "",
        password: "",
    },
    validationSchema: NewEmployeeSchema,
    onSubmit: async (values) => {
        console.log(values)
    }
  });

  const columns = [
    {field: 'employeeName', header: 'Employee name'},
    {field: 'phoneNumber', header: 'Phone number'},
    {field: 'date', header: 'Date'}
  ];

  return (
    <div className='w-[79%] flex flex-col gap-4 p-8 overflow-y-auto'>
        <div className='flex flex-col gap-4'>
            <div className='w-full flex justify-between items-center'>
                <h1 className='font-extrabold text-[29px] text-[#71808e]'>Employees</h1>

                <Button
                    type="submit"
                    label="Add employee"
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

        <div className='bg-[#f6dcab] py-8 px-4 rounded-lg'>
            <Table
                columns={columns}
                data={employeesData}
            />
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
                          value={formik.values.employeeName}
                          placeholder="Enter employee name"
                          required={false}
                          type="text"
                          name="employeeName"
                          className="text-xs"
                          label="Employee name"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          {...inputFieldStylingProps}
                      />
                      {formik.touched.employeeName && formik.errors.employeeName ? (
                          <p className="flex px-[3px] text-[9px] text-center text-red-600 self-stretch">
                              {formik.errors.employeeName}
                          </p>
                      ) : null}
                  </div>
                  <div className="w-full flex flex-col">
                      <InputField
                          value={formik.values.phoneNumber}
                          placeholder="Enter phone number"
                          required={false}
                          type="text"
                          name="phoneNumber"
                          className="text-xs"
                          label="Phone number"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          {...inputFieldStylingProps}
                      />
                      {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
                          <p className="flex px-[3px] text-[9px] text-center text-red-600 self-stretch">
                              {formik.errors.phoneNumber}
                          </p>
                      ) : null}
                  </div>
                  <div className="w-full flex flex-col">
                      <InputField
                          value={formik.values.password}
                          placeholder="Enter password"
                          required={false}
                          type="text"
                          name="password"
                          className="text-xs"
                          label="Password"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          {...inputFieldStylingProps}
                      />
                      {formik.touched.password && formik.errors.password ? (
                          <p className="flex px-[3px] text-[9px] text-center text-red-600 self-stretch">
                              {formik.errors.password}
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

export default Employees;
