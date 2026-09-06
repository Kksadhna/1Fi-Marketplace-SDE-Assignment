import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Shop from "./pages/Shop";
import Marketplace from "./pages/Marketplace";
import ProductDetails from "./pages/ProductDetails";

export default function App() {
  return (
    <div className="app-shell">
      <Routes>
        <Route path="/" element={<Navigate to="/shop" replace />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/marketplace/product/:id" element={<ProductDetails />} />
        <Route path="*" element={<Navigate to="/shop" replace />} />
      </Routes>
    </div>
  );
}