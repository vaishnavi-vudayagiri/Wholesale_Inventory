import { Routes, Route, Navigate } from "react-router-dom";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

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


// Protected Layout
function ProtectedLayout({ children }) {
  const isLoggedIn = localStorage.getItem("login");

  // If not logged in redirect to login
  if (isLoggedIn !== "true") {
    return <Navigate to="/" />;
  }

  return (
    <div className="min-h-screen bg-[#0a0f1c] flex flex-col">

      {/* Header */}
      <Header />

      {/* Main Layout */}
      <div className="flex flex-1">

        {/* Sidebar */}
        <Sidebar />

        {/* Page Content */}
        <main className="flex-1 p-8 overflow-y-auto">
          {children}
        </main>

      </div>

      {/* Footer */}
      <Footer />

    </div>
  );
}


function App() {
  return (
    <Routes>

      {/* LOGIN PAGE */}
      <Route path="/" element={<Login />} />

      {/* REGISTER PAGE */}
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

      {/* INVALID ROUTE */}
      <Route
        path="*"
        element={<Navigate to="/" />}
      />

    </Routes>
  );
}

export default App;