// Dropdown.tsx
import React from 'react';
import { IoIosArrowDown } from 'react-icons/io';

interface DropdownProps {
  rowId: number;
  statusOptions: string[];
  isOpen: boolean;
  currentStatus: string;
  onStatusChange: (status: string) => void;
  onDropdownToggle: () => void;
}

const Dropdown: React.FC<DropdownProps> = ({
  rowId,
  statusOptions,
  isOpen,
  currentStatus,
  onStatusChange,
  onDropdownToggle,
}) => {
  const getButtonStyles = () => {
    switch (currentStatus) {
      case 'In Progress':
        return 'bg-[#CA930712] text-[#CA9307]';
      case 'Completed':
        return 'bg-[#487F1812] text-[#487F18]';
      case 'Failed':
        return 'bg-[#B30000] text-white';
      case 'Not Started':
        return 'bg-[#5D5C5C12] text-[#5D5C5C]';
      default:
        return 'bg-[#B30000] text-white';
    }
  };

  return (
    <div className="relative" id={`dropdown-${rowId}`}>
      <div className="flex gap-2 col-span-2">
        <button
          onClick={onDropdownToggle}
          className={`${getButtonStyles()} nun font-normal text-[11px] xl:text-[14px] py-[8px] px-[15px] rounded-full w-[110px]`}
        >
          {currentStatus}
        </button>
        <IoIosArrowDown
          className="text-[#7A7B7C] text-[22px] cursor-pointer self-center"
          onClick={onDropdownToggle}
        />
      </div>

      {isOpen && (
        <div className="absolute z-30 bg-white mt-1 w-[140px]">
          {statusOptions.map(option => (
            <div key={option} className="hover:bg-[#f2f2f2] p-2">
              <button
                onClick={() => onStatusChange(option)}
                className={`${
                  option === 'In Progress'
                    ? 'bg-[#CA930712] text-[#CA9307]'
                    : option === 'Completed'
                    ? 'bg-[#487F1812] text-[#487F18]'
                    : option === 'Failed'
                    ? 'bg-[#B30000] text-white'
                    : 'bg-[#5D5C5C12] text-[#5D5C5C]'
                } nun font-normal text-[11px] xl:text-[14px] py-[8px] px-[15px] w-full rounded-full`}
              >
                {option}
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
