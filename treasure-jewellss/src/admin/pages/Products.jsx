import { useState } from "react";
import { getProducts, deleteProduct } from "../services/productService";
import ProductTable from "../components/ProductTable";

const Products = () => {
  const [products, setProducts] = useState(getProducts());

  const handleDelete = (id) => {
    deleteProduct(id);
    setProducts(getProducts());
  };

  return (
    <div>
      <h1 className="text-2xl mb-4">Products</h1>

      <ProductTable products={products} onDelete={handleDelete} />
    </div>
  );
};

export default Products;