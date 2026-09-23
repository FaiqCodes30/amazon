function Footer() {
  return (
    <footer className="mt-10">

      <div
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="bg-[#37475a] text-white text-center py-4 cursor-pointer"
      >
        Back to top
      </div>

      <div className="bg-[#232f3e] text-white px-8 py-10">

        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">

          <div>
            <h3 className="font-bold text-lg mb-3">
              Get to Know Us
            </h3>
            <p className="text-sm text-gray-300">Careers</p>
            <p className="text-sm text-gray-300">About Amazon</p>
            <p className="text-sm text-gray-300">Investor Relations</p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-3">
              Make Money with Us
            </h3>
            <p className="text-sm text-gray-300">Sell products</p>
            <p className="text-sm text-gray-300">Become an Affiliate</p>
            <p className="text-sm text-gray-300">
              Advertise Your Products
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-3">
              Amazon Payment
            </h3>
            <p className="text-sm text-gray-300">Amazon Visa</p>
            <p className="text-sm text-gray-300">Gift Cards</p>
            <p className="text-sm text-gray-300">Payment Options</p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-3">
              Let Us Help You
            </h3>
            <p className="text-sm text-gray-300">Your Account</p>
            <p className="text-sm text-gray-300">Your Orders</p>
            <p className="text-sm text-gray-300">Help</p>
          </div>

        </div>

      </div>

      <div className="bg-[#131a22] text-gray-300 text-center py-6 text-sm">
        <p>Conditions of Use &nbsp; | &nbsp; Privacy Notice</p>
        <p className="mt-2">© 2026 Amazon Clone</p>
      </div>

    </footer>
  );
}

export default Footer;