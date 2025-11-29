import { FilterIcon, Search } from "lucide-react";

function Filter() {
  return (
    <div className="flex gap-3 mb-10">
      <div class="relative flex-1">
        <span class="absolute inset-y-0 left-3 flex items-center text-gray-500 ">
          <Search />
        </span>

        <input
          type="text"
          class="pl-10 pr-4 py-3  rounded-lg w-full border border-primary-light/50 outline-none  focus:ring-3 focus:ring-primary-light/50"
          placeholder="Search complaints..."
        />
      </div>
      <div className="flex items-center gap-3 px-4 p-2 rounded-lg text-primary border border-primary-light/50 cursor-pointer hover:border-primary hover:shadow-md transition-all duration-300">
        <FilterIcon />
        <span className="text-lg font-semibold">Filter</span>
      </div>
    </div>
  );
}

export default Filter;
