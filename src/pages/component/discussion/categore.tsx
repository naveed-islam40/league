import React, { useState } from "react";
import { FiPlus } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";
import CategoreSlider from "./slider";

interface Category {
  id: number;
  imageSrc: string;
  title: string;
  description: string;
  posts: number;
}

const categories: Category[] = [
  {
    id: 1,
    imageSrc: "/assets/png/cate.png",
    title: "Accounts",
    description:
      "Enim laboris ullamco quis ullamco proident occaecat et deserunt eiusmod.",
    posts: 467,
  },
  {
    id: 2,
    imageSrc: "/assets/png/cate2.png",
    title: "Fraud",
    description:
      "Enim laboris ullamco quis ullamco proident occaecat et deserunt eiusmod.",
    posts: 467,
  },
  {
    id: 3,
    imageSrc: "/assets/png/cate3.png",
    title: "Category 2",
    description:
      "Enim laboris ullamco quis ullamco proident occaecat et deserunt eiusmod.",
    posts: 467,
  },
  {
    id: 4,
    imageSrc: "/assets/png/cate4.png",
    title: "Category 3",
    description:
      "Enim laboris ullamco quis ullamco proident occaecat et deserunt eiusmod.",
    posts: 467,
  },
];

const Categore: React.FC = () => {
  const [joinedCategories, setJoinedCategories] = useState<number[]>([]);

  const toggleJoin = (id: number) => {
    setJoinedCategories((prev) =>
      prev.includes(id) ? prev.filter((catId) => catId !== id) : [...prev, id]
    );
  };

  return (
    <>
      <p className="nun font-semibold text-[#121212] dark:text-white text-[18px] mt-5 md:mt-10 ml-3 md:ml-0">
        Categories
      </p>
      <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-4 gap-5 mt-5 ">
        {categories.map((category) => (
          <Link
            href={"/discussion-board"}
            key={category.id}
            className="bg-white dark:bg-black rounded-[8px] p-[16px]"
          >
            <Image
              src={category.imageSrc}
              alt={category.title}
              width={500}
              height={500}
            />
            <p className="nun font-semibold text-[16px] mt-3">
              {category.title}
            </p>
            <p className="nun font-normal text-[12px] xl:text-[14px] text-[#555770] dark:text-white mt-1">
              {category.description}
            </p>
            <div className="flex justify-between mt-5">
              <p className="nun font-semibold text-[#1F2937] dark:text-white text-[12px] self-center">
                {category.posts} Posts
              </p>
              <p
                className={`cursor-pointer nun font-semibold text-[14px] flex gap-1 ${
                  joinedCategories.includes(category.id)
                    ? "text-red-500"
                    : "text-[#3076B1]"
                }`}
                onClick={() => toggleJoin(category.id)}
              >
                {!joinedCategories.includes(category.id) && (
                  <FiPlus className="self-center" />
                )}
                {joinedCategories.includes(category.id)
                  ? "Unsubscribe"
                  : "Join"}
              </p>
            </div>
          </Link>
        ))}
      </div>
      <CategoreSlider />
    </>
  );
};

export default Categore;
