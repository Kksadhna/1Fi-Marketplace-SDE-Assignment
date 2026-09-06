import { products } from "../data/products";

export async function getProducts() {
  // Mock API layer: replace this implementation with fetch("/api/products")
  // when a backend becomes available.
  await new Promise((resolve) => setTimeout(resolve, 650));
  return products;
}

export async function getProductById(id) {
  await new Promise((resolve) => setTimeout(resolve, 350));
  return products.find((product) => product.id === id) || null;
}