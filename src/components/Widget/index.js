import Link from "next/link";

export default function Widget({ href, title, description }) {
  return (
    <Link
      href={href}
      className="block p-6 bg-slate-600 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex-1 min-w-[300px]"
    >
      <h2 className="text-2xl font-bold mb-4 text-white">{title}</h2>
      <p className="text-white">{description}</p>
    </Link>
  );
}
