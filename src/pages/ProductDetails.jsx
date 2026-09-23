import { Link, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Panel from "../components/Panel";

const products = {
  1: {
    name: "Fun Toys Collection",
    price: "29.99",
    image: "/images/toys-img1.jpg",
  },
  2: {
    name: "Fashion Collection",
    price: "39.99",
    image: "/images/shop1.jpg",
  },
  3: {
    name: "Kitchen Appliance",
    price: "49.99",
    image: "/images/kitchen-img1.jpg",
  },
  4: {
    name: "School Supplies",
    price: "19.99",
    image: "/images/school-img1.jpg",
  },
  5: {
    name: "Home Products",
    price: "34.99",
    image: "/images/home-img1.jpg",
  },
  6: {
    name: "Wireless Technology",
    price: "59.99",
    image: "/images/tech-img1.jpg",
  },
  7: {
    name: "PC Accessories",
    price: "69.99",
    image: "/images/pc-img1.jpg",
  },
  8: {
    name: "Beauty Products",
    price: "24.99",
    image: "/images/beauty-img1.jpg",
  },
  9: {
    name: "Fitness Gear",
    price: "44.99",
    image: "/images/gear-img1.jpg",
  },
  10: {
    name: "Watches",
    price: "79.99",
    image: "/images/watches-img1.jpg",
  },
};

function ProductDetails() {
  const { id } = useParams();

  const product = products[id];

  if (!product) {
    return (
      <div className="p-10 text-center">
        <h1 className="text-3xl font-bold">
          Product not found
        </h1>

        <Link
          to="/products"
          className="text-blue-600 mt-4 inline-block"
        >
          Back to Products
        </Link>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <Panel />

      <main className="bg-[#dddddd] min-h-screen p-6">

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

          <div className="flex justify-center">
            <img
              src={product.image}
              alt={product.name}
              className="w-full max-w-lg h-[450px] object-contain"
            />
          </div>

          <div>

            <h1 className="text-3xl font-bold">
              {product.name}
            </h1>

            <p className="text-yellow-500 text-xl mt-3">
              ★★★★☆
            </p>

            <hr className="my-5" />

            <p className="text-3xl">
              ${product.price}
            </p>

            <p className="text-gray-600 mt-5">
              This is a sample product page for the Amazon
              React project.
            </p>

            <div className="flex flex-col gap-3 mt-8 max-w-sm">

              <Link
                to="/cart"
                className="bg-[#ffd814] text-center py-3 rounded-full"
              >
                Add to Cart
              </Link>

              <Link
                to="/checkout"
                className="bg-[#ffa41c] text-center py-3 rounded-full"
              >
                Buy Now
              </Link>

            </div>

          </div>
        </div>

      </main>
    </>
  );
}

export default ProductDetails;