import BestEpisode from "@/components/BestEpisode";
import { getBestEpisodes } from "@/utils/api/episodes";

async function fetchData() {
  const res = await getBestEpisodes();
  return res;
}

export default async function BestEpisodesPage() {
  const data = await fetchData();

  return (
    <div className="max-w-screen-lg mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-center">Best Episodes</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data?.results?.length > 0 &&
          data?.results?.map((episode) => (
            <BestEpisode
              key={episode.id}
              name={episode.name}
              air_date={episode.air_date}
            />
          ))}
      </div>
    </div>
  );
}
