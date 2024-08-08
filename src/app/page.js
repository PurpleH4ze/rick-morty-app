import Widget from "@/components/Widget";
import { routes } from "@/utils/routes";

export default function Home() {
  return (
    <main className="bg-[#e4a788] min-h-screen p-10">
      <h1 className="text-4xl font-bold mb-10">Home</h1>
      <div className="flex flex-wrap justify-center gap-6">
        {routes?.map((item, index) => (
          <Widget
            key={index}
            href={item.href}
            title={item.title}
            description={item.description}
            fullSize={item.fullSize}
          />
        ))}
      </div>
    </main>
  );
}
