import Image from "next/image";
import React, { useState, ChangeEvent, FormEvent } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Doc from "../../../public/assets/png/docu.png";
import axios from "axios";
import { toast } from "sonner";
import { useParams, useRouter } from "next/navigation";
import {useRouter as useNextRouter} from "next/router";

export default function ConfirmPassword() {
  const [newPassword, setNewPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const handleNewPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    const password = e.target.value;
    setNewPassword(password);
    validatePasswordMatch(password, confirmPassword);
  };

  const handleConfirmPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    const password = e.target.value;
    setConfirmPassword(password);
    validatePasswordMatch(newPassword, password);
  };

  const validatePasswordMatch = (
    newPassword: string,
    confirmPassword: string
  ) => {
    if (confirmPassword && confirmPassword !== newPassword) {
      setError("New password and confirm password do not match");
    } else {
      setError("");
    }
  };

  const getPasswordStrength = (password: string) => {
    if (!password) return "";

    const isStrong =
      password.length >= 8 &&
      /[A-Z]/.test(password) &&
      /\d/.test(password) &&
      /[!@#$%^&*(),.?":{}|<>]/.test(password);

    const isMedium =
      password.length >= 6 &&
      /[A-Z]/.test(password) &&
      (/\d/.test(password) || /[!@#$%^&*(),.?":{}|<>]/.test(password));

    if (isStrong) return "Strong";
    if (isMedium) return "Medium";
    return "Weak";
  };
  const passwordStrength = getPasswordStrength(newPassword);

  const router = useRouter();
  const nextRouter = useNextRouter();
  
  const token = nextRouter.query.token;

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const url = "api/v1/reset-password";
    try {
      const response = await axios.post(`/api/postRequest`, {
        url,
        method: "POST",
        data: {
          newPassword,
          confirmPassword,
          token,
          subDomain: "c_master",
        },
      });
      if (response) {
        toast.success("Password Update Successfully", {
          position: "top-center",
          style: {
            color: "green",
          },
        });
        router.push("/login");
      }
    } catch (error: any) {
      toast.error(error.response.data.message, {
        position: "top-center",
        style: {
          color: "green",
        },
      });
    }
  };

  const passwordValidation = {
    length: newPassword.length >= 8,
    uppercase: /[A-Z]/.test(newPassword),
    number: /\d/.test(newPassword),
    symbol: /[!@#$%^&*(),.?":{}|<>]/.test(newPassword),
  };

  const validationSvg = (isValid: boolean) =>
    isValid ? (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2.5}
        stroke="currentColor"
        className="w-3 h-3"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m4.5 12.75 6 6 9-13.5"
        />
      </svg>
    ) : (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2.5}
        stroke="currentColor"
        className="w-3 h-3 mt-[1px]"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18 18 6M6 6l12 12"
        />
      </svg>
    );

  return (
    <>
      <div className="grid lg:grid-cols-2 md:h-screen">
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

        <div className="flex mb-14 md:mb-0 pb-5 md:pb-0 md:pt-20 bg-white dark:bg-black md:h-screen md:overflow-y-scroll w-[95%] md:w-auto mx-auto md:mx-0 rounded-[6px]">
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

            <form className="mt-10" onSubmit={handleSubmit}>
              <div className="">
                <p className="font-normal text-[#121F2C] dark:text-white text-[14px]">
                  New Password
                </p>
                <div className="relative mt-3">
                  <input
                    type={isPasswordVisible ? "text" : "password"}
                    placeholder="Your password"
                    className="outline-none  font-semibold text-[#121F2C] text-[16px] border-[1px] rounded-[5px] w-full p-[12px] pr-[40px] border-[#D9D9D9]"
                    value={newPassword}
                    onChange={handleNewPasswordChange}
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
                {newPassword && (
                  <>
                    <div className="flex justify-end gap-1 mt-2">
                      <div
                        className={`w-[30px] self-center h-[4px] ${
                          passwordStrength === "Strong"
                            ? "bg-[#12B347]"
                            : passwordStrength === "Medium"
                            ? "bg-[#F7B303]"
                            : "bg-red-500"
                        }`}
                      />
                      <div
                        className={`w-[30px] h-[4px] self-center ${
                          passwordStrength === "Strong"
                            ? "bg-green-500"
                            : passwordStrength === "Medium"
                            ? "bg-yellow-500"
                            : "bg-gray-300"
                        }`}
                      />
                      <div
                        className={`w-[30px] h-[4px] self-center ${
                          passwordStrength === "Strong"
                            ? "bg-green-500"
                            : "bg-gray-300"
                        }`}
                      />

                      <p
                        className={`text-[12px] font-bold ${
                          passwordStrength === "Strong"
                            ? "text-green-500"
                            : passwordStrength === "Medium"
                            ? "text-yellow-500"
                            : "text-red-500"
                        }`}
                      >
                        {passwordStrength}
                      </p>
                    </div>
                  </>
                )}
              </div>

              <div className="mt-5">
                <p className="font-normal text-[#121F2C] dark:text-white text-[14px]">
                  Confirm New Password
                </p>

                <div className="relative mt-3">
                  <input
                    type={isPasswordVisible ? "text" : "password"}
                    placeholder="Your password"
                    className={`outline-none  font-semibold text-[#121F2C] text-[16px] border-[1px] rounded-[5px] w-full p-[12px] pr-[40px] ${
                      error ? "border-red-500" : "border-[#D9D9D9]"
                    }`}
                    value={confirmPassword}
                    onChange={handleConfirmPasswordChange}
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
                {error && (
                  <p className="text-red-500 text-[12px] mt-1">{error}</p>
                )}
              </div>

              <p className="font-bold text-[#121F2C] dark:text-white text-[14px] mt-8">
                Your password must:
              </p>
              <div className="grid grid-cols-2">
                <div>
                  <p
                    className={`flex gap-2 font-normal text-[10px] mt-5 ${
                      passwordValidation.length
                        ? "text-[#12B347]"
                        : "text-[#E11919]"
                    }`}
                  >
                    {validationSvg(passwordValidation.length)}
                    Be at least 8 characters
                  </p>
                </div>

                <div>
                  <p
                    className={`flex gap-2 font-normal text-[10px] mt-5 ${
                      passwordValidation.uppercase
                        ? "text-[#12B347]"
                        : "text-[#E11919]"
                    }`}
                  >
                    {validationSvg(passwordValidation.uppercase)}
                    Include least one uppercase letter
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 mt-2">
                <div>
                  <p
                    className={`flex gap-2 font-normal text-[10px] ${
                      passwordValidation.number
                        ? "text-[#12B347]"
                        : "text-[#E11919]"
                    }`}
                  >
                    {validationSvg(passwordValidation.number)}
                    Include at least one number
                  </p>
                </div>

                <div>
                  <p
                    className={`flex gap-2 font-normal text-[10px] ${
                      passwordValidation.symbol
                        ? "text-[#12B347]"
                        : "text-[#E11919]"
                    }`}
                  >
                    {validationSvg(passwordValidation.symbol)}
                    Include at least one symbol
                  </p>
                </div>
              </div>
              <button
                type="submit"
                className="mb-5 font-semibold text-white text-[14px] bg-[#3076B1] dark:bg-[#4A9FE7] hover:bg-[#18459D] rounded-[6px] p-[14px] w-full mt-10 uppercase"
              >
                submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
