import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-white shadow-md px-8 py-4">
      <h1 className="text-2xl font-bold text-blue-700">
        Wholesale Inventory
      </h1>
    </header>
  );
  <div className="flex items-center gap-4">
  <span className="font-semibold">
    {localStorage.getItem("username")}
  </span>

  <Link
    to="/logout"
    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
  >
    Logout
  </Link>
</div>
}

export default Header;