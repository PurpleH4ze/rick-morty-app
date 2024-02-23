import React from "react";

const Pagination = ({ info, getData }) => {
  return (
    <div>
      <div className="flex flex-col items-center">
        <span className="text-sm">
          Showing Page{" "}
          <span className="font-semibold">{info?.next?.split("=")[1] - 1}</span>{" "}
          of <span className="font-semibold ">{info?.pages}</span> Entries
        </span>

        <div className="inline-flex mt-2 xs:mt-0">
          <button
            disabled={!info?.prev}
            onClick={() => {
              info?.prev && getData(info?.prev);
              window.scrollTo({
                top: 0,
                behavior: "smooth", // Animasyonlu kaydırma için
              });
            }}
            className="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 rounded-s hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            Prev
          </button>
          <button
            disabled={!info?.next}
            onClick={() => {
              getData(info?.next);
              window.scrollTo({
                top: 0,
                behavior: "smooth", // Animasyonlu kaydırma için
              });
            }}
            className="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 border-0 border-s border-gray-700 rounded-e hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
