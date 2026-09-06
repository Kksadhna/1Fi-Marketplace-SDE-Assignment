import React, { useEffect, useMemo, useState } from "react";
import { ArrowLeft, Check, ChevronDown, Minus, Plus, ShieldCheck, Star } from "lucide-react";
import { Link, useNavigate, useParams } from "react-router-dom";
import BottomNav from "../components/BottomNav";
import EMIPlanCard from "../components/EMIPlanCard";
import ProductVisual from "../components/ProductVisual";
import { getProductById } from "../services/marketplaceApi";

const money = (value) => `₹${value.toLocaleString("en-IN")}`;

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [status, setStatus] = useState("loading");
  const [variantId, setVariantId] = useState("");
  const [planId, setPlanId] = useState("");
  const [color, setColor] = useState("");

  useEffect(() => {
    getProductById(id).then((data) => {
      setProduct(data);
      setStatus(data ? "success" : "error");
      if (data) {
        setVariantId(data.variants[0].id);
        setPlanId(data.emiPlans[0].id);
        setColor(data.colors[0]);
      }
    });
  }, [id]);

  const selectedVariant = useMemo(
    () => product?.variants.find((v) => v.id === variantId),
    [product, variantId]
  );
  const selectedPlan = useMemo(
    () => product?.emiPlans.find((p) => p.id === planId),
    [product, planId]
  );

  if (status === "loading") return <div className="full-state"><div className="loader" />Loading product...</div>;
  if (status === "error") return <div className="full-state"><h2>Product not found</h2><Link to="/marketplace" className="primary-button">Back to Marketplace</Link></div>;

  const total = selectedVariant?.price || product.price;

  const proceed = () => {
    alert(`Plan selected: ${selectedPlan.months} months at ${money(selectedPlan.monthly)}/month`);
  };

  return (
    <>
      <main className="page details-page">
        <header className="details-header">
          <button className="icon-button" onClick={() => navigate(-1)}><ArrowLeft size={20} /></button>
          <span>Product details</span>
          <span className="header-spacer" />
        </header>

        <section className="details-visual">
          <ProductVisual type={product.visual} />
          <span className="deal-badge">NO-COST EMI</span>
        </section>

        <section className="details-content">
          <div className="product-category">{product.category}</div>
          <h1>{product.name}</h1>
          <div className="rating large"><Star size={15} fill="currentColor" /> {product.rating} <span>{product.reviews} reviews</span></div>

          <div className="detail-price">
            <strong>{money(total)}</strong>
            <del>{money(product.oldPrice)}</del>
            <span>Save {money(Math.max(0, product.oldPrice - total))}</span>
          </div>

          <p className="description">{product.description}</p>

          <div className="section-block">
            <div className="section-heading"><h2>Choose variant</h2><span>{selectedVariant?.label}</span></div>
            <div className="variant-row">
              {product.variants.map((variant) => (
                <button key={variant.id} className={variantId === variant.id ? "variant active" : "variant"} onClick={() => setVariantId(variant.id)}>
                  {variant.label}
                </button>
              ))}
            </div>
          </div>

          <div className="section-block">
            <div className="section-heading"><h2>Color</h2><span>{color}</span></div>
            <div className="color-row">
              {product.colors.map((item) => (
                <button key={item} className={color === item ? "color-option active" : "color-option"} onClick={() => setColor(item)}>
                  <span />{item}
                </button>
              ))}
            </div>
          </div>

          <div className="section-block">
            <div className="section-heading">
              <div><h2>Choose EMI plan</h2><p>No-cost EMI • No hidden charges</p></div>
              <ShieldCheck size={19} />
            </div>
            <div className="emi-list">
              {product.emiPlans.map((plan) => (
                <EMIPlanCard key={plan.id} plan={plan} selected={planId === plan.id} onSelect={() => setPlanId(plan.id)} />
              ))}
            </div>
          </div>

          <div className="features">
            <h2>Product highlights</h2>
            {product.features.map((feature) => <div key={feature}><Check size={16} />{feature}</div>)}
          </div>

          <div className="summary-card">
            <div><span>Product price</span><b>{money(total)}</b></div>
            <div><span>Selected EMI</span><b>{selectedPlan.months} months</b></div>
            <div><span>Monthly payment</span><strong>{money(selectedPlan.monthly)}</strong></div>
          </div>
        </section>

        <div className="sticky-cta">
          <div><span>Monthly EMI</span><strong>{money(selectedPlan.monthly)}</strong></div>
          <button className="primary-button" onClick={proceed}>Proceed with EMI</button>
        </div>
      </main>
      <BottomNav />
    </>
  );
}