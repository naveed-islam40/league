import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/router";
import Doc from "../../public/assets/png/docu.png";
import axios from "axios";
import { toast } from "sonner";

export default function Reset() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const url = "api/v1/request-reset-password";

    try {
      setLoading(true);
      const response = await axios.post(`/api/postRequest`, {
        url,
        method: "POST",
        data: {
          email,
          subDomain: "c_master",
        },
      });
      
      if (response) {
        setLoading(false);
        toast.success("Check your email", {
          position: "top-center",
          style: {
            color: "green",
          },
        });
      }
    } catch (error: any) {
      setLoading(false);
      toast.error(error?.response?.data?.message, {
        position: "top-center",
        style: {
          color: "green",
        },
      });
    }
  };

  return (
    <>
      <div className="grid lg:grid-cols-2 h-screen">
        <div className="hidden lg:block bg-[#EEF5FF] dark:bg-[#1D232B] h-screen">
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
                <p className="font-normal text-[#121F2C] dark:text-[#D0D6DC] text-[20px] xl:text-[24px]">
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
                <p className="font-normal text-[#121F2C] dark:text-[#D0D6DC] text-[20px] xl:text-[24px]">
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
                <p className="font-normal text-[#121F2C] dark:text-[#D0D6DC] text-[20px] xl:text-[24px]">
                  Comply
                </p>
              </div>
            </div>

            <Image src={Doc} alt="" className="mb-5 w-[65%] " />
          </div>
        </div>

        <Image
          src={"/assets/png/mobLogo.png"}
          alt=""
          width={200}
          height={32}
          className="block md:hidden  mx-auto pt-14 pb-10"
        />

        <div className="flex  mb-10 md:mb-0 pb-5 md:pb-0 md:pt-20 bg-white dark:bg-black w-[95%] md:w-auto mx-auto md:mx-0 rounded-[6px]">
          <div className="w-[90%] md:w-[70%] xl:w-[60%] 2xl:w-[40%] mx-auto">
            <Image
              src={"/assets/svg/logo.svg"}
              alt=""
              width={225}
              height={32}
              className="hidden md:block  mx-auto"
            />

            <p className="font-bold text-[#121F2C] dark:text-white text-[24px] text-center mt-8">
              Reset Your Password
            </p>
            <p className="font-normal text-[#121F2C] dark:text-white text-[14px] text-center mt-1">
              Please provide your email and we’ll send a link to reset your
              password.
            </p>

            <form className="mt-10" onSubmit={handleSubmit}>
              <div>
                <p className="font-normal text-[#121F2C] dark:text-white text-[14px]">
                  Email
                </p>

                <input
                  required
                  type="email"
                  placeholder="e.g. john@example.com"
                  className="outline-none font-semibold text-[#121F2C] text-[16px] border-[1px] border-[#D9D9D9] rounded-[5px] w-full p-[12px] mt-3"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <button
                type="submit"
                className="font-semibold text-white text-[14px] bg-[#3076B1] dark:bg-[#4A9FE7] hover:bg-[#18459D] rounded-[6px] p-[14px] w-full mt-10 uppercase"
              >
                {loading ? "submiting..." : "submit"}
              </button>

              <Link href="/login">
                <p className="mt-8 font-normal text-[#3076B1] dark:text-[#4A9FE7] cursor-pointer text-[13px] text-center">
                  Cancel
                </p>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
