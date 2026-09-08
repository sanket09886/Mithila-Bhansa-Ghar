import { Product, Collection } from "./types";
import { mockProducts, mockCollections } from "./mock-data";

// This client will eventually connect to the real Shopify Storefront API.
// For now, it returns the mock data to unblock frontend development.
export async function getProduct(handle: string): Promise<Product | null> {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 100));
  
  return mockProducts.find(p => p.handle === handle) || null;
}

export async function getCollectionProducts(handle: string): Promise<Collection | null> {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 100));
  
  if (handle === "all-offerings") {
    return mockCollections["all-offerings"] || null;
  }

  // Support dynamic collections based on product tags (e.g. sugar-based, jaggery-based, ghee-based)
  const query = handle.replace("-based", "").replace("-", " ").toLowerCase();
  const filteredProducts = mockProducts.filter(p => 
    p.tags?.some(tag => tag.toLowerCase().includes(query))
  );

  return {
    id: `gid://shopify/Collection/${handle}`,
    handle,
    title: handle.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" "),
    description: `Shop our authentic ${handle.replace("-", " ")} delicacies.`,
    products: {
      pageInfo: { hasNextPage: false, endCursor: "" },
      edges: filteredProducts.map(p => ({ node: p }))
    }
  };
}

export async function getAllProducts(): Promise<Product[]> {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 100));
  
  return mockProducts;
}
