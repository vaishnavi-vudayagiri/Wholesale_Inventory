import { useEffect, useState } from "react";
import axios from "axios";

function Customers() {
  const [customers, setCustomers] = useState([]);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
  });

  // Fetch customers
  const fetchCustomers = async () => {
    try {
      const res = await axios.get(
        "https://wholesale-inventory.onrender.com/api/customers"
      );
      setCustomers(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchCustomers();
  }, []);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Add customer
  const addCustomer = async () => {
    try {
      await axios.post(
        "https://wholesale-inventory.onrender.com/api/customers",
        formData
      );

      alert("Customer Added Successfully");

      setFormData({
        name: "",
        phone: "",
        address: "",
      });

      fetchCustomers();
    } catch (err) {
      console.log(err.response?.data || err);
      alert("Failed to add customer");
    }
  };

  // Delete customer
  const deleteCustomer = async (id) => {
    try {
      await axios.delete(
        `https://wholesale-inventory.onrender.com/api/customers/${id}`
      );
      fetchCustomers();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="p-5">
      <h1  className="text-white text-4xl font-bold mb-6">
        Customers
      </h1>

      {/* Form */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3 mb-5 text-white">
        <input
          type="text"
          name="name"
          placeholder="Customer Name"
          value={formData.name}
          onChange={handleChange}
          className="border p-2 rounded"
        />

        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          className="border p-2 rounded"
        />

        <input
          type="text"
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
          className="border p-2 rounded"
        />

        <button
          onClick={addCustomer}
          className="bg-blue-800 text-white px-4 py-2 rounded"
        >
          Add Customer
        </button>
      </div>

      {/* Table */}
      <table className="w-full border">
        <thead className="bg-blue-800 text-white">
          <tr>
            <th className="p-2">Name</th>
            <th className="p-2">Phone</th>
            <th className="p-2">Address</th>
            <th className="p-2">Action</th>
          </tr>
        </thead>

        <tbody>
          {customers.map((customer) => (
            <tr
              key={customer._id}
              className="text-center border"
            >
              <td className="p-2">{customer.name}</td>
              <td className="p-2">{customer.phone}</td>
              <td className="p-2">{customer.address}</td>
              <td className="p-2">
                <button
                  onClick={() =>
                    deleteCustomer(customer._id)
                  }
                  className="bg-blue-800 text-white px-3 py-1 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Customers;