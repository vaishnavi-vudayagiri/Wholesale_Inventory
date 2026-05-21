import { createContext, useContext, useState, useEffect } from 'react';
import { productService } from '../services/productService';
import { customerService } from '../services/customerService';

const AppContext = createContext();

export function AppProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadInitialData = async () => {
    try {
      const [pRes, cRes] = await Promise.all([
        productService.getAll(),
        customerService.getAll(),
      ]);

      setProducts(pRes.data);
      setCustomers(cRes.data);
    } catch (err) {
      console.error("Error loading data:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadInitialData();
  }, []);

  return (
    <AppContext.Provider
      value={{
        products,
        setProducts,
        customers,
        setCustomers,
        loading,
        reload: loadInitialData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export const useAppContext = () => useContext(AppContext);