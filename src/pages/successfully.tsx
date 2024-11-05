import React from "react";
import Image from "next/image";
import Link from "next/link";
import Doc from "../../public/assets/png/docu.png";


export default function Successfully() {
  return (
    <>
          <div className="grid lg:grid-cols-2 h-screen">
      <div className="hidden lg:block bg-[#EEF5FF]">
        <div className="w-[90%] 2xl:w-[50%] mx-auto">
          <p className="font-bold text-[#3076B1] text-[35px] xl:text-[45px] leading-[55px] pt-16 2xl:pt-36">
            Navigating Regulations, <br /> Securing Member Trust
          </p>

          <div className="flex gap-10 mt-10 xl:mt-14">
            <div className="flex gap-3">
              <Image
                src={"/assets/svg/Vector.svg"}
                alt=""
                width={24}
                height={24}
              />
              <p className="font-normal text-[#121F2C] text-[20px] xl:text-[24px]">
                Research
              </p>
            </div>
            <div className="flex gap-3">
              <Image
                src={"/assets/svg/Vector3.svg"}
                alt=""
                width={24}
                height={24}
              />
              <p className="font-normal text-[#121F2C] text-[20px] xl:text-[24px]">
                Update
              </p>
            </div>
            <div className="flex gap-3">
              <Image
                src={"/assets/svg/Vector2.svg"}
                alt=""
                width={24}
                height={24}
              />
              <p className="font-normal text-[#121F2C] text-[20px] xl:text-[24px]">
                Comply
              </p>
            </div>
          </div>

          <Image
            src={Doc}
            alt=""
            className="mb-5 w-[58%]"
          />
        </div>
      </div>

      <div className="flex pt-20 bg-white">

        <div className="w-[70%] xl:w-[60%] 2xl:w-[40%] mx-auto">
          <Image
            src={"/assets/svg/logo.svg"}
            alt=""
            width={225}
            height={32}
            className="mx-auto"
          />

          <Image
            src={"/assets/svg/Group.svg"}
            alt=""
            width={98}
            height={98}
            className="mx-auto mt-28"
          />

          <p className="font-normal text-[#121F2C] text-[14px] text-center mt-8">
            Your password has been changed successfully.
          </p>

          <Link href="/login">
            <button
              type="submit"
              className="font-semibold text-white text-[14px] bg-[#3076B1] hover:bg-[#18459D] rounded-[6px] p-[14px] w-full mt-10 uppercase"
            >
              Login
            </button>
          </Link>
        </div>
      </div>
    </div>
    </>
  )
}

