import React, { useEffect, useRef, useState } from "react";
import Navbar from "./component/navbar/navbar";
import Clear from "../../public/assets/svg/clear.svg";
import Cross from "../../public/assets/svg/cross.svg";
import Image from "next/image";

interface Message {
  text: string;
  sender: string;
}

const fakeResponses = [
  "The phrase Deceased Member typically refers to a person who was previously a member of a group, organization, or community but has passed away. It's commonly used in contexts such as Membership Organizations: Referring to individuals who were once part of the organization but are no longer due to their death[1]. Financial Institutions: Pertaining to clients or account holders who have passed away. Legal and Estate Matters: Describing individuals[2] who were involved in legal matters or estate planning but are now deceased[3]. This term is straightforward and respectful in acknowledging the status of someone who was once actively involved but is no longer living.",
  "The phrase Deceased Member typically refers to a person who was previously a member of a group, organization, or community but has passed away. It's commonly used in contexts such as Membership Organizations: Referring to individuals who were once part of the organization but are no longer due to their death[1]. Financial Institutions: Pertaining to clients or account holders who have passed away. Legal and Estate Matters: Describing individuals[2] who were involved in legal matters or estate planning but are now deceased[3]. This term is straightforward and respectful in acknowledging the status of someone who was once actively involved but is no longer living.",
  "The phrase Deceased Member typically refers to a person who was previously a member of a group, organization, or community but has passed away. It's commonly used in contexts such as Membership Organizations: Referring to individuals who were once part of the organization but are no longer due to their death[1]. Financial Institutions: Pertaining to clients or account holders who have passed away. Legal and Estate Matters: Describing individuals[2] who were involved in legal matters or estate planning but are now deceased[3]. This term is straightforward and respectful in acknowledging the status of someone who was once actively involved but is no longer living.",
  "The phrase Deceased Member typically refers to a person who was previously a member of a group, organization, or community but has passed away. It's commonly used in contexts such as Membership Organizations: Referring to individuals who were once part of the organization but are no longer due to their death[1]. Financial Institutions: Pertaining to clients or account holders who have passed away. Legal and Estate Matters: Describing individuals[2] who were involved in legal matters or estate planning but are now deceased[3]. This term is straightforward and respectful in acknowledging the status of someone who was once actively involved but is no longer living.",
  "The phrase Deceased Member typically refers to a person who was previously a member of a group, organization, or community but has passed away. It's commonly used in contexts such as Membership Organizations: Referring to individuals who were once part of the organization but are no longer due to their death[1]. Financial Institutions: Pertaining to clients or account holders who have passed away. Legal and Estate Matters: Describing individuals[2] who were involved in legal matters or estate planning but are now deceased[3]. This term is straightforward and respectful in acknowledging the status of someone who was once actively involved but is no longer living.",
];

const getRandomResponse = () => {
  return fakeResponses[Math.floor(Math.random() * fakeResponses.length)];
};

export default function Chat() {
  const [showModal, setShowModal] = useState(false);
  const [isInitialContentVisible, setIsInitialContentVisible] = useState(true);
  const [messages, setMessages] = useState<Message[]>([]);
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [latestMessages, setLatestMessages] = useState<string[]>([]);
  const [isButtonsVisible, setIsButtonsVisible] = useState(true);
  const [imageSrc, setImageSrc] = useState("/assets/svg/like.svg");

  const handleSendClick = () => {
    if (message.trim() !== "") {
      setIsInitialContentVisible(false);
      const newMessage = { text: message, sender: "user1" };
      setMessages((prevMessages) => [...prevMessages, newMessage]);
      setLatestMessages((prevLatestMessages) => {
        const updatedLatestMessages = [message, ...prevLatestMessages];
        return updatedLatestMessages.slice(0, 3);
      });
      setIsSending(true);
      setMessage("");
      setIsButtonsVisible(false);

      console.log("Hello World")

      setTimeout(() => {
        const responseMessage = { text: getRandomResponse(), sender: "user2" };
        setMessages((prevMessages) => [...prevMessages, responseMessage]);
        setIsSending(false);
      }, 2000);
    }
  };

  const handleClearChat = () => {
    setMessages([]);
    setLatestMessages([]);
    setIsInitialContentVisible(true);
    setIsButtonsVisible(true);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSendClick();
    }
  };

  const handleImageClick = () => {
    setImageSrc((prevSrc) =>
      prevSrc === "/assets/svg/like.svg"
        ? "/assets/svg/high-like.svg"
        : "/assets/svg/like.svg"
    );
  };

  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <>
      <div className="bg-white dark:bg-black  flex flex-col h-screen ">
      <div className='pb-28 md:pb-40'>
    <Navbar/>
    </div>
        <div className="flex w-[95%] 2xl:w-[70%] mx-auto pt-5 flex-grow">
          <div className="hidden lg:block relative w-[20%] bg-[#F7F7F7] dark:bg-black dark:border-[1px] dark:border-white rounded-[12px] p-[16px] mb-5">
            <button className="uppercase font-semibold text-[14px] text-white bg-[#3076B1] hover:bg-[#18459D] rounded-[6px] w-full p-[10px]">
              new chat
            </button>
            <div className="mt-10">
              <p className="font-medium text-[#7A7B7C] text-[14px]">Today</p>
              {latestMessages.map((msg, index) => (
                <div key={index} className="flex justify-between gap-5 mt-3">
                  <p className="font-normal text-[#7A7B7C] text-[13px]">
                    {msg}
                  </p>
                  <Image
                    src={"/assets/svg/trash.svg"}
                    alt=""
                    width={16}
                    height={16}
                    className="cursor-pointer"
                  />
                </div>
              ))}
            </div>
            <Image
              src={Clear}
              alt=""
              className="absolute bottom-5 w-[85%] xl:w-[90%] cursor-pointer"
              onClick={handleClearChat}
            />
          </div>

          <div className="relative  mx-auto w-full lg:w-[80%] flex flex-col mb-5 ">
            {isInitialContentVisible ? (
              <div className="w-[95%] lg:w-[70%] mx-auto md:mt-20">
                <div>
                  <Image
                    src={"/assets/svg/chat-logo.svg"}
                    alt=""
                    width={80}
                    height={80}
                    className="mx-auto w-[60px] md:w-[80px] h-[60px] md:h-[80px]"
                  />
                  <p className="font-medium text-black dark:text-white text-[20px] xl:text-[22px] text-center mt-4">
                    How can we help you today?
                  </p>
                </div>
              </div>
            ) : (
              <div className="w-[90%] h-[55vh] 2xl:h-[65vh] overflow-auto mx-auto md:my-10">
                {messages.map((msg, index) => (
                  <div
                    key={index}
                    className={`flex flex-col gap-2 ${
                      msg.sender === "user1" ? "items-end" : "items-start"
                    }`}
                  >
                    <div className="flex gap-2 py-2 md:py-5">
                      {msg.sender === "user2" && (
                        <Image
                          src={"/assets/svg/ai.svg"}
                          alt=""
                          width={36}
                          height={36}
                          className="self-start mt-1"
                        />
                      )}
                      <p
                        className={`py-[6px] px-[20px] ${
                          msg.sender === "user1"
                            ? "bg-[#616161] text-white"
                            : "bg-transparent text-[#121F2C] dark:text-white"
                        } rounded-full nun font-normal text-[12px] md:text-sm -ml-3`}
                      >
                        {msg.text}
                      </p>
                      {msg.sender === "user1" && (
                        <Image
                          src={"/assets/svg/Avatar.svg"}
                          alt=""
                          width={36}
                          height={36}
                          className={
                            isSending && msg.sender === "user1"
                              ? "blink-animation"
                              : ""
                          }
                        />
                      )}
                    </div>
                    {msg.sender === "user2" && (
                      <>
                        <div className="flex gap-5 w-[91%] mx-auto md:-mt-4 pb-5 border-b-[1px] border-[#F5F5F5]">
                        <div className="flex gap-5">
                          <Image
                            src={"/assets/svg/copy.svg"}
                            alt=""
                            width={20}
                            height={20}
                            className="cursor-pointer"
                          />
                          <Image
                            src={"/assets/svg/ref.svg"}
                            alt=""
                            width={20}
                            height={20}
                            className="cursor-pointer"
                          />
                          </div>
                          <div className="flex md:hidden justify-end gap-3  w-[91%] mx-auto">
                          <p className="nun font-normal text-[14px] md:text-[16px] text-[#121F2C] dark:text-white">
                            Was this helpful?
                          </p>
                          <Image
                            src={imageSrc}
                            alt="Like"
                            width={20}
                            height={20}
                            className="cursor-pointer"
                            onClick={handleImageClick}
                          />
                          <Image
                            onClick={() => setShowModal(true)}
                            src={"/assets/svg/dislike.svg"}
                            alt=""
                            width={20}
                            height={20}
                            className="cursor-pointer"
                          />
                        </div>
                        </div>
                        <div className="hidden md:flex justify-end gap-3 pt-5 w-[91%] mx-auto">
                          <p className="nun font-normal text-[14px] md:text-[16px] text-[#121F2C] dark:text-white">
                            Was this helpful?
                          </p>
                          <Image
                            src={imageSrc}
                            alt="Like"
                            width={20}
                            height={20}
                            className="cursor-pointer"
                            onClick={handleImageClick}
                          />
                          <Image
                            onClick={() => setShowModal(true)}
                            src={"/assets/svg/dislike.svg"}
                            alt=""
                            width={20}
                            height={20}
                            className="cursor-pointer"
                          />
                        </div>
                        <div className="border-b-[1px] border-[#F5F5F5] py-4 w-[91%] mx-auto mb-16">
                          <div className="flex gap-5 ">
                            <p className="self-center nun font-semibold text-[12px] md:text-[14px] text-[#3076B1]">
                              FAQs: Deceased Member Issues: FAQs
                            </p>
                            <Image
                              src={"/assets/svg/pdf.svg"}
                              alt=""
                              width={24}
                              height={24}
                            />

                            <button className="self-center uppercase  nun font-normal text-[11px] text-white bg-[#AD7EFB] py-[2px] px-[10px] rounded-[4px]">
                              FaQs
                            </button>
                          </div>
                          <p className="nun font-normal text-[#121F2C] dark:text-white text-[12px] mt-2">
                            A credit union accrues dividends quarterly and
                            declares them the first day of the next quarter
                            (e.g., the dividend period is Oct. 1-Dec. 31 and
                            dividends are declared on Jan. 1). How would
                            dividends and APYE be disclosed on its monthly
                            statements?
                          </p>
                        </div>
                      </>
                    )}
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>
            )}
            <div className="absolute bottom-0 left-0 right-0 md:w-[95%] mx-auto  xl:mx-0 xl:w-auto">
              {isButtonsVisible && (
                <div className="grid grid-cols-2 md:flex justify-center gap-2 md:gap-5 ">
                  {[
                    "Open Compliance Info",
                    "Deceased Members",
                    "Bankruptcy Collections",
                    "Federal Compliance Topic",
                  ].map((text) => (
                    <button
                      key={text}
                      className="bg-white dark:bg-black font-normal text-[12px] text-[#121F2C] dark:text-white rounded-full py-[5px] md:py-[8px] px-[8px] md:px-[12px] xl:px-[20px] border-[#D5D5D5] border-[2px]"
                    >
                      {text}
                    </button>
                  ))}
                </div>
              )}
              <div className="bg-white dark:bg-black">
                <div className="relative w-[100%] xl:w-[75%] mx-auto">
                  <input
                    type="text"
                    placeholder="Ask InfoSight360AI"
                    className="outline-none mt-5 font-normal text-[#121212] dark:text-white text-[16px] md:text-[14px] border-[1px] border-[#D9D9D9] bg-[#F7F9FB] dark:bg-black rounded-[16px] py-[16px] px-[20px] w-full"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                  />
                  <Image
                    src={"/assets/svg/send.svg"}
                    alt=""
                    width={20}
                    height={20}
                    className="absolute top-9 right-4 cursor-pointer"
                    onClick={handleSendClick}
                  />
                </div>
              </div>
              <p className="nun font-normal text-[#7A7B7C] text-[11px] text-center mt-3">
                InfoSight360AI is an experimental tool powered by AI. If you
                want to report anything,{" "}
                <span className="text-[#3076B1] cursor-pointer">
                  click here
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative my-6 mx-auto w-[90%] md:w-[60%] xl:w-[40%]">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white dark:bg-black outline-none focus:outline-none">
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <div className="flex justify-between">
                    <p className="self-center nun font-bold text-[#14142B] dark:text-white text-[16px] md:text-[20px]">
                      We Value Your Feedback!
                    </p>
                    <Image
                      onClick={() => setShowModal(false)}
                      className="cursor-pointer"
                      src={Cross}
                      alt=""
                    />
                  </div>
                  <p className="nun font-normal text-[#14142B] dark:text-white text-[12px] md:text-[15px] mt-3">
                    Please share your thoughts to help us improve our content.
                  </p>
                  <textarea className="h-[200px] border-[1px] border-[#D9D9D9] dark:bg-black p-2 w-full rounded-[5px] mt-2"></textarea>

                  <div className="flex items-center justify-end  mt-5">
                    <button
                      className="text-[#3076B1] background-transparent font-semibold  px-6 py-2 text-[12px] md:text-[14px] outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Skip
                    </button>
                    <button
                      className="bg-[#3076B1] hover:bg-[#18459D] text-white active:bg-emerald-600 font-semibold uppercase text-[12px] md:text-sm px-4 py-4 rounded-[6px] shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}

      <style jsx>{`
        .blink-animation {
          animation: blink 2s linear;
        }

        @keyframes blink {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0;
          }
        }
      `}</style>
    </>
  );
}
