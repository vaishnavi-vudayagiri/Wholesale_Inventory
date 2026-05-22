import { useEffect, useState } from "react";
import axios from "axios";

function LowStock() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://wholesale-inventory-1.onrender.com/api/products")
      .then((res) => {
        setProducts(res.data);
      });
  }, []);

  const lowStockItems = products.filter(
    (item) => item.stock < 5
  );

  return (
    <div className="p-6 md:p-10 bg-[#FFFBF5] min-h-screen">

      {/* TITLE */}
      <h1 className="text-3xl md:text-4xl font-bold text-[#1C1917] mb-8">
        Low Stock Alerts
      </h1>

      {/* EMPTY STATE */}
      {lowStockItems.length === 0 && (
        <div className="bg-white border border-amber-100 rounded-2xl p-6 text-stone-600 shadow-sm">
          🎉 All products are sufficiently stocked
        </div>
      )}

      {/* ALERT LIST */}
      <div className="space-y-4">

        {lowStockItems.map((item) => (
          <div
            key={item._id}
            className="
              flex justify-between items-center
              bg-white border border-red-200
              rounded-2xl p-5 shadow-sm
              hover:shadow-md transition
            "
          >

            {/* LEFT SIDE */}
            <div>
              <h2 className="text-lg font-semibold text-[#1C1917]">
                {item.name}
              </h2>

              <p className="text-stone-500 text-sm">
                Category: {item.category}
              </p>
            </div>

            {/* RIGHT SIDE (STOCK BADGE) */}
            <div
              className="
                px-4 py-2 rounded-full
                bg-red-50 text-red-600
                font-bold text-sm border border-red-200
              "
            >
              Only {item.stock} left
            </div>

          </div>
        ))}

      </div>

    </div>
  );
}

export default LowStock;