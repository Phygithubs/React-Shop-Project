// import axios from "axios";
// import { createContext, useEffect, useState } from "react";

// const ProductContext = createContext();

// export const ProductProvider = ({ children }) => {
//   const [product, setProduct] = useState([]);

//   const FetchAPI = async () => {
//     try {
//       const res = await axios.get('https://product-server-json.onrender.com/products');
//       setProduct(res.data);
//       console.table(res.data);
//     } catch (e) {
//       console.log(e);
//     } finally {
//     }
//   };

//   useEffect(() => {
//     FetchAPI();
//   }, []);

//   return (
//     <ProductContext.Provider value={{ product }}>
//       {children}
//     </ProductContext.Provider>
//   );
// };

// export default ProductContext;

import axios from "axios";
import { createContext, useEffect, useState } from "react";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);  // Store products state
  const [cart, setCart] = useState([]);  // Store cart state

  // Fetch product data from API or use hardcoded data
  const fetchProducts = async () => {
    try {
      const res = await axios.get('https://product-server-json.onrender.com/products');
      setProducts(res.data);  // Set the fetched products
      console.table(res.data);
    } catch (e) {
      console.error(e);
    }
  };

  // Effect to fetch products on component mount
  useEffect(() => {
    fetchProducts();  // Fetch products when component mounts
  }, []);

  // Add product to the cart
  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);  // Add product to the cart
  };

  return (
    <ProductContext.Provider value={{ products, cart, addToCart }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContext;

