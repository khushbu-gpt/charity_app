import Events from "@/componants/Events";
import Link from "next/link";

export default function EventPage() {
  return (
    <>
      <section
        className="relative bg-cover bg-center bg-no-repeat py-32 text-center text-white"
        style={{ backgroundImage: "url('/images/charity.webp')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-60"></div>

        {/* Content */}
        <div className="relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold">Our Events</h2>
          <p className="mt-2 text-base">
            <Link href="/" className="text-green-400">
              Home /
            </Link>
            <span className="px-1">Events</span>
          </p>
        </div>
      </section>
      <Events />
    </>
  );
}
