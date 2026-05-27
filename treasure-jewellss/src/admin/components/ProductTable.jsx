import { Link } from "react-router-dom";

const ProductTable = ({ products, onDelete }) => {
  return (
    <table className="w-full bg-white shadow rounded">
      <thead>
        <tr className="border-b">
          <th>Name</th>
          <th>Price</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        {products.map((p) => (
          <tr key={p.id} className="text-center border-b">
            <td>{p.name}</td>
            <td>₹{p.price}</td>
            <td className="flex gap-2 justify-center py-2">
              <Link to={`/admin/edit-product/${p.id}`} className="text-blue-500">
                Edit
              </Link>

              <button
                onClick={() => onDelete(p.id)}
                className="text-red-500"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProductTable;