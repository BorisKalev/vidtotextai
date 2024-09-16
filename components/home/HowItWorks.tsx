import { BrainIcon, Clapperboard, FileText, MoveRight } from "lucide-react";

export default function HowItWorks() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="flex items-center justify-center w-full pb-6">
        <h2 className="font-bold text-xl uppercase mb-8 text-blue-600">
          How it works
        </h2>
      </div>
      <h3 className="flex items-center justify-center mb-24 text-center font-bold">
        Easily repurpose your content into SEO focused blog posts
      </h3>

      <div className="flex items-center justify-center gap-4 lg:gap-24">
        <div className="flex flex-col gap-4">
          <p className="flex items-center justify-center">
            <Clapperboard size={64} strokeWidth={0.5} />
          </p>
          <p className="text-center font-bold text-lg">Upload a Video</p>
        </div>
        <MoveRight size={64} strokeWidth={0.5} className="text-blue-500" />

        <div className="flex flex-col items-center gap-4">
          <p className="flex items-center justify-center">
            <BrainIcon size={64} strokeWidth={0.5} />
          </p>
          <p className="text-center font-bold text-lg">AI Magic ✨</p>
        </div>
        <MoveRight size={64} strokeWidth={0.5} className="text-blue-500" />
        <div className="flex flex-col gap-4">
          <p className="flex items-center justify-center">
            <FileText size={64} strokeWidth={0.5} />
          </p>
          <p className="text-center font-bold text-lg">Blog</p>
        </div>
      </div>
    </section>
  );
}
