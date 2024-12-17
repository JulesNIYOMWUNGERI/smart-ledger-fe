"use client";

import Button from "./components/Button/Button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-white">
      <div
        className="absolute top-[-35%] left-[-17%] w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[600px] bg-[#FFA500] -rotate-65"
        style={{ transform: "rotate(-35deg)" }}
      ></div>

      <div className="relative z-10 p-10 text-center h-[100vh] w-full flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold text-[#636C75]">Welcome to Sales Flow</h1>
        <p className="mt-4 md:w-1/2 sm:w-[70%] w-[95%] text-[#636C75]">Welcome to Sales Flow—the ultimate solution for managing your products and boosting productivity.</p>

        <div className="md:w-1/3 sm:w-[70%] w-[90%] flex flex-col gap-3 justify-center items-center">
          <Link className="w-full" href={`/login`}>
            <Button
              isDisabled={false}
              LoaderStyle='animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-black'
              styling='bg-[#FFA500] mt-[50px] font-manrope text-[15px] leading-[24.59px] font-[600] text-[#636C75] py-[8px] px-4 rounded-[50px] w-full'
              value='Login'
            />
          </Link>

          <Link className="w-full" href={`/register`}>
            <Button
              isDisabled={false}
              LoaderStyle='animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-black'
              styling='bg-transparent border-2 border-[#FFA500] font-manrope text-[15px] leading-[24.59px] font-[600] text-[#636C75] py-[6px] px-4 rounded-[50px] w-full'
              value='Register'
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
