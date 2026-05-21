import {
  FaBoxOpen,
  FaEdit,
  FaTrash,
  FaRupeeSign,
} from "react-icons/fa";

export default function ProductCard({
  product,
  onEdit,
  onDelete,
}) {
  return (
    <div className="bg-[#111827] border border-gray-800 hover:border-blue-500 transition-all duration-300 rounded-3xl shadow-2xl p-6 w-full">

      <div className="flex items-center gap-4 mb-6">

        <div className="bg-blue-500/20 p-4 rounded-2xl">
          <FaBoxOpen className="text-blue-400 text-2xl" />
        </div>

        <div>
          <h3 className="text-2xl font-bold text-white">
            {product.name}
          </h3>

          <p className="text-gray-400">
            Inventory Product
          </p>
        </div>

      </div>

      <div className="space-y-4">

        <div className="bg-[#1f2937] rounded-2xl p-4 flex justify-between items-center">

          <span className="text-gray-300 flex items-center gap-2">
            <FaRupeeSign className="text-green-400" />
            Price
          </span>

          <span className="text-white font-bold text-lg">
            ₹{product.price}
          </span>

        </div>

        <div className="bg-[#1f2937] rounded-2xl p-4 flex justify-between items-center">

          <span className="text-gray-300">
            Quantity
          </span>

          <span
            className={`px-4 py-2 rounded-xl font-bold ${
              product.quantity < 5
                ? "bg-red-500 text-white"
                : "bg-green-500 text-white"
            }`}
          >
            {product.quantity}
          </span>

        </div>

      </div>

      <div className="flex gap-4 mt-6">

        <button
          onClick={() => onEdit(product._id)}
          className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-500 hover:to-indigo-600 text-white py-3 rounded-2xl flex items-center justify-center gap-2 font-semibold transition-all duration-300 shadow-lg"
        >
          <FaEdit />
          Edit
        </button>

        <button
          onClick={() => onDelete(product._id)}
          className="flex-1 bg-gradient-to-r from-red-500 to-red-700 hover:from-red-400 hover:to-red-600 text-white py-3 rounded-2xl flex items-center justify-center gap-2 font-semibold transition-all duration-300 shadow-lg"
        >
          <FaTrash />
          Delete
        </button>

      </div>
    </div>
  );
}