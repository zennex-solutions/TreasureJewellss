import { useNavigate } from "react-router-dom";
import ProductForm from "../components/ProductForm";
import { addProduct } from "../services/productService";

const AddProduct = () => {
  const navigate = useNavigate();

  const handleSubmit = (data) => {
    addProduct(data);
    navigate("/admin/products");
  };

  return (
    <div>
      <h1 className="text-2xl mb-4">Add Product</h1>
      <ProductForm onSubmit={handleSubmit} />
    </div>
  );
};

export default AddProduct;