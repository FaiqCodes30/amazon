import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Panel from "../components/Panel";

function Orders() {
  return (
    <>
      <Navbar />
      <Panel />

      <main className="bg-[#e3e6e6] min-h-screen p-6">

        <div className="max-w-6xl mx-auto bg-white p-8">

          <h1 className="text-3xl font-bold">
            Your Orders
          </h1>

          <div className="text-center py-20">

            <h2 className="text-2xl font-bold">
              You haven't placed any orders yet.
            </h2>

            <p className="text-gray-600 mt-3">
              When you place an order, it will appear here.
            </p>

            <Link
              to="/products"
              className="inline-block bg-[#ffd814] px-10 py-3 rounded mt-6"
            >
              Start Shopping
            </Link>

          </div>

        </div>

      </main>
      
    </>
  );
}

export default Orders;