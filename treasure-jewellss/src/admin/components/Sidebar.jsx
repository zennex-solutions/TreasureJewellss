import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-black text-white p-5">
      <h2 className="text-xl font-bold mb-6">Admin Panel</h2>

      <nav className="flex flex-col gap-4">
        <Link to="/admin">Dashboard</Link>
        <Link to="/admin/products">Products</Link>
        <Link to="/admin/add-product">Add Product</Link>
        <Link to="/admin/orders">Orders</Link>
      </nav>
    </div>
  );
};

export default Sidebar;