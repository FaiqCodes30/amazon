import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/account");
  };

  return (
    <div className="min-h-screen bg-[#398ede5b] flex flex-col items-center pt-8 px-4">

      <Link to="/">
        <img
          src="/images/amazon_logo.png"
          alt="Amazon"
          className="w-32 mb-8"
        />
      </Link>

      <div className="w-full max-w-[350px] border border-black-300 rounded-lg p-6">
        <h1 className="text-3xl mb-5">Sign in</h1>

        <form onSubmit={handleSubmit}>

          <label className="font-bold text-sm">
            Email or mobile phone number
          </label>

          <input
            type="text"
            required
            className="w-full border border-gray-400 rounded mt-2 mb-4 px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            type="submit"
            className="w-full bg-[#ffd814] py-2 rounded hover:bg-[#f7ca00]"
          >
            Continue
          </button>

        </form>

        <p className="text-xs mt-5">
          By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.
        </p>

        <hr className="my-6" />

        <p className="text-sm font-bold mb-2">
          New to Amazon?
        </p>

        <Link
          to="/register"
          className="block text-center border border-gray-400 py-2 rounded hover:bg-gray-100"
        >
          Create your Amazon account
        </Link>
      </div>
        
    </div>
  );
}

export default Login;