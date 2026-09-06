import React from "react";

export default function ProductVisual({ type, small = false }) {
  return (
    <div className={`product-visual visual-${type} ${small ? "visual-small" : ""}`}>
      {type === "phone" && (
        <>
          <div className="phone-device"><div className="camera-lens" /><div className="phone-screen">16</div></div>
          <div className="visual-glow" />
        </>
      )}
      {type === "phone2" && (
        <>
          <div className="phone-device phone-device-dark"><div className="camera-stack"><i /><i /><i /></div><div className="phone-screen">S</div></div>
          <div className="visual-glow" />
        </>
      )}
      {type === "laptop" && (
        <div className="laptop-device"><div className="laptop-screen">M3</div><div className="laptop-base" /></div>
      )}
      {type === "tv" && (
        <div className="tv-device"><div className="tv-screen">4K</div><div className="tv-stand" /></div>
      )}
      {type === "vacuum" && (
        <div className="vacuum-device"><div className="vacuum-head" /><div className="vacuum-stick" /><div className="vacuum-handle" /></div>
      )}
      {type === "earbuds" && (
        <div className="buds-device"><div className="bud bud-left" /><div className="bud bud-right" /><div className="buds-case" /></div>
      )}
    </div>
  );
}