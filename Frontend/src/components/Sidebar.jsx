import { NavLink, useNavigate } from "react-router-dom";

import {
  FaTachometerAlt,
  FaBoxOpen,
  FaUsers,
  FaFileInvoiceDollar,
  FaChartLine,
  FaWarehouse,
  FaExclamationTriangle,
  FaSignOutAlt,
} from "react-icons/fa";

function Sidebar() {
  const navigate = useNavigate();

  // Logout Function
  const handleLogout = () => {
    localStorage.removeItem("login");
    localStorage.removeItem("username");

    alert("Logged Out Successfully");

    navigate("/");
  };

  const linkClasses =
    "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 font-medium";

  const activeClasses =
    "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg";

  const inactiveClasses =
    "text-gray-300 hover:bg-gray-800 hover:text-white";

  return (
    <aside className="w-64 min-h-screen bg-gray-900 text-white shadow-2xl p-5 flex flex-col justify-between">

      {/* Top Section */}
      <div>

        {/* Logo */}
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-blue-400">
            Wholesale Inventory
          </h1>

          <p className="text-gray-400 text-sm mt-1">
            Inventory Management
          </p>
        </div>

        {/* Navigation */}
        <nav className="space-y-3">

          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `${linkClasses} ${
                isActive ? activeClasses : inactiveClasses
              }`
            }
          >
            <FaTachometerAlt size={18} />
            Dashboard
          </NavLink>

          <NavLink
            to="/products"
            className={({ isActive }) =>
              `${linkClasses} ${
                isActive ? activeClasses : inactiveClasses
              }`
            }
          >
            <FaBoxOpen size={18} />
            Products
          </NavLink>

          <NavLink
            to="/customers"
            className={({ isActive }) =>
              `${linkClasses} ${
                isActive ? activeClasses : inactiveClasses
              }`
            }
          >
            <FaUsers size={18} />
            Customers
          </NavLink>

          <NavLink
            to="/billing"
            className={({ isActive }) =>
              `${linkClasses} ${
                isActive ? activeClasses : inactiveClasses
              }`
            }
          >
            <FaFileInvoiceDollar size={18} />
            Billing
          </NavLink>

          <NavLink
            to="/sales-report"
            className={({ isActive }) =>
              `${linkClasses} ${
                isActive ? activeClasses : inactiveClasses
              }`
            }
          >
            <FaChartLine size={18} />
            Sales Report
          </NavLink>

          <NavLink
            to="/stock-report"
            className={({ isActive }) =>
              `${linkClasses} ${
                isActive ? activeClasses : inactiveClasses
              }`
            }
          >
            <FaWarehouse size={18} />
            Stock Report
          </NavLink>

          <NavLink
            to="/low-stock"
            className={({ isActive }) =>
              `${linkClasses} ${
                isActive ? activeClasses : inactiveClasses
              }`
            }
          >
            <FaExclamationTriangle size={18} />
            Low Stock
          </NavLink>

        </nav>
      </div>

      {/* Logout Button */}
      <div className="mt-10">
        <button
          onClick={handleLogout}
          className="w-full flex items-center justify-center gap-3 bg-red-600 hover:bg-red-700 text-white px-4 py-3 rounded-xl transition-all duration-300 font-semibold"
        >
          <FaSignOutAlt size={18} />
          Logout
        </button>
      </div>

    </aside>
  );
}

export default Sidebar;