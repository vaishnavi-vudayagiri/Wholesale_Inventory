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

  /* CHECK AUTH */
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token && token !== "undefined" && token !== "null") {
      navigate("/dashboard");
    }

    setCheckingAuth(false);
  }, [navigate]);

  /* LOGIN */
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
        "https://wholesale-inventory.onrender.com/api/auth/login",
        {
          email: cleanEmail,
          password: cleanPassword,
        }
      );

      const { token, user } = response.data;

      localStorage.setItem("token", token);
      localStorage.setItem("username", user?.name || "");

      navigate("/dashboard");

    } catch (error) {
      alert(error.response?.data?.message || "Login Failed");
    } finally {
      setLoading(false);
    }
  };

  if (checkingAuth) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FFFBF5]">
        <h1 className="text-2xl font-bold text-amber-500 animate-pulse">
          Loading...
        </h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FFFBF5] flex flex-col">

      <Header />

      <div className="flex-1 flex items-center justify-center px-4 py-12">

        <div className="grid md:grid-cols-2 bg-white border border-amber-100 rounded-3xl shadow-xl overflow-hidden max-w-6xl w-full">

          {/* LEFT SIDE */}
          <div className="hidden md:flex flex-col justify-center bg-gradient-to-br from-amber-500 to-orange-500 text-white p-12">

            <Package size={60} />

            <h1 className="text-5xl font-bold mt-6">
              Wholesale Inventory
            </h1>

            <p className="mt-5 text-amber-100 text-lg leading-8">
              Manage inventory, customers, billing and reports with a
              warm modern business system.
            </p>

          </div>

          {/* RIGHT SIDE */}
          <div className="p-10 flex flex-col justify-center">

            <h2 className="text-4xl font-bold text-[#834e2b]">
              Welcome Back
            </h2>

            <p className="text-stone-500 mt-2 mb-8">
              Login to continue to your dashboard
            </p>

            <form onSubmit={handleLogin} className="space-y-5">

              {/* EMAIL */}
              <div className="relative">
                <Mail
                  className="absolute left-4 top-4 text-amber-500"
                  size={20}
                />

                <input
                  type="email"
                  placeholder="Enter Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-12 p-4 border border-amber-100 rounded-xl bg-[#FFF7ED] focus:ring-2 focus:ring-amber-400 outline-none"
                />
              </div>

              {/* PASSWORD */}
              <div className="relative">
                <Lock
                  className="absolute left-4 top-4 text-amber-500"
                  size={20}
                />

                <input
                  type="password"
                  placeholder="Enter Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-12 p-4 border border-amber-100 rounded-xl bg-[#FFF7ED] focus:ring-2 focus:ring-amber-400 outline-none"
                />
              </div>

              {/* BUTTON */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-amber-500 hover:bg-amber-600 text-white p-4 rounded-xl font-semibold shadow-sm hover:shadow-md transition"
              >
                {loading ? "Logging in..." : "Login"}
              </button>

            </form>

            {/* REGISTER */}
            <p className="text-center text-stone-500 mt-6">
              Don't have an account?{" "}
              <Link
                to="/register"
                className="text-amber-600 font-semibold hover:underline"
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