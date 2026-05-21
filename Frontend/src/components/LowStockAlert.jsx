import {
  FaExclamationTriangle,
  FaCheckCircle,
  FaBoxOpen,
} from "react-icons/fa";

export default function LowStockAlert({
  products = [],
}) {
  const lowStock = products.filter(
    (p) => p.quantity < 5
  );

  return (
    <div className="bg-[#111827] border border-gray-800 hover:border-yellow-500 transition-all duration-300 rounded-3xl shadow-2xl p-8 w-full">

      <div className="flex items-center gap-4 mb-8">
        <div className="bg-yellow-500/20 p-4 rounded-2xl">
          <FaExclamationTriangle className="text-yellow-400 text-2xl" />
        </div>

        <h2 className="text-3xl font-bold text-white">
          Low Stock Alerts
        </h2>
      </div>

      {lowStock.length === 0 ? (
        <div className="bg-green-500/10 border border-green-500 rounded-2xl p-5 flex items-center gap-4">

          <FaCheckCircle className="text-green-400 text-3xl" />

          <p className="text-green-300 text-lg">
            All products are sufficiently stocked.
          </p>

        </div>
      ) : (
        <div className="space-y-4">

          {lowStock.map((p) => (
            <div
              key={p._id}
              className="bg-[#1f2937] hover:border-red-500 border border-gray-700 transition-all duration-300 rounded-2xl p-5 flex justify-between items-center"
            >

              <div className="flex items-center gap-4">

                <div className="bg-red-500/20 p-4 rounded-2xl">
                  <FaBoxOpen className="text-red-400 text-xl" />
                </div>

                <div>
                  <h3 className="text-white text-xl font-semibold">
                    {p.name}
                  </h3>

                  <p className="text-gray-400">
                    Stock running low
                  </p>
                </div>

              </div>

              <span className="bg-red-500 text-white px-4 py-2 rounded-xl font-bold shadow-lg">
                {p.quantity} left
              </span>

            </div>
          ))}

        </div>
      )}
    </div>
  );
}