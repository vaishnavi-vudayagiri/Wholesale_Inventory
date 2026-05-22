import { useEffect, useState } from "react";
import axios from "axios";

function SalesReport() {
  const [sales, setSales] = useState([]);

  useEffect(() => {
    axios
      .get("https://wholesale-inventory-1.onrender.com/api/reports/sales")
      .then((res) => {
        console.log(res.data);
        setSales(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="p-5">
      <h1  className="text-black text-4xl font-bold mb-6">
        Sales Report
      </h1>

      <table className="w-full border">
        <thead className="bg-amber-600 text-white">
          <tr>
            <th className="p-2">Customer</th>
            <th className="p-2">GST</th>
            <th className="p-2">Discount</th>
            <th className="p-2">Date</th>
          </tr>
        </thead>

        <tbody>
          {sales.length > 0 ? (
            sales.map((sale) => (
              <tr key={sale._id} className="text-center border">
                <td className="p-2">{sale.customerName}</td>
                <td className="p-2">₹{sale.gst}</td>
                <td className="p-2">₹{sale.discount}</td>
                <td className="p-2">
                  {sale.createdAt
                    ? new Date(sale.createdAt).toLocaleDateString()
                    : "-"}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="p-4 text-center">
                No sales found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default SalesReport;