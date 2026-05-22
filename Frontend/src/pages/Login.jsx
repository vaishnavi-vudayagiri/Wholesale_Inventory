import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Package, Lock, Mail } from "lucide-react";
import axios from "axios";

import Header from "../components/Header";
import Footer from "../components/Footer";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [checkingAuth, setCheckingAuth] = useState(true);

  const navigate = useNavigate();

  /* =========================================
     CHECK LOGIN STATUS
  ========================================= */
  useEffect(() => {
    const token = localStorage.getItem("token");

    // FIX: prevent fake/empty tokens from auto-login
    if (token && token !== "undefined" && token !== "null") {
      navigate("/dashboard");
    }

    setCheckingAuth(false);
  }, [navigate]);

  /* =========================================
     HANDLE LOGIN
  ========================================= */
  const handleLogin = async (e) => {
    e.preventDefault();

    const cleanEmail = email.trim();
    const cleanPassword = password.trim();

    if (!cleanEmail || !cleanPassword) {
      alert("Please fill all fields");
      return;
    }

    try {
      setLoading(true);

      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        {
          email: cleanEmail,
          password: cleanPassword,
        }
      );

      const { token, user } = response.data;

      // Store auth data
      localStorage.setItem("token", token);
      localStorage.setItem("username", user?.name || "");

      alert("Login Successful");

      navigate("/dashboard");
    } catch (error) {
      alert(
        error.response?.data?.message || "Login Failed"
      );
    } finally {
      setLoading(false);
    }
  };

  /* =========================================
     LOADING SCREEN
  ========================================= */
  if (checkingAuth) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-100">
        <h1 className="text-3xl font-bold text-indigo-600">
          Loading...
        </h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col">
      <Header />

      <div className="flex-1 flex items-center justify-center px-4 py-10">
        <div className="grid md:grid-cols-2 bg-white rounded-3xl shadow-2xl overflow-hidden max-w-6xl w-full">

          {/* LEFT SIDE */}
          <div className="hidden md:flex flex-col justify-center bg-gradient-to-br from-indigo-600 to-blue-700 text-white p-12">
            <Package size={60} />
            <h1 className="text-5xl font-bold mt-6">
              Wholesale Inventory
            </h1>
            <p className="mt-5 text-blue-100 text-lg leading-8">
              Manage inventory, customers, billing and reports with a modern business solution.
            </p>
          </div>

          {/* RIGHT SIDE */}
          <div className="p-10 flex flex-col justify-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-2">
              Welcome Back
            </h2>

            <p className="text-gray-500 mb-8">
              Login to continue to your dashboard
            </p>

            <form onSubmit={handleLogin} className="space-y-5">
              {/* EMAIL */}
              <div className="relative">
                <Mail
                  className="absolute left-4 top-4 text-gray-400"
                  size={20}
                />
                <input
                  type="email"
                  placeholder="Enter Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-12 p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
                />
              </div>

              {/* PASSWORD */}
              <div className="relative">
                <Lock
                  className="absolute left-4 top-4 text-gray-400"
                  size={20}
                />
                <input
                  type="password"
                  placeholder="Enter Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-12 p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
                />
              </div>

              {/* BUTTON */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white p-4 rounded-xl font-semibold transition"
              >
                {loading ? "Logging in..." : "Login"}
              </button>
            </form>

            {/* REGISTER */}
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

      <Footer />
    </div>
  );
}

export default Login;