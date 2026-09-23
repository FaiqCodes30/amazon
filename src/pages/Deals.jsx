import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Panel from "../components/Panel";

function Deals() {
  const deals = [
    ["Limited Time Deals", "/images/mix-img1.jpg"],
    ["Top Toys Deals", "/images/top-toys-img1.jpg"],
    ["Clothing Deals", "/images/clothes-img1.jpg"],
    ["Computer Deals", "/images/computer-items-img1.jpg"],
    ["Home Deals", "/images/international-sellers-img1.jpg"],
    ["Gaming Deals", "/images/merchandise-img1.jpg"],
  ];

  return (
    <>
      <Navbar />
      <Panel />

      <main className="bg-[#e3e6e6] min-h-screen p-6">

        <div className="max-w-7xl mx-auto">

          <h1 className="text-3xl font-bold mb-6">
            Today's Deals
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {deals.map(([title, image]) => (
              <Link
                to="/products"
                key={title}
                className="bg-white p-5 hover:shadow-lg"
              >

                <img
                  src={image}
                  alt={title}
                  className="w-full h-64 object-contain"
                />

                <h2 className="text-xl font-bold mt-4">
                  {title}
                </h2>

                <p className="text-[#007185] mt-2">
                  Shop now
                </p>

              </Link>
            ))}

          </div>

        </div>

      </main>
    </>
  );
}

export default Deals;