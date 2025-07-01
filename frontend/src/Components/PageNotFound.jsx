import React from "react";
import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <div >PageNotFound</div>
        <button
          className="bg-blue-200 hover:bg-blue-400 px-6 py-3 rounded-md flex items-center gap-2 border border-zinc-700 hover:cursor-pointer"
          onClick={() => {
            navigate("/login");
          }}
        >
          Go Back
        </button>
      </div>
    </>
  );
};

export default PageNotFound;
