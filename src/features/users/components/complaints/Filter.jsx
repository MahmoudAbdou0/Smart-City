import { FilterIcon, Search } from "lucide-react";

function Filter() {
  return (
    <div className="flex flex-col md:flex-row gap-3 mb-10">
      <div className="relative flex-1">
        <span className="absolute inset-y-0 left-3 flex items-center text-gray-500 ">
          <Search size={20} />
        </span>

        <input
          type="text"
          className="pl-10 pr-4 py-3 rounded-lg w-full border border-primary-light/50 outline-none focus:ring-3 focus:ring-primary-light/50 text-sm md:text-base"
          placeholder="Search complaints..."
        />
      </div>
      <div className="flex items-center gap-2 md:gap-3 px-3 md:px-4 py-2 rounded-lg text-primary border border-primary-light/50 cursor-pointer hover:border-primary hover:shadow-md transition-all duration-300 flex-shrink-0 whitespace-nowrap">
        <FilterIcon size={20} />
        <span className="text-sm md:text-lg font-semibold">Filter</span>
      </div>
    </div>
  );
}

export default Filter;
