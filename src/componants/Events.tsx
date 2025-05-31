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
    <main className="w-full min-h-screen flex  flex-col items-center justify-center">
      <section className="text-center py-10">
        <h3 className="text-emerald-600 text-lg">Our Events</h3>
        <h2 className="text-4xl text-indigo-900 font-semibold">
          Upcoming Events
        </h2>
      </section>

      <section className="flex p-10 gap-10 flex-wrap justify-center">
        {ImageList.map((el) => {
          return (
            <div
              className="relative  w-[360px]  flex flex-col justify-center items-center mb-40 "
              key={el.id}
            >
              <Image
                src={el.img}
                alt="logo"
                width={400}
                height={100}
                className="object-cover rounded-md"
              />
              <div className="bg-white w-[340px] shadow-lg absolute   p-5 rounded-md z-10  -bottom-40 ">
                <h3 className="text-indigo-900 text-2xl font-semibold ">
                  {el.title}
                </h3>
                <div className="flex gap-4 items-center my-2">
                  <span className="flex justify-center items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {el.time}
                  </span>
                  <span className="flex justify-center items-center gap-2">
                    <LocateIcon className="w-4 h-4" />
                    {el.location}
                  </span>
                </div>
                <p className="py-2">{el.description}</p>
                <button className="text-emerald-600">Learn More...</button>
              </div>
            </div>
          );
        })}
      </section>
    </main>
  );
}
