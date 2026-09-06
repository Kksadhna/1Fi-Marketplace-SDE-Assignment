export const products = [
  {
    id: "iphone-16",
    name: "iPhone 16",
    category: "Mobiles",
    price: 69999,
    oldPrice: 79999,
    rating: 4.8,
    reviews: 124,
    description: "Powerful performance, advanced camera system and all-day battery life.",
    features: ["6.1-inch display", "48MP Fusion camera", "A18 chip", "128GB storage"],
    variants: [
      { id: "128gb", label: "128 GB", price: 69999 },
      { id: "256gb", label: "256 GB", price: 79999 },
      { id: "512gb", label: "512 GB", price: 99999 }
    ],
    colors: ["Midnight", "Blue", "Pink"],
    emiPlans: [
      { id: "3m", months: 3, interest: 0, monthly: 23333 },
      { id: "6m", months: 6, interest: 0, monthly: 11667 },
      { id: "12m", months: 12, interest: 0, monthly: 5833 },
      { id: "18m", months: 18, interest: 0, monthly: 3889 }
    ],
    visual: "phone"
  },
  {
    id: "macbook-air",
    name: "MacBook Air M3",
    category: "Laptops",
    price: 114999,
    oldPrice: 124999,
    rating: 4.9,
    reviews: 87,
    description: "Thin, light and fast with the M3 chip, perfect for work and creativity.",
    features: ["13.6-inch Liquid Retina", "Apple M3 chip", "8GB unified memory", "256GB SSD"],
    variants: [
      { id: "256gb", label: "256 GB", price: 114999 },
      { id: "512gb", label: "512 GB", price: 134999 }
    ],
    colors: ["Midnight", "Starlight", "Silver"],
    emiPlans: [
      { id: "6m", months: 6, interest: 0, monthly: 19167 },
      { id: "12m", months: 12, interest: 0, monthly: 9583 },
      { id: "18m", months: 18, interest: 0, monthly: 6389 },
      { id: "24m", months: 24, interest: 0, monthly: 4792 }
    ],
    visual: "laptop"
  },
  {
    id: "sony-bravia",
    name: "Sony Bravia 55-inch 4K TV",
    category: "TVs",
    price: 74990,
    oldPrice: 84990,
    rating: 4.7,
    reviews: 63,
    description: "Immersive 4K picture quality with cinematic sound and smart features.",
    features: ["55-inch 4K display", "Google TV", "Dolby Vision", "120Hz refresh rate"],
    variants: [
      { id: "55", label: "55 inch", price: 74990 },
      { id: "65", label: "65 inch", price: 99990 }
    ],
    colors: ["Black"],
    emiPlans: [
      { id: "6m", months: 6, interest: 0, monthly: 12498 },
      { id: "12m", months: 12, interest: 0, monthly: 6249 },
      { id: "18m", months: 18, interest: 0, monthly: 4166 }
    ],
    visual: "tv"
  },
  {
    id: "dyson-vacuum",
    name: "Dyson V12 Detect Slim",
    category: "Appliances",
    price: 54900,
    oldPrice: 59900,
    rating: 4.6,
    reviews: 41,
    description: "Powerful cordless cleaning with laser dust detection and a slim design.",
    features: ["Cordless", "Laser dust detection", "60 min runtime", "HEPA filtration"],
    variants: [
      { id: "v12", label: "V12 Detect Slim", price: 54900 }
    ],
    colors: ["Gold"],
    emiPlans: [
      { id: "3m", months: 3, interest: 0, monthly: 18300 },
      { id: "6m", months: 6, interest: 0, monthly: 9150 },
      { id: "12m", months: 12, interest: 0, monthly: 4575 }
    ],
    visual: "vacuum"
  },
  {
    id: "airpods-pro",
    name: "AirPods Pro",
    category: "Audio",
    price: 24900,
    oldPrice: 26900,
    rating: 4.8,
    reviews: 152,
    description: "Active Noise Cancellation, adaptive audio and a comfortable in-ear fit.",
    features: ["Active Noise Cancellation", "USB-C", "Adaptive Audio", "MagSafe case"],
    variants: [
      { id: "usb-c", label: "USB-C", price: 24900 }
    ],
    colors: ["White"],
    emiPlans: [
      { id: "3m", months: 3, interest: 0, monthly: 8300 },
      { id: "6m", months: 6, interest: 0, monthly: 4150 },
      { id: "12m", months: 12, interest: 0, monthly: 2075 }
    ],
    visual: "earbuds"
  },
  {
    id: "samsung-s25",
    name: "Samsung Galaxy S25",
    category: "Mobiles",
    price: 80999,
    oldPrice: 85999,
    rating: 4.7,
    reviews: 95,
    description: "Flagship Galaxy performance with a bright display and versatile cameras.",
    features: ["6.2-inch AMOLED", "Snapdragon 8 Elite", "50MP camera", "256GB storage"],
    variants: [
      { id: "256gb", label: "256 GB", price: 80999 },
      { id: "512gb", label: "512 GB", price: 92999 }
    ],
    colors: ["Navy", "Silver", "Mint"],
    emiPlans: [
      { id: "6m", months: 6, interest: 0, monthly: 13500 },
      { id: "12m", months: 12, interest: 0, monthly: 6750 },
      { id: "18m", months: 18, interest: 0, monthly: 4500 }
    ],
    visual: "phone2"
  }
];