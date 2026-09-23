import { Link, useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/login");
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

      <div className="w-full max-w-[400px] border border-gray-300 rounded-lg p-6">

        <h1 className="text-3xl mb-6">
          Create account
        </h1>

        <form onSubmit={handleSubmit}>

          <label className="font-bold text-sm">
            Your name
          </label>

          <input
            required
            type="text"
            className="w-full border border-gray-400 rounded mt-2 mb-4 px-3 py-2"
          />

          <label className="font-bold text-sm">
            Email
          </label>

          <input
            required
            type="email"
            className="w-full border border-gray-400 rounded mt-2 mb-4 px-3 py-2"
          />

          <label className="font-bold text-sm">
            Password
          </label>

          <input
            required
            type="password"
            className="w-full border border-gray-400 rounded mt-2 mb-4 px-3 py-2"
          />

          <button
            type="submit"
            className="w-full bg-[#ffd814] py-2 rounded hover:bg-[#f7ca00]"
          >
            Create your Amazon account
          </button>

        </form>

        <p className="text-sm mt-6">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 hover:underline">
            Sign in
          </Link>
        </p>

      </div>
    </div>
  );
}

export default Register;