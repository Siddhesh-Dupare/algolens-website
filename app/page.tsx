import Header from "@/components/header/Header";
import Hero from "@/components/hero/Hero";
import Features from "@/components/features/Features";
import Work from "@/components/work/Work";

export default function Home() {
  return (
    <main className="relative w-full">
      <div className="h-screen relative flex flex-col">
        <Header />
        <div className="flex-1 flex mb-5 justify-center">
          <Hero />
        </div>
      </div>
      <div className="h-screen flex">
        <Features />
      </div>
      <div className="h-screen flex">
        <Work />
      </div>
    </main>
  );
}
