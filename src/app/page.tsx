import NavBar from "@/components/NavBar";
import { AuroraBackgroundDemo } from "@/features/AuroraBackground";

export default function Home() {
  return (
    <main>
      <NavBar />
      <AuroraBackgroundDemo />
      <div className="bg-blue-100 dark:bg-zinc-950 text-black dark:text-white text-center p-4">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi et
        quibusdam quam hic cum odio, consequatur eveniet corrupti officiis
        pariatur voluptate praesentium porro at assumenda similique excepturi
        exercitationem in maxime?
      </div>
    </main>
  );
}
