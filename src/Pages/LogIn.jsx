import { useState } from "react";
import { Link } from "react-router-dom";

function LogIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setUsername("");
    setPassword("");
  };

  return (
    <>
      <div
        className="min-h-screen flex items-center justify-center p-6 bg-cover bg-center"
        style={{ backgroundImage: "url('https://media.istockphoto.com/id/1171506418/photo/sea-wave-abstract-navy-blue-black-neon-pattern-moon-light-silk-wavy-dark-texture-night-beach.webp?a=1&b=1&s=612x612&w=0&k=20&c=-5II1smOdlrTpqREoAeqN4FRDRrau_WfkvYLPAkThGU=')" }}
      >
        <div className="bg-white bg-opacity-90 rounded-lg shadow-lg p-8 max-w-md w-full">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
            Login
          </h2>

          <form onSubmit={handleLogin}>
            {/* Username Input */}
            <div className="mb-4">
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="username"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter your email"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>

            {/* Password Input */}
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            {/* Login Button */}
            <div className="flex justify-center mb-6">
              <button
                type="submit"
                className="w-full py-3 px-6 bg-[#007aff] text-white font-semibold rounded-lg shadow-md hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
              >
                Login
              </button>
            </div>
          </form>

          {/* Register Link */}
          <div className="text-center">
            <p className="text-sm text-gray-600">
              Dont have an account?{" "}
              <Link
                to="/sign-up"
                className="text-blue-600 hover:text-blue-700 font-semibold"
              >
                SignUp here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default LogIn;