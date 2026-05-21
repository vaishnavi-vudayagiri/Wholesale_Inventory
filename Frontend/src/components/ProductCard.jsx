export default function ProductCard({ product, onEdit, onDelete }) {
  return (
    <div className="card">
      <h3>{product.name}</h3>
      <p>Price: ₹{product.price}</p>
      <p>Quantity: {product.quantity}</p>
      <div style={{ display: 'flex', gap: '8px', marginTop: '12px' }}>
        <button className="btn btn-primary" onClick={() => onEdit(product._id)}>
          Edit
        </button>
        <button className="btn" onClick={() => onDelete(product._id)}>
          Delete
        </button>
      </div>
    </div>
  );
}