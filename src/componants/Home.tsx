import Link from "next/link";

export default function Home() {
  return (
    <main className="relative w-full min-h-screen flex items-center justify-center text-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1509099836639-18ba1795216d')",
        }}
      >
        {/* Overlay for darkening */}
        <div className="w-full h-full bg-gradient-to-b from-black/60 via-black/40 to-black/60 backdrop-brightness-75"></div>
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 px-4 sm:px-6 md:px-10 lg:px-20 max-w-5xl w-full">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-white drop-shadow-md">
          Let<span className="text-emerald-400">’</span>s be Kind for Children
        </h2>

        <p className="mt-6 text-base sm:text-lg md:text-xl text-gray-200 font-medium drop-shadow">
          Create a better future by lending a helping hand. <br /> Every child
          deserves love, care, and opportunity.
        </p>

        <Link
          href="/donate"
          className="inline-block bg-emerald-600 hover:bg-emerald-700 transition-all duration-300 rounded px-8 py-3 font-semibold text-white mt-8 text-base sm:text-lg shadow-md hover:shadow-lg"
        >
          Donate Now
        </Link>
      </div>
    </main>
  );
}
