import Link from "next/link";

export default function ContactPage() {
  return (
    <div>
      {/* Hero section */}
      <section
        className="relative bg-cover bg-center bg-no-repeat py-32 text-center text-white"
        style={{ backgroundImage: "url('/images/charity.webp')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-60"></div>

        {/* Content */}
        <div className="relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold">Contact Us</h2>
          <p className="mt-2 text-lg">
            <Link href="/" className="text-green-400">
              Home /
            </Link>
            Contact
          </p>
        </div>
      </section>
      <section className="py-16 px-6 md:px-48 bg-gray-100 text-center ">
        <div className="w-1/2 shadow-xl p-12 text-gray-700">
          <p className="text-green-600 font-semibold">Get In Touch</p>
          <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-8">
            We'd Love to Hear From You
          </h2>

          <form className="max-w-2xl mx-auto space-y-4 text-left">
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="flex-1 border border-gray-300 rounded px-4 py-2"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="flex-1 border border-gray-300 rounded px-4 py-2"
              />
            </div>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border border-gray-300 rounded px-4 py-2"
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-full border border-gray-300 rounded px-4 py-2"
            />
            <textarea
              placeholder="Your Message"
              rows={5}
              className="w-full border border-gray-300 rounded px-4 py-2"
            ></textarea>
            <button className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition">
              Send Message
            </button>
          </form>
        </div>
        <div className="w-1/2"></div>
      </section>
    </div>
  );
}
