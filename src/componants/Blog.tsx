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
    <main className="flex min-h-screen w-full bg-gray-50 p-20 justify-center  gap-10">
      <section className="flex flex-col w-[50%]">
        {ImageList.map((el) => {
          return (
            <div className="border border-gray-300 p-5 mb-10" key={el.id}>
              <Image src={el.img} width={700} height={700} alt="blog-img" />
              <h2 className="font-semibold text-3xl text-indigo-900 py-4">
                {el.title}
              </h2>
              <p className="text-neutral-600 pb-4">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using Content
                here, content here, making it look like readable English.
              </p>
              <button className="cursor-pointer text-emerald-600 ">
                Read More...
              </button>
            </div>
          );
        })}
      </section>
      <section className="w-[25%]">
        <div className="border border-gray-300 mb-10">
          <h3 className="text-indigo-900 font-semibold p-5 text-lg">
            Search Here
          </h3>
          <hr className=" text-gray-300" />
          <div className="flex border border-gray-300 m-3 justify-between">
            <input
              type="text"
              placeholder="Search post.."
              className="outline-none text-gray-600 p-3"
            />
            <button className="p-3 bg-emerald-500">
              <Search />
            </button>
          </div>
        </div>

        <div className="border border-gray-300 mb-10">
          <h3 className="text-indigo-900 font-semibold p-5 text-lg ">
            Categories
          </h3>
          <hr className=" text-gray-300" />
          <ul className="p-5">
            <li className="py-2 text-neutral-600">Helping Poor</li>
            <li className="py-2 text-neutral-600">Water Problem</li>
            <li className="py-2 text-neutral-600">Charity</li>
            <li className="py-2 text-neutral-600">Medical Campain</li>
            <li className="py-2 text-neutral-600">Free Food</li>
          </ul>
        </div>

        <div className="border border-gray-300 mb-10">
          <h3 className="text-indigo-900 font-semibold p-5 text-lg ">
            Recent Posts
          </h3>
          <hr className=" text-gray-300" />
          <div className="flex gap-4 m-5">
            <Image src={blog1} width={80} height={80} alt="blog-img" />
            <p>Many People are suffering from a lot of issues.</p>
          </div>
          <div className="flex gap-4 m-5">
            <Image src={blog2} width={80} height={80} alt="blog-img" />
            <p>Be soft and kind for the poor people.</p>
          </div>
        </div>

        <div className="border border-gray-300 mb-10">
          <h3 className="text-indigo-900 font-semibold p-5 text-lg ">Tags</h3>
          <hr className=" text-gray-300" />
          <div className="flex flex-wrap m-5 gap-3">
            {Buttons.map((button, i) => (
              <button
                className="px-4 py-2 text-neutral-700 border border-neutral-200 hover:bg-emerald-600 hover:text-white"
                key={i}
              >
                {button}
              </button>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
