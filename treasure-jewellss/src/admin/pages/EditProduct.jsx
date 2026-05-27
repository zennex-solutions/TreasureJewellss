import { useParams, useNavigate } from "react-router-dom";
import { getProductById, updateProduct } from "../services/productService";
import ProductForm from "../components/ProductForm";

const EditProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = getProductById(id);

  const handleSubmit = (data) => {
    updateProduct(id, data);
    navigate("/admin/products");
  };

  return (
    <div>
      <h1 className="text-2xl mb-4">Edit Product</h1>
      <ProductForm initialData={product} onSubmit={handleSubmit} />
    </div>
  );
};

export default EditProduct;