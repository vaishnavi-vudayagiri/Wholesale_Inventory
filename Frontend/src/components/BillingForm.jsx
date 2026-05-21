import { useState } from 'react';

export default function BillingForm({ products = [], onGenerate }) {
  const [customer, setCustomer] = useState('');
  const [selectedProduct, setSelectedProduct] = useState('');
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    onGenerate({ customer, productId: selectedProduct, quantity });
  };

  return (
    <form className="card" onSubmit={handleSubmit}>
      <input
        placeholder="Customer name"
        value={customer}
        onChange={(e) => setCustomer(e.target.value)}
      />
      <select value={selectedProduct} onChange={(e) => setSelectedProduct(e.target.value)}>
        <option value="">Select product</option>
        {products.map((p) => (
          <option key={p._id} value={p._id}>{p.name}</option>
        ))}
      </select>
      <input
        type="number"
        min="1"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      />
      <button className="btn btn-primary" type="submit">Generate Invoice</button>
    </form>
  );
}