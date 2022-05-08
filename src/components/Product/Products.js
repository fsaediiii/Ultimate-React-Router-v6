import React, { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { css } from "@emotion/css";

import Loadable from "../Common/Loadable";
import Logo from "../../assets/img/logo.png";

const ProductItem = Loadable(lazy(() => import("./ProductItem")));
const ProductsIndex = Loadable(lazy(() => import("./ProductsIndex")));

const ProductsStyles = css`
  display: flex;
  flex-direction: column;
  .Logo {
    width: 125px;
    margin: 0 auto 25px;
  }
`;

const Products = () => (
  <div className={ProductsStyles}>
    <img src={Logo} alt="Ultimate Burgers" className="Logo" />
    <Routes>
      <Route path="/" element={<ProductsIndex />} />
      <Route path=":id" element={<ProductItem />} />
    </Routes>
  </div>
);

export default Products;
