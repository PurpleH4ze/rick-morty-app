export const metadata = {
  title: "Best Episodes",
  description:
    "If you looking for Best Episodes Rick&Morty, you are right places. ",
};

export default function BestEpisodesLayout({
  children, // will be a page or nested layout
}) {
  return (
    <section className="bg-[#e4a788] ">
      {/* Include shared UI here e.g. a header or sidebar */}
      <nav></nav>

      {children}
    </section>
  );
}
