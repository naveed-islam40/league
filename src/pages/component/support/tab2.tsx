import React, { useEffect, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";

const accordionData = [
  {
    title: "Getting Started",
    content: `There is a lot of subjectivity around policies and the associated review schedule. 
                The NCUA Examiner's Guide recommends an annual review cycle for all "major" policies. 
                Unfortunately, there isn't any guidance as to what policies the NCUA believes to be "major." 
                Therefore, a conservative approach is to review all policies annually unless the credit union has conducted an appropriate 
                analysis to make the determination of what policies may be considered "major." 
                The Policy List with Guidelines document identifies policy that are mandatory based on regulation. 
                We would recommend that “mandatory” policies at a minimum are included as “major” policies and are reviewed annually by the Board.`,
  },
  {
    title: "View and Print Content",
    content: `There is a lot of subjectivity around policies and the associated review schedule. 
                The NCUA Examiner's Guide recommends an annual review cycle for all "major" policies. 
                Unfortunately, there isn't any guidance as to what policies the NCUA believes to be "major." 
                Therefore, a conservative approach is to review all policies annually unless the credit union has conducted an appropriate 
                analysis to make the determination of what policies may be considered "major." 
                The Policy List with Guidelines document identifies policy that are mandatory based on regulation. 
                We would recommend that “mandatory” policies at a minimum are included as “major” policies and are reviewed annually by the Board.`,
  },

  {
    title: "Add and Delete Content",
    content: `There is a lot of subjectivity around policies and the associated review schedule. 
                The NCUA Examiner's Guide recommends an annual review cycle for all "major" policies. 
                Unfortunately, there isn't any guidance as to what policies the NCUA believes to be "major." 
                Therefore, a conservative approach is to review all policies annually unless the credit union has conducted an appropriate 
                analysis to make the determination of what policies may be considered "major." 
                The Policy List with Guidelines document identifies policy that are mandatory based on regulation. 
                We would recommend that “mandatory” policies at a minimum are included as “major” policies and are reviewed annually by the Board.`,
  },

  {
    title: "Edit and Format Content",
    content: `There is a lot of subjectivity around policies and the associated review schedule. 
                The NCUA Examiner's Guide recommends an annual review cycle for all "major" policies. 
                Unfortunately, there isn't any guidance as to what policies the NCUA believes to be "major." 
                Therefore, a conservative approach is to review all policies annually unless the credit union has conducted an appropriate 
                analysis to make the determination of what policies may be considered "major." 
                The Policy List with Guidelines document identifies policy that are mandatory based on regulation. 
                We would recommend that “mandatory” policies at a minimum are included as “major” policies and are reviewed annually by the Board.`,
  },

  {
    title: "Move and Reorder Content",
    content: `There is a lot of subjectivity around policies and the associated review schedule. 
                The NCUA Examiner's Guide recommends an annual review cycle for all "major" policies. 
                Unfortunately, there isn't any guidance as to what policies the NCUA believes to be "major." 
                Therefore, a conservative approach is to review all policies annually unless the credit union has conducted an appropriate 
                analysis to make the determination of what policies may be considered "major." 
                The Policy List with Guidelines document identifies policy that are mandatory based on regulation. 
                We would recommend that “mandatory” policies at a minimum are included as “major” policies and are reviewed annually by the Board.`,
  },

  {
    title: "Archive and Restore Content",
    content: `There is a lot of subjectivity around policies and the associated review schedule. 
                The NCUA Examiner's Guide recommends an annual review cycle for all "major" policies. 
                Unfortunately, there isn't any guidance as to what policies the NCUA believes to be "major." 
                Therefore, a conservative approach is to review all policies annually unless the credit union has conducted an appropriate 
                analysis to make the determination of what policies may be considered "major." 
                The Policy List with Guidelines document identifies policy that are mandatory based on regulation. 
                We would recommend that “mandatory” policies at a minimum are included as “major” policies and are reviewed annually by the Board.`,
  },

  {
    title: "Auditing Tools",
    content: `There is a lot of subjectivity around policies and the associated review schedule. 
                The NCUA Examiner's Guide recommends an annual review cycle for all "major" policies. 
                Unfortunately, there isn't any guidance as to what policies the NCUA believes to be "major." 
                Therefore, a conservative approach is to review all policies annually unless the credit union has conducted an appropriate 
                analysis to make the determination of what policies may be considered "major." 
                The Policy List with Guidelines document identifies policy that are mandatory based on regulation. 
                We would recommend that “mandatory” policies at a minimum are included as “major” policies and are reviewed annually by the Board.`,
  },

  {
    title: "Create and Manage Assignments",
    content: `There is a lot of subjectivity around policies and the associated review schedule. 
                The NCUA Examiner's Guide recommends an annual review cycle for all "major" policies. 
                Unfortunately, there isn't any guidance as to what policies the NCUA believes to be "major." 
                Therefore, a conservative approach is to review all policies annually unless the credit union has conducted an appropriate 
                analysis to make the determination of what policies may be considered "major." 
                The Policy List with Guidelines document identifies policy that are mandatory based on regulation. 
                We would recommend that “mandatory” policies at a minimum are included as “major” policies and are reviewed annually by the Board.`,
  },

  {
    title: "Upload and Manage Files",
    content: `There is a lot of subjectivity around policies and the associated review schedule. 
                The NCUA Examiner's Guide recommends an annual review cycle for all "major" policies. 
                Unfortunately, there isn't any guidance as to what policies the NCUA believes to be "major." 
                Therefore, a conservative approach is to review all policies annually unless the credit union has conducted an appropriate 
                analysis to make the determination of what policies may be considered "major." 
                The Policy List with Guidelines document identifies policy that are mandatory based on regulation. 
                We would recommend that “mandatory” policies at a minimum are included as “major” policies and are reviewed annually by the Board.`,
  },

  {
    title: "User Access and Management",
    content: `There is a lot of subjectivity around policies and the associated review schedule. 
                The NCUA Examiner's Guide recommends an annual review cycle for all "major" policies. 
                Unfortunately, there isn't any guidance as to what policies the NCUA believes to be "major." 
                Therefore, a conservative approach is to review all policies annually unless the credit union has conducted an appropriate 
                analysis to make the determination of what policies may be considered "major." 
                The Policy List with Guidelines document identifies policy that are mandatory based on regulation. 
                We would recommend that “mandatory” policies at a minimum are included as “major” policies and are reviewed annually by the Board.`,
  },
];

export default function Tab2() {
  const [openIndex, setOpenIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };
  useEffect(() => {
    // Set a timeout for 3 seconds to simulate content loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the time (in milliseconds) as needed

    // Cleanup the timer
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div>
        {accordionData.map((item, index) => (
          <div className="mt-3" key={index}>
            {loading ? (
              <div className="animate-pulse">
                {/* Skeleton effect */}
                <div className="flex justify-between p-4 bg-gray-300 dark:bg-gray-600 rounded-[4px]">
                  <div className="w-2/3 h-4 bg-gray-400 dark:bg-gray-700 rounded"></div>
                  <div className="w-4 h-4 bg-gray-400 dark:bg-gray-700 rounded-full"></div>
                </div>
              </div>
            ) : (
              <div
                onClick={() => toggleAccordion(index)}
                className={`flex justify-between p-4 rounded-[4px] cursor-pointer ${
                  openIndex === index ? "bg-[#3076B1]" : "bg-white "
                }`}
              >
                <p
                  className={`nun font-normal text-[14px] ${
                    openIndex === index ? "text-white" : "text-[#3076B1]"
                  }`}
                >
                  {item.title}
                </p>
                <IoIosArrowForward
                  className={`text-[16px] self-center transition-transform ${
                    openIndex === index
                      ? "rotate-90 text-white"
                      : "text-[#121F2C]"
                  }`}
                />
              </div>
            )}

            {openIndex === index && (
              <div
                className={`bg-white dark:bg-black px-5 py-5 ${
                  openIndex === index ? "accordion-enter" : "accordion-exit"
                }`}
              >
                {loading ? (
                  <div className="p-4">
                    <div className="w-full h-3 bg-gray-300 dark:bg-gray-700 rounded mb-2"></div>
                    <div className="w-5/6 h-3 bg-gray-300 dark:bg-gray-700 rounded"></div>
                  </div>
                ) : (
                  <p className="font-normal text-[#272727] dark:text-white text-[12px]">
                    {item.content}
                  </p>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
