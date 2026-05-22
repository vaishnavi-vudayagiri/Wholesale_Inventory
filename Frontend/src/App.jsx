import { Routes, Route, Navigate } from "react-router-dom";

import Sidebar from "./components/Sidebar";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import Customers from "./pages/Customers";
import Billing from "./pages/Billing";
import SalesReport from "./pages/SalesReport";
import StockReport from "./pages/StockReport";
import LowStock from "./pages/LowStock";
import EditProduct from "./pages/EditProduct";



// TOKEN HELPER (IMPORTANT)

function getToken() {
  const token = localStorage.getItem("token");

  if (!token || token === "undefined" || token === "null") {
    return null;
  }

  return token;
}



// PROTECTED LAYOUT

function ProtectedLayout({ children }) {
  const token = getToken();

  if (!token) {
    localStorage.removeItem("token");
    localStorage.removeItem("username");

    return <Navigate to="/login" replace />;
  }

  return (
    <div className="min-h-screen bg-slate-100 flex">
      <Sidebar />
      <main className="flex-1 p-8 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}



// APP ROUTES

function App() {
  const token = getToken();

  return (
    <Routes>

      {/* HOME */}
      <Route path="/" element={<Home />} />

      {/* LOGIN */}
      <Route
  path="/login"
  element={
    getToken() ? (
      <Navigate to="/dashboard" replace />
    ) : (
      <Login />
    )
  }
/>

      {/* REGISTER */}
      <Route path="/register" element={<Register />} />

      {/* DASHBOARD */}
      <Route
        path="/dashboard"
        element={
          <ProtectedLayout>
            <Dashboard />
          </ProtectedLayout>
        }
      />

      {/* PRODUCTS */}
      <Route
        path="/products"
        element={
          <ProtectedLayout>
            <Products />
          </ProtectedLayout>
        }
      />

      {/* CUSTOMERS */}
      <Route
        path="/customers"
        element={
          <ProtectedLayout>
            <Customers />
          </ProtectedLayout>
        }
      />

      {/* BILLING */}
      <Route
        path="/billing"
        element={
          <ProtectedLayout>
            <Billing />
          </ProtectedLayout>
        }
      />

      {/* SALES REPORT */}
      <Route
        path="/sales-report"
        element={
          <ProtectedLayout>
            <SalesReport />
          </ProtectedLayout>
        }
      />

      {/* STOCK REPORT */}
      <Route
        path="/stock-report"
        element={
          <ProtectedLayout>
            <StockReport />
          </ProtectedLayout>
        }
      />

      {/* LOW STOCK */}
      <Route
        path="/low-stock"
        element={
          <ProtectedLayout>
            <LowStock />
          </ProtectedLayout>
        }
      />

      {/* EDIT PRODUCT */}
      <Route
        path="/edit-product/:id"
        element={
          <ProtectedLayout>
            <EditProduct />
          </ProtectedLayout>
        }
      />

      {/* FALLBACK */}
      <Route path="*" element={<Navigate to="/" replace />} />

    </Routes>
  );
}

export default App;