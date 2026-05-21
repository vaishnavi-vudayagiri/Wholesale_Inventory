import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (!username || !password) {
      alert("Please fill all fields");
      return;
    }

    localStorage.setItem("login", "true");
    localStorage.setItem("username", username);

    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500">
      <div className="bg-white w-[400px] p-10 rounded-3xl shadow-2xl">

        <h1 className="text-4xl font-bold text-center text-blue-600 mb-2">
          Wholesale Inventory
        </h1>

        <p className="text-center text-gray-500 mb-8">
          Sign in to continue
        </p>

        <form onSubmit={handleLogin}>

          {/* USERNAME */}
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full border border-gray-300 p-4 rounded-xl mb-5 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* PASSWORD */}
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-gray-300 p-4 rounded-xl mb-6 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />

          {/* BUTTON */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-purple-600 hover:to-pink-500 text-white p-4 rounded-xl text-lg font-semibold transition duration-300"
          >
            Login
          </button>

        </form>
      </div>
    </div>
  );
}

export default Login;