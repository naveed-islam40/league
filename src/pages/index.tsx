import React, { useEffect, useState } from "react";
import Menubar from "./component/menubar";
import DropDown from "./component/menubar/dropDown";
import Land from "../../public/assets/png/land.png";
import MobLand from "../../public/assets/png/mob-land.png";
import Poly from "../../public/assets/png/poly.png";
import Image from "next/image";
import Link from "next/link";
import useFetch from "@/hooks/useFetch";
import axios from "axios";

export default function Landing() {
  const sortOptions = ["Select a State", "Select a State", "Select a State"];

  const [selectedSort, setSelectedSort] = useState<string>(sortOptions[0]);
  const [selectedUnion, setSelectedunion] = useState<string>("");
  const [states, setStates] = useState<string[]>([]);
  const [unionOptions, setUnionOptions] = useState<string[]>([]);

  const stateUrl = "api/v1/statelist";
  const unionUrl = "api/v1/cuList/1";

  useEffect(() => {
    const fetchStates = async () => {
      try {
        const response = await axios.get(`/api/getRequest`, {
          params: { url: stateUrl, method: "GET" },
        });
        console.log(response);
        setStates(response.data.data);
      } catch (error) {
        console.error("Error fetching states:", error);
      }
    };
  
    const fetchUnions = async () => {
      try {
        const response = await axios.get("/api/getRequest", {
          params: { url: unionUrl, method: "GET" }, 
        });
        console.log(response);
        setUnionOptions(response.data.data);
      } catch (error) {
        console.error("Error fetching unions:", error);
      }
    };
  
    fetchStates();
    fetchUnions();
  }, []);
  

  return (
    <>
      <div className="relative overflow-hidden">
        <Menubar />
        <div className="grid lg:grid-cols-12  w-[95%] 2xl:w-[70%] 2xl:mx-auto mx-auto lg:mr-0 lg:ml-auto mt-10 md:mt-20 xl:mt-28">
          <div className="block lg:hidden">
            <Image src={MobLand} alt="" />
          </div>

          <div className="lg:col-span-7 2xl:self-center mt-5 md:mt-10 lg:mt-0 text-center lg:text-start">
            <p className="font-bold text-[18px] md:text-[28px] xl:text-[35px] text-[#121212] dark:text-white uppercase">
              Compliance Policies and Procedures
            </p>
            <p className="font-bold text-[18px] md:text-[28px] xl:text-[35px] text-[#121212] dark:text-white -mt-1 uppercase">
              Business Continuity Planning
            </p>
            <p className="font-normal text-[#7A7B7C] dark:text-white text-[14px] md:text-[16px] xl:text-[18px] mt-2 md:mt-3 md:w-[80%] mx-auto lg:mx-0 lg:w-auto xl:w-[80%]">
              A unique URL for each client is one of the enhanced security
              features of InfoSight360 system.
            </p>

            <div className="mt-10 ">
              <p className="font-normal text-[#121212] dark:text-white text-[12px] md:text-[14px] xl:text-[16px] md:w-[70%] mx-auto lg:mx-0 lg:w-auto xl:w-[85%]">
                Choose your state in the dropdown below, then find your credit
                union to be directed to your site.
              </p>

              <div className="md:flex justify-center lg:justify-start gap-5 mt-2 md:mt-3">
                <div className="w-full md:w-[30%]">
                  <DropDown
                    options={states}
                    selectedType={selectedSort}
                    onSelectType={setSelectedSort}
                  />
                </div>
                <div className="w-full md:w-[40%]">
                  <DropDown
                    options={unionOptions}
                    selectedType={selectedUnion}
                    onSelectType={setSelectedunion}
                  />
                </div>
                <div className="mt-[9px]">
                  <Link href={"/login"}>
                    <button className="w-full md:w-auto bg-[#B3CFE3] dark:bg-[#4A9FE7] hover:bg-[#3076B1] rounded-[6px] py-3 px-8 font-semibold text-[14px] text-white ">
                      GO
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="md:flex justify-center lg:justify-start gap-3 mt-8 md:mt-12">
              <Image
                src={"/assets/svg/msg.svg"}
                alt="Message"
                width={62}
                height={54}
                className="opacity-40 mx-auto md:mx-0 filter dark:invert"
              />
              <p className="font-normal text-[12px] md:text-[13px] text-[#121212] dark:text-white md:w-[70%] xl:w-[50%]">
                If your credit union is not listed, you may not have an active
                implementation. Please contact{" "}
                <span className="text-[#3076B1] dark:text-[#4A9FE7] cursor-pointer">
                  support@infosight360.com
                </span>{" "}
                or call 800-262-6285, ext. 310
              </p>
            </div>

            <p className="font-normal text-[#7A7B7C] dark:text-white text-[14px] mt-10 lg:mt-14 mb-5">
              © 2024 InfoSight360. All rights reserved.
            </p>
          </div>

          <div className="hidden lg:block lg:col-span-5">
            <Image src={Land} alt="Land" />
          </div>
        </div>
        <div className="hidden lg:block absolute top-10 -right-10  w-[35%] -z-10">
          <Image src={Poly} alt="Polygon" />
        </div>
      </div>
    </>
  );
}
