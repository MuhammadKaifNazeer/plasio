import { Search } from "lucide-react";
import React from "react";
import { Input } from "../ui/input";

const Searchbar = () => {
  return (
    <>
      <form>
        <div className="relative w-full lg:w-[70%]">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
          <Input
            className="w-full bg-background shadow-none appearance-none pl-8 "
            placeholder="Search notes..."
            type="search"
          />
        </div>
      </form>
    </>
  );
};

export default Searchbar;
