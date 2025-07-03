import { Search } from "lucide-react";
import { useEffect, useState } from "react";
import { handleSearchModal } from "./utils/handleSearchModal";

export function SearchBar({ search, setSearch }) {
  const [searchWindow, setSearchWindow] = useState(false);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    window.addEventListener("keydown", handleSearchModal);
    return () => window.removeEventListener("keydown", handleSearchModal);
  }, []);

  return (
    <>
      <div className="p-3 z-10 relative">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input
            placeholder="Search & Filter"
            className="w-full pl-10 pr-16 bg-[#141414] text-white placeholder-gray-400 h-8 text-sm rounded px-3 focus:outline-none focus:border-gray-400"
            value={search}
            onChange={handleSearch}
            onClick={() => setSearchWindow(true)}
          />
          <div className="absolute right-1 top-1/2 transform -translate-y-1/2">
            <span className="text-xs text-gray-400 bg-[#262626] px-3 py-1.5 rounded hover:cursor-pointer">
              Ctrl K
            </span>
          </div>
        </div>
      </div>

      {searchWindow && (
        <>
          {/* Blurred overlay */}
          <div
            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
            onClick={() => setSearchWindow(false)}
          />

          {/* Modal */}
          <div className="fixed top-1/4 left-1/2 transform -translate-x-1/2 bg-[#1f1f1f] text-white w-[90%] max-w-md rounded-xl p-6 z-50 shadow-xl">
            <h2 className="text-lg mb-3 font-semibold">Search</h2>
            <input
              autoFocus
              placeholder="Type to search..."
              value={search}
              onChange={handleSearch}
              className="w-full p-2 text-sm rounded bg-[#141414] border border-gray-600 focus:outline-none"
            />
            <div className="mt-4 text-right">
              <button
                onClick={() => setSearchWindow(false)}
                className="text-sm text-gray-400 hover:text-white"
              >
                Close
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
}
