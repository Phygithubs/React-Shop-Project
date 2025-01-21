import axios from "axios";
import { createContext, useEffect, useState } from "react";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [product, setProduct] = useState([]);

  const FetchAPI = async () => {
    try {
      const res = await axios.get('https://product-server-json.onrender.com/products');
      setProduct(res.data);
      console.table(res.data);
    } catch (e) {
      console.log(e);
    } finally {
    }
  };

  useEffect(() => {
    FetchAPI();
  }, []);

  return (
    <ProductContext.Provider value={{ product }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContext;

