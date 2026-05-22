import { Link } from "react-router-dom";
import { Package } from "lucide-react";

function Header() {

  return (
    <header className="bg-white shadow-md px-8 py-4 flex items-center justify-between">

      {/* Logo */}
      <div className="flex items-center gap-3">

        <div className="bg-indigo-600 text-white p-2 rounded-xl">
          <Package size={28} />
        </div>

        <div>
          <h1 className="text-2xl font-bold text-gray-800">
            Wholesale Inventory
          </h1>

          <p className="text-sm text-gray-500">
            Inventory & Billing System
          </p>
        </div>

      </div>



      {/* Navigation */}
      <nav className="flex items-center gap-6">

        <Link
          to="/"
          className="text-gray-700 hover:text-indigo-600 font-medium transition"
        >
          Home
        </Link>

        <Link
          to="/"
          className="text-gray-700 hover:text-indigo-600 font-medium transition"
        >
          Login
        </Link>

        <Link
          to="/register"
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-lg transition"
        >
          Register
        </Link>

      </nav>

    </header>
  );
}

export default Header;