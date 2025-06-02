import { campaigns } from "@/types/compaign";
import Image from "next/image";
import Link from "next/link";

export default function Compaign() {
  return (
    <section className="py-16 px-4 sm:px-8 lg:px-48 text-center bg-gray-50">
      {/* Section Header */}
      <p className="text-green-500 text-base sm:text-lg mb-2">Our Causes</p>
      <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-blue-950 leading-snug">
        Popular Causes What You <br className="hidden sm:block" /> Should Know
      </h2>

      {/* Campaign Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 text-left">
        {campaigns.map(({ image, title, raised, goal }) => {
          const percentRaised = (raised / goal) * 100;

          return (
            <div
              key={title}
              className="bg-white rounded-xl shadow hover:shadow-xl transition duration-300 flex flex-col overflow-hidden"
            >
              {/* Image */}
              <div className="relative w-full h-56">
                {/* <Image
                  src={image}
                  alt={title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                /> */}
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col gap-3 flex-grow">
                <h3 className="text-lg sm:text-xl font-semibold text-blue-900">
                  {title}
                </h3>

                {/* Progress Bar */}
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-green-500 h-2 rounded-full transition-all"
                    style={{ width: `${percentRaised}%` }}
                  />
                </div>

                {/* Raised/Goal Stats */}
                <div className="flex justify-between text-sm text-gray-700">
                  <span>Raised: ${raised.toLocaleString()}</span>
                  <span>Goal: ${goal.toLocaleString()}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex divide-x border-t border-gray-200 text-sm font-medium">
                <button className="w-1/2 py-3 hover:bg-gray-100 transition">
                  Learn More
                </button>
                <Link
                  href="/donate"
                  className="w-1/2 py-3 bg-green-600 hover:bg-green-700 text-white text-center transition"
                >
                  Donate Now
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
