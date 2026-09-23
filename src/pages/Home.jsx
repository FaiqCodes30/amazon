import Navbar from "../components/Navbar";
import Panel from "../components/Panel";
import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function Home() {
  const cards = [
    ["Shop Fashion for less", "/images/shop1.jpg"],
    ["Top categories in Kitchen appliances", "/images/kitchen-img1.jpg"],
    ["Must-have school supplies", "/images/school-img1.jpg"],
    ["New home arrivals under $50", "/images/home-img1.jpg"],
    ["Fashion trends you like", "/images/dress-img1.jpg"],
    ["Wireless Tech", "/images/tech-img1.jpg"],
    ["Have more fun with family", "/images/family-toys-img1.jpg"],
    ["Level up your PC here", "/images/pc-img1.jpg"],
    ["Level up your beauty routine", "/images/beauty-img1.jpg"],
    ["Gaming merchandise", "/images/merchandise-img1.jpg"],
    ["Gear up to get fit", "/images/gear-img1.jpg"],
    ["Most-loved watches", "/images/watches-img1.jpg"],
  ];

  return (
    <div className="bg-[#e3e6e6] min-h-screen">
      <Navbar />
      <Panel />
      <Hero />

      <main className="max-w-[1500px] mx-auto px-4 py-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {cards.map(([title, image]) => (
            <ProductCard
              key={title}
              title={title}
              image={image}
            />
          ))}
        </div>

        <div className="bg-white mt-6 p-6">
          <h2 className="text-2xl font-bold mb-5">
            Best Sellers in Toys & Games
          </h2>

          <div className="flex gap-5 overflow-x-auto">
            {[
              "toys-img1.jpg",
              "toys-img2.jpg",
              "toys-img3.jpg",
              "toys-img4.jpg",
              "toys-img5.jpg",
              "toys-img6.jpg",
            ].map((image) => (
              <img
                key={image}
                src={`/images/${image}`}
                alt="Product"
                className="w-44 h-44 object-contain shrink-0"
              />
            ))}
          </div>
        </div>

        <div className="bg-white mt-6 p-6">
          <h2 className="text-2xl font-bold mb-5">
            Top picks for Pakistan
          </h2>

          <div className="flex gap-5 overflow-x-auto">
            {[
              "top-picks-img1.jpg",
              "top-picks-img2.jpg",
              "top-picks-img3.jpg",
              "top-picks-img4.jpg",
              "top-picks-img5.jpg",
              "top-picks-img6.jpg",
            ].map((image) => (
              <img
                key={image}
                src={`/images/${image}`}
                alt="Product"
                className="w-44 h-44 object-contain shrink-0"
              />
            ))}
          </div>
        </div>

        <div className="bg-white mt-6 p-8 text-center">
          <h2 className="text-2xl font-bold">
            See personalized recommendations
          </h2>

          <p className="text-sm mt-2">
            Sign in to see products recommended for you.
          </p>

          <Link
            to="/login"
            className="inline-block bg-[#ffd814] px-16 py-2 rounded-md mt-4 font-medium hover:bg-[#f7ca00]"
          >
            Sign in
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Home;