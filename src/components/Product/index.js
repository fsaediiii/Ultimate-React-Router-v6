import { Outlet } from "react-router-dom";

import Logo from "../../assets/img/logo.png";
import "./Product.css";

function Product() {
  return (
    <div className="product-container">
      <img src={Logo} />
      <Outlet />
    </div>
  );
}

export default Product;
