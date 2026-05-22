import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Package, Lock, Mail } from "lucide-react";
import axios from "axios";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();


  // If already logged in
  useEffect(() => {

    const token = localStorage.getItem("token");

    if (token) {
      navigate("/dashboard");
    }

  }, [navigate]);



  // Handle Login
  const handleLogin = async (e) => {

    e.preventDefault();

    if (!email || !password) {
      alert("Please fill all fields");
      return;
    }

    try {

      // API Call
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        {
          email,
          password,
        }
      );

      // Store Token
      localStorage.setItem(
        "token",
        response.data.token
      );

      localStorage.setItem(
        "login",
        "true"
      );

      localStorage.setItem(
        "username",
        response.data.user.name
      );

      alert("Login Successful");

      navigate("/dashboard");

    } catch (error) {

      alert(
        error.response?.data?.message ||
        "Login Failed"
      );
    }
  };



  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 px-4">

      <div className="grid md:grid-cols-2 bg-white rounded-3xl shadow-2xl overflow-hidden max-w-5xl w-full">

        {/* Left Side */}
        <div className="hidden md:flex flex-col justify-center bg-gradient-to-br from-indigo-600 to-blue-700 text-white p-10">

          <Package size={55} />

          <h1 className="text-4xl font-bold mt-6">
            Wholesale Inventory
          </h1>

          <p className="mt-4 text-blue-100">
            Manage stock, customers, billing and reports in one place.
          </p>

        </div>



        {/* Right Side */}
        <div className="p-10">

          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Welcome Back
          </h2>

          <p className="text-gray-500 mb-8">
            Login to your account
          </p>



          <form
            onSubmit={handleLogin}
            className="space-y-5"
          >

            {/* Email */}
            <div className="relative">

              <Mail
                className="absolute left-4 top-4 text-gray-400"
                size={20}
              />

              <input
                type="email"
                placeholder="Enter Email"
                value={email}
                onChange={(e) =>
                  setEmail(e.target.value)
                }
                className="w-full pl-12 p-4 border rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
              />

            </div>



            {/* Password */}
            <div className="relative">

              <Lock
                className="absolute left-4 top-4 text-gray-400"
                size={20}
              />

              <input
                type="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) =>
                  setPassword(e.target.value)
                }
                className="w-full pl-12 p-4 border rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
              />

            </div>



            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white p-4 rounded-xl font-semibold transition"
            >
              Login
            </button>

          </form>



          {/* Register Link */}
          <p className="text-center text-gray-500 mt-6">

            Don't have an account?{" "}

            <Link
              to="/register"
              className="text-indigo-600 font-semibold hover:underline"
            >
              Register
            </Link>

          </p>

        </div>

      </div>

    </div>
  );
}

export default Login;