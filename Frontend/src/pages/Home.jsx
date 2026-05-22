import { Link } from "react-router-dom";
import {
  Package,
  Users,
  BarChart3,
  FileText,
  ShoppingCart,
  ShieldCheck,
} from "lucide-react";

import Header from "../components/Header";
import Footer from "../components/Footer";

function Home() {

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col">

      {/* Header */}
      <Header />



      {/* Hero Section */}
      <section className="flex-1">

        <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">

          {/* Left Side */}
          <div>

            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 leading-tight">

              Smart Wholesale
              <span className="text-indigo-600">
                {" "}Inventory
              </span>
              {" "}Management

            </h1>



            <p className="mt-6 text-lg text-gray-600 leading-8">

              Manage products, billing, customers,
              reports and stock efficiently with our
              modern inventory management solution.

            </p>



            {/* Buttons */}
            <div className="mt-8 flex gap-5">

              {/* Login Button */}
              <Link
                to="/login"
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-xl font-semibold transition duration-300"
              >
                Login
              </Link>



              {/* Register Button */}
              <Link
                to="/register"
                className="border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white px-8 py-4 rounded-xl font-semibold transition duration-300"
              >
                Register
              </Link>

            </div>

          </div>



          {/* Right Side */}
          <div className="bg-white rounded-3xl shadow-2xl p-10">

            <img
              src="https://cdn-icons-png.flaticon.com/512/3081/3081559.png"
              alt="Inventory"
              className="w-full h-[350px] object-contain"
            />

          </div>

        </div>

      </section>



      {/* Features Section */}
      <section className="bg-white py-20">

        <div className="max-w-7xl mx-auto px-6">

          {/* Title */}
          <div className="text-center mb-16">

            <h2 className="text-4xl font-bold text-gray-800">
              Powerful Features
            </h2>

            <p className="text-gray-500 mt-4">
              Everything you need to manage your wholesale business
            </p>

          </div>



          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8">

            {/* Card 1 */}
            <div className="bg-slate-50 p-8 rounded-2xl shadow hover:shadow-xl transition">

              <Package
                size={50}
                className="text-indigo-600 mb-5"
              />

              <h3 className="text-2xl font-semibold mb-3">
                Product Management
              </h3>

              <p className="text-gray-600 leading-7">
                Easily add, edit and manage inventory products.
              </p>

            </div>



            {/* Card 2 */}
            <div className="bg-slate-50 p-8 rounded-2xl shadow hover:shadow-xl transition">

              <Users
                size={50}
                className="text-indigo-600 mb-5"
              />

              <h3 className="text-2xl font-semibold mb-3">
                Customer Management
              </h3>

              <p className="text-gray-600 leading-7">
                Store customer details and billing history securely.
              </p>

            </div>



            {/* Card 3 */}
            <div className="bg-slate-50 p-8 rounded-2xl shadow hover:shadow-xl transition">

              <ShoppingCart
                size={50}
                className="text-indigo-600 mb-5"
              />

              <h3 className="text-2xl font-semibold mb-3">
                Billing System
              </h3>

              <p className="text-gray-600 leading-7">
                Generate invoices and bills quickly and accurately.
              </p>

            </div>



            {/* Card 4 */}
            <div className="bg-slate-50 p-8 rounded-2xl shadow hover:shadow-xl transition">

              <BarChart3
                size={50}
                className="text-indigo-600 mb-5"
              />

              <h3 className="text-2xl font-semibold mb-3">
                Reports & Analytics
              </h3>

              <p className="text-gray-600 leading-7">
                Track sales, stock and performance with reports.
              </p>

            </div>



            {/* Card 5 */}
            <div className="bg-slate-50 p-8 rounded-2xl shadow hover:shadow-xl transition">

              <FileText
                size={50}
                className="text-indigo-600 mb-5"
              />

              <h3 className="text-2xl font-semibold mb-3">
                Stock Monitoring
              </h3>

              <p className="text-gray-600 leading-7">
                Monitor low stock products and inventory levels.
              </p>

            </div>



            {/* Card 6 */}
            <div className="bg-slate-50 p-8 rounded-2xl shadow hover:shadow-xl transition">

              <ShieldCheck
                size={50}
                className="text-indigo-600 mb-5"
              />

              <h3 className="text-2xl font-semibold mb-3">
                Secure Access
              </h3>

              <p className="text-gray-600 leading-7">
                Secure authentication system with protected routes.
              </p>

            </div>

          </div>

        </div>

      </section>



      {/* Footer */}
      <Footer />

    </div>
  );
}

export default Home;