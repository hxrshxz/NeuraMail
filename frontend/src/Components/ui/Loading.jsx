import React from "react";

export const Loading = () => {
  return (
    <div className="mt-[-10px] h-full min-h-screen">
      <div
        role="status"
        className="h-full p-4 space-y-4 divide-y divide-gray-200 rounded-sm shadow-sm animate-pulse dark:divide-gray-700 md:p-6 dark:border-gray-700 bg-[#1a1a1a]"
      >
        {Array.from({ length: 14}).map((_, idx) => (
          <div className="flex items-center justify-between pt-4" key={idx}>
            <div>
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
              <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
            </div>
            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
          </div>
        ))}
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};
