export default function InvoicePreview({ invoice }) {
  if (!invoice) return null;

  return (
    <div className="card">
      <h2>Invoice</h2>
      <p>Customer: {invoice.customer}</p>
      <p>Product: {invoice.product}</p>
      <p>Quantity: {invoice.quantity}</p>
      <p>Total: ₹{invoice.total}</p>
    </div>
  );
}