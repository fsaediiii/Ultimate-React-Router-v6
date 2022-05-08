import React, { useState, useEffect } from "react";
import { listProducts } from "./ProductsService";
import ProductCard from "./ProductCard";

function ProductIndex() {
  const [products, setProducts] = useState(null);
  useEffect(() => {
    (async () => {
      try {
        const allProduct = await listProducts();
        setProducts(allProduct);
      } catch (e) {}
    })();
  }, []);

  if (products === null) {
    return <div>Loading...</div>;
  }
  return <div>
     {products.map((item) => (
         <ProductCard key={item.id} product={item}/> 
        ))}
  </div>;
}

export default ProductIndex;
