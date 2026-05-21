import { useState } from "react";
import {
  FaUser,
  FaBoxOpen,
  FaHashtag,
  FaFileInvoiceDollar,
} from "react-icons/fa";

export default function BillingForm({
  products = [],
  onGenerate,
}) {
  const [customer, setCustomer] = useState("");
  const [selectedProduct, setSelectedProduct] =
    useState("");
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();

    onGenerate({
      customer,
      productId: selectedProduct,
      quantity,
    });
  };

  return (
    <div className="bg-[#111827] border border-gray-800 hover:border-blue-500 transition-all duration-300 rounded-3xl shadow-2xl p-8 w-full max-w-xl">

      <div className="flex items-center gap-4 mb-8">
        <div className="bg-blue-500/20 p-4 rounded-2xl">
          <FaFileInvoiceDollar className="text-blue-400 text-2xl" />
        </div>

        <h2 className="text-3xl font-bold text-white">
          Generate Invoice
        </h2>
      </div>

      <form
        className="space-y-6"
        onSubmit={handleSubmit}
      >

        <div>
          <label className="text-gray-300 flex items-center gap-2 mb-2">
            <FaUser />
            Customer Name
          </label>

          <input
            type="text"
            placeholder="Enter customer name"
            value={customer}
            onChange={(e) =>
              setCustomer(e.target.value)
            }
            className="w-full bg-[#1f2937] text-white border border-gray-700 rounded-2xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        <div>
          <label className="text-gray-300 flex items-center gap-2 mb-2">
            <FaBoxOpen />
            Product
          </label>

          <select
            value={selectedProduct}
            onChange={(e) =>
              setSelectedProduct(e.target.value)
            }
            className="w-full bg-[#1f2937] text-white border border-gray-700 rounded-2xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
          >
            <option value="">
              Choose product
            </option>

            {products.map((p) => (
              <option
                key={p._id}
                value={p._id}
              >
                {p.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="text-gray-300 flex items-center gap-2 mb-2">
            <FaHashtag />
            Quantity
          </label>

          <input
            type="number"
            min="1"
            value={quantity}
            onChange={(e) =>
              setQuantity(e.target.value)
            }
            className="w-full bg-[#1f2937] text-white border border-gray-700 rounded-2xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-500 hover:to-indigo-600 text-white py-3 rounded-2xl font-semibold transition-all duration-300 shadow-lg"
        >
          Generate Invoice
        </button>

      </form>
    </div>
  );
}