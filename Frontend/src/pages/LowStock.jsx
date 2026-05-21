import { useEffect, useState } from "react";
import axios from "axios";

function LowStock() {

  const [products, setProducts] = useState([]);

  useEffect(() => {

    axios
      .get("http://localhost:5000/api/products")
      .then((res) => {
        setProducts(res.data);
      });

  }, []);

  const lowStockItems = products.filter(
    (item) => item.stock < 5
  );

  return (
    <div className="p-5">

      <h1 className="text-3xl font-bold mb-5">
        Low Stock Alerts
      </h1>

      {lowStockItems.map((item) => (
        <div
          key={item._id}
          className="bg-white p-4 shadow rounded mb-3"
        >
          {item.name} : {item.stock} left
        </div>
      ))}

    </div>
  );
}

export default LowStock;
