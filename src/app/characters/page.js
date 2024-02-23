"use client";
import Pagination from "@/components/Pagination";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [firstName, setFirstName] = useState('');
  const [isError, setIsError] = useState(false);

  const fetchData = async () => {
    try {
      const response = await fetch("https://rickandmortyapi.com/api/character");
      const data = await response.json();
      console.log("characters", data);
      setCharacters(data);
    } catch (error) {
      setIsError(true);
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

  const fetchCharacterWithName = async (name) => {
    try {
      const response = await fetch(`https://rickandmortyapi.com/api/character/?name=${name}`);
      const data = await response.json();
      console.log("character by name", data);
      setCharacters(data);
    } catch (error) {
      setIsError(true);
      console.error("Error fetching data:", error);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log('data', firstName);
    fetchCharacterWithName(firstName);
  };

  

  return (
    <div className="bg-[#e4a788] min-h-screen flex items-center justify-center">
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-semibold mb-4">Characters Page</h1>
        <p className="text-lg">Characters</p>
        <div>
          <div>
            <form className="max-w-sm mx-auto" onSubmit={onSubmit}>
              <label
                htmlFor="website-admin"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Name
              </label>
              <div className="flex">
                <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                  </svg>
                </span>
                <input
                 name='name'
                  type="text"
                  id="website-admin"
                  className="rounded-none rounded-e-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Name"
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <button type="submit" className="text-white bg-slate-400  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Search</button>

            </form>
          </div>
          <div className="flex flex-col justify-center items-center ">
            {!isError && characters?.results?.map((item, index) => {
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
