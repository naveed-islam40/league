
import { useState, useEffect } from 'react';

const SupportDrawer = ({ activeTab, handleTabClick, closeDrawer }:any) => {

    const [active, setActive] = useState(false);

    useEffect(() => {
      setActive(true);
    }, []);
  
    const tabs = [
      "Overview",
      "User Guides",
      "FAQs",
      "Content Updates",
      "System Documentation",
      "Training Videos",
      "Contact Support",
    ];

  return (
    <div className={`fixed left-0 top-[125px] w-[80%] lg:w-[30%] xl:w-[20%] h-full bg-white dark:bg-black  shadow-md z-50 transform transition-transform duration-300 ease-in-out ${active ? "translate-x-0" : "-translate-x-full"}`}>
      
      <div
       onClick={() => {
          setActive(false);
          setTimeout(closeDrawer, 200);
        }}
      className="bg-white dark:bg-black rounded-[7px] shadow-sm p-3 mt-5">
        {tabs.map((tab, index) => (
          <p
            key={index}
            className={
              activeTab === index + 1
                ? "active tab cursor-pointer nun font-semibold text-[#121212] dark:text-white text-[16px] border-b-[1px] border-[#E8E8E8] py-5"
                : "tab cursor-pointer nun font-semibold text-[#121212] dark:text-white text-[16px] border-b-[1px] border-[#E8E8E8] py-5"
            }
            onClick={() => handleTabClick(index + 1)}
          >
            {tab}
          </p>
        ))}
      </div>
    </div>
  );
};

export default SupportDrawer

