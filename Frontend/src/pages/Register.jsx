import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.password) {
      alert("Please fill all fields");
      return;
    }

    try {
      setLoading(true);

      const response = await axios.post(
        "https://wholesale-inventory-1.onrender.com/api/auth/register",
        formData
      );

      alert(response.data.message);

      setFormData({
        name: "",
        email: "",
        password: "",
      });

      navigate("/login");

    } catch (error) {
      alert(error.response?.data?.message || "Registration Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FFFBF5] px-4">

      <div className="bg-white border border-amber-100 p-10 rounded-3xl shadow-xl w-full max-w-md">

        {/* HEADER */}
        <h1 className="text-3xl font-bold text-center text-[#db5b05] mb-2">
          Create Account
        </h1>

        <p className="text-stone-500 text-center mb-8">
          Join the Wholesale Inventory System
        </p>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="space-y-4">

          {/* NAME */}
          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 rounded-xl bg-[#FFF7ED] border border-amber-100 outline-none focus:ring-2 focus:ring-amber-400"
          />

          {/* EMAIL */}
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 rounded-xl bg-[#FFF7ED] border border-amber-100 outline-none focus:ring-2 focus:ring-amber-400"
          />

          {/* PASSWORD */}
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-3 rounded-xl bg-[#FFF7ED] border border-amber-100 outline-none focus:ring-2 focus:ring-amber-400"
          />

          {/* BUTTON */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-amber-500 hover:bg-amber-600 text-white p-3 rounded-xl font-semibold shadow-sm hover:shadow-md transition"
          >
            {loading ? "Creating Account..." : "Register"}
          </button>

        </form>

        {/* LOGIN LINK */}
        <p className="text-stone-500 text-center mt-6">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-amber-600 font-semibold hover:underline"
          >
            Login
          </Link>
        </p>

      </div>

    </div>
  );
}

export default Register;