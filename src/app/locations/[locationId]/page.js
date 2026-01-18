import Resident from "@/components/Resident";
import { getCharacter } from "@/utils/api/character";
import { getCharacterLocationById } from "@/utils/api/location";
import { Suspense } from "react";

async function LocationDetail({ location, residents }) {
  //console.log("location", location);
  console.log("residents", residents);
  const residentList = Array.isArray(residents)
    ? residents
    : residents
      ? [residents]
      : [];
  return (
    location && (
      <div className="min-h-screen">
        <div className="mt-6 border-t border-gray-100 flex items-center justify-center  ">
          <dl className="divide-y divide-gray-100 ">
            <div className="items-center px-4 py-6 sm:flex sm:flex-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-1 text-black sm:w-1/3 sm:text-right min-w-fit">
                Location Name:
              </dt>
              <dd className="mt-1 text-sm leading-6 sm:mt-0 text-black sm:w-2/3 sm:text-left min-w-fit">
                {location?.name}
              </dd>
              <dt className="text-sm font-medium leading-1 text-black sm:w-1/3 sm:text-right min-w-fit">
                Type:
              </dt>
              <dd className="mt-1 text-sm leading-6 sm:mt-0 text-black sm:w-2/3 sm:text-left min-w-fit">
                {location?.type}
              </dd>
            </div>
          </dl>
        </div>
        <div className="flex flex-row flex-wrap gap-5 justify-center items-center">
          {residentList.map((item, index) => (
            <Resident key={item?.id ?? index} resident={item} />
          ))}
        </div>
      </div>
    )
  );
}

export default async function Page({ params: { locationId } }) {
  const location = await getCharacterLocationById(locationId);
  const ids = location?.residents?.map((url) => Number(url.split("/").pop()));
  const residents = await getCharacter(ids);

  return (
    <div className="bg-[#e4a788]">
      <Suspense fallback={<div>Loading...</div>}>
        <LocationDetail location={location} residents={residents} />
      </Suspense>
    </div>
  );
}
