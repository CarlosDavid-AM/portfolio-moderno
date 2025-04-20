import NavBar from "@/components/NavBar";
import RestaurantApis from "@/components/projects/RestaurantApis";
import UrlShortener from "@/components/projects/UrlShortener";
import { AuroraBackgroundDemo } from "@/features/AuroraBackground";
import { BackgroundLinesDemo } from "@/features/BackgroundLinesDemo";

export default function Home() {
  return (
    <main>
      <NavBar />

      {/* Home */}
      <AuroraBackgroundDemo />

      {/* Proyects */}
      <div className="bg-zinc-200 dark:bg-zinc-950 text-black dark:text-white text-center py-10">
        <h2 className="text-2xl md:text-3xl 2xl:text-4xl font-bold text-center text-black dark:text-white">
          Proyectos
        </h2>
        <div className="container mx-auto py-5">
          <RestaurantApis />
          <UrlShortener />
        </div>
      </div>

      {/* About me */}
      <BackgroundLinesDemo />
    </main>
  );
}
