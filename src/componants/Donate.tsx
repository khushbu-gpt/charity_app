export function Donate() {
  return (
    <main className="min-h-screen w-full flex flex-col items-center my-10">
      <h2 className="text-indigo-900 text-2xl font-bold my-10">Make a Donation</h2>
      <form action="" className="w-[50%]">
        <section className="mb-10 p-5 border border-neutral-300">
          <h3 className="text-indigo-900 text-lg font-semibold py-2">
            Your Donation
          </h3>
          <input
            type="text"
            placeholder="Enter Donation Amount"
            className="border border-neutral-300 w-full p-3 rounded-md outline-none"
          />
        </section>

        <section className="border border-neutral-300 mb-10 p-5 ">
          <h3 className="text-indigo-900 text-lg font-semibold py-2">
            Details
          </h3>
         <div className="flex gap-4 mb-5">
             <input
            type="text"
            aria-label="First Name"
            placeholder="First Name"
            className="border border-neutral-300 w-[50%] p-3 rounded-md outline-none "
          />
          <input
            type="text"
            aria-label="Last Name"
            placeholder="Last Name"
            className="border border-neutral-300 w-[50%] p-3 rounded-md outline-none"
          />
         </div>
       <div className="flex gap-4 mb-5">
           <input
            type="text"
            aria-label="Email"
            placeholder="Email"
            className="border border-neutral-300 w-[50%] p-3 rounded-md outline-none "
          />
          <input
            type="text"
            aria-label="Address"
            placeholder="Address"
            className="border border-neutral-300  w-[50%] p-3 rounded-md outline-none"
          />
       </div>
          <textarea
            name="Message"
            id="Message"
            rows={5}
            placeholder="Message"
            className="border border-neutral-300 p-3 rounded-md outline-none w-full"
          ></textarea>
        </section>

        <section className="border border-neutral-300 mb-10 p-5">
            <h3>Choose Your Payment Method </h3>
            <div className="flex gap-2 py-4">
             <input type="radio" name="" id="Card" />
             Payment By Card
             <input type="radio" name="" id="Donation" />
             Offline Donation
            </div>
            <div className="flex gap-4">
            <input
            type="text"
            aria-label="Card holder Name"
            placeholder=""
            className="border border-neutral-300  w-[50%] p-3 rounded-md outline-none"
          />
           <input
            type="text"
            aria-label="Card Number"
            placeholder=""
            className="border border-neutral-300  w-[50%] p-3 rounded-md outline-none"
          />
            </div>


        </section>
        <button className="bg-emerald-600 text-white rounded-md px-6 py-3 mb-10">Donate Now</button>
      </form>
    </main>
  );
}
