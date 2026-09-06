import React from "react";
import { ArrowRight, Star } from "lucide-react";
import { Link } from "react-router-dom";
import ProductVisual from "./ProductVisual";

const money = (value) => `₹${value.toLocaleString("en-IN")}`;

export default function ProductCard({ product }) {
  const lowestEmi = Math.min(...product.emiPlans.map((p) => p.monthly));

  return (
    <Link className="product-card" to={`/marketplace/product/${product.id}`}>
      <div className="product-image-wrap">
        <ProductVisual type={product.visual} small />
        <span className="zero-emi">0% EMI</span>
      </div>
      <div className="product-card-body">
        <div className="product-category">{product.category}</div>
        <h3>{product.name}</h3>
        <div className="rating"><Star size={13} fill="currentColor" /> {product.rating} <span>({product.reviews})</span></div>
        <div className="price-row">
          <strong>{money(product.price)}</strong>
          <del>{money(product.oldPrice)}</del>
        </div>
        <div className="emi-from">EMI from <b>{money(lowestEmi)}/mo</b></div>
        <span className="view-link">View details <ArrowRight size={15} /></span>
      </div>
    </Link>
  );
}