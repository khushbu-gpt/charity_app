"use client";

export const List = [
  {
    id: "brand",
    title: "About Nasarna",
    content: [
      "Build and Earn with your online store with lots of cool and exclusive WPO features.",
    ],
  },
  {
    id: "links",
    title: "Useful Links",
    content: [
      "About Us",
      "Our Causes",
      "Our Mission",
      "Contact Us",
      "Our Event",
    ],
  },
  {
    id: "contact",
    title: "Contact",
    content: [
      "28 Street, New York City, USA",
      "+000123456789",
      "nasarna@gmail.com",
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white w-full">
      {/* Newsletter Subscription */}
      <section className="text-center px-4 py-12">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-6">
          Follow us For further information
        </h2>

        <form
          className="relative w-full max-w-2xl mx-auto flex flex-col sm:flex-row items-center gap-4 sm:gap-0"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="email"
            placeholder="Enter your email"
            aria-label="Email address"
            required
            className="flex-1 px-4 py-3 bg-white text-gray-800 w-full rounded-md sm:rounded-l-md sm:rounded-none md:rounded-full focus:outline-none"
          />

          {/* Mobile & Tablet: Static position, full width */}
          <button
            type="submit"
            className="bg-emerald-600 text-white px-6 py-2 font-semibold rounded-md sm:rounded-r-md sm:rounded-none md:rounded-full hover:bg-emerald-700 transition w-full sm:w-auto sm:absolute sm:right-2"
          >
            Subscribe
          </button>
        </form>
      </section>

      {/* Footer Content Sections */}
      <section className="w-full flex flex-col md:flex-row flex-wrap justify-center gap-y-10 gap-x-16 px-6 sm:px-10 md:px-16 lg:px-24 py-12 text-center md:text-left">
        {List.map((el, index) => (
          <div
            key={index}
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 max-w-xs"
          >
            <h2 className="font-semibold text-xl mb-4">{el.title}</h2>
            <ul className="text-sm text-gray-200">
              {el.content.map((item, idx) => (
                <li
                  key={idx}
                  className={`mb-2 ${
                    el.id === "contact" && item.includes("@") ? "break-all" : ""
                  } hover:underline cursor-pointer`}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* Copyright */}
      <div className="bg-blue-950 text-center py-4 text-sm">
        &copy; {new Date().getFullYear()} Nasarna. All rights reserved.
      </div>
    </footer>
  );
}
