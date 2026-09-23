import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Panel from "../components/Panel";

const products = [
  {
    id: "1",
    name: "Fun Toys Collection",
    price: "29.99",
    image: "/images/toys-img1.jpg",
  },
  {
    id: "2",
    name: "Fashion Collection",
    price: "39.99",
    image: "/images/shop1.jpg",
  },
  {
    id: "3",
    name: "Kitchen Appliance",
    price: "49.99",
    image: "/images/kitchen-img1.jpg",
  },
  {
    id: "4",
    name: "School Supplies",
    price: "19.99",
    image: "/images/school-img1.jpg",
  },
  {
    id: "5",
    name: "Home Products",
    price: "34.99",
    image: "/images/home-img1.jpg",
  },
  {
    id: "6",
    name: "Wireless Technology",
    price: "59.99",
    image: "/images/tech-img1.jpg",
  },
  {
    id: "7",
    name: "PC Accessories",
    price: "69.99",
    image: "/images/pc-img1.jpg",
  },
  {
    id: "8",
    name: "Beauty Products",
    price: "24.99",
    image: "/images/beauty-img1.jpg",
  },
  {
    id: "9",
    name: "Fitness Gear",
    price: "44.99",
    image: "/images/gear-img1.jpg",
  },
  {
    id: "10",
    name: "Watches",
    price: "79.99",
    image: "/images/watches-img1.jpg",
  },
];

function Products() {
  return (
    <>
      <Navbar />
      <Panel />

      <main className="bg-[#dddddd] min-h-screen p-6">

        <h1 className="text-3xl font-bold mb-6">
          Products
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {products.map((product) => (
            <Link
              to={`/product/${product.id}`}
              key={product.id}
              className="border p-4 hover:shadow-lg"
            >

              <img
                src={product.image}
                alt={product.name}
                className="w-full h-52 object-contain"
              />

              <h2 className="font-bold mt-4">
                {product.name}
              </h2>

              <p className="text-xl mt-2">
                ${product.price}
              </p>

              <p className="text-yellow-500 mt-1">
                ★★★★☆
              </p>

            </Link>
          ))}

        </div>
      </main>
    </>
  );
}

export default Products;