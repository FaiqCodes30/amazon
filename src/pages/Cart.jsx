import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Panel from "../components/Panel";

function Cart() {
  return (
    <>
      <Navbar />
      <Panel />

      <main className="bg-[#e3e6e6] min-h-screen p-6">

        <div className="max-w-6xl mx-auto bg-white p-8">

          <h1 className="text-3xl font-bold mb-6">
            Shopping Cart
          </h1>

          <div className="border-t border-b py-8">

            <img
              src="/images/toys-img1.jpg"
              alt="Cart product"
              className="w-40 h-40 object-contain mx-auto"
            />

            <h2 className="text-xl font-bold text-center mt-4">
              Your Amazon Cart is empty
            </h2>

            <p className="text-center text-gray-600 mt-2">
              Add products to your cart to see them here.
            </p>

          </div>

          <div className="text-center mt-6">

            <Link
              to="/products"
              className="inline-block bg-[#ffd814] px-10 py-3 rounded"
            >
              Continue Shopping
            </Link>

          </div>

        </div>

      </main>
    </>
  );
}

export default Cart;