import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function Checkout() {
  return (
    <>
      <Navbar />

      <main className="bg-[#e3e6e6] min-h-screen p-6">

        <div className="max-w-6xl mx-auto">

          <h1 className="text-3xl font-bold mb-6">
            Checkout
          </h1>

          <div className="grid md:grid-cols-3 gap-6">

            <div className="md:col-span-2 space-y-6">

              <section className="bg-white p-6">
                <h2 className="text-xl font-bold mb-4">
                  1. Delivery Address
                </h2>

                <input
                  type="text"
                  placeholder="Full name"
                  className="w-full border p-3 mb-3"
                />

                <input
                  type="text"
                  placeholder="Address"
                  className="w-full border p-3 mb-3"
                />

                <input
                  type="text"
                  placeholder="City"
                  className="w-full border p-3"
                />
              </section>

              <section className="bg-white p-6">
                <h2 className="text-xl font-bold mb-4">
                  2. Payment Method
                </h2>

                <select className="w-full border p-3">
                  <option>Cash on Delivery</option>
                  <option>Credit / Debit Card</option>
                </select>
              </section>

            </div>

            <div className="bg-white p-6 h-fit">

              <h2 className="text-xl font-bold">
                Order Summary
              </h2>

              <div className="flex justify-between mt-6">
                <span>Items:</span>
                <span>$0.00</span>
              </div>

              <div className="flex justify-between mt-3">
                <span>Delivery:</span>
                <span>$0.00</span>
              </div>

              <hr className="my-5" />

              <div className="flex justify-between font-bold text-xl">
                <span>Total:</span>
                <span>$0.00</span>
              </div>

              <Link
                to="/orders"
                className="block text-center bg-[#ffd814] py-3 mt-6 rounded"
              >
                Place your order
              </Link>

            </div>

          </div>

        </div>

      </main>
    </>
  );
}

export default Checkout;