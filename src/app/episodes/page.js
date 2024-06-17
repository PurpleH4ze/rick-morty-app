"use client";
import React, { useEffect, useState } from "react";

const Episodes = () => {
  const [episodes, setEpisodes] = useState([]);
  const fetchEpisodesData = async () => {
    try {
      const response = await fetch("https://rickandmortyapi.com/api/episode");

      const episodes = await response.json();
      console.log("response", episodes?.results);
      setEpisodes(episodes?.results);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchEpisodesData();
  }, []);

  return (
    <div className="bg-[#e4a788] min-h-screen flex items-center justify-center">
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-semibold mb-4">Episodes Page</h1>
        <p className="text-lg">Episodes</p>
        <div className="flex flex-wrap justify-center items-center ">
          {episodes?.map((item, index) => {
            return (
              <div
                key={index}
                className="m-2 md:min-w-64 lg:min-w-96  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
              >
                <a
                  href={`/episodes/${item.id}`}
                  className="flex items-center justify-center"
                ></a>
                <div className="p-5">
                  <a href={`/locations/${item.id}`}>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white flex justify-center">
                      {item.name}
                    </h5>
                  </a>

                  <a
                    href={`/locations/${item.id}`}
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
    </div>
  );
};

export default Episodes;
