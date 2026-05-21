import { useParams, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { ProductContext } from "../context/ProductContext";

function EditProduct() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { products, updateProduct } =
    useContext(ProductContext);

  const product = products.find(
    (p) => p.id === Number(id)
  );

  const [name, setName] = useState(product.name);
  const [price, setPrice] = useState(product.price);

  const handleSave = () => {
    updateProduct(id, {
      name,
      price,
    });

    navigate("/products");
  };

  return (
    <div className="bg-white p-8 rounded-xl shadow">
      <h2 className="text-3xl font-bold mb-6">
        Edit Product #{id}
      </h2>

      <input
        className="border p-3 w-full mb-4 rounded"
        value={name}
        onChange={(e) =>
          setName(e.target.value)
        }
      />

      <input
        className="border p-3 w-full mb-4 rounded"
        value={price}
        onChange={(e) =>
          setPrice(e.target.value)
        }
      />

      <button
        onClick={handleSave}
        className="bg-blue-600 text-white px-6 py-3 rounded"
      >
        Save Changes
      </button>
    </div>
  );
}

export default EditProduct;