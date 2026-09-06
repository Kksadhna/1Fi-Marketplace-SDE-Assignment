import React, { useState } from "react";
import { Search } from "lucide-react";
import { useNavigate } from "react-router-dom";
import BottomNav from "../components/BottomNav";
import ShopTabs from "../components/ShopTabs";

const banner = "https://cdn.1fi.in/banners/shop-page%201536x1024.webp";

export default function Shop() {
  const [active, setActive] = useState("brands");
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleTab = (id) => {
    setActive(id);
    if (id === "marketplace") navigate("/marketplace");
  };

  return (
    <>
      <main className="page shop-page">
        <section className="hero">
          <img src={banner} alt="Shop today, Pay later using Mutual funds" />
        </section>

        <div className="overlap">
          <ShopTabs active={active} onChange={handleTab} />
        </div>

        <section className="shop-content">
          <div className="search-box">
            <Search size={18} />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search online stores..."
              aria-label="Search online stores"
            />
          </div>

          <h1>Top Brands</h1>

          <div className="empty-state">
            <div className="empty-icon"><Search size={24} /></div>
            <h2>No matching stores found</h2>
            <p>Try a different store or brand name.</p>
          </div>
        </section>
      </main>
      <BottomNav />
    </>
  );
}