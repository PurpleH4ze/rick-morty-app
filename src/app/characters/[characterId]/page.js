// ...

import Image from "next/image";
import { Suspense } from "react";

const getCharacterLocation = async (url) => {
  const res = await fetch(url);

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

const getCharacter = async (id) => {
  const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

async function LocationList({ location, img }) {
  const characterLocation = await getCharacterLocation(location?.url);
  console.log("characterLocation", characterLocation);

  return (
    characterLocation && (
      <>
        <div>
          <div className="mt-6 border-t border-gray-100">
            <dl className="divide-y divide-gray-100">
              <div className="px-4 py-6 sm:flex sm:flex-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-1  text-white">
                  Location Name
                </dt>
                <dd className="mt-1 text-sm leading-6 sm:col-span-2 sm:mt-0 text-white">
                  {characterLocation?.name}
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <Image src={img} width={500} height={500} alt="Picture of the author" />
      </>
    )
  );
}

export default async function Page({ params: { characterId } }) {
  const character = await getCharacter(characterId);
  console.log("character", character);

  return (
    <>
      <h1>{character?.name}</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <LocationList location={character?.location} img={character?.image} />
      </Suspense>
    </>
  );
}
