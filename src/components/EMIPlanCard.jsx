import React from "react";
import { CheckCircle2 } from "lucide-react";

const money = (value) => `₹${value.toLocaleString("en-IN")}`;

export default function EMIPlanCard({ plan, selected, onSelect }) {
  return (
    <button
      type="button"
      className={`emi-plan ${selected ? "selected" : ""}`}
      onClick={onSelect}
      aria-pressed={selected}
    >
      <div>
        <strong>{plan.months} Months</strong>
        <span>{money(plan.monthly)} / month</span>
        <small>{plan.interest === 0 ? "No interest" : `${plan.interest}% interest`}</small>
      </div>
      <CheckCircle2 size={22} className="plan-check" />
    </button>
  );
}