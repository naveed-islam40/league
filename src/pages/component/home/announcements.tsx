import React, { useRef, useState, useEffect } from "react";
import Slider from "react-slick";
import Image from "next/image";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Blog from "../../../../public/assets/png/blog.png";
import Blog2 from "../../../../public/assets/png/blog2.png";
import Blog3 from "../../../../public/assets/png/blog3.png";
import Blog4 from "../../../../public/assets/png/blog4.png";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

interface CardProps {
  src: any;
  title: string;
  description: string;
  btn: string;
  btn2: string;
  btnBg: string;
  btn2Bg: string;
  btnText: string;
}

const data: CardProps[] = [
  {
    src: Blog,
    title: "Sep 24, 2024",
    description: "What Is a Shared Branch Credit Union?",
    btn: "CU PolicyPro",
    btn2: "",
    btnBg: "#AD7EFB12",
    btnText: "#AD7EFB",
    btn2Bg: "",
  },
  {
    src: Blog2,
    title: "Sep 24, 2024",
    description:
      "Digital Federal Credit Union debuts self-service mortgage portal",
    btn: "State-Specific",
    btn2: "",
    btnBg: "#3076B112",
    btnText: "#3076B1",
    btn2Bg: "",
  },
  {
    src: Blog3,
    title: "Sep 24, 2024",
    description: "Colorado Credit Union makes retention a top priority",
    btn: "InfoSight",
    btn2: "",
    btnBg: "#32B20512",
    btnText: "#32B205",
    btn2Bg: "",
  },
  {
    src: Blog4,
    title: "Sep 24, 2024",
    description: "Municipal Credit Union brings wealth management to members",
    btn: "Training",
    btn2: "Industry News",
    btnBg: "#136DF512",
    btnText: "#136DF5",
    btn2Bg: "#EE6F2E12",
  },
  {
    src: Blog,
    title: "Sep 24, 2024",
    description: "What Is a Shared Branch Credit Union?",
    btn: "CU PolicyPro",
    btn2: "",
    btnBg: "#AD7EFB12",
    btnText: "#AD7EFB",
    btn2Bg: "",
  },
];

const Card: React.FC<CardProps> = ({
  src,
  title,
  description,
  btn,
  btn2,
  btnBg,
  btn2Bg,
  btnText,
}) => (


  <Link href={'/resources'}>

  <div className="relative px-2 md:px-4">
    <div className="bg-white dark:bg-black rounded-[7px] p-3 shadow-sm mb-8 xl:h-[265px]">
      <div className="flex md:hidden gap-4 mb-2">
        <button
          className="font-normal text-[10px] lg:text-[12px] rounded-[7px] py-[5px] px-[10px] "
          style={{ backgroundColor: btnBg, color: btnText }}
        >
          {btn}
        </button>
        {btn2 && (
          <button
            className="font-normal text-[#EE6F2E] text-[10px] lg:text-[12px] rounded-[7px] py-[5px] px-[10px] "
            style={{ backgroundColor: btn2Bg }}
          >
            {btn2}
          </button>
        )}
      </div>

      <Image src={src} alt={title} />
      <p className="nun font-normal text-[#B0B0B0] text-[10px] xl:text-[12px] mt-4">
        {title}
      </p>
      <p className="nun font-semibold text-[#121212] dark:text-white text-[11px] lg:text-[14px] mt-1">
        {description}
      </p>
      <div className="hidden md:flex gap-4">
        <button
          className="font-normal text-[10px] lg:text-[12px] rounded-[7px] py-[5px] px-[10px] mt-2"
          style={{ backgroundColor: btnBg, color: btnText }}
        >
          {btn}
        </button>
        {btn2 && (
          <button
            className="font-normal text-[#EE6F2E] text-[10px] lg:text-[12px] rounded-[7px] py-[5px] px-[10px] mt-2"
            style={{ backgroundColor: btn2Bg }}
          >
            {btn2}
          </button>
        )}
      </div>
    </div>
  </div>
  </Link>
);

export default function Announcement() {
  const sliderRef = useRef<Slider>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate data loading
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true, // Enable center mode for mobile
          centerPadding: "15%", // Show half of the next slide
        },
      },
    ],
  };

  const handleNext = () => {
    sliderRef.current?.slickNext();
  };

  const handlePrev = () => {
    sliderRef.current?.slickPrev();
  };

  return (
    <>
      <div className="flex justify-between mt-10 w-[95%] 2xl:w-[70%] mx-auto">
        <div className="flex gap-5">
          <p className="nun font-bold text-[#121F2C] dark:text-white text-[16px] md:text-[24px]">
            News & Announcements
          </p>
          <div className="flex gap-3 self-center">
            <IoIosArrowBack
              onClick={handlePrev}
              className="text-[18px] text-[#3076B1] cursor-pointer"
            />
            <IoIosArrowForward
              onClick={handleNext}
              className="text-[18px] text-[#3076B1] cursor-pointer"
            />
          </div>
        </div>
        <Link href={"/resources"} className="self-center hidden md:flex gap-2">
          <p className="nun font-semibold text-[16px] cursor-pointer text-[#3076B1]">
            See All
          </p>
          <FaArrowRight className="self-center text-[18px] text-[#3076B1] cursor-pointer" />
        </Link>
      </div>
      
      <div className="md:w-[97%] 2xl:w-[70%] mx-auto mt-5">
        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-5">
            {Array(4)
              .fill(0)
              .map((_, index) => (
                <div
                  key={index}
                  className="bg-gray-200 dark:bg-gray-600  animate-pulse rounded-lg p-4 h-[200px]"
                ></div>
              ))}
          </div>
        ) : (
          <Slider ref={sliderRef} {...settings}>
            {data.map((item, index) => (
              <Card
                key={index}
                src={item.src}
                title={item.title}
                description={item.description}
                btn={item.btn}
                btn2={item.btn2}
                btnBg={item.btnBg}
                btn2Bg={item.btn2Bg}
                btnText={item.btnText}
              />
            ))}
          </Slider>
        )}
      </div>
    </>
  );
}
