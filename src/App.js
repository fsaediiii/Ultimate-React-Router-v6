import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Product from "./components/Product";
import ProductIndex from "./components/Product/ProductIndex";
import ProductItem from "./components/Product/ProductItem";
import Admin from "./components/Admin";
import Navbar from "./components/Common/Nav";

import "./App.css";

function App() {
  return (
    <div className="Container">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Product />}>
            <Route path="/" element={<ProductIndex />} />
            <Route path="/product/:id" element={<ProductItem />} />
          </Route>
          <Route path="/admin" element={<Admin />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
