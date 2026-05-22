import { useState } from "react";
import axios from "axios";

function Billing() {
  const [formData, setFormData] = useState({
    customerName: "",
    gst: "",
    discount: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const createBill = async () => {
    try {
      await axios.post(
        "https://wholesale-inventory.onrender.com/api/billing",
        {
          customerName: formData.customerName,
          items: [], // add selected products later
          gst: Number(formData.gst),
          discount: Number(formData.discount),
        }
      );

      alert("Bill Created Successfully");

      setFormData({
        customerName: "",
        gst: "",
        discount: "",
      });
    } catch (err) {
      console.log(err.response?.data || err);
      alert("Failed to create bill");
    }
  };

  return (
    <div className="p-5">
      <h1  className="text-black text-4xl font-bold mb-6">
        Billing
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-3 text-black">
        <input
          type="text"
          name="customerName"
          placeholder="Customer Name"
          value={formData.customerName}
          onChange={handleChange}
          className="border p-2 rounded"
        />

        <input
          type="number"
          name="gst"
          placeholder="GST"
          value={formData.gst}
          onChange={handleChange}
          className="border p-2 rounded"
        />

        <input
          type="number"
          name="discount"
          placeholder="Discount"
          value={formData.discount}
          onChange={handleChange}
          className="border p-2 rounded"
        />

        <button
          onClick={createBill}
          className="bg-amber-600 text-white px-4 py-2 rounded"
        >
          Create Bill
        </button>
      </div>
    </div>
  );
}

export default Billing;