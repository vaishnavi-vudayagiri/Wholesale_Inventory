import { useState } from 'react';

export default function CustomerForm({ onSubmit }) {
  const [form, setForm] = useState({ name: '', phone: '', address: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
    setForm({ name: '', phone: '', address: '' });
  };

  return (
    <form className="card" onSubmit={handleSubmit}>
      <input name="name" placeholder="Customer name" value={form.name} onChange={handleChange} />
      <input name="phone" placeholder="Phone" value={form.phone} onChange={handleChange} />
      <input name="address" placeholder="Address" value={form.address} onChange={handleChange} />
      <button className="btn btn-primary" type="submit">Save Customer</button>
    </form>
  );
}