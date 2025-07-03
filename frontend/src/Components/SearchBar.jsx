// components/EmailList/SearchBar.jsx
import { Search } from "lucide-react";

export function SearchBar({search,setSearch}) {

    const handleSearch = (e) => {
        setSearch(search)
    }

  
  return (
    <div className="p-3">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
        <input
          placeholder="Search & Filter"
          className="w-full pl-10 pr-16 bg-[#141414] text-white placeholder-gray-400 h-8 text-sm rounded px-3 focus:outline-none focus:border-gray-400"
          value={search}
          onChange={handleSearch}
        />
        <div className="absolute right-1 top-1/2 transform -translate-y-1/2">
          <span className="text-xs text-gray-400 bg-[#262626] px-3 py-1.5 rounded hover:cursor-pointer">
            Ctrl K
          </span>
        </div>
      </div>
    </div>
  );
}
