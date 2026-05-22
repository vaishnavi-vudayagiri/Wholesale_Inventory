import { useEffect, useState } from "react";
import axios from "axios";

function Products() {
  const [products, setProducts] = useState([]);

  // Backend expects these exact fields
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    purchasePrice: "",
    sellingPrice: "",
    stock: "",
  });

  // FETCH PRODUCTS
  const fetchProducts = async () => {
    try {
      const res = await axios.get("https://wholesale-inventory.onrender.com/api/products");
      setProducts(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // HANDLE INPUT
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // ADD PRODUCT
  const addProduct = async () => {
    try {
      await axios.post(
        "https://wholesale-inventory.onrender.com/api/products",
        formData
      );

      alert("Product Added Successfully");

      setFormData({
        name: "",
        category: "",
        purchasePrice: "",
        sellingPrice: "",
        stock: "",
      });

      fetchProducts();
    } catch (err) {
      console.log(err.response?.data || err);
      alert("Failed to add product");
    }
  };

  // DELETE PRODUCT
  const deleteProduct = async (id) => {
    try {
      await axios.delete(
        `https://wholesale-inventory.onrender.com/api/products/${id}`
      );

      fetchProducts();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="p-5">
      <h1  className="text-black text-4xl font-bold mb-6">
        Products
      </h1>

      {/* FORM */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-5 text-black">
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={formData.name}
          onChange={handleChange}
          className="border p-2 rounded"
        />

        <input
          type="text"
          name="category"
          placeholder="Category"
          value={formData.category}
          onChange={handleChange}
          className="border p-2 rounded"
        />

        <input
          type="number"
          name="purchasePrice"
          placeholder="Purchase Price"
          value={formData.purchasePrice}
          onChange={handleChange}
          className="border p-2 rounded"
        />

        <input
          type="number"
          name="sellingPrice"
          placeholder="Selling Price"
          value={formData.sellingPrice}
          onChange={handleChange}
          className="border p-2 rounded"
        />

        <input
          type="number"
          name="stock"
          placeholder="Stock"
          value={formData.stock}
          onChange={handleChange}
          className="border p-2 rounded"
        />

        <button
          onClick={addProduct}
          className="bg-blue-800 text-white px-4 py-2 rounded"
        >
          Add Product
        </button>
      </div>

      {/* TABLE */}
      <table className="w-full border">
        <thead className="bg-amber-600 text-white">
          <tr>
            <th className="p-2">Name</th>
            <th className="p-2">Category</th>
            <th className="p-2">Purchase Price</th>
            <th className="p-2">Selling Price</th>
            <th className="p-2">Stock</th>
            <th className="p-2">Action</th>
          </tr>
        </thead>

        <tbody>
          {products.map((product) => (
            <tr
              key={product._id}
              className="text-center border"
            >
              <td className="p-2">{product.name}</td>
              <td className="p-2">{product.category}</td>
              <td className="p-2">
                ₹{product.purchasePrice}
              </td>
              <td className="p-2">
                ₹{product.sellingPrice}
              </td>
              <td className="p-2">{product.stock}</td>
              <td className="p-2">
                <button
                  onClick={() =>
                    deleteProduct(product._id)
                  }
                  className="bg-amber-600 text-white px-3 py-1 rounded"
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

export default Products;