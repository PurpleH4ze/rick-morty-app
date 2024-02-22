import { getCharacter } from "@/utils/api/character";
import { getCharacterLocation } from "@/utils/api/location";
import Image from "next/image";
import { Suspense } from "react";

async function LocationList({ location, img }) {
  const characterLocation = await getCharacterLocation(location?.url);

  return (
    characterLocation && (
      <div>
        <div className="mt-6 border-t border-gray-100 flex items-center justify-center ">
          <dl className="divide-y divide-gray-100 ">
            <div className="items-center px-4 py-6 sm:flex sm:flex-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-1 text-black sm:w-1/3 sm:text-right min-w-fit">
                Location Name:
              </dt>
              <dd className="mt-1 text-sm leading-6 sm:mt-0 text-black sm:w-2/3 sm:text-left min-w-fit">
                {characterLocation?.name}
              </dd>
            </div>
          </dl>
        </div>

        <div className="flex items-center justify-center">
          <Image
            src={img}
            width={500}
            height={500}
            alt="Picture of the author"
          />
        </div>
      </div>
    )
  );
}

export default async function Page({ params: { characterId } }) {
  const character = await getCharacter(characterId);
  console.log("character", character);

  return (
    <div className="bg-[#e4a788]">
      <h1>{character?.name}</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <LocationList location={character?.location} img={character?.image} />
      </Suspense>
    </div>
  );
}