"use client";

export default function BestEpisode({ name, air_date }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-2">{name}</h2>
      <p className="text-gray-500">{air_date}</p>
    </div>
  );
}
