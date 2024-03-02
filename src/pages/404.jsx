import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="w-full  h-screen flex items-center justify-center flex-col gap-7">
      <img src="/assets/not-found.gif" alt="not-found" />
      <div className="flex flex-col gap-4 text-center items-center">
        <h1 className="text-4xl font-bold">Oops!</h1>
        <p className="">Sorry, an unexpected error has occured.</p>
        <p className="text-gray-500 text-sm font-italic">Not Found</p>
        <Link to="/" className="btn w-[200px]">
          Back to Home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
