import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Panel from "../components/Panel";

function Account() {
  const options = [
    ["Your Orders", "Track or manage your orders"],
    ["Login & Security", "Manage your account information"],
    ["Your Addresses", "Edit your delivery addresses"],
    ["Payment Options", "Manage your payment methods"],
    ["Your Lists", "View and manage your lists"],
    ["Customer Service", "Get help with your account"],
  ];

  return (
    <>
      <Navbar />
      <Panel />

      <main className="bg-[#e3e6e6] min-h-screen p-6">

        <div className="max-w-6xl mx-auto">

          <h1 className="text-3xl font-bold mb-6">
            Your Account
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">

            {options.map(([title, description]) => (
              <Link
                key={title}
                to={title === "Your Orders" ? "/orders" : "#"}
                className="bg-white border rounded-lg p-6 hover:shadow-lg"
              >
                <h2 className="text-xl font-bold">
                  {title}
                </h2>

                <p className="text-gray-600 mt-2">
                  {description}
                </p>
              </Link>
            ))}

          </div>

        </div>

      </main>
    </>
  );
}

export default Account;