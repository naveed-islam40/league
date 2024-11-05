import Image from "next/image";
import React, { useState } from "react";
import DropdownMenu from "./DropDown";
import { DateValueType } from "react-tailwindcss-datepicker";
import Datepicker from "react-tailwindcss-datepicker";
import Link from "next/link";

interface PostProps {
  createdBy: string;
  date: string;
  tag: string;
  title: string;
  content: string;
  commentsCount: number;
}

const Post: React.FC<PostProps> = ({
  createdBy,
  date,
  tag,
  title,
  content,
  commentsCount,
}) => (


  <div className="w-[95%] md:w-auto mx-auto border-[1px] border-[#E5E7EB] rounded-[8px] p-[16px] bg-white dark:bg-black mt-5 mb-8 ">
    <div className=" md:flex border-b-[1px] border-[#CCCCCC] pb-2">
      <p className=" font-semibold text-[#121212] dark:text-white text-[14px] ">
        Created by: <span className="font-normal">{createdBy}</span>{" "}
      </p>
      <p className="font-normal text-[12px] text-[#7A7B7C] md:ml-2 self-center mt-[1px]">
        {date}
      </p>
    </div>
  
    <Link href={"/discussion-post"}>
  
    <div className="mt-5 md:flex justify-between">
      <div>
        <button className="nun font-semibold md:font-normal text-[#121212] dark:text-white text-[12px] rounded-[7px] border-[1px] border-[#CCCCCC] py-[5px] px-[10px]">
          {tag}
        </button>
          <p className="nun font-semibold text-[#3076B1] dark:text-white text-[14px] md:text-[12px] mt-2">
            {title}
          </p>

        <p className="nun font-normal text-[#121212] dark:text-white md:w-[90%] xl:w-auto text-[14px] md:text-[12px] mt-1 ">
          {content}
        </p>
      </div>
      <Image
        src={"/assets/png/posts.png"}
        alt="Post image"
        width={100}
        height={100}
        className="mt-2 md:mt-0"
      />
    </div>
    <div className="flex gap-10 mt-5">
      <p className="nun font-semibold text-[12px] text-[#121212] dark:text-white flex gap-1">
        <Image
          src={"/assets/svg/bx-msg.svg"}
          alt="Comments icon"
          width={16}
          height={16}
          className="cursor-pointer"
        />{" "}
        {commentsCount} Comments
      </p>
      <p className="nun font-semibold text-[12px] text-[#121212] dark:text-white flex gap-1">
        <Image
          src={"/assets/svg/bx-book.svg"}
          alt="Bookmark icon"
          width={16}
          height={16}
          className="cursor-pointer"
        />
        Bookmark
      </p>
    </div>
    </Link>
  </div>


);

const Tab: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<string>("all");
  const [date, setDate] = useState<DateValueType>({
    startDate: null,
    endDate: null,
  });

  const sortOptions = [
    "Newest to Oldest",
    "Oldest to Newest",
    "Highest Rated",
    "Lowest Rated",
  ];
  const categoryOptions = [
    "All Categories",
    "Technology",
    "Health",
    "Finance",
    "Education",
  ];

  const [selectedSort, setSelectedSort] = useState<string>(sortOptions[0]);
  const [selectedCategory, setSelectedCategory] = useState<string>(
    categoryOptions[0]
  );

  const handleDateChange = (newDate: DateValueType) => {
    setDate(newDate);
  };

  const posts: PostProps[] = [
    {
      createdBy: "Keith Wayman",
      date: "Jun 24, 2024, 9:22:30 AM",
      tag: "Fraud",
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum morbi nunc, aliquet vulputate. Cras nibh quis placerat porttitor pharetra ipsum integer. Scelerisque dui sit et mauris odio nullam.",
      commentsCount: 72,
    },
    {
      createdBy: "Keith Wayman",
      date: "Jun 24, 2024, 9:22:30 AM",
      tag: "Fraud",
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum morbi nunc, aliquet vulputate. Cras nibh quis placerat porttitor pharetra ipsum integer. Scelerisque dui sit et mauris odio nullam.",
      commentsCount: 72,
    },
    {
      createdBy: "Keith Wayman",
      date: "Jun 24, 2024, 9:22:30 AM",
      tag: "Fraud",
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum morbi nunc, aliquet vulputate. Cras nibh quis placerat porttitor pharetra ipsum integer. Scelerisque dui sit et mauris odio nullam.",
      commentsCount: 72,
    },
    {
      createdBy: "Keith Wayman",
      date: "Jun 24, 2024, 9:22:30 AM",
      tag: "Fraud",
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum morbi nunc, aliquet vulputate. Cras nibh quis placerat porttitor pharetra ipsum integer. Scelerisque dui sit et mauris odio nullam.",
      commentsCount: 72,
    },
  ];

  const renderPosts = () => {
    return posts.map((post, index) => <Post key={index} {...post} />);
  };

  return (
    <>
      <div className=" w-[95%] md:w-auto mx-auto mt-5 md:mt-10 xl:flex justify-between">
        <div className="md:flex gap-1">
          <div className="grid grid-cols-3 md:flex gap-1">
            <button
              className={`nun font-normal text-[14px] py-[10px] md:px-[10px] md:rounded-[4px] ${
                selectedTab === "all"
                  ? "bg-[#3076B1] hover:bg-[#18459D] text-white font-semibold"
                  : "bg-[#E0E0E0] text-[#121212]"
              }`}
              onClick={() => setSelectedTab("all")}
            >
              All Posts
            </button>
            <button
              className={`nun font-normal text-[14px] py-[10px] md:px-[10px] md:rounded-[4px] ${
                selectedTab === "myPosts"
                  ? "bg-[#3076B1] hover:bg-[#18459D] text-white font-semibold"
                  : "bg-[#E0E0E0] dark:bg-white text-[#121212]"
              }`}
              onClick={() => setSelectedTab("myPosts")}
            >
              My Posts
            </button>
            <button
              className={`nun font-normal text-[14px] py-[10px] md:px-[10px] md:rounded-[4px] ${
                selectedTab === "bookmarks"
                  ? "bg-[#3076B1] hover:bg-[#18459D] text-white font-semibold"
                  : "bg-[#E0E0E0] dark:bg-white text-[#121212]"
              }`}
              onClick={() => setSelectedTab("bookmarks")}
            >
              My Bookmarks
            </button>
          </div>

          <div className="relative mt-5 md:mt-0">
            <input
              type="text"
              placeholder="Search Discussions Board"
              className="w-full md:w-[320px] -mt-[1px] xl:w-[210px] nun font-normal md:font-semibold text-[#7A7B7C] text-[16px] md:text-[16px] bg-[#AEE6F566]  py-[10px] pl-[40px] pr-[20px] rounded-[4px]"
            />
            <Image
              src={"/assets/svg/bi_search.svg"}
              alt="Search icon"
              width={16}
              height={16}
              className="absolute top-3 left-3"
            />
          </div>
        </div>

        <div className="overflow-x-scroll lg:overflow-x-visible">
          <div className="w-[900px] lg:w-auto flex lg:justify-end xl:justify-end gap-3 mt-5 xl:mt-0">
            <DropdownMenu
              icon={"/assets/svg/fil.svg"}
              options={sortOptions}
              selectedOption={selectedSort}
              onSelectOption={setSelectedSort}
              title="Sort by:"
            />
            <DropdownMenu
              icon={"/assets/svg/bx.svg"}
              options={categoryOptions}
              selectedOption={selectedCategory}
              onSelectOption={setSelectedCategory}
              title=""
            />
            <div className="w-[400px] lg:w-[300px] border-[1px] border-[#D1D5DB]  relative z-0 rounded-[6px] h-[42px]">
              <div className="relative z-20">
                <Datepicker
                  value={date}
                  onChange={handleDateChange}
                  placeholder="mm/dd/yyyy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {selectedTab === "all" && renderPosts()}
      {selectedTab === "myPosts" && renderPosts()}
      {selectedTab === "bookmarks" && renderPosts()}
    </>
  );
};

export default Tab;
