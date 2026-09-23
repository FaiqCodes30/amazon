import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="h-[60px] bg-[#131921] text-white flex items-center px-3 gap-4">
        <Link to="/" className="shrink-0">
          <img
            src="/images/amazon_logo.png"
            alt="Amazon"
            className="w-[100px]"
          />
        </Link>

        <div className="hidden md:block leading-tight shrink-0">
          <p className="text-xs text-gray-300">Deliver to</p>
          <p className="font-bold text-sm">Pakistan</p>
        </div>

        <div className="flex flex-1 h-10 min-w-0">
          <select className="hidden sm:block bg-gray-200 text-black px-2 rounded-l-md">
            <option>All</option>
          </select>

          <input
            type="text"
            placeholder="Search Amazon"
            className="flex-1 min-w-0 px-3 text-black outline-none bg-white"
          />

          <button className="bg-[#febd69] text-black px-4 rounded-r-md">
            🔍
          </button>
        </div>

        <div className="hidden lg:block">
          <p className="text-sm font-bold">🇺🇸 EN</p>
        </div>

        <Link
          to="/login"
          className="hidden sm:block leading-tight p-1"
        >
          <p className="text-xs">Hello, sign in</p>
          <p className="font-bold text-sm">Account & Lists</p>
        </Link>

        <Link
          to="/orders"
          className="hidden md:block leading-tight p-1"
        >
          <p className="text-xs">Returns</p>
          <p className="font-bold text-sm">& Orders</p>
        </Link>

        <Link to="/cart" className="font-bold text-lg shrink-0">
          🛒 Cart
        </Link>
      </nav>
    </>
  );
}

export default Navbar;