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



  // Handle Input Change
  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };



  // Handle Register
  const handleSubmit = async (e) => {

    e.preventDefault();

    // Validation
    if (
      !formData.name ||
      !formData.email ||
      !formData.password
    ) {
      alert("Please fill all fields");
      return;
    }

    try {

      setLoading(true);

      // API Call
      const response = await axios.post(
        "http://localhost:5000/api/auth/register",
        formData
      );

      // Success Message
      alert(response.data.message);

      // Clear Form
      setFormData({
        name: "",
        email: "",
        password: "",
      });

      // Redirect to Login
      navigate("/");

    } catch (error) {

      // Error Message
      alert(
        error.response?.data?.message ||
        "Registration Failed"
      );

    } finally {

      setLoading(false);

    }
  };



  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0a0f1c] px-4">

      <div className="bg-[#111827] p-8 rounded-2xl shadow-2xl w-full max-w-md">

        {/* Heading */}
        <h1 className="text-3xl font-bold text-center text-white mb-2">
          Create Account
        </h1>

        <p className="text-gray-400 text-center mb-6">
          Register to continue
        </p>



        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >

          {/* Name */}
          <div>
            <input
              type="text"
              name="name"
              placeholder="Enter Name"
              className="w-full p-3 rounded-lg bg-gray-800 text-white outline-none border border-gray-700 focus:border-blue-500"
              value={formData.name}
              onChange={handleChange}
            />
          </div>



          {/* Email */}
          <div>
            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              className="w-full p-3 rounded-lg bg-gray-800 text-white outline-none border border-gray-700 focus:border-blue-500"
              value={formData.email}
              onChange={handleChange}
            />
          </div>



          {/* Password */}
          <div>
            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              className="w-full p-3 rounded-lg bg-gray-800 text-white outline-none border border-gray-700 focus:border-blue-500"
              value={formData.password}
              onChange={handleChange}
            />
          </div>



          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 transition text-white p-3 rounded-lg font-semibold"
          >
            {loading ? "Registering..." : "Register"}
          </button>

        </form>



        {/* Login Link */}
        <p className="text-gray-400 text-center mt-5">

          Already have an account?{" "}

          <Link
            to="/"
            className="text-blue-400 hover:underline font-semibold"
          >
            Login
          </Link>

        </p>

      </div>

    </div>
  );
}

export default Register;