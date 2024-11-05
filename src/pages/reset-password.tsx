import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import OtpInput from "react-otp-input";
import Doc from "../../public/assets/png/docu.png";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function App() {
  const [showVerification, setShowVerification] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowVerification(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return <>{showVerification ? <VerificationCode /> : <NewPassword />}</>;
}

function NewPassword() {
  return (
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
        className=" block md:hidden  mx-auto pt-14 pb-10"
      />

      <div className="flex mb-10 md:mb-0 md:pt-20 bg-white dark:bg-black w-[95%] md:w-auto mx-auto md:mx-0 rounded-[6px]">
        <div className="w-[90%] md:w-[70%] xl:w-[60%] 2xl:w-[40%] mx-auto">
          <Image
            src={"/assets/svg/logo.svg"}
            alt=""
            width={225}
            height={32}
            className="hidden md:block  mx-auto"
          />

          <Image
            src={"/assets/svg/mail.svg"}
            alt=""
            width={133}
            height={74}
            className="mx-auto mt-20"
          />

          <p className="font-normal text-[#121F2C] dark:text-white text-[14px] text-center w-[80%] mx-auto mt-8">
            Please check your email for instructions on resetting your password.
            If its not visible in your inbox, please check your spam folder.
          </p>

          <Link href="/login">
            <p className="mt-8 font-normal text-[#3076B1] dark:text-[#4A9FE7] hover:text-[#18459D] cursor-pointer text-[13px] text-center">
              Back to Login
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}

function VerificationCode() {
  const [otp, setOtp] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    try {
      const email = localStorage.getItem("email");
      const url = "api/v1/verifyOTP";

      e.preventDefault();
      if (otp.length === 6) {
        setLoading(true);
        const res = await axios.post(`/api/postRequest`, {
          url,
          method: "POST",
          data: {
            email,
            otp: otp,
            subDomain: "c_master",
          },
        });
        console.log(res)
        if (res) {
          setLoading(false);
          const user = JSON.stringify(res.data.user);
          localStorage.setItem("user", user);
          toast.success(res.data.message, {
            position: "top-center",
            style: {
              color: "green",
            },
          });
          router.push("/home");
        }
      } else {
        alert("Please enter the 6-digit code to proceed.");
      }
    } catch (error: any) {
      setLoading(false);
      toast.error(error.response.data.message, {
        position: "top-center",
        style: {
          color: "red",
        },
      });
    }
  };

  const handleResendOpt = async () => {
    const url = "api/v1/resendOTP";
    const email = localStorage.getItem("email");

    try {
      const res = await axios.post(`/api/postRequest`, {
        url,
        method: "POST",
        data: {
          email,
          subDomain: "c_master",
        },
      });
      if (res) {
        toast.success(res.data.message || "OTP sent successfully", {
          position: "top-center",
          style: {
            color: "green",
          },
        });
      }
    } catch (error: any) {
      toast.error(error.response.data.message || "OTP sent failed", {
        position: "top-center",
        style: {
          color: "red",
        },
      });
    }
  };

  return (
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

      <div className="flex mb-14 md:mb-0 pb-5 md:pb-0 md:pt-20 bg-white dark:bg-black w-[95%] md:w-auto mx-auto md:mx-0 rounded-[6px]">
        <div className="w-[90%] md:w-[70%] xl:w-[60%] 2xl:w-[40%] mx-auto">
          <Image
            src={"/assets/svg/logo.svg"}
            alt=""
            width={225}
            height={32}
            className="hidden md:block  mx-auto"
          />

          <p className="font-bold text-[#121F2C] dark:text-white text-[24px] text-center mt-8">
            Verify your identity
          </p>
          <p className="font-normal text-[#121F2C] dark:text-white text-[14px] text-center mt-1">
            A one-time passcode has been sent to christopher@creditunion.com.
            Please enter the code below to verify your email address. If its not
            visible in your inbox, please check your spam folder.
          </p>

          <form className="mt-14" onSubmit={handleSubmit}>
            <div>
              <OtpInput
                inputStyle={{
                  width: "45px",
                  height: "45px",
                }}
                value={otp}
                onChange={(otp: string) => setOtp(otp)}
                numInputs={6}
                renderInput={(props, index) => (
                  <input
                    required
                    {...props}
                    className={` outline-none font-semibold border-[1px] border-[#D9D9D9] rounded-[5px] text-black ${
                      index > 0 ? "ml-3 md:ml-7" : ""
                    }`}
                  />
                )}
              />
            </div>

            <div className="flex gap-2 mt-8">
              <input type="checkbox" required className="self-center" />
              <p className="font-normal text-[#121212] dark:text-white text-[13px]">
                Remember this computer for 30 days
              </p>
            </div>
            <button
              type="submit"
              className="font-semibold text-white text-[14px] bg-[#3076B1] dark:bg-[#4A9FE7] hover:bg-[#18459D] rounded-[6px] p-[14px] w-full mt-6 uppercase"
            >
              {loading ? "Confirming..." : "Confirm"}
            </button>
          </form>
          <p className="mt-6 font-normal text-black dark:text-white text-[12px] text-center">
            Did not receive the code?
            <span className="text-[#3076B1] dark:text-[#4A9FE7] hover:text-[#18459D] cursor-pointer ml-[3px]">
              <button onClick={handleResendOpt}>Resend</button>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
