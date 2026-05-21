import { useEffect, useState } from "react";
import axios from "axios";

function Dashboard() {

  const [products, setProducts] = useState([]);

  useEffect(() => {

    axios
      .get("http://localhost:5000/api/products")
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
    <div className="p-5">

     <h1 className="text-white text-4xl font-bold mb-6">
  Dashboard
</h1>
      <div className="grid grid-cols-3 gap-5">

        <div className="bg-white shadow p-5 rounded">
          <h2>Total Products</h2>

          <p className="text-3xl font-bold">
            {totalProducts}
          </p>
        </div>

        <div className="bg-white shadow p-5 rounded">
          <h2>Total Stock</h2>

          <p className="text-3xl font-bold">
            {totalStock}
          </p>
        </div>

        <div className="bg-white shadow p-5 rounded">
          <h2>Total Inventory Value</h2>

          <p className="text-3xl font-bold">
            ₹{totalValue}
          </p>
        </div>

      </div>
    </div>
  );
}

export default Dashboard;