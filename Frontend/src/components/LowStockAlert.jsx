export default function LowStockAlert({ products = [] }) {
  const lowStock = products.filter((p) => p.quantity < 5);

  return (
    <div className="card">
      <h3>Low Stock Alerts</h3>
      {lowStock.length === 0 ? (
        <p>All products are sufficiently stocked.</p>
      ) : (
        <ul>
          {lowStock.map((p) => (
            <li key={p._id}>{p.name} — {p.quantity} left</li>
          ))}
        </ul>
      )}
    </div>
  );
}