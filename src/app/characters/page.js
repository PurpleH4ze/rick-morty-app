"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://rickandmortyapi.com/api/character"
        );
        const data = await response.json();
        console.log("characters", data);
        setCharacters(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="bg-[#e4a788] min-h-screen flex items-center justify-center">
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-semibold mb-4">Characters Page</h1>
        <p className="text-lg">Characters</p>
        <div>
          <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-[#44281d] dark:border-gray-700">
            <ul className=" flex flex-col max-w-md divide-y divide-gray-200 dark:divide-gray-700">
              {characters?.results?.map((item, index) => {
                return (
                  <li key={index} className="pb-2 sm:pb-2">
                    <div className="flex items-center space-x-4 rtl:space-x-reverse">
                      <div className="flex-shrink-0">
                        <Image
                          className="w-8 h-8 rounded-full"
                          width={500}
                          height={500}
                          src={item.image}
                          alt="Neil image"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                          <a href={`/characters/${item.id}`}>{item.name}</a>
                        </p>
                        <p className="text-sm  truncate dark:text-white-400">
                          {item.status}
                        </p>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Characters;
