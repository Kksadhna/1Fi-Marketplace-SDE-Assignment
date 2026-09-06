import React from "react";

export default function ShopTabs({ active, onChange }) {
  return (
    <div className="shop-tabs" role="tablist">
      {[
        ["brands", "Top Brands"],
        ["nearby", "Nearby Stores"],
        ["marketplace", "1Fi Marketplace"]
      ].map(([id, label]) => (
        <button
          key={id}
          role="tab"
          aria-selected={active === id}
          className={active === id ? "tab active" : "tab"}
          onClick={() => onChange(id)}
        >
          {label}
          {active === id && <span className="tab-line" />}
        </button>
      ))}
    </div>
  );
}