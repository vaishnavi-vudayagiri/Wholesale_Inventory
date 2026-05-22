import { useEffect, useState } from "react";
import axios from "axios";

function StockReport() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://wholesale-inventory.onrender.com/api/reports/stock")
      .then((res) => {
        console.log(res.data);
        setProducts(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="p-5">
      <h1  className="text-black text-4xl font-bold mb-6">
        Stock Report
      </h1>

      <table className="w-full border">
        <thead className="bg-amber-600 text-white">
          <tr>
            <th className="p-2">Product</th>
            <th className="p-2">Category</th>
            <th className="p-2">Stock</th>
          </tr>
        </thead>

        <tbody>
          {products.length > 0 ? (
            products.map((item) => (
              <tr key={item._id} className="text-center border">
                <td className="p-2">{item.name}</td>
                <td className="p-2">{item.category}</td>
                <td className="p-2">{item.stock}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3" className="p-4 text-center">
                No products found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default StockReport;