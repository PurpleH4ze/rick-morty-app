import Image from "next/image";
import React from "react";

const Resident = ({ resident }) => {
  console.log("resident", resident);
  return (
    <div>
      <div className="max-w-sm rounded overflow-hidden shadow-lg  dark:bg-gray-800 dark:border-gray-700">
        <Image
          className="w-full"
          src={resident?.image}
          alt="Sunset in the mountains"
          width={50}
          height={50}
        />
        <div className="m-2 md:min-w-72  lg:min-w-96 px-6 py-4 ">
          <a
            href={`/characters/${resident?.id}`}
            className="font-bold text-xl mb-2"
          >
            {resident?.name}
          </a>
        </div>
        <div className=" m-2 md:min-w-72  lg:min-w-96 px-6 pt-4 pb-2 dark:bg-slate-500 ">
          {resident?.type && (
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #{resident?.type}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Resident;
