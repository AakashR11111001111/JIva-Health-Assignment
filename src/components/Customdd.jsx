import { useState } from "react";
const defaultOptions = [
  "All",
  "Active",
  "Inactive",
];

const Customdd = ({
  statusFilter,
  setStatusFilter,
  options = defaultOptions,
}) => {

  const [open, setOpen] =
    useState(false);

  return (
    <div className="relative w-45">

      <div
        onClick={() =>
          setOpen(!open)
        }
        className="px-4 py-2 border border-gray-300 rounded-lg bg-white cursor-pointer flex items-center justify-between"
      >
        <span>
          {statusFilter}
        </span>

        <span>⌄</span>
      </div>


      {open && (
        <div className="absolute top-full left-0 mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden z-50">

          {options.map(
            (item) => (
              <div
                key={item}
                onClick={() => {
                  setStatusFilter(
                    item
                  );

                  setOpen(
                    false
                  );
                }}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              >
                {item}
              </div>
            )
          )}

        </div>
      )}
    </div>
  );
};

export default Customdd;