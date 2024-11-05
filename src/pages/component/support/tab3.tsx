import React, { useEffect, useState } from "react";
import { IoIosAdd, IoIosRemove } from "react-icons/io";

const accordionData = [
  {
    title:
      "How often should a credit union’s policies be reviewed by the board? Which policies should be reviewed?",
    content: `There is a lot of subjectivity around policies and the associated review schedule. 
                The NCUA Examiner's Guide recommends an annual review cycle for all "major" policies. 
                Unfortunately, there isn't any guidance as to what policies the NCUA believes to be "major." 
                Therefore, a conservative approach is to review all policies annually unless the credit union has conducted an appropriate 
                analysis to make the determination of what policies may be considered "major." 
                The Policy List with Guidelines document identifies policy that are mandatory based on regulation. 
                We would recommend that “mandatory” policies at a minimum are included as “major” policies and are reviewed annually by the Board.`,
  },
  {
    title: "What polices are required by federal regulation?",
    content: `There is a lot of subjectivity around policies and the associated review schedule. 
                The NCUA Examiner's Guide recommends an annual review cycle for all "major" policies. 
                Unfortunately, there isn't any guidance as to what policies the NCUA believes to be "major." 
                Therefore, a conservative approach is to review all policies annually unless the credit union has conducted an appropriate 
                analysis to make the determination of what policies may be considered "major." 
                The Policy List with Guidelines document identifies policy that are mandatory based on regulation. 
                We would recommend that “mandatory” policies at a minimum are included as “major” policies and are reviewed annually by the Board.`,
  },

  {
    title:
      "What is the best practice with respect to Revised Date vs. Reviewed Date vs. Approved Date?",
    content: `There is a lot of subjectivity around policies and the associated review schedule. 
                The NCUA Examiner's Guide recommends an annual review cycle for all "major" policies. 
                Unfortunately, there isn't any guidance as to what policies the NCUA believes to be "major." 
                Therefore, a conservative approach is to review all policies annually unless the credit union has conducted an appropriate 
                analysis to make the determination of what policies may be considered "major." 
                The Policy List with Guidelines document identifies policy that are mandatory based on regulation. 
                We would recommend that “mandatory” policies at a minimum are included as “major” policies and are reviewed annually by the Board.`,
  },

  {
    title:
      "I have CU PolicyPro and just subscribed to RecoveryPro. How do I get access, and how to I give existing users access to RecoveryPro once it is added?",
    content: `There is a lot of subjectivity around policies and the associated review schedule. 
                The NCUA Examiner's Guide recommends an annual review cycle for all "major" policies. 
                Unfortunately, there isn't any guidance as to what policies the NCUA believes to be "major." 
                Therefore, a conservative approach is to review all policies annually unless the credit union has conducted an appropriate 
                analysis to make the determination of what policies may be considered "major." 
                The Policy List with Guidelines document identifies policy that are mandatory based on regulation. 
                We would recommend that “mandatory” policies at a minimum are included as “major” policies and are reviewed annually by the Board.`,
  },

  {
    title:
      "What is the difference between a “Mandatory” policy and a “Compliance Mandatory” policy?",
    content: `There is a lot of subjectivity around policies and the associated review schedule. 
                The NCUA Examiner's Guide recommends an annual review cycle for all "major" policies. 
                Unfortunately, there isn't any guidance as to what policies the NCUA believes to be "major." 
                Therefore, a conservative approach is to review all policies annually unless the credit union has conducted an appropriate 
                analysis to make the determination of what policies may be considered "major." 
                The Policy List with Guidelines document identifies policy that are mandatory based on regulation. 
                We would recommend that “mandatory” policies at a minimum are included as “major” policies and are reviewed annually by the Board.`,
  },

  {
    title: "Our credit union name has changed. What do we need to do?",
    content: `There is a lot of subjectivity around policies and the associated review schedule. 
                The NCUA Examiner's Guide recommends an annual review cycle for all "major" policies. 
                Unfortunately, there isn't any guidance as to what policies the NCUA believes to be "major." 
                Therefore, a conservative approach is to review all policies annually unless the credit union has conducted an appropriate 
                analysis to make the determination of what policies may be considered "major." 
                The Policy List with Guidelines document identifies policy that are mandatory based on regulation. 
                We would recommend that “mandatory” policies at a minimum are included as “major” policies and are reviewed annually by the Board.`,
  },

  {
    title:
      "Can we periodically export and back up our customized content so we can keep a copy locally?",
    content: `There is a lot of subjectivity around policies and the associated review schedule. 
                The NCUA Examiner's Guide recommends an annual review cycle for all "major" policies. 
                Unfortunately, there isn't any guidance as to what policies the NCUA believes to be "major." 
                Therefore, a conservative approach is to review all policies annually unless the credit union has conducted an appropriate 
                analysis to make the determination of what policies may be considered "major." 
                The Policy List with Guidelines document identifies policy that are mandatory based on regulation. 
                We would recommend that “mandatory” policies at a minimum are included as “major” policies and are reviewed annually by the Board.`,
  },

  {
    title: "Can I use CU PolicyPro to keep track of my procedures?",
    content: `There is a lot of subjectivity around policies and the associated review schedule. 
                The NCUA Examiner's Guide recommends an annual review cycle for all "major" policies. 
                Unfortunately, there isn't any guidance as to what policies the NCUA believes to be "major." 
                Therefore, a conservative approach is to review all policies annually unless the credit union has conducted an appropriate 
                analysis to make the determination of what policies may be considered "major." 
                The Policy List with Guidelines document identifies policy that are mandatory based on regulation. 
                We would recommend that “mandatory” policies at a minimum are included as “major” policies and are reviewed annually by the Board.`,
  },

  {
    title: "Why does the system ask me to change my password when I log in?",
    content: `There is a lot of subjectivity around policies and the associated review schedule. 
                The NCUA Examiner's Guide recommends an annual review cycle for all "major" policies. 
                Unfortunately, there isn't any guidance as to what policies the NCUA believes to be "major." 
                Therefore, a conservative approach is to review all policies annually unless the credit union has conducted an appropriate 
                analysis to make the determination of what policies may be considered "major." 
                The Policy List with Guidelines document identifies policy that are mandatory based on regulation. 
                We would recommend that “mandatory” policies at a minimum are included as “major” policies and are reviewed annually by the Board.`,
  },

  {
    title:
      "Some content includes numbers or text within brackets, such as [[CUname]] or [[2110-1]]. What do these mean and what are we supposed to do with them?",
    content: `There is a lot of subjectivity around policies and the associated review schedule. 
                The NCUA Examiner's Guide recommends an annual review cycle for all "major" policies. 
                Unfortunately, there isn't any guidance as to what policies the NCUA believes to be "major." 
                Therefore, a conservative approach is to review all policies annually unless the credit union has conducted an appropriate 
                analysis to make the determination of what policies may be considered "major." 
                The Policy List with Guidelines document identifies policy that are mandatory based on regulation. 
                We would recommend that “mandatory” policies at a minimum are included as “major” policies and are reviewed annually by the Board.`,
  },
];

export default function Tab3() {
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
                  openIndex === index ? "bg-[#3076B1]" : "bg-white"
                }`}
              >
                <div className="self-center">
                  <p
                    className={` nun font-normal text-[12px] xl:text-[14px] ${
                      openIndex === index ? "text-white" : "text-[#3076B1]"
                    }`}
                  >
                    {item.title}
                  </p>
                </div>
                <div>
                  {openIndex === index ? (
                    <IoIosRemove className="text-[25px] self-center text-white" />
                  ) : (
                    <IoIosAdd className="text-[25px] self-center text-[#3076B1]" />
                  )}
                </div>
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
