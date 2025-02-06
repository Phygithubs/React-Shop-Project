import React from 'react';
import { useCart } from '../context/CartContext'; // Path to your CartContext

const ProductDisplay = ({ product }) => {
    const { addToCart } = useCart();

    const handleBuyClick = () => {
        console.log("Product being added:", product); // Check this log!
        if (!product || !product.id) {
            console.error("Product or ID is missing:", product);
            return; // Stop if product or ID is missing
        }
        addToCart(product);
    };

    return (
        <div>
            {/* ... display product details (product.name, product.price, etc.) ... */}
            <button onClick={handleBuyClick}>Add to Cart</button>
        </div>
    );
};

export default ProductDisplay;