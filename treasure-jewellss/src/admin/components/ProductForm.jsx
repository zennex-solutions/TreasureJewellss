import { useState } from "react";

const ProductForm = ({ initialData = {}, onSubmit }) => {
  const [form, setForm] = useState({
    name: initialData.name || "",
    price: initialData.price || "",
    category: initialData.category || "",
    image: initialData.image || "",
    description: initialData.description || "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(form);
      }}
      className="bg-white p-4 shadow rounded flex flex-col gap-4"
    >
      <input name="name" placeholder="Name" onChange={handleChange} value={form.name} />
      <input name="price" placeholder="Price" onChange={handleChange} value={form.price} />
      <input name="category" placeholder="Category" onChange={handleChange} value={form.category} />
      <input name="image" placeholder="Image URL" onChange={handleChange} value={form.image} />
      <textarea name="description" placeholder="Description" onChange={handleChange} value={form.description} />

      <button className="bg-black text-white py-2 rounded">
        Save Product
      </button>
    </form>
  );
};

export default ProductForm;