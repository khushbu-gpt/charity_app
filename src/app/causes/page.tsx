import Causes from "@/componants/causes";
import Compaign from "@/componants/compaign";
import Link from "next/link";

export default function CausesSection() {
  return (
    <div className="bg-gray-50">
      {/* Hero section */}
      <section
        className="relative bg-cover bg-center bg-no-repeat py-32 text-center text-white"
        style={{ backgroundImage: "url('/images/charity.webp')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-60"></div>

        {/* Content */}
        <div className="relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold">Our Causes</h2>
          <p className="mt-2 text-lg">
            <Link href="/" className="text-green-400">
              Home /
            </Link>
            Causes
          </p>
        </div>
      </section>
      <Causes />
      <Compaign />
    </div>
  );
}
