import Link from "next/link";

export default function ContactPage() {
  return (
    <div>
      {/* Hero section */}
      <section
        className="relative bg-cover bg-center bg-no-repeat py-32 text-center text-white"
        style={{ backgroundImage: "url('/images/charity.webp')" }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
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

      {/* Contact section */}
      <section className="flex flex-col lg:flex-row gap-6 py-16 px-4 sm:px-8 md:px-12 lg:px-48 bg-gray-100 text-center">
        {/* Contact Form */}
        <div className="w-full lg:w-1/2 shadow-xl p-6 sm:p-8 md:p-12 text-gray-700 bg-white rounded-lg">
          <p className="text-green-600 font-semibold">Get In Touch</p>
          <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-8">
            We would Love to Hear From You
          </h2>

          <form className="space-y-4 text-left">
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
            <button className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition w-full sm:w-auto">
              Send Message
            </button>
          </form>
        </div>

        {/* Map */}
        <div className="w-full lg:w-1/2 bg-white p-4 sm:p-6 shadow-lg rounded-lg">
          <h2 className="text-2xl font-semibold text-purple-700 mb-4">
            Our Location
          </h2>
          <iframe
            className="w-full h-64 sm:h-96 md:h-[650px] rounded-lg"
            loading="lazy"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.927348564909!2d-73.98715568459576!3d40.74881797932769!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259af18c26e13%3A0x799a20c4c2e1c33b!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1642101953742!5m2!1sen!2sus"
          ></iframe>
        </div>
      </section>
    </div>
  );
}
