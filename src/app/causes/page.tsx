import Causes from "@/componants/causes";
import Compaign from "@/componants/compaign";
import Link from "next/link";

export default function Causespage() {
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
          <p className="mt-2 text-base">
            <Link href="/" className="hover:text-green-600">
              Home /
            </Link>
            <span className="px-1 text-green-600">Causes</span>
          </p>
        </div>
      </section>
      <Causes />
      <Compaign />
    </div>
  );
}
