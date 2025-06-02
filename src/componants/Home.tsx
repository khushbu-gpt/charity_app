import Link from "next/link";

export default function Home() {
  return (
    <main
      className="flex flex-col justify-center items-center w-full min-h-screen bg-cover bg-center bg-no-repeat px-4 sm:px-6 md:px-10"
      style={{
        backgroundImage: "url('/images/main.jpg')",
      }}
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-emerald-600 font-bold text-center py-3">
        Let&rsquo;s be Kind for{" "}
        <span className="text-indigo-900">Children</span>
      </h2>

      <p className="text-center text-base sm:text-lg md:text-xl max-w-xl py-4 text-white bg-black/50 px-4 rounded">
        High Quality Charity Theme in Envato Market. You Can Satisfied Yourself
        By Helping.
      </p>

      <Link
        href="/donate"
        className="bg-emerald-600 hover:bg-emerald-700 transition-colors duration-300 rounded px-6 py-3 font-semibold text-white mt-4"
      >
        Donate Now
      </Link>
    </main>
  );
}
