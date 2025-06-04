"use client";

import { campaigns } from "@/types/compaign";
import Image from "next/image";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Compaign() {
  return (
    <section className="py-24 px-4 sm:px-6 md:px-10 lg:px-48 text-center min-h-screen bg-gray-200">
      {/* Section Title */}
      <p className="text-green-500 text-sm sm:text-base md:text-2xl mb-2">
        Our Causes
      </p>
      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-blue-950 leading-snug">
        Popular Causes What You <br className="hidden sm:inline-block" /> Should
        Know
      </h2>

      {/* Carousel */}
      <div className="mt-10 text-left">
        <Carousel
          className="w-full"
          opts={{
            loop: true,
            align: "start",
          }}
        >
          <CarouselContent>
            {campaigns.map(({ image, title, raised, goal }) => {
              const percentRaised = (raised / goal) * 100;

              return (
                <CarouselItem
                  key={title}
                  className="md:basis-1/2 lg:basis-1/3 px-2"
                >
                  <div className="bg-white rounded-xl shadow hover:shadow-xl transition duration-300 flex flex-col overflow-hidden h-full">
                    {/* Image */}
                    <div className="relative w-full h-56 sm:h-64 md:h-60 lg:h-56">
                      <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        priority
                      />
                    </div>

                    {/* Content */}
                    <div className="p-4 sm:p-5 flex flex-col gap-3 flex-grow">
                      <h3 className="text-base sm:text-lg font-semibold text-blue-900">
                        {title}
                      </h3>

                      {/* Progress */}
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-green-500 h-2 rounded-full transition-all"
                          style={{ width: `${percentRaised}%` }}
                        />
                      </div>

                      <div className="flex justify-between text-xs sm:text-sm text-gray-700">
                        <span>Raised: ${raised.toLocaleString()}</span>
                        <span>Goal: ${goal.toLocaleString()}</span>
                      </div>
                    </div>

                    {/* Buttons */}
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
                </CarouselItem>
              );
            })}
          </CarouselContent>

          {/* Carousel Controls */}
          <div className="flex justify-center mt-6 gap-2">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
