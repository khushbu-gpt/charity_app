import { causes } from "@/types/cause";

export default function Causes() {
  return (
    <div>
      {/* Causes Section */}
      <section className="py-16 px-6 md:px-48 text-center bg-blue-50 h-screen">
        <p className="text-green-500 text-xl mb-2">What We Do?</p>
        <h2 className="text-2xl md:text-4xl font-bold text-blue-900">
          We Are In A Mission To Help <br /> The Helpless
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-16">
          {causes.map(({ title, description, icon }) => (
            <div
              key={title}
              className="bg-white p-6 py-8 md:py-20 rounded shadow hover:shadow-lg transition"
            >
              <div className="text-3xl md:text-7xl text-green-600 mb-4">
                {icon}
              </div>
              <h3 className="text-sm md:text-xl font-bold text-blue-900">
                {title}
              </h3>
              <p className="text-gray-600 text-sm mt-2">{description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
