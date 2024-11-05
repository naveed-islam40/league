import Image from 'next/image'
import React from 'react'

export default function SidebarBcp() {
  return (
    <>
       <div className="relative">
            <input
              type="text"
              className="bg-[#AEE6F566] font-normal text-[16px] md:text-[14px] rounded-[6px] py-[10px] px-[35px] w-full outline-none"
            />

            <Image
              src={"/assets/svg/bi_search.svg"}
              alt=""
              width={16}
              height={16}
              className="absolute  top-[14px] left-3"
            />
            <Image
              src={"/assets/svg/x-circle.svg"}
              alt=""
              width={24}
              height={24}
              className="absolute  top-[10px] right-3 cursor-pointer"
            />
          </div>

          <div className="mt-3 ">
              <p className="font-normal text-[#121F2C] dark:text-white text-[14px] py-[12px] px-[16px] cursor-pointer dark:bg-[#242424] dark:hover:bg-[#0F2B42] hover:bg-[#eaf1f7] rounded-[8px]">
              1100: Incident Management
              </p>
            <p className="font-normal dark:bg-[#242424] dark:hover:bg-[#0F2B42] dark:text-white dark:mt-1 text-[#121F2C] text-[14px] py-[12px] px-[16px] cursor-pointer hover:bg-[#eaf1f7] rounded-[8px]">
            1200: Business Consultancy Plan
            </p>
            <p className="font-normal dark:bg-[#242424] dark:hover:bg-[#0F2B42] dark:text-white dark:mt-1 text-[#121F2C] text-[14px] py-[12px] px-[16px] cursor-pointer hover:bg-[#eaf1f7] rounded-[8px]">
            1300: System Recovery
            </p>
            <p className="font-normal dark:bg-[#242424] dark:hover:bg-[#0F2B42] dark:text-white dark:mt-1 text-[#121F2C] text-[14px] py-[12px] px-[16px] cursor-pointer hover:bg-[#eaf1f7] rounded-[8px]">
            1400: Plan Validation and Maintenance
            </p>
            <p className="font-normal dark:bg-[#242424] dark:hover:bg-[#0F2B42] dark:text-white dark:mt-1 text-[#121F2C] text-[14px] py-[12px] px-[16px] cursor-pointer hover:bg-[#eaf1f7] rounded-[8px]">
            1500: Business Impact Analysis
            </p>
            <p className="font-normal dark:bg-[#242424] dark:hover:bg-[#0F2B42] dark:text-white dark:mt-1 text-[#121F2C] text-[14px] py-[12px] px-[16px] cursor-pointer hover:bg-[#eaf1f7] rounded-[8px]">
            6000: Risk Assessment
            </p>
            <p className="font-normal dark:bg-[#242424] dark:hover:bg-[#0F2B42] dark:text-white dark:mt-1 text-[#121F2C] text-[14px] py-[12px] px-[16px] cursor-pointer hover:bg-[#eaf1f7] rounded-[8px]">
            7000: Business Consultancy Policies
            </p>
          </div>
    </>
  )
}
