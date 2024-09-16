import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function UpgradeYourPlan() {
  return (
    <div className="flex flex-col items-center justify-center gap-6 text-center">
      <p className="mt-2 text-lg leading-8 text-gray-600 max-w-2xl text-center border-2 border-red-200 bg-red-100 p-4 rounded-lg border-dashed ">
        You need to upgrade to the Basic Plan or Premium Plan to create blog
        posts with the power of AI.
      </p>
      <Link
        href="/#pricing"
        className="flex items-center gap-2 font-semibold text-blue-500"
      >
        Go to Pricing <ArrowRight className="w-4 h-4 animate-pulse" />
      </Link>
    </div>
  );
}
