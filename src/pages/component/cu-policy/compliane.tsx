import Image from "next/image";
import React, { useState } from "react";

export default function Comp() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>

      <Image
        onClick={() => setShowModal(true)}

                src={"/assets/svg/comp4.svg"}
                alt=""
                title="Print"
                width={24}
                height={24}
                className="cursor-pointer"
              />



      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div
              className="absolute top-0 w-full h-full bg-black opacity-50"
              onClick={() => setShowModal(false)}
            ></div>
            <div className="relative my-6 mx-auto w-[60%]">
              {/*content*/}
              <div className="border-0 shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*body*/}
                <div className="relative flex-auto h-[90vh] overflow-y-scroll">
                  <div className="p-5">
                    <div className="flex justify-between items-center border-b border-b-black pb-3">
                      <Image
                        src={"/assets/png/print-logo.png"}
                        alt=""
                        width={732}
                        height={104}
                        className="w-[183px] h-6"
                      />
                      <p className="text-[11px] leading-6 text-[#121212]">
                        Affinity Plus Federal Credit Union
                      </p>
                    </div>

                    <div className="flex justify-between items-center mt-5 border-b border-b-[#D8D8D8] pb-1">
                      <div>
                        <p className="text-xs text-[#7A7B7C]">
                          Chapter 1000: Administrative
                        </p>
                        <p className="text-sm font-bold text-[#121F2C] pt-1">
                          Organization (1100.10)
                        </p>
                      </div>
                      <button className="text-xs font-semibold text-white bg-black rounded-lg px-5 py-3">
                        Final Version
                      </button>
                    </div>

                    <div>
                      <p className="text-xs text-[#8F8E8E] pt-4">
                        Status changed on: September 6, 2023 | Last Revised on:
                        September 6, 2023
                      </p>

                      <p className="text-xs font-semibold text-[#121F2C] pt-5">
                        General Statement
                      </p>
                      <p className="text-xs text-[#121F2C] pt-1">
                        {
                          "[[CUname]] (Credit Union) is managed by a Board of Directors assisted by committees as set forth in the Credit Union's bylaws and within governance documents (as applicable). "
                        }
                      </p>

                      <p className="text-xs font-semibold text-[#121F2C] pt-5">
                        Guidelines:
                      </p>

                      <ol className="pt-5">
                        <p className="text-xs font-semibold text-[#121F2C]">
                          1. BOARD OF DIRECTORS
                        </p>
                        <div className="pl-5">
                          <li className="text-xs text-[#121F2C] pt-3">
                            a. The Board of Directors consists of an odd number
                            of directors, at least five in number, who are
                            elected by the Credit Union members.
                          </li>
                          <li className="text-xs text-[#121F2C] pt-3">
                            b. The Board is ultimately responsible for all the
                            operations of the Credit Union.
                          </li>
                          <li className="text-xs text-[#121F2C] pt-3">
                            c. The Board shall elect from their number the Board
                            Officers specified in the bylaws, and also shall
                            elect from their number a financial officer.
                          </li>
                        </div>
                      </ol>

                      <ol className="pt-5">
                        <p className="text-xs font-semibold text-[#121F2C]">
                          2. GOVERNANCE
                        </p>
                        <p className="text-xs text-[#121F2C] pt-1">
                          The Board of Directors is responsible for the general
                          direction and control of the affairs of the Credit
                          Union.
                        </p>
                      </ol>

                      <ol className="pt-5">
                        <p className="text-xs font-semibold text-[#121F2C]">
                          3. COMMITTEES
                        </p>
                        <div className="pl-5">
                          <li className="text-xs text-[#121F2C] pt-3">
                            a. The Board shall appoint the following committees
                            to assist it:
                            <ol className="pl-5">
                              <li className="text-xs text-[#121F2C] pt-3">
                                i. A Supervisory Committee consisting of not
                                less than three nor more than five members.
                              </li>
                              <li className="text-xs text-[#121F2C] pt-3">
                                ii. Where the Bylaws so provide, an Executive
                                Committee of not less than three directors.
                              </li>
                            </ol>
                          </li>

                          <li className="text-xs text-[#121F2C] pt-5">
                            b. The Board may appoint the following committees to
                            assist it:
                            <ol className="pl-5">
                              <li className="text-xs text-[#121F2C] pt-3">
                                i. Where the bylaws so provide, a Credit
                                Committee consisting of an odd number of members
                                of the Credit Union, but which shall not include
                                more than one loan officer.
                              </li>
                              <li className="text-xs text-[#121F2C] pt-3">
                                ii. An Asset/Liability Management Committee.
                              </li>
                              <li className="text-xs text-[#121F2C] pt-2">
                                iii. An Investment Committee.
                              </li>
                              <li className="text-xs text-[#121F2C] pt-2">
                                iv. A Nominating Committee
                              </li>
                              <li className="text-xs text-[#121F2C] pt-2">
                                v. Such other committees as the Board deems
                                appropriate
                              </li>
                            </ol>
                          </li>
                        </div>
                      </ol>

                      <ol className="pt-5">
                        <p className="text-xs font-semibold text-[#121F2C]">
                          4. BYLAWS AND MEETING MINUTES
                        </p>
                        <p className="text-xs text-[#121F2C] pt-3">
                          i. The Credit Union will keep a current set of bylaws
                          and minutes of the meetings of the Board
                        </p>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
}
