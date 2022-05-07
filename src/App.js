import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Product from "./components/Product";
import Admin from "./components/Admin";
import Navbar from "./components/Common/Nav";

import "./App.css";

function App() {
  return (
    <div className="Container">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Product />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
