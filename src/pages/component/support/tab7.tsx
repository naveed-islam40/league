import React, { useEffect, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

export default function Tab7() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay for demonstration purposes
    const timer = setTimeout(() => setLoading(false), 2000); // 2 seconds delay
    return () => clearTimeout(timer);
  }, []);

  function onChange(value: any) {
    console.log("Captcha value:", value);
  }

  return (
    <>
      {loading ? (
        <div className="bg-white dark:bg-black dark:border-[1px] dark:border-white p-4 rounded-[6px] shadow-sm animate-pulse">
          <p className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-48 mb-4"></p>
          <p className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-64 mb-6"></p>

          <div className="grid lg:grid-cols-2 mt-10 gap-8">
            <div>
              <p className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-24 mb-3"></p>
              <div className="h-12 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
            </div>

            <div>
              <p className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-24 mb-3"></p>
              <div className="h-12 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
            </div>

            <div>
              <p className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-24 mb-3"></p>
              <div className="h-12 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
            </div>

            <div>
              <p className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-64 mb-3"></p>
              <div className="h-12 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
            </div>

            <div>
              <p className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-48 mb-3"></p>
              <div className="h-12 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
            </div>

            <div>
              <p className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-36 mb-3"></p>
              <div className="h-12 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
            </div>
          </div>

          <div className="mt-8">
            <p className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-24 mb-3"></p>
            <div className="h-12 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
          </div>

          <div className="mt-8">
            <p className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-48 mb-3"></p>
            <div className="h-32 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
          </div>

          <div className="mt-8">
            <p className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-48 mb-3"></p>
            <div className="h-12 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
          </div>

          <div className="flex items-center justify-end mt-5">
            <div className="h-10 w-24 bg-gray-200 dark:bg-gray-700 rounded mr-2"></div>
            <div className="h-10 w-24 bg-gray-200 dark:bg-gray-700 rounded"></div>
          </div>
        </div>
      ) : (
        <div className="bg-white dark:bg-black dark:border-[1px] dark:border-white p-4 rounded-[6px] shadow-sm">
          <p className="font-semibold text-[18px] text-[#121212] dark:text-white">
            We are here to help!{" "}
          </p>
          <p className="font-normal text-[14px] text-[#121212] dark:text-white">
            Fill out the form below or call 800-262-6285 x310.
          </p>

          <div className="grid lg:grid-cols-2 mt-10 gap-8">
            <div>
              <p className="font-normal text-[#121F2C] dark:text-white text-[14px]">
                First Name
              </p>
              <input
                required
                type="text"
                placeholder="Christopher"
                className="mt-3 w-full font-medium text-[#121F2C]  text-[16px] md:text-[14px] border-[1px] border-[#D9D9D9] bg-[#EEEEEE] rounded-[5px] py-[12px] px-[15px]"
              />
            </div>

            <div>
              <p className="font-normal text-[#121F2C] text-[14px] dark:text-white">
                Last Name
              </p>
              <input
                required
                type="text"
                placeholder="Charles"
                className="mt-3 w-full font-medium text-[#121F2C] text-[16px] md:text-[14px] border-[1px] border-[#D9D9D9] bg-[#EEEEEE] rounded-[5px] py-[12px] px-[15px]"
              />
            </div>

            <div>
              <p className="font-normal text-[#121F2C] text-[14px] dark:text-white">
                Email
              </p>
              <input
                required
                type="email"
                placeholder="christopher@creditunion.com"
                className="mt-3 w-full font-medium text-[#121F2C] text-[16px] md:text-[14px] border-[1px] border-[#D9D9D9] bg-[#EEEEEE] rounded-[5px] py-[12px] px-[15px]"
              />
            </div>

            <div>
              <p className="font-normal text-[#121F2C] text-[14px] dark:text-white">
                Credit Union / Organization Name
              </p>
              <input
                required
                type="text"
                placeholder="Affinity Plus Federal Credit Union"
                className="mt-3 w-full font-medium text-[#121F2C] text-[16px] md:text-[14px] border-[1px] border-[#D9D9D9] bg-[#EEEEEE] rounded-[5px] py-[12px] px-[15px]"
              />
            </div>

            <div>
              <p className="font-normal text-[#121F2C] text-[14px] dark:text-white">
                Credit Union Charter Number
              </p>
              <input
                required
                type="number"
                placeholder="24917"
                className="mt-3 w-full font-medium text-[#121F2C] text-[16px] md:text-[14px] border-[1px] border-[#D9D9D9] bg-[#EEEEEE] rounded-[5px] py-[12px] px-[15px]"
              />
            </div>

            <div>
              <p className="font-normal text-[#121F2C] text-[14px] dark:text-white">
                State/Location *
              </p>
              <select
                required
                className="mt-3 w-full font-medium text-[#121F2C] text-[14px] border-[1px] border-[#D9D9D9] bg-[#EEEEEE] rounded-[5px] py-[12px] px-[15px]"
              >
                <option>USA</option>
                <option>USA</option>
                <option>USA</option>
                <option>USA</option>
              </select>
            </div>
          </div>

          <div className="mt-8">
            <p className="font-normal text-[#121F2C] text-[14px] dark:text-white">
              Site URL
            </p>
            <input
              required
              type="text"
              placeholder="https://cuppsprt23.secure.cusolutionsgroup.net/contentupate"
              className="mt-3 w-full font-medium text-[#121F2C] text-[16px] md:text-[14px] border-[1px] border-[#D9D9D9] bg-[#EEEEEE] rounded-[5px] py-[12px] px-[15px]"
            />
          </div>

          <div className="mt-8">
            <p className="font-normal text-[#121F2C] text-[14px] dark:text-white">
              Question or Concern:
            </p>
            <textarea
              required
              className="mt-3 w-full font-medium text-[#121F2C] text-[14px] border-[1px] border-[#D9D9D9] h-[120px] rounded-[5px] py-[12px] px-[15px]"
            ></textarea>
          </div>

          <div className="mt-8">
            <p className="font-normal text-[#121F2C] dark:text-white text-[14px] mb-3">
              Security Verification
            </p>

            <ReCAPTCHA
              sitekey="6LeYRB0qAAAAAI2Q-NB-GyqKW9VBmgr9YDJda_Qq"
              onChange={onChange}
            />
          </div>

          <div className="flex items-center justify-end mt-5">
            <button
              className="text-[#3076B1] background-transparent font-semibold  px-6 py-2 text-[14px] outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
            >
              Cancel
            </button>
            <button
              className="bg-[#3076B1] hover:bg-[#18459D] text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded-[6px] shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
            >
              Add
            </button>
          </div>
        </div>
      )}
    </>
  );
}
