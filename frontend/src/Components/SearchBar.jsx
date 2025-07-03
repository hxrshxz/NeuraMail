import { Search } from "lucide-react";
import { useEffect, useState } from "react";
import { SearchModal } from "./SearchModal";

export function SearchBar({ search, setSearch }) {
  const [searchWindow, setSearchWindow] = useState(false);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setSearchWindow((prev) => !prev);
      }

      if (e.key === "Escape") {
        setSearchWindow(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
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
          <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40" />
          {/* Modal */}
          <div
            className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-500 ${
              searchWindow ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <div
              className={`bg-[#1a1a1a] border border-gray-600 w-[90%] max-w-md rounded-xl shadow-xl transform transition-all duration-500
      ${
        searchWindow
          ? "translate-y-0 scale-100 opacity-100"
          : "-translate-y-5 scale-95 opacity-0"
      }`}
            >
              <div className="p-4 max-h-[55vh] overflow-y-auto">
                <SearchModal
                  search={search}
                  setSearch={setSearch}
                  handleSearch={handleSearch}
                />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
