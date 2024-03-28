import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const CardSkeleton = () => {
  return (
    <SkeletonTheme color="#202020" highlightColor="#444">
      <div className="rounded-md overflow-hidden shadow-sm hover:shadow-lg duration-150 shadow-slate-200/30 flex flex-col">
        <div className="relative">
          {/* <img
          className="w-full"
          src={image[subject] || image.other.img}
          alt={subject}
        /> */}
          <div className="w-full py-20 object-fill bg-blue-900"></div>

          <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25">
            <Skeleton />
          </div>

          <span>
            <div className="text-xs absolute top-0 right-0 bg-indigo-600 px-4 py-2 text-white mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
              <Skeleton />
            </div>
          </span>
        </div>
        <div className="px-6 py-4 mb-auto">
          <h2 className="font-medium text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out mb-2">
            <Skeleton />
          </h2>
          <p className="text-secondary text-sm">
            <Skeleton />
          </p>
        </div>
        <div className="px-6 py-3 flex flex-row items-center justify-between bg-secondary">
          <span className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center">
            <Skeleton />
            <span className="ml-1">
              <Skeleton />
            </span>
          </span>

          <span
            href="#"
            className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center"
          >
            <Skeleton />
            <span className="ml-1">
              <Skeleton />
            </span>
          </span>
        </div>
      </div>
    </SkeletonTheme>
  );
};

export default CardSkeleton;
