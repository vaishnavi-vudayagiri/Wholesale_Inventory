import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-[#FFFBF5] border-b border-amber-100 shadow-sm px-6 md:px-10 py-4 flex justify-between items-center">

      {/* LOGO SECTION */}
      <div className="flex flex-col">
        <h1 className="text-xl md:text-2xl font-bold text-[#1C1917] tracking-tight">
          Wholesale Inventory
        </h1>

        <p className="text-xs md:text-sm text-stone-500">
          Inventory Management System
        </p>
      </div>

      {/* NAVIGATION */}
      <nav className="flex items-center gap-3 md:gap-6 text-sm font-medium">

        <Link
          to="/"
          className="text-stone-600 hover:text-amber-600 transition duration-200"
        >
          Home
        </Link>

        <Link
          to="/login"
          className="text-stone-600 hover:text-amber-600 transition duration-200"
        >
          Login
        </Link>

        <Link
          to="/register"
          className="
            bg-amber-500 hover:bg-amber-600
            text-white px-4 py-2 rounded-lg
            shadow-sm hover:shadow-md
            transition duration-200
          "
        >
          Register
        </Link>

      </nav>
    </header>
  );
}

export default Header;