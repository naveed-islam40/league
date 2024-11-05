import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Blog from "../../../../public/assets/png/blog.png";
import Blog2 from "../../../../public/assets/png/blog2.png";
import Blog3 from "../../../../public/assets/png/blog3.png";
import Blog4 from "../../../../public/assets/png/blog4.png";

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
      btnBg: "#AD7EFB12",
      btnText: "#3076B1",
      btn2Bg: "",
    },
    {
      src: Blog3,
      title: "Sep 24, 2024",
      description: "Colorado Credit Union makes retention a top priority",
      btn: "InfoSight",
      btn2: "",
      btnBg: "#3076B112",
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
  <div className="bg-white dark:bg-black rounded-[7px] p-3 shadow-sm !w-[95%] ml-[65px] block md:hidden">
    <Image src={src} alt={title} className="md:h-[100px]" />
    <p className="nun font-normal text-[#B0B0B0] text-[12px] mt-4">{title}</p>
    <p className="nun font-medium text-[#121212] dark:text-white text-[14px] lg:text-[14px] mt-1">
      {description}
    </p>
    <div className="flex gap-4">
      <button
        className="font-normal  text-[12px] rounded-[7px] py-[5px] px-[10px] mt-2"
        style={{ backgroundColor: btnBg, color: btnText }}
      >
        {btn}
      </button>
      {btn2 && (
        <button
          className="font-normal text-[#EE6F2E] text-[12px] rounded-[7px] py-[5px] px-[10px] mt-2"
          style={{ backgroundColor: btn2Bg }}
        >
          {btn2}
        </button>
      )}
    </div>
  </div>
);

export default function TopSlider() {
  const settings = {
    dots: false,
    arrows:false,
    infinite: true,
    slidesToScroll: 1,
    slidesToShow: 1.2,
    speed: 500,
    centerMode: true,
    centerPadding:"0px"

 };

  return (
    <>
      <div className="flex md:hidden justify-between mt-16">
        <p className="nun font-bold text-[#121F2C] dark:text-white text-[16px] md:text-[20px]">
          Top Picks in California, CA
        </p>
      </div>

      <Slider {...settings} className="mt-3">
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
    </>
  );
}
