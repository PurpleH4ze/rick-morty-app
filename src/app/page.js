import Widget from "@/components/Widget";

export default function Home() {
  const widgetList = [
    {
      href: "/characters",
      title: "Characters",
      description: "Learn more about characters.",
    },
    {
      href: "/locations",
      title: "Locations",
      description: "Explore locations.",
    },
    {
      href: "/episodes",
      title: "Episodes",
      description: "Check out the episodes.",
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
          />
        ))}
      </div>
    </main>
  );
}
