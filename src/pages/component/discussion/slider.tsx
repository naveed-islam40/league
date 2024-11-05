import React, { useState } from "react";
import { FiPlus } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";

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

const CategoreSlider: React.FC = () => {
  const [joinedCategories, setJoinedCategories] = useState<number[]>([]);

  const toggleJoin = (id: number) => {
    setJoinedCategories((prev) =>
      prev.includes(id) ? prev.filter((catId) => catId !== id) : [...prev, id]
    );
  };

  const settings = {
    arrows: false,
    infinite: true,
    slidesToShow: 1.1,
    slidesToScroll: 1,
    speed: 500,
    centerMode: true,
    centerPadding:"0px",
    adaptiveHeight: true, 


  };

  return (
    <>
    <div className="block md:hidden">
      <Slider {...settings} className=" ml-3 md:ml-0">
        {categories.map((category) => (
          <div
            key={category.id}
            className="bg-white dark:bg-black rounded-[8px] p-[10px] mt-5 !w-[95%] ml-[36px]"
          >
            <Link href="/discussion-board"
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
          </div>
        ))}
      </Slider>
      </div>
    </>
  );
};

export default CategoreSlider;
