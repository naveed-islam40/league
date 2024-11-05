// DropdownMenu.tsx
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import Image from "next/image";

interface DropdownMenuProps {
  icon: string;
  options: string[];
  selectedOption: string;
  onSelectOption: (option: string) => void;
  title: string;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({
  icon,
  options,
  selectedOption,
  onSelectOption,
  title,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="font-normal text-[#1F2937] text-[14px] flex  border-[1px] border-[#D1D5DB] py-[10px] px-[5px] md:px-[20px] rounded-[5px] bg-white gap-2"
      >
        <Image src={icon} alt={`${title} icon`} width={20} height={20} />
        <p className="self-center font-normal text-[#1F2937] text-[13px] md:text-[14px]">
          {title} <span className="md:font-bold">{selectedOption}</span>
        </p>
        <IoIosArrowDown className="text-[14px] text-[#1F2937] self-center" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2  rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
          <div className="py-1">
            {options.map((option) => (
              <button
                key={option}
                onClick={() => {
                  onSelectOption(option);
                  setIsOpen(false);
                }}
                className="w-full text-left px-4 py-2 text-sm text-[#1F2937] hover:bg-gray-100"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
