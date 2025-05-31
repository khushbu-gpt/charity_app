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
        className="relative bg-cover bg-center bg-no-repeat py-32 text-center text-white"
        style={{ backgroundImage: "url('/images/charity.webp')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-60"></div>

        {/* Content */}
        <div className="relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold">Our About</h2>
          <p className="mt-2 text-lg">
            <Link href="/" className="text-green-400">
              Home /
            </Link>
            About
          </p>
        </div>
      </section>
      <section className="py-32 flex flex-col gap-14 justify-center items-center h-screen">
        <iframe
          className="w-6/10 h-full"
          src="https://www.youtube.com/embed/880KQtRuiNI"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>

        <h2 className="text-4xl md:text-5xl font-bold text-center">
          See what we do for the
          <span className="text-green-400">
            poor people <br /> and the children
          </span>
        </h2>
      </section>

      <Causes />

      {/* What We Do? */}
      <section className=" py:4 md:py-32 pl-48 flex gap-24 justify-center items-center h-screen">
        <div className="w-1/2 flex flex-col gap-8">
          <h4 className="text-md md:text-xl  text-green-400">What We Do?</h4>
          <h2 className="text-md md:text-4xl font-bold">
            We Are In A Mission To Help The Helpless
          </h2>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there.
          </p>
          <p>
            Thing embarrassing hidden in the middle of text. All the Lorem Ipsum
            generators on the Internet tend to repeat predefined chunks as
            necessary,
          </p>
          <div className="flex gap-4 ">
            <button className="px-7 py-2   rounded shadow bg-green-400 text-white text-lg font-semibold">
              Donate
            </button>
            <h2 className="text-lg font-semibold flex gap-2">
              <TvMinimalPlay size={40} />
              Watch Our Videos
            </h2>
          </div>
        </div>
        <div className="w-1/2">
          <Image
            src={"/images/about.png"}
            alt="about"
            width={800}
            height={1200}
            className=" w-[640px] h-[600px]"
          />
        </div>
      </section>

      <Compaign />
    </main>
  );
};

export default AboutPage;
