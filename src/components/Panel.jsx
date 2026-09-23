import { Link } from "react-router-dom";

function Panel() {
  return (
    <div className="min-h-[40px] bg-[#232f3e] text-white flex items-center px-3 gap-2 sm:gap-5 text-sm font-medium overflow-x-auto">

      <div className="px-2 py-1 whitespace-nowrap cursor-pointer">
        ☰ All
      </div>

      <Link
        to="/deals"
        className="px-2 py-1 whitespace-nowrap"
      >
        Today's Deals
      </Link>

      <div className="px-2 py-1 whitespace-nowrap">
        Customer Service
      </div>

      <div className="px-2 py-1 whitespace-nowrap">
        Registry
      </div>

      <div className="px-2 py-1 whitespace-nowrap">
        Gift Cards
      </div>

      <Link
        to="/products"
        className="px-2 py-1 whitespace-nowrap"
      >
        Sell
      </Link>

    </div>
  );
}

export default Panel;