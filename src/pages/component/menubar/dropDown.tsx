import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

interface DropdownMenuProps {
  options ?: any; 
  selectedType: string;
  onSelectType: (option: string) => void; 
  option?: string[];
}

interface OptionsType {
  id: number;  
  name: string; 
}

const DropDown: React.FC<DropdownMenuProps> = ({
  options,
  selectedType,
  onSelectType,
  option
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="relative inline-block text-left w-full">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between font-normal text-[14px] outline-none w-full bg-[#ecf4fa] border-dashed border-[1px] border-[#B2D5ED] rounded-[5px] py-[12px] px-[15px] mt-2"
      >
        {selectedType}
        <IoIosArrowDown className="text-[14px] text-[#1F2937] self-center" />
      </button>

      {isOpen && (
        <div className="absolute w-full left-0 mt-2 shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
          <div>
            {options && options.map((option: OptionsType) => (
              <button
                key={option.id}
                onClick={() => {
                  onSelectType(option.name); 
                  setIsOpen(false);
                }}
                className="w-full text-left px-4 py-2 text-sm text-[#1F2937] hover:bg-[#f2f2f2] border-b-[1px] border-[#f2f2f2]"
              >
                {option.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DropDown;
