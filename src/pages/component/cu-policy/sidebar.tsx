import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Sidebar() {
  return (
    <>
      <div className="grid grid-cols-2 md:hidden ">
        <Link href={"/cu-policy"}>
          <button className="w-full nun font-medium text-[#121212] dark:text-white text-[14px]  bg-white py-[18px] ">
            CU PolicyPro
          </button>
        </Link>

        <Link href={"/recover-policy"}>
          <button className="w-full nun font-medium text-[#121212] dark:text-white text-[14px] bg-[#E5E5E5]  py-[18px] ">
            RecoveryPro
          </button>
        </Link>
      </div>
      <div className="mt-3 md:mt-0 relative px-3 md:px-0">
        <input
          type="text"
          className="bg-[#AEE6F566] font-normal text-[16px] md:text-[14px] rounded-[6px] py-[10px] px-[35px] w-full outline-none"
        />

        <Image
          src={"/assets/svg/bi_search.svg"}
          alt=""
          width={16}
          height={16}
          className="absolute  top-[14px] left-6 md:left-3"
        />
        <Image
          src={"/assets/svg/x-circle.svg"}
          alt=""
          width={24}
          height={24}
          className="absolute  top-[10px] right-6 md:right-3 cursor-pointer"
        />
      </div>

      <div className="mt-3 ">
        <p

          className= "font-normal dark:mt-1 flex justify-between text-[#3076B1] md:text-[#121F2C] text-[14px] py-[12px] px-[16px] cursor-pointer hover:bg-[#eaf1f7] dark:hover:bg-[#0F2B42] dark:bg-[#242424] dark:text-white bg-white border-b-[1px] md:border-0 border-[#f2f2f2] md:rounded-[8px]"
        >
          Chapter 1000: Administrative
          <Image src={"/assets/svg/right.svg"} alt="" width={8} height={8} className="block md:hidden" />
        </p>
        <p className="font-normal dark:mt-1 flex justify-between text-[#3076B1] md:text-[#121F2C] text-[14px] py-[12px] px-[16px] cursor-pointer hover:bg-[#eaf1f7] dark:hover:bg-[#0F2B42] dark:bg-[#242424] dark:text-white bg-white border-b-[1px] md:border-0 border-[#f2f2f2] md:rounded-[8px]">
          Chapter 2000: Operations
          <Image src={"/assets/svg/right.svg"} alt="" width={8} height={8} className="block md:hidden" />
        </p>
        <p className="font-normal dark:mt-1 flex justify-between text-[#3076B1] md:text-[#121F2C] text-[14px] py-[12px] px-[16px] cursor-pointer hover:bg-[#eaf1f7] dark:hover:bg-[#0F2B42] dark:bg-[#242424] dark:text-white bg-white border-b-[1px] md:border-0 border-[#f2f2f2] md:rounded-[8px]">
          Chapter 3000: Accounting
          <Image src={"/assets/svg/right.svg"} alt="" width={8} height={8} className="block md:hidden" />
        </p>
        <p className="font-normal dark:mt-1 flex justify-between text-[#3076B1] md:text-[#121F2C] text-[14px] py-[12px] px-[16px] cursor-pointer hover:bg-[#eaf1f7] dark:hover:bg-[#0F2B42] dark:bg-[#242424] dark:text-white bg-white border-b-[1px] md:border-0 border-[#f2f2f2] md:rounded-[8px]">
          Chapter 4000: Security
          <Image src={"/assets/svg/right.svg"} alt="" width={8} height={8} className="block md:hidden" />
        </p>
        <p className="font-normal dark:mt-1 flex justify-between text-[#3076B1] md:text-[#121F2C] text-[14px] py-[12px] px-[16px] cursor-pointer hover:bg-[#eaf1f7] dark:hover:bg-[#0F2B42] dark:bg-[#242424] dark:text-white bg-white border-b-[1px] md:border-0 border-[#f2f2f2] md:rounded-[8px]">
          Chapter 5000: Asset/Liability Management
          <Image src={"/assets/svg/right.svg"} alt="" width={8} height={8} className="block md:hidden" />
        </p>
        <p className="font-normal dark:mt-1 flex justify-between text-[#3076B1] md:text-[#121F2C] text-[14px] py-[12px] px-[16px] cursor-pointer hover:bg-[#eaf1f7] dark:hover:bg-[#0F2B42] dark:bg-[#242424] dark:text-white bg-white border-b-[1px] md:border-0 border-[#f2f2f2] md:rounded-[8px]">
          Chapter 6000: Investments
          <Image src={"/assets/svg/right.svg"} alt="" width={8} height={8} className="block md:hidden" />
        </p>
        <p className="font-normal dark:mt-1 flex justify-between text-[#3076B1] md:text-[#121F2C] text-[14px] py-[12px] px-[16px] cursor-pointer hover:bg-[#eaf1f7] dark:hover:bg-[#0F2B42] dark:bg-[#242424] dark:text-white bg-white border-b-[1px] md:border-0 border-[#f2f2f2] md:rounded-[8px]">
          Chapter 7000: Lending
          <Image src={"/assets/svg/right.svg"} alt="" width={8} height={8} className="block md:hidden" />
        </p>
        <p className="font-normal dark:mt-1 flex justify-between text-[#3076B1] md:text-[#121F2C] text-[14px] py-[12px] px-[16px] cursor-pointer hover:bg-[#eaf1f7] dark:hover:bg-[#0F2B42] dark:bg-[#242424] dark:text-white bg-white border-b-[1px] md:border-0 border-[#f2f2f2] md:rounded-[8px]">
          Chapter 8000: Other Real Estate Owned (OREO)
          <Image src={"/assets/svg/right.svg"} alt="" width={8} height={8} className="block md:hidden" />
        </p>
        <p className="font-normal dark:mt-1 flex justify-between text-[#3076B1] md:text-[#121F2C] text-[14px] py-[12px] px-[16px] cursor-pointer hover:bg-[#eaf1f7] dark:hover:bg-[#0F2B42] dark:bg-[#242424] dark:text-white bg-white border-b-[1px] md:border-0 border-[#f2f2f2] md:rounded-[8px]">
          Chapter 9000: Federal Regulations
          <Image src={"/assets/svg/right.svg"} alt="" width={8} height={8} className="block md:hidden" />
        </p>
        <p className="font-normal dark:mt-1 flex justify-between text-[#3076B1] md:text-[#121F2C] text-[14px] py-[12px] px-[16px] cursor-pointer hover:bg-[#eaf1f7] dark:hover:bg-[#0F2B42] dark:bg-[#242424] dark:text-white bg-white border-b-[1px] md:border-0 border-[#f2f2f2] md:rounded-[8px]">
          Chapter 10000: Records Retention
          <Image src={"/assets/svg/right.svg"} alt="" width={8} height={8} className="block md:hidden" />
        </p>
        <p className="font-normal dark:mt-1 flex justify-between text-[#3076B1] md:text-[#121F2C] text-[14px] py-[12px] px-[16px] cursor-pointer hover:bg-[#eaf1f7] dark:hover:bg-[#0F2B42] dark:bg-[#242424] dark:text-white bg-white border-b-[1px] md:border-0 border-[#f2f2f2] md:rounded-[8px]">
          Chapter 11000: Fair Credit Reporting Act
          <Image src={"/assets/svg/right.svg"} alt="" width={8} height={8} className="block md:hidden" />
        </p>
      </div>
    </>
  );
}
