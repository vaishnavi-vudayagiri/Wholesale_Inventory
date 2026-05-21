export default function AddProduct() {
  return (
    <form className="max-w-md bg-white p-6 rounded shadow space-y-4">
      <h2 className="text-xl font-semibold">Add Product</h2>
      <input className="w-full border p-2 rounded" placeholder="Product Name" />
      <input className="w-full border p-2 rounded" placeholder="Price" />
      <input className="w-full border p-2 rounded" placeholder="Stock" />
      <button className="bg-blue-600 text-white px-4 py-2 rounded">Save</button>
    </form>
  );
}