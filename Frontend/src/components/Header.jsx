import { Link } from "react-router-dom";

function Header() {
  
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