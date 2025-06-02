import Blog from "@/componants/Blog";
import Link from "next/link";

export default function Blogpage() {
  return (
    <>
      {/* Hero Section with Background */}
      <section
        className="relative bg-cover bg-center bg-no-repeat py-20 sm:py-24 md:py-32 text-center text-white"
        style={{ backgroundImage: "url('/images/charity.webp')" }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black opacity-60"></div>

        {/* Hero Content */}
        <div className="relative z-10 px-4 max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold">
            Latest News
          </h2>
          <p className="mt-2 text-sm sm:text-base">
            <Link href="/" className="hover:text-green-500 transition">
              Home /
            </Link>
            <span className="px-1 text-green-500 font-semibold">Blog</span>
          </p>
        </div>
      </section>

      {/* Blog Section */}
      <section className="w-full min-h-screen px-4 py-10 sm:px-6 md:px-12 lg:px-24 xl:px-48 bg-gray-50">
        <Blog />
      </section>
    </>
  );
}
