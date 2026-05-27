import { getProducts } from "../services/productService";

const Dashboard = () => {
  const products = getProducts();

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>

      <div className="bg-white p-4 shadow rounded">
        <p>Total Products: {products.length}</p>
      </div>
    </div>
  );
};

export default Dashboard;