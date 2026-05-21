function AddCustomer() {
  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded shadow">
      <h1 className="text-2xl font-bold mb-4">Add Customer</h1>

      <form className="space-y-4">
        <input
          type="text"
          placeholder="Customer Name"
          className="w-full border p-2 rounded"
        />

        <input
          type="text"
          placeholder="Phone Number"
          className="w-full border p-2 rounded"
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full border p-2 rounded"
        />

        <input
          type="text"
          placeholder="Address"
          className="w-full border p-2 rounded"
        />

        <button className="bg-blue-600 text-white px-4 py-2 rounded">
          Save Customer
        </button>
      </form>
    </div>
  );
}

export default AddCustomer;