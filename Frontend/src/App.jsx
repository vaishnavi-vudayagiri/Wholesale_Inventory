import { Routes, Route, Navigate } from "react-router-dom";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

import Login from "./pages/Login";
import Logout from "./pages/Logout";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import Customers from "./pages/Customers";
import Billing from "./pages/Billing";
import SalesReport from "./pages/SalesReport";
import StockReport from "./pages/StockReport";
import LowStock from "./pages/LowStock";
import EditProduct from "./pages/EditProduct";

function ProtectedLayout({ children }) {
  const isLoggedIn = localStorage.getItem("login");

  if (!isLoggedIn) {
    return <Navigate to="/" />;
  }

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col">
      <Header />

      <div className="flex flex-1">
        <Sidebar />

        <main className="flex-1 p-8">
          {children}
        </main>
      </div>

      <Footer />
    </div>
  );
}

function App() {
  return (
    <Routes>

      {/* LOGIN PAGE */}
      <Route path="/" element={<Login />} />

      {/* PROTECTED ROUTES */}
      <Route
        path="/dashboard"
        element={
          <ProtectedLayout>
            <Dashboard />
          </ProtectedLayout>
        }
      />

      <Route
        path="/products"
        element={
          <ProtectedLayout>
            <Products />
          </ProtectedLayout>
        }
      />

      <Route
        path="/customers"
        element={
          <ProtectedLayout>
            <Customers />
          </ProtectedLayout>
        }
      />

      <Route
        path="/billing"
        element={
          <ProtectedLayout>
            <Billing />
          </ProtectedLayout>
        }
      />

      <Route
        path="/sales-report"
        element={
          <ProtectedLayout>
            <SalesReport />
          </ProtectedLayout>
        }
      />

      <Route
        path="/stock-report"
        element={
          <ProtectedLayout>
            <StockReport />
          </ProtectedLayout>
        }
      />

      <Route
        path="/low-stock"
        element={
          <ProtectedLayout>
            <LowStock />
          </ProtectedLayout>
        }
      />

      <Route
        path="/edit-product/:id"
        element={
          <ProtectedLayout>
            <EditProduct />
          </ProtectedLayout>
        }
      />
       <Route path="/logout" element={<Logout />} />
    </Routes>
  );
}

export default App;