import { campaigns } from "@/types/compaign";

export default function Compaign() {
  return (
    <div>
      {/* Popular Campaigns */}
      <section className="py-16 px-6 md:px-48 text-center">
        <p className="text-green-500 text-xl mb-4">Our Causes</p>
        <h2 className="text-2xl md:text-4xl font-bold text-blue-950">
          Popular Causes What You <br /> Should Know
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-12">
          {campaigns.map(({ image, title, raised, goal }) => {
            const percentRaised = (raised / goal) * 100;
            return (
              <div
                key={title}
                className="bg-white rounded shadow hover:shadow-lg transition"
              >
                <img
                  src={image}
                  alt={title}
                  className="w-full h-64 object-cover rounded"
                />

                <div className="flex flex-col justify-between text-sm text-gray-700 my-2 p-5">
                  <h3 className="text-2xl font-semibold text-blue-900 mt-4">
                    {title}
                  </h3>
                  <div className="w-full bg-gray-200 rounded-full my-3">
                    <div
                      className="bg-green-500 h-1 rounded-full"
                      style={{ width: `${percentRaised}%` }}
                    />
                  </div>
                  <div className="flex justify-between">
                    <span>Raised: ${raised.toLocaleString()}</span>
                    <span>Goal: ${goal.toLocaleString()}</span>
                  </div>
                </div>
                <div className="flex justify-between w-full">
                  <button className="bg-white shadow border-t border-gray-200 py-3 cursor-pointer w-1/2 text-black">
                    Learn More
                  </button>
                  <button className="bg-cyan-300 shadow  text-white font-bold cursor-pointer w-1/2">
                    Donate Now
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
