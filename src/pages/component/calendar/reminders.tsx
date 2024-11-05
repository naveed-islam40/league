import React from "react";

export default function Reminders() {
  return (
    <>
      <div className="rounded-t-[4px]  bg-white dark:bg-black dark:border-[1px] dark:border-white shadow-sm mt-5 ">
        <p className="nun font-semibold text-[14px] text-[#121F2C] dark:text-white p-[15px] border-b-[1px] border-[#f2f2f2]">
          Other Important Reminders and Information
        </p>
        <div className="p-[15px] pb-8">
          <p className="nun font-semibold text-[14px] text-[#121F2C] dark:text-white mt-2">
            Annual Escrow Account Statement:
          </p>
          <p className="font-normal text-[#121212] dark:text-white text-[12px] mt-1">
            The Annual Escrow Account Statement under the Real Estate Settlement
            Procedures Act (RESPA) is due to each member annually, within 30
            days after the end of the escrow account computation year (the
            12-month period beginning at the closing of the loan).
          </p>

          <p className="nun font-semibold text-[14px] text-[#121F2C] dark:text-white mt-5">
            Privacy Notice
          </p>
          <p className="font-normal text-[#121212] text-[12px] mt-1">
            Credit unions must mail a privacy notice to all members and
            applicable non-members when there are any changes.
          </p>

          <p className="nun font-semibold text-[14px] text-[#121F2C] dark:text-white mt-5">
            Bank Secrecy Act Exemption List
          </p>
          <p className="font-normal text-[#121212] dark:text-white text-[12px] mt-1">
            Elimination of designation and annual review for most Phase I
            customers. Credit unions are no longer required to file a
            Designation of Exempt Person DOEP form for or conduct an
            annual review of, customers who are other depository institutions
            operating in the United States, U.S. or State governments, or
            entities acting with governmental authority. The DOEP filing and
            annual review are still required for businesses listed on a major
            national stock exchange listed businesses non-listed
            businesses, and payroll customers.
          </p>

          <p className="font-normal text-[#121212] dark:text-white text-[12px] mt-2">
            Each credit union that wants to give a member (Customer) exempt
            status must make this designation separately and file the DOEP Form,
            and must verify, at least annually, the status of all exempt
            designations.
          </p>

          <p className="font-normal text-[#121212] dark:text-white text-[12px] mt-2">
            Credit Unions may designate an otherwise eligible non-listed
            business customer (Phase II) for exemption after the customer has
            within a year conducted five (5) or more reportable transactions in
            currency (previously, eight or more reportable transactions were
            required).
          </p>

          <p className="font-normal text-[#121212] dark:text-white text-[12px] mt-2">
            Waiting time for eligibility decreased: Credit Unions may use a
            hybrid approach to designate an otherwise eligible customer for a
            Phase II exemption: The customer may be eligible for exemption after
            maintaining a transaction account for two months (previously twelve
            months were required); or, the customer may be eligible for
            exemption in less than two months if the bank conducts a risk-based
            analysis to form a reasonable belief that the customer has a
            legitimate business purpose for conducting frequent or regular large
            currency transactions.
          </p>


          <p className="nun font-semibold text-[14px] text-[#121F2C] dark:text-white mt-5">
          Disaster Recovery Plan Test
          </p>
          <p className="font-normal text-[#121212] dark:text-white text-[12px] mt-1">
          NCUA guidelines recommend that federally insured credit unions test their disaster recovery plans at least once per year.
          </p>
        </div>
      </div>
    </>
  );
}
