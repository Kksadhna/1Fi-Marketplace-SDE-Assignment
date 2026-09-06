import React from "react";
import { ChartNoAxesCombined, House, ReceiptIndianRupee, Store, UserRound } from "lucide-react";
import { NavLink } from "react-router-dom";

const items = [
  { label: "Home", path: "/dashboard", icon: House },
  { label: "Shop", path: "/shop", icon: Store },
  { label: "EMI Dues", path: "/emi-dues", icon: ReceiptIndianRupee },
  { label: "Limit", path: "/pledged-funds", icon: ChartNoAxesCombined },
  { label: "Profile", path: "/profile", icon: UserRound }
];

export default function BottomNav() {
  return (
    <nav className="bottom-nav">
      <div className="bottom-nav-inner">
        {items.map(({ label, path, icon: Icon }) => (
          <NavLink
            key={label}
            to={path}
            className={({ isActive }) => `nav-item ${isActive ? "active" : ""}`}
          >
            {({ isActive }) => (
              <>
                {isActive && <span className="nav-indicator" />}
                <Icon size={22} strokeWidth={isActive ? 2 : 1.75} />
                <span>{label}</span>
              </>
            )}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}