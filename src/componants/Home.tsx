import Image from "next/image";
import child from '@/assets/child.png';
export default function Home() {
  return (
    <main className="bg-gray-50 flex justify-center place-items-center w-full  min-h-screen px-30">
      <section className="w-[50%]">
        <h2 className="text-6xl text-emerald-600 font-bold py-3">Let&rsquo;s be Kind for <span className="text-indigo-900">Children</span></h2>
        <p className="w-[60%] py-4">
          High Quality Charity Theme in Envato Market. You Can Satisfied
          Yourself By Helping.
        </p>
        <button className="bg-emerald-600 rounded-full px-6 py-3 font-semibold text-white my-4">Donate Now</button>
      </section>
      <section className="w-[50%]">
      <Image src={child} alt="logo" width={600} height={600} className="bg-contain rounded-full"/>
      </section>
    </main>
  );
}
