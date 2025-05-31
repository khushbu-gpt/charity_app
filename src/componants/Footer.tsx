export const List = [
  {
    id: "brand",
    title: "About Nasarna",
    content: [
      "Build and Earn with your online store with lots of cool and exclusive WPO features.",
    ],
  },
  {
    id: "links",
    title: "Useful Links",
    content: [
      "About Us",
      "Our Causes",
      "Our Mission",
      "Contact Us",
      "Our Event",
    ],
  },
  {
    id: "contact",
    title: "Contact",
    content: [
      "online store with lots of cool and exclusive WPO-features",
      "28 Street, New York City, USA",
      "+000123456789",
      "nasarna@gmail.com",
    ],
  },
];

export default function Footer() {
  return (
    <>
      <footer className="bg-blue-900 text-white h-screen w-full relative ">
        <section className="text-center">
          <h2 className="text-3xl py-10 font-semibold">
            Follow us For further information
          </h2>
          <form className="focus:outline-blue w-96 rounded-full bg-white flex justify-between items-center mx-auto">
            <input
              type="email"
              placeholder="Enter Your Email"
              aria-label="Email address"
              className="px-4 py-4 text-neutral-900 outline-none"
            />
            <button
              className="bg-emerald-600 rounded-full px-6 py-4 font-semibold"
              type="submit"
            >
              Subscribe
            </button>
          </form>
        </section>
        <section className="flex  mb-10 px-20 mt-20 justify-center items-start ">
          {List.map((el, index) => {
            return (
              <div key={index} className="w-72 text-white mx-10">
                <h2 className="font-semibold text-2xl py-5">{el.title}</h2>
                <ul>
                  {el.content.map((e, index) => {
                    return (
                      <li key={index} className="py-2">
                        {e}
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </section>
        <div className="bottom-0 bg-blue-950 absolute w-full text-center py-5">
          &copy; 2020 Nasarna. All rights reserved
        </div>
      </footer>
    </>
  );
}
