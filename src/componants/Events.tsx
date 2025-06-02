import img1 from "@/assets/img1.jpg";
import img2 from "@/assets/img2.jpg";
import img3 from "@/assets/img3.jpg";
import img from "@/assets/child.png";

import { Clock, LocateIcon } from "lucide-react";
import Image from "next/image";

export const ImageList = [
  {
    id: 1,
    img: img1,
    title: "Education For All Children",
    time: "8.00 - 5.00",
    location: "New York City",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 2,
    img: img2,
    title: "Education For Everyone",
    time: "8.00 - 5.00",
    location: "New York City",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 3,
    img: img3,
    title: "Free Treatment",
    time: "8.00 - 5.00",
    location: "New York City",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 4,
    img: img3,
    title: "Free treatment",
    time: "8.00 - 5.00",
    location: "New York City",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 5,
    img: img,
    title: "Food For Everyone",
    time: "8.00 - 5.00",
    location: "New York City",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

export default function Event() {
  return (
    <main className="w-full flex flex-col items-center justify-center py-10 px-6 sm:px-10 md:px-20 lg:px-32 xl:px-48 bg-gray-50">
      {/* Section Heading */}
      <section className="text-center mb-10">
        <h3 className="text-emerald-600 text-lg font-medium">Our Events</h3>
        <h2 className="text-3xl md:text-4xl text-indigo-900 font-bold">
          Upcoming Events
        </h2>
      </section>

      {/* Events Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl">
        {ImageList.map((el) => (
          <div key={el.id} className="relative group mb-48">
            <Image
              src={el.img}
              alt={el.title}
              width={400}
              height={240}
              className="w-full h-64 object-cover rounded-md shadow-md"
            />
            <div className="bg-white shadow-xl rounded-md p-5 absolute left-1/2 -bottom-40 transform -translate-x-1/2 w-[90%] sm:w-[85%] md:w-[80%] lg:w-[90%] z-10">
              <h3 className="text-indigo-900 text-xl font-semibold">
                {el.title}
              </h3>
              <div className="flex flex-wrap gap-4 text-sm text-gray-600 my-3">
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {el.time}
                </span>
                <span className="flex items-center gap-2">
                  <LocateIcon className="w-4 h-4" />
                  {el.location}
                </span>
              </div>
              <p className="text-gray-700 text-sm">{el.description}</p>
              <button className="text-emerald-600 mt-3 hover:underline font-medium">
                Learn More...
              </button>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
