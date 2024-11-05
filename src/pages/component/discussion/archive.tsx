// DropdownMenu.tsx
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

interface DropdownMenuProps {
  
  options: string[];
  selectedOption: string;
  onSelectOption: (option: string) => void;
  title: string;
}

const Arch: React.FC<DropdownMenuProps> = ({
  
  options,
  selectedOption,
  onSelectOption,
  title,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="grid grid-cols-1 relative md:inline-block text-left">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className=" font-normal text-[#1F2937] text-[14px] flex justify-between border-[1px] border-[#D1D5DB] py-[10px] px-[10px] rounded-[5px] bg-white  gap-10"

      >
        <p className="font-normal text-[#1F2937] text-[14px]">
          {title} <span className="font-normal">{selectedOption}</span>
        </p>
        <IoIosArrowDown className="text-[14px] text-[#1F2937] self-center" />
      </button>

      {isOpen && (
        <div className="top-10 md:top-10 absolute mt-2 w-full  shadow-sm bg-white ring-1 ring-black ring-opacity-5 z-10">
          <div className=" ">
            {options.map((option) => (
              <button
                key={option}
                onClick={() => {
                  onSelectOption(option);
                  setIsOpen(false);
                }}
                className="w-full text-left px-[10px] py-3 text-sm text-[#1F2937] hover:bg-[#f2f2f2] border-b-[1px] border-[#f2f2f2]"
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

export default Arch;
