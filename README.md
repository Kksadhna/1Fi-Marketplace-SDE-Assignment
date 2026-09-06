# 1Fi Marketplace SDE Intern Assignment

A React + Vite implementation of the 1Fi Shop experience and the requested 1Fi Marketplace flow.

## Run locally

```bash
npm install
npm run dev
```

Open the local URL shown by Vite.

## Build

```bash
npm run build
```

## Included

- 1Fi-inspired Shop page using the provided 1Fi banner
- Top Brands / Nearby Stores / 1Fi Marketplace tabs
- Marketplace product listing
- Search and category filtering
- Price sorting
- Product details
- Product variants and colors
- EMI plan selection
- Proceed CTA
- Loading, error and empty states
- Responsive mobile-first layout
- Bottom navigation matching the supplied 1Fi screen
- Separate mock API/service layer so product data is not embedded in UI components

## Data architecture

Product and EMI data live in `src/data/products.js`.
The UI retrieves them through `src/services/marketplaceApi.js`.

The mock service can later be replaced by a real `fetch("/api/products")` implementation without changing the marketplace components.
