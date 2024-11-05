import React, { useState, useEffect } from "react";

export default function Footer() {
  const [isLoading, setIsLoading] = useState(true); // Add a loading state

  useEffect(() => {
    // Simulate loading for 2 seconds
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {/* Desktop Footer */}
      <div className="hidden md:block border-b-[1px] md:border-y-[1px] border-[#f2f2f2] md:border-[#CCCCCC] py-3 md:w-[95%] 2xl:w-[70%] mx-auto">
        {isLoading ? (
          <div className="w-full h-[16px] bg-gray-200 animate-pulse"></div> // Skeleton for the footer text
        ) : (
          <p className="nun font-normal text-[#7A7B7C] text-[11px] md:text-[14px]">
            © 2024 InfoSight360. All rights reserved.
          </p>
        )}
      </div>

      {/* Disclaimer Section */}
      <div className="hidden md:block w-[95%] 2xl:w-[70%] mx-auto mb-5">
        {isLoading ? (
          <>
            <div className="w-[100px] h-[10px] bg-gray-200 animate-pulse mb-3"></div> {/* Skeleton for Disclaimer title */}
            <div className="w-full h-[8px] bg-gray-200 animate-pulse mb-2"></div> {/* Skeleton for Disclaimer content line 1 */}
            <div className="w-full h-[8px] bg-gray-200 animate-pulse mb-2"></div> {/* Skeleton for Disclaimer content line 2 */}
            <div className="w-full h-[8px] bg-gray-200 animate-pulse mb-2"></div> {/* Skeleton for Disclaimer content line 3 */}
            <div className="w-full h-[8px] bg-gray-200 animate-pulse mb-2"></div> {/* Skeleton for Disclaimer content line 4 */}
            <div className="w-full h-[8px] bg-gray-200 animate-pulse mb-2"></div> {/* Skeleton for Disclaimer content line 5 */}
          </>
        ) : (
          <>
            <p className="font-bold text-[#7A7B7C] text-[9px] md:text-[11px] mt-3">
              Disclaimer
            </p>
            <p className="font-normal text-[#7A7B7C] text-[8px] md:text-[10px] mt-2">
              The compliance content contained in InfoSight360 is designed to
              provide general reference information only. It is intended to be
              used solely as an informational guide. While efforts are made to
              timely update the material to reflect applicable changes in laws
              and regulations, this information may not constitute the most
              up-to-date legal or other information and should not be considered
              as legal advice nor relied upon as a substitute for professional
              legal services. Credit unions are encouraged to contact legal
              counsel for advice with respect to any particular legal matter.
              InfoSight360 will not be liable for any direct, indirect or
              consequential damages resulting from the use of this site. The
              views expressed herein are not necessarily those of InfoSight360
              or its members.
            </p>
          </>
        )}
      </div>
    </>
  );
}
