import React, { useEffect, useMemo, useState } from "react";
import { ArrowLeft, ChevronDown, Search, SlidersHorizontal, X } from "lucide-react";
import { Link } from "react-router-dom";
import BottomNav from "../components/BottomNav";
import ProductCard from "../components/ProductCard";
import { getProducts } from "../services/marketplaceApi";

const categories = ["All", "Mobiles", "Laptops", "TVs", "Appliances", "Audio"];

export default function Marketplace() {
  const [products, setProducts] = useState([]);
  const [status, setStatus] = useState("loading");
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("featured");

  useEffect(() => {
    getProducts()
      .then((data) => { setProducts(data); setStatus("success"); })
      .catch(() => setStatus("error"));
  }, []);

  const filtered = useMemo(() => {
    let result = products.filter((p) => {
      const matchesCategory = category === "All" || p.category === category;
      const text = `${p.name} ${p.category}`.toLowerCase();
      return matchesCategory && text.includes(query.toLowerCase());
    });

    if (sort === "low") result = [...result].sort((a, b) => a.price - b.price);
    if (sort === "high") result = [...result].sort((a, b) => b.price - a.price);
    return result;
  }, [products, query, category, sort]);

  return (
    <>
      <main className="page marketplace-page">
        <header className="market-header">
          <Link to="/shop" className="icon-button" aria-label="Back to shop"><ArrowLeft size={20} /></Link>
          <div>
            <div className="eyebrow">SHOP</div>
            <h1>1Fi Marketplace</h1>
          </div>
          <button className="icon-button" aria-label="Filters"><SlidersHorizontal size={19} /></button>
        </header>

        <div className="market-search search-box">
          <Search size={18} />
          <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search products..." />
          {query && <button onClick={() => setQuery("")}><X size={16} /></button>}
        </div>

        <div className="category-row">
          {categories.map((item) => (
            <button key={item} className={category === item ? "chip active" : "chip"} onClick={() => setCategory(item)}>
              {item}
            </button>
          ))}
        </div>

        <div className="market-toolbar">
          <div>
            <h2>Explore products</h2>
            <p>{status === "success" ? `${filtered.length} products available` : "Curated for you"}</p>
          </div>
          <label className="sort-select">
            <select value={sort} onChange={(e) => setSort(e.target.value)}>
              <option value="featured">Featured</option>
              <option value="low">Price: low</option>
              <option value="high">Price: high</option>
            </select>
            <ChevronDown size={15} />
          </label>
        </div>

        {status === "loading" && (
          <div className="product-grid">
            {[1,2,3,4].map((n) => <div className="skeleton-card" key={n}><div className="skeleton image" /><div className="skeleton line wide" /><div className="skeleton line" /><div className="skeleton line short" /></div>)}
          </div>
        )}

        {status === "error" && (
          <div className="state-card">
            <div className="empty-icon">!</div>
            <h2>Couldn't load products</h2>
            <p>Please check your connection and try again.</p>
            <button className="primary-button" onClick={() => window.location.reload()}>Try again</button>
          </div>
        )}

        {status === "success" && filtered.length === 0 && (
          <div className="state-card">
            <div className="empty-icon"><Search size={24} /></div>
            <h2>No products found</h2>
            <p>Try another product name or category.</p>
          </div>
        )}

        {status === "success" && filtered.length > 0 && (
          <div className="product-grid">
            {filtered.map((product) => <ProductCard key={product.id} product={product} />)}
          </div>
        )}

        <div className="trust-strip">
          <span>✓ No-cost EMI options</span>
          <span>✓ Backed by your investments</span>
          <span>✓ Secure checkout</span>
        </div>
      </main>
      <BottomNav />
    </>
  );
}