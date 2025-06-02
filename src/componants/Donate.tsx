export function Donate() {
  return (
    <main className="min-h-screen w-full flex flex-col items-center px-4 md:px-10 lg:px-48 py-10 bg-gray-50">
      <h2 className="text-indigo-900 text-2xl md:text-3xl font-bold mb-10 text-center">
        Make a Donation
      </h2>

      <form className="w-full max-w-4xl bg-white p-6 md:p-10 shadow-lg rounded-lg space-y-10">
        {/* Donation Amount */}
        <section className="space-y-4">
          <h3 className="text-indigo-900 text-lg font-semibold">
            Your Donation
          </h3>
          <input
            type="text"
            placeholder="Enter Donation Amount"
            className="border border-neutral-300 w-full p-3 rounded-md outline-none"
          />
        </section>

        {/* Personal Details */}
        <section className="space-y-4">
          <h3 className="text-indigo-900 text-lg font-semibold">
            Your Details
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="First Name"
              className="border border-neutral-300 p-3 rounded-md outline-none"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="border border-neutral-300 p-3 rounded-md outline-none"
            />
            <input
              type="email"
              placeholder="Email"
              className="border border-neutral-300 p-3 rounded-md outline-none"
            />
            <input
              type="text"
              placeholder="Address"
              className="border border-neutral-300 p-3 rounded-md outline-none"
            />
          </div>

          <textarea
            name="message"
            rows={4}
            placeholder="Message (Optional)"
            className="border border-neutral-300 p-3 rounded-md outline-none w-full"
          ></textarea>
        </section>

        {/* Payment Method */}
        <section className="space-y-4">
          <h3 className="text-indigo-900 text-lg font-semibold">
            Choose Payment Method
          </h3>

          <div className="flex items-center gap-6 flex-wrap">
            <label className="flex items-center gap-2">
              <input type="radio" name="payment" />
              <span>Payment by Card</span>
            </label>
            <label className="flex items-center gap-2">
              <input type="radio" name="payment" />
              <span>Offline Donation</span>
            </label>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Cardholder Name"
              className="border border-neutral-300 p-3 rounded-md outline-none"
            />
            <input
              type="text"
              placeholder="Card Number"
              className="border border-neutral-300 p-3 rounded-md outline-none"
            />
          </div>
        </section>

        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-emerald-600 text-white rounded-md px-6 py-3 font-semibold hover:bg-emerald-700 transition"
          >
            Donate Now
          </button>
        </div>
      </form>
    </main>
  );
}
