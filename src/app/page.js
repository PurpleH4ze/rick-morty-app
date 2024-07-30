import Widget from "@/components/Widget";

export default function Home() {
  const widgetList = [
    {
      href: "/characters",
      title: "Characters",
      description: "Learn more about characters.",
      fullSize: false,
    },
    {
      href: "/locations",
      title: "Locations",
      description: "Explore locations.",
      fullSize: false,
    },
    {
      href: "/episodes",
      title: "Episodes",
      description: "Check out the episodes.",
      fullSize: false,
    },
    {
      href: "/best-episodes",
      title: "Best Episodes",
      description: "All the best",
      fullSize: true,
    },
  ];
  return (
    <main className="bg-[#e4a788] min-h-screen p-10">
      <h1 className="text-4xl font-bold mb-10">Home</h1>
      <div className="flex flex-wrap justify-center gap-6">
        {widgetList?.map((item, index) => (
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
