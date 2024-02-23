"use client";
import Pagination from "@/components/Pagination";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Characters = () => {
  const [characters, setCharacters] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch("https://rickandmortyapi.com/api/character");
      const data = await response.json();
      console.log("characters", data);
      setCharacters(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const fetchDataWithPage = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log("characters", data);
      setCharacters(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="bg-[#e4a788] min-h-screen flex items-center justify-center">
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-semibold mb-4">Characters Page</h1>
        <p className="text-lg">Characters</p>
        <div>
          <div className="flex flex-col justify-center items-center ">
            {characters?.results?.map((item, index) => {
              return (
                <div
                  key={index}
                  className="m-2 min-w-96  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
                >
                  <a
                    href={`/characters/${item.id}`}
                    className="flex items-center justify-center"
                  >
                    <Image
                      className="w-20 h-20 rounded-md m-4"
                      width={1000}
                      height={1000}
                      src={item.image}
                      alt="Neil image"
                    />
                  </a>
                  <div className="p-5">
                    <a href={`/characters/${item.id}`}>
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white flex justify-center">
                        {item.name}
                      </h5>
                    </a>
                    <div className="flex flex-row justify-evenly ">
                      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        Is alive: {item.status}
                      </p>
                      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        Gender: {item.gender}
                      </p>
                    </div>
                    <div className="flex items-center justify-center">
                      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        Location: {item.location.name}
                      </p>
                    </div>
                    <a
                      href={`/characters/${item.id}`}
                      className="flex items-center justify-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      <span>Detail</span>
                      <svg
                        className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 10"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M1 5h12m0 0L9 1m4 4L9 9"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <Pagination info={characters?.info} getData={fetchDataWithPage} />
      </div>
    </div>
  );
};

export default Characters;
