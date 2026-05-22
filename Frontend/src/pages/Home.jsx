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
    <div className="min-h-screen bg-[#FFFBF5] flex flex-col text-[#1C1917]">

      {/* HEADER */}
      <Header />

      {/* HERO SECTION */}
      <section className="flex-1">
        <div className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT SIDE */}
          <div>

            <h1 className="text-5xl md:text-6xl font-bold leading-tight tracking-tight">
              Smart Wholesale{" "}
              <span className="text-amber-500">
                Inventory
              </span>{" "}
              Management
            </h1>

            <p className="mt-6 text-lg text-stone-600 leading-8">
              Manage products, billing, customers, reports and stock efficiently
              with a warm, modern and reliable inventory system.
            </p>

            {/* BUTTONS */}
            <div className="mt-10 flex gap-4">

              <Link
                to="/login"
                className="bg-amber-500 hover:bg-amber-600 text-white px-7 py-3.5 rounded-xl font-semibold shadow-sm hover:shadow-md transition"
              >
                Login
              </Link>

              <Link
                to="/register"
                className="border border-amber-200 text-amber-600 hover:bg-amber-500 hover:text-white px-7 py-3.5 rounded-xl font-semibold transition"
              >
                Register
              </Link>

            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="bg-white border border-amber-100 rounded-3xl shadow-lg p-10 hover:shadow-xl transition">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3081/3081559.png"
              alt="Inventory"
              className="w-full h-[360px] object-contain"
            />
          </div>

        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="bg-white border-t border-amber-100 py-24">

        <div className="max-w-7xl mx-auto px-6">

          {/* TITLE */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1C1917]">
              Powerful Features
            </h2>

            <p className="text-stone-500 mt-4">
              Everything you need to manage your wholesale business smoothly
            </p>
          </div>

          {/* GRID */}
          <div className="grid md:grid-cols-3 gap-8">

            {[
              {
                icon: Package,
                title: "Product Management",
                desc: "Easily add, edit and manage inventory products.",
              },
              {
                icon: Users,
                title: "Customer Management",
                desc: "Store customer details and billing history securely.",
              },
              {
                icon: ShoppingCart,
                title: "Billing System",
                desc: "Generate invoices and bills quickly and accurately.",
              },
              {
                icon: BarChart3,
                title: "Reports & Analytics",
                desc: "Track sales, stock and performance with reports.",
              },
              {
                icon: FileText,
                title: "Stock Monitoring",
                desc: "Monitor low stock products and inventory levels.",
              },
              {
                icon: ShieldCheck,
                title: "Secure Access",
                desc: "Protected authentication and role-based access.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group bg-[#FFF7ED] border border-amber-100 p-8 rounded-2xl hover:bg-white hover:shadow-lg transition"
              >
                <item.icon
                  size={42}
                  className="text-amber-500 mb-5 group-hover:scale-110 transition"
                />

                <h3 className="text-xl font-semibold mb-2 text-[#1C1917]">
                  {item.title}
                </h3>

                <p className="text-stone-600 leading-7">
                  {item.desc}
                </p>
              </div>
            ))}

          </div>

        </div>

      </section>

      {/* FOOTER */}
      <Footer />

    </div>
  );
}

export default Home;