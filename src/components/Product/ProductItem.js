import React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { retrieveProduct } from "./ProductsService";
import "./Product.css";

function ProductItem() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const product = await retrieveProduct(id);
        setProduct(product);
      } catch (e) {
        console.warn(e);
        navigate("/", { replace: true, state: { id } });
      }
    })();
  }, [id]);

  if (product === null) {
    return <div>Loading...</div>;
  }

  console.log("id", id);
  return (
    <div className={"product-card"}>
      <h5>{product.name}</h5>
      <h6>${product.price}</h6>
      <button className="button-back" onClick={() => navigate(-1)}>Back</button>
    </div>
  );
}

export default ProductItem;
