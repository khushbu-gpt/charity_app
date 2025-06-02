import Link from "next/link";
import { TvMinimalPlay } from "lucide-react";
import Image from "next/image";
import Compaign from "@/componants/compaign";
import Causes from "@/componants/causes";

const AboutPage = () => {
  return (
    <main className="bg-white text-black">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center bg-no-repeat py-24 md:py-32 text-center text-white"
        style={{ backgroundImage: "url('/images/charity.webp')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-60"></div>

        {/* Content */}
        <div className="relative z-10 px-4 max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Our About
          </h2>
          <p className="mt-2 text-sm sm:text-base">
            <Link href="/" className="hover:text-green-600">
              Home /
            </Link>
            <span className="px-1 text-green-600">About</span>
          </p>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 md:py-32 flex flex-col items-center gap-10 max-w-6xl mx-auto px-4">
        <div className="w-full aspect-video max-w-4xl">
          <iframe
            className="w-full h-full rounded-md shadow-lg"
            src="https://www.youtube.com/embed/880KQtRuiNI"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center max-w-3xl">
          See what we do for the{" "}
          <span className="text-green-400 block sm:inline">
            poor people <br className="sm:hidden" />
            and the children
          </span>
        </h2>
      </section>

      {/* Causes Component */}
      <Causes />

      {/* What We Do Section */}
      <section className="py-16 md:py-32 px-6 md:px-24 max-w-7xl mx-auto flex flex-col md:flex-row gap-16 md:gap-24 items-center">
        {/* Left Text Content */}
        <div className="md:w-1/2 flex flex-col gap-6">
          <h4 className="text-green-400 text-md md:text-xl font-semibold">
            What We Do?
          </h4>
          <h2 className="text-2xl md:text-4xl font-bold">
            We Are In A Mission To Help The Helpless
          </h2>
          <p className="text-gray-700">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don&apos;t look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there.
          </p>
          <p className="text-gray-700">
            Thing embarrassing hidden in the middle of text. All the Lorem Ipsum
            generators on the Internet tend to repeat predefined chunks as
            necessary,
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <Link
              href="/donate"
              className="px-7 py-2 rounded shadow bg-green-400 text-white text-lg font-semibold text-center"
            >
              Donate
            </Link>
            <h2 className="text-lg font-semibold flex items-center gap-2">
              <TvMinimalPlay size={32} />
              Watch Our Videos
            </h2>
          </div>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 w-full max-w-md sm:max-w-lg md:max-w-none">
          <Image
            src={"/images/about.png"}
            alt="about"
            width={800}
            height={600}
            className="rounded-md object-cover w-full h-auto"
            priority
          />
        </div>
      </section>

      {/* Campaign Component */}
      <Compaign />
    </main>
  );
};

export default AboutPage;
