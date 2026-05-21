import { createContext, useState } from "react";

export const ProductContext = createContext();

export function ProductProvider({ children }) {
  const [products, setProducts] = useState([
    { id: 1, name: "Rice Bag", price: 1200 },
    { id: 2, name: "Oil Bottle", price: 180 },
  ]);

  const updateProduct = (id, updatedProduct) => {
    setProducts(
      products.map((p) =>
        p.id === Number(id) ? { ...p, ...updatedProduct } : p
      )
    );
  };

  return (
    <ProductContext.Provider
      value={{ products, updateProduct }}
    >
      {children}
    </ProductContext.Provider>
  );
}