import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Doc from "../../public/assets/png/docu.png";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function Login() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      if (email === "" || password === "") {
        return setError("Email and password are required.");
      }

      setLoading(true);
      const url = `api/v1/login`;
      const response = await axios.post(`/api/postRequest`, {
        url,
        method: "POST",
        data: { email, password, subDomain: "c_master" },
      });

      if (response.data.status === 200) {
        localStorage.setItem("email", email);
        router.push("reset-password");
        setLoading(false);
        setError("");
      }
    } catch (error: any) {
      setLoading(false);
      console.log(error);
      setError(
        error.response?.data.message || "An error occurred during login."
      );
    }
  };

  return (
    <>
      <div className="grid lg:grid-cols-2 ">
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
          className=" block md:hidden   mx-auto pt-14 pb-10"
        />

        <div className="bg-white dark:bg-black mb-14 md:mb-0 pb-5 md:pb-0 md:pt-20 md:min-h-screen w-[95%] md:w-auto mx-auto md:mx-0 rounded-[6px]">
          <div className="w-[90%] md:w-[70%] xl:w-[60%] 2xl:w-[40%] mx-auto">
            <Image
              src={"/assets/svg/logo.svg"}
              alt=""
              width={225}
              height={32}
              className="hidden md:block  mx-auto"
            />

            <p className="font-bold text-[#121F2C] dark:text-white text-[24px] text-center mt-8">
              Login to your account
            </p>
            <p className="font-normal text-[#121F2C] dark:text-white text-[14px] text-center mt-1">
              Please enter your email and password to log in.
            </p>

            {error && (
              <button className="bg-[#FCEFEF] dark:bg-black font-medium text-[#E11919] text-[14px] text-center  rounded-[5px] py-1   px-[20px] block mx-auto mt-8">
                {error}
              </button>
            )}

            <form className="mt-8" onSubmit={handleSubmit}>
              <div>
                <p className="font-normal text-[#121F2C] dark:text-white text-[14px]  ">
                  Email
                </p>

                <input
                  required
                  type="email"
                  placeholder="e.g. john@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`outline-none font-semibold text-[#121F2C] text-[16px] border-[1px] rounded-[5px] w-full p-[12px] mt-3 ${
                    error ? "border-[#FF0000]" : "border-[#D9D9D9]"
                  }`}
                />
              </div>

              <div className="mt-5">
                <div className="flex justify-between">
                  <p className="font-normal text-[#121F2C] dark:text-white text-[14px]  ">
                    Password
                  </p>
                  <Link href="/reset">
                    <p className="font-medium text-[#3076B1] dark:text-[#4A9FE7] hover:text-[#18459D] text-[14px]  cursor-pointer">
                      Reset Password
                    </p>
                  </Link>
                </div>

                <div className="relative mt-3">
                  <input
                    required
                    type={isPasswordVisible ? "text" : "password"}
                    placeholder="Your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className={`outline-none font-semibold text-[#121F2C] text-[16px] border-[1px] rounded-[5px] w-full p-[12px] pr-[40px] ${
                      error ? "border-[#FF0000]" : "border-[#D9D9D9]"
                    }`}
                  />
                  <div
                    onClick={togglePasswordVisibility}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                  >
                    {isPasswordVisible ? (
                      <Image
                        src={"/assets/svg/uns.svg"}
                        alt=""
                        width={16}
                        height={16}
                      />
                    ) : (
                      <Image
                        src={"/assets/svg/see.svg"}
                        alt=""
                        width={16}
                        height={16}
                      />
                    )}
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="font-semibold text-white text-[14px] bg-[#3076B1] dark:bg-[#4A9FE7] hover:bg-[#18459D] rounded-[6px] p-[14px] w-full mt-8   uppercase"
              >
                {loading ? "Login..." : "Login"}
              </button>

              <p className="mt-5 font-normal text-black dark:text-white text-[12px] text-center">
                Trouble signing in? Contact{" "}
                <span className="text-[#3076B1]  cursor-pointer">
                  support@infosight360.com
                </span>{" "}
                <br />
                or call 800-262-6285, ext. 310
              </p>
            </form>
            {/* <form >
              <input type="number" placeholder="Enter OTP" onClick={ha}  />
            </form> */}
          </div>
        </div>
      </div>
    </>
  );
}
