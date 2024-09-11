import BgGradient from "@/components/common/bg-gradient";
import Banner from "@/components/home/Banner";
import HowItWorks from "@/components/home/HowItWorks";
import Pricing from "@/components/home/Pricing";

import { Dot } from "lucide-react";

export default function Home() {
  return (
    <main className="mx-auto w-full inset-0 h-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
      <BgGradient children={""} />
      <Banner />
      <div className="flex items-center justify-center">
        <Dot className="text-blue-400"></Dot>
        <Dot className="text-blue-400"></Dot>
        <Dot className="text-blue-400"></Dot>
      </div>

      <HowItWorks />

      <div className="flex items-center justify-center">
        <Dot className="text-blue-400"></Dot>
        <Dot className="text-blue-400"></Dot>
        <Dot className="text-blue-400"></Dot>
      </div>
      <Pricing />

      <footer className="bg-gray-200/20 flex flex-col h-20 py-24 px-12 z-20 relative overflow-hidden">
        <p>All Rights Reserved, {new Date().getFullYear()}</p>
        <a
          className="hover:text-blue-400 transition-all duration-300"
          href="https://www.linkedin.com/in/boris-kalev-977972278/"
          target="_blank"
        >
          Build By Boris Kalev
        </a>
      </footer>
    </main>
  );
}
