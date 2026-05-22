import { useEffect, useState } from "react";
import axios from "axios";

function Dashboard() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://wholesale-inventory.onrender.com/api/products")
      .then((res) => {
        setProducts(res.data);
      });
  }, []);

  const totalProducts = products.length;

  const totalStock = products.reduce(
    (acc, item) => acc + item.stock,
    0
  );

  const totalValue = products.reduce(
    (acc, item) => acc + item.price * item.stock,
    0
  );

  return (
    <div className="p-6 md:p-10 bg-[#FFFBF5] min-h-screen">

      {/* TITLE */}
      <h1 className="text-3xl md:text-4xl font-bold text-[#1C1917] mb-8">
        Dashboard Overview
      </h1>

      {/* CARDS GRID */}
      <div className="grid md:grid-cols-3 gap-6">

        {/* CARD 1 */}
        <div className="bg-[#FFF7ED] border border-amber-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition">

          <h2 className="text-stone-600 font-medium">
            Total Products
          </h2>

          <p className="text-3xl font-bold text-amber-600 mt-3">
            {totalProducts}
          </p>

        </div>

        {/* CARD 2 */}
        <div className="bg-[#FFF7ED] border border-amber-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition">

          <h2 className="text-stone-600 font-medium">
            Total Stock
          </h2>

          <p className="text-3xl font-bold text-amber-600 mt-3">
            {totalStock}
          </p>

        </div>

        {/* CARD 3 */}
        <div className="bg-[#FFF7ED] border border-amber-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition">

          <h2 className="text-stone-600 font-medium">
            Total Inventory Value
          </h2>

          <p className="text-3xl font-bold text-amber-600 mt-3">
            ₹{totalValue}
          </p>

        </div>

      </div>
    </div>
  );
}

export default Dashboard;