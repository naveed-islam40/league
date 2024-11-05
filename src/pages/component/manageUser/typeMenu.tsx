// DropdownMenu.tsx
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

interface DropdownMenuProps {
  options: string[];
  selectedType: string;
  onSelectType: (option: string) => void;
}

const TypeMenu: React.FC<DropdownMenuProps> = ({
  options,
  selectedType,
  onSelectType,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="relative inline-block text-left w-full">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-white flex justify-between font-normal text-[14px] outline-none w-full border-[1px] border-[#D9D9D9] rounded-[5px] py-[15px] px-[15px]  mt-0"
      >
        {selectedType}
        <IoIosArrowDown className="text-[14px] text-[#1F2937] self-center" />
      </button>

      {isOpen && (
        <div className="absolute w-full  left-0 mt-2 shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
          <div>
            {options.map((option) => (
              <button
                key={option}
                onClick={() => {
                  onSelectType(option);
                  setIsOpen(false);
                }}
                className="w-full text-left px-4 py-2 text-sm text-[#1F2937] hover:bg-[#f2f2f2] border-b-[1px] border-[#f2f2f2]"
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

export default TypeMenu;
