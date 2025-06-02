import { causes } from "@/types/cause";

export default function Causes() {
  return (
    <section className="py-16 px-4 sm:px-8 lg:px-48 text-center bg-blue-50 min-h-screen flex flex-col justify-center items-center">
      {/* Header Text */}
      <p className="text-green-500 text-base sm:text-lg mb-2">What We Do?</p>
      <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-blue-900 leading-snug">
        We Are In A Mission To Help <br className="hidden sm:block" /> The
        Helpless
      </h2>

      {/* Grid Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
        {causes.map(({ title, description, icon }) => (
          <div
            key={title}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <div className="text-4xl sm:text-5xl text-green-600 mb-4">
              {icon}
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-blue-900 mb-2">
              {title}
            </h3>
            <p className="text-gray-600 text-sm sm:text-base">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
