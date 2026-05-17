import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main>
      <Hero />
      <section className="h-screen flex items-center justify-center bg-black border-t border-[#1a1a1a]">
        <div className="text-center max-w-2xl px-8">
          <p className="text-sm uppercase tracking-[0.3em] text-[#666] mb-6">
            Fast Fashion&apos;s Dirty Tricks
          </p>
          <h2 className="text-4xl md:text-6xl font-bold text-white leading-[0.95]">
            The equivalent of one garbage truck&apos;s worth of clothing is incinerated or sent to landfill every second.
          </h2>
        </div>
      </section>
    </main>
  );
}
