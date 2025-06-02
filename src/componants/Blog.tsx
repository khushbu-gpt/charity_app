import Image from "next/image";
import blog1 from "../assets/blog1.jpg";
import blog2 from "../assets/blog2.jpg";
import blog3 from "../assets/child.png";

import { Search } from "lucide-react";

export const ImageList = [
  {
    id: 1,
    img: blog1,
    title: "Help the helpless who need you.",
  },
  {
    id: 2,
    img: blog2,
    title: "They are waiting for your help.",
  },
  {
    id: 3,
    img: blog3,
    title: "They are waiting for your help.",
  },
];

export const Buttons = [
  "Donation",
  "Charity",
  "Help",
  "Non Profit",
  "Poor People",
  "Helping Hand",
  "Video",
];

export default function Blog() {
  return (
    <main className="">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10">
        {/* Blog Posts Section */}
        <section className="flex flex-col w-full lg:w-2/3">
          {ImageList.map((el) => (
            <article
              key={el.id}
              className="border border-gray-300 p-5 mb-10 rounded-md bg-white shadow-sm hover:shadow-md transition-shadow"
            >
              <Image
                src={el.img}
                alt="blog-img"
                className="rounded-md object-cover w-full h-64 md:h-80"
                width={700}
                height={450}
                priority
              />
              <h2 className="font-semibold text-2xl md:text-3xl text-indigo-900 py-4">
                {el.title}
              </h2>
              <p className="text-neutral-600 pb-4 leading-relaxed text-sm md:text-base">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using Content
                here, content here, making it look like readable English.
              </p>
              <button className="cursor-pointer text-emerald-600 font-semibold hover:underline">
                Read More...
              </button>
            </article>
          ))}
        </section>

        {/* Sidebar Section */}
        <aside className="w-full lg:w-1/3 flex flex-col gap-10">
          {/* Search Box */}
          <div className="border border-gray-300 rounded-md bg-white shadow-sm">
            <h3 className="text-indigo-900 font-semibold p-5 text-lg">
              Search Here
            </h3>
            <hr className="text-gray-300" />
            <div className="flex border border-gray-300 m-3 rounded-md overflow-hidden">
              <input
                type="text"
                placeholder="Search post.."
                className="outline-none text-gray-600 p-3 flex-grow"
              />
              <button className="p-3 bg-emerald-500 hover:bg-emerald-600 transition-colors">
                <Search />
              </button>
            </div>
          </div>

          {/* Categories */}
          <div className="border border-gray-300 rounded-md bg-white shadow-sm">
            <h3 className="text-indigo-900 font-semibold p-5 text-lg">
              Categories
            </h3>
            <hr className="text-gray-300" />
            <ul className="p-5 space-y-3">
              <li className="text-neutral-600 hover:text-emerald-600 cursor-pointer">
                Helping Poor
              </li>
              <li className="text-neutral-600 hover:text-emerald-600 cursor-pointer">
                Water Problem
              </li>
              <li className="text-neutral-600 hover:text-emerald-600 cursor-pointer">
                Charity
              </li>
              <li className="text-neutral-600 hover:text-emerald-600 cursor-pointer">
                Medical Campaign
              </li>
              <li className="text-neutral-600 hover:text-emerald-600 cursor-pointer">
                Free Food
              </li>
            </ul>
          </div>

          {/* Recent Posts */}
          <div className="border border-gray-300 rounded-md bg-white shadow-sm">
            <h3 className="text-indigo-900 font-semibold p-5 text-lg">
              Recent Posts
            </h3>
            <hr className="text-gray-300" />
            <div className="flex gap-4 p-5 border-b border-gray-200 cursor-pointer hover:bg-gray-100 transition">
              <Image
                src={blog1}
                width={80}
                height={80}
                alt="blog-img"
                className="rounded-md object-cover"
              />
              <p className="text-neutral-700 text-sm md:text-base">
                Many People are suffering from a lot of issues.
              </p>
            </div>
            <div className="flex gap-4 p-5 cursor-pointer hover:bg-gray-100 transition">
              <Image
                src={blog2}
                width={80}
                height={80}
                alt="blog-img"
                className="rounded-md object-cover"
              />
              <p className="text-neutral-700 text-sm md:text-base">
                Be soft and kind for the poor people.
              </p>
            </div>
          </div>

          {/* Tags */}
          <div className="border border-gray-300 rounded-md bg-white shadow-sm">
            <h3 className="text-indigo-900 font-semibold p-5 text-lg">Tags</h3>
            <hr className="text-gray-300" />
            <div className="flex flex-wrap gap-3 p-5">
              {Buttons.map((button, i) => (
                <button
                  className="px-4 py-2 text-neutral-700 border border-neutral-200 rounded hover:bg-emerald-600 hover:text-white transition"
                  key={i}
                >
                  {button}
                </button>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}
