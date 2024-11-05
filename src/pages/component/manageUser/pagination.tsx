import React from "react";

interface PaginationProps {
  rowsPerPage: number;
  handleRowsPerPageChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  currentPage: number;
  handlePageChange: (pageNumber: number) => void;
  totalPages: number;
}

const Pagination: React.FC<PaginationProps> = ({
  rowsPerPage,
  handleRowsPerPageChange,
  currentPage,
  handlePageChange,
  totalPages,
}) => {
  return (
    <div className="hidden md:flex justify-between bg-white dark:bg-[#272727]  p-3 my-5 rounded-[8px] shadow-sm">
      <div className="flex gap-2 nun font-semibold text-[13px] dark:text-white self-center">
        Rows per page:
        <select
          value={rowsPerPage}
          onChange={handleRowsPerPageChange}
          className="rounded outline-none cursor-pointer dark:bg-transparent "
        >
          {[3, 5, 10, 15].map((size) => (
            <option key={size} value={size} className="dark:bg-black">
              {size}
            </option>
          ))}
        </select>
      </div>

      {/* Page navigation */}
      <div className="flex gap-2">
        <p
          className={`self-center nun font-semibold text-[13px] text-[#121F2C] dark:text-white ${
            currentPage === 1 ? "text-[#CCCCCC]" : "cursor-pointer"
          }`}
          onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
        >
          Prev
        </p>
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => handlePageChange(i + 1)}
            className={`border-[1px] border-[#f2f2f2] dark:text-white font-semibold text-[13px] rounded-[4px] py-1 px-3 ${
              currentPage === i + 1
                ? "bg-[#3076B1] text-white"
                : " hover:bg-[#f2f2f2]  dark:bg-black"
            }`}
            aria-label={`Page ${i + 1}`}
          >
            {i + 1}
          </button>
        ))}
        <p
          className={`nun font-semibold text-[13px] self-center text-[#121F2C] dark:text-white ${
            currentPage === totalPages ? "text-[#CCCCCC]" : "cursor-pointer"
          }`}
          onClick={() =>
            currentPage < totalPages && handlePageChange(currentPage + 1)
          }
        >
          Next
        </p>
      </div>
    </div>
  );
};

export default Pagination;
