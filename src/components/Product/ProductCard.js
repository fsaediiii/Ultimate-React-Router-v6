import React from "react";

import { Link } from 'react-router-dom';

import "./Product.css";

function ProductCard(props) {
  const { product } = props;
  return (
    <Link to={`/product/${product.id}`}> 
    <div className={"product-card"}>
      <h5>{product.name}</h5>
      <h6>${product.price}</h6>
    </div>
    </Link>
   
  );
}

export default ProductCard;
