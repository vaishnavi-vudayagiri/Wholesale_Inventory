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

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");

    navigate("/login", { replace: true });
  };

  const linkBase =
    "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 font-medium";

  const active =
    "bg-amber-500 text-white shadow-md";

  const inactive =
    "text-stone-300 hover:bg-stone-800 hover:text-white";

  return (
    <aside className="w-64 min-h-screen bg-[#b34d09] text-white shadow-2xl p-5 flex flex-col justify-between">

      {/* TOP SECTION */}
      <div>

        {/* LOGO */}
        <div className="mb-10">
          <h1 className="text-2xl font-bold text-amber-500">
            Wholesale Inventory
          </h1>

          <p className="text-stone-400 text-sm mt-1">
            Inventory Management System
          </p>
        </div>

        {/* NAVIGATION */}
        <nav className="space-y-3">

          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? active : inactive}`
            }
          >
            <FaTachometerAlt size={18} />
            Dashboard
          </NavLink>

          <NavLink
            to="/products"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? active : inactive}`
            }
          >
            <FaBoxOpen size={18} />
            Products
          </NavLink>

          <NavLink
            to="/customers"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? active : inactive}`
            }
          >
            <FaUsers size={18} />
            Customers
          </NavLink>

          <NavLink
            to="/billing"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? active : inactive}`
            }
          >
            <FaFileInvoiceDollar size={18} />
            Billing
          </NavLink>

          <NavLink
            to="/sales-report"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? active : inactive}`
            }
          >
            <FaChartLine size={18} />
            Sales Report
          </NavLink>

          <NavLink
            to="/stock-report"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? active : inactive}`
            }
          >
            <FaWarehouse size={18} />
            Stock Report
          </NavLink>

          <NavLink
            to="/low-stock"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? active : inactive}`
            }
          >
            <FaExclamationTriangle size={18} />
            Low Stock
          </NavLink>

        </nav>
      </div>

      {/* LOGOUT */}
      <div className="mt-10">

        <button
          onClick={handleLogout}
          className="
            w-full flex items-center justify-center gap-3
            bg-red-500 hover:bg-red-600
            text-white px-4 py-3 rounded-xl
            transition-all duration-300 font-semibold
          "
        >
          <FaSignOutAlt size={18} />
          Logout
        </button>

      </div>

    </aside>
  );
}

export default Sidebar;