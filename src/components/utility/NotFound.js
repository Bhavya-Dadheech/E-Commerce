import React from "react";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  return (
    <div className="flex flex-col gap-5 items-center justify-start pt-12">
      <span className="text-4xl font-medium">Oops!</span>
      <span className="text-4xl font-medium">404 Not Found</span>
      <span className="text-slate-400">Sorry, an error has occured. Requested page not found!</span>
      <div className="flex gap-3">
        <button className="p-2 rounded-lg bg-[#007afd] text-white" type="button" onClick={handleClick}>
          Take Me Home
        </button>
      </div>
    </div>
  );
}
