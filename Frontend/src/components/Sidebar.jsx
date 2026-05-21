import { NavLink } from "react-router-dom";

function Sidebar() {
  const link =
    "block px-4 py-3 rounded-lg hover:bg-blue-100 transition";

  const active =
    "bg-blue-600 text-white";

  return (
    <aside className="w-64 bg-white shadow-md p-5">
      <nav className="space-y-2">
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            `${link} ${isActive ? active : ""}`
          }
        >
          Dashboard
        </NavLink>

        <NavLink
          to="/products"
          className={({ isActive }) =>
            `${link} ${isActive ? active : ""}`
          }
        >
          Products
        </NavLink>

        <NavLink
          to="/customers"
          className={({ isActive }) =>
            `${link} ${isActive ? active : ""}`
          }
        >
          Customers
        </NavLink>

        <NavLink
          to="/billing"
          className={({ isActive }) =>
            `${link} ${isActive ? active : ""}`
          }
        >
          Billing
        </NavLink>

        <NavLink
          to="/sales-report"
          className={({ isActive }) =>
            `${link} ${isActive ? active : ""}`
          }
        >
          Sales Report
        </NavLink>

        <NavLink
          to="/stock-report"
          className={({ isActive }) =>
            `${link} ${isActive ? active : ""}`
          }
        >
          Stock Report
        </NavLink>

        <NavLink
          to="/low-stock"
          className={({ isActive }) =>
            `${link} ${isActive ? active : ""}`
          }
        >
          Low Stock
        </NavLink>
      </nav>
    </aside>
  );
}

export default Sidebar;