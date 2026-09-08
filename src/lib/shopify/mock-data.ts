import { Product, Collection } from "./types";

const mockImages = [
  { url: "/images/product/thekua-jar-cream.png", altText: "Bhansaghar Thekua jar with cream label", width: 852, height: 1706 },
  { url: "/images/product/thekua-jar-monochrome.png", altText: "Bhansaghar Thekua jar with monochrome label", width: 842, height: 1706 },
  { url: "/images/product/thekua-jar-green.png", altText: "Bhansaghar Thekua jar with green label", width: 850, height: 1706 },
];

export const mockProducts: Product[] = [
  {
    id: "gid://shopify/Product/1",
    handle: "traditional-khasta-thekua",
    title: "Traditional Jaggery & Ghee Thekua",
    description: "Handcrafted with patience, reverence, and the warmth of a mother's touch. Our Thekua is the quintessential taste of Mithila, made with pure ghee, unrefined jaggery, and stone-ground wheat.",
    descriptionHtml: "<p>Handcrafted with patience, reverence, and the warmth of a mother's touch. Our Thekua is the quintessential taste of Mithila, made with pure ghee, unrefined jaggery, and stone-ground wheat.</p>",
    availableForSale: true,
    images: {
      edges: mockImages.map(img => ({ node: img }))
    },
    priceRange: {
      minVariantPrice: { amount: "399.00", currencyCode: "INR" },
      maxVariantPrice: { amount: "749.00", currencyCode: "INR" }
    },
    variants: {
      edges: [
        {
          node: {
            id: "gid://shopify/ProductVariant/1",
            title: "400g Pouch",
            availableForSale: true,
            selectedOptions: [{ name: "Size", value: "400g" }],
            price: { amount: "399.00", currencyCode: "INR" },
            compareAtPrice: null
          }
        },
        {
          node: {
            id: "gid://shopify/ProductVariant/2",
            title: "Festive Gift Box (2x 400g)",
            availableForSale: true,
            selectedOptions: [{ name: "Size", value: "800g" }],
            price: { amount: "749.00", currencyCode: "INR" },
            compareAtPrice: { amount: "798.00", currencyCode: "INR" }
          }
        }
      ]
    },
    tags: ["Jaggery based", "Ghee based"],
    ingredients: {
      key: "ingredients",
      type: "multi_line_text_field",
      value: "Whole Wheat Flour (Atta), Pure Ghee, Unrefined Jaggery (Gur), Dry Coconut, Fennel Seeds (Saunf), Cardamom Powder."
    },
    preparation: {
      key: "preparation",
      type: "multi_line_text_field",
      value: "Dough is kneaded by hand with ghee and melted jaggery. Pressed on wooden sanchas, then slow-fried in small batches in pure ghee."
    },
    storage: {
      key: "storage",
      type: "multi_line_text_field",
      value: "Store in an airtight container in a cool, dry place. Do not refrigerate. Keep away from direct sunlight."
    },
    shelfLife: {
      key: "shelf_life",
      type: "single_line_text_field",
      value: "20 Days"
    }
  },
  {
    id: "gid://shopify/Product/2",
    handle: "jaggery-rice-bran-thekua",
    title: "Jaggery & Rice Bran Oil Thekua",
    description: "A lighter twist on the classic. Made with organic unrefined jaggery and fried in heart-healthy, low-absorbent rice bran oil. Perfect for everyday snacking.",
    descriptionHtml: "<p>A lighter twist on the classic. Made with organic unrefined jaggery and fried in heart-healthy, low-absorbent rice bran oil. Perfect for everyday snacking.</p>",
    availableForSale: true,
    images: { edges: mockImages.map(img => ({ node: img })) },
    priceRange: {
      minVariantPrice: { amount: "349.00", currencyCode: "INR" },
      maxVariantPrice: { amount: "649.00", currencyCode: "INR" }
    },
    variants: {
      edges: [
        {
          node: {
            id: "gid://shopify/ProductVariant/3",
            title: "400g Pouch",
            availableForSale: true,
            selectedOptions: [{ name: "Size", value: "400g" }],
            price: { amount: "349.00", currencyCode: "INR" },
            compareAtPrice: null
          }
        },
        {
          node: {
            id: "gid://shopify/ProductVariant/4",
            title: "Festive Gift Box (2x 400g)",
            availableForSale: true,
            selectedOptions: [{ name: "Size", value: "800g" }],
            price: { amount: "649.00", currencyCode: "INR" },
            compareAtPrice: { amount: "698.00", currencyCode: "INR" }
          }
        }
      ]
    },
    tags: ["Jaggery based", "Rice bran oil based"],
    ingredients: {
      key: "ingredients",
      type: "multi_line_text_field",
      value: "Whole Wheat Flour (Atta), Rice Bran Oil, Unrefined Jaggery (Gur), Dry Coconut, Fennel Seeds (Saunf)."
    },
    preparation: {
      key: "preparation",
      type: "multi_line_text_field",
      value: "Dough is kneaded with water and melted jaggery, then pressed in hand-carved wooden moulds. Deep-fried on a medium flame in light rice bran oil."
    },
    storage: {
      key: "storage",
      type: "multi_line_text_field",
      value: "Store in an airtight container in a cool, dry place. Keep away from moisture."
    },
    shelfLife: {
      key: "shelf_life",
      type: "single_line_text_field",
      value: "20 Days"
    }
  },
  {
    id: "gid://shopify/Product/3",
    handle: "sugar-ghee-thekua",
    title: "Sugar & Ghee Khasta Thekua",
    description: "Made for those who prefer the classic, clean sweetness of white sugar combined with the rich, unmistakable aroma of pure cow ghee.",
    descriptionHtml: "<p>Made for those who prefer the classic, clean sweetness of white sugar combined with the rich, unmistakable aroma of pure cow ghee.</p>",
    availableForSale: true,
    images: { edges: mockImages.map(img => ({ node: img })) },
    priceRange: {
      minVariantPrice: { amount: "379.00", currencyCode: "INR" },
      maxVariantPrice: { amount: "699.00", currencyCode: "INR" }
    },
    variants: {
      edges: [
        {
          node: {
            id: "gid://shopify/ProductVariant/5",
            title: "400g Pouch",
            availableForSale: true,
            selectedOptions: [{ name: "Size", value: "400g" }],
            price: { amount: "379.00", currencyCode: "INR" },
            compareAtPrice: null
          }
        },
        {
          node: {
            id: "gid://shopify/ProductVariant/6",
            title: "Festive Gift Box (2x 400g)",
            availableForSale: true,
            selectedOptions: [{ name: "Size", value: "800g" }],
            price: { amount: "699.00", currencyCode: "INR" },
            compareAtPrice: { amount: "758.00", currencyCode: "INR" }
          }
        }
      ]
    },
    tags: ["Sugar based", "Ghee based"],
    ingredients: {
      key: "ingredients",
      type: "multi_line_text_field",
      value: "Whole Wheat Flour (Atta), Pure Ghee, Sugar (Chini), Dry Coconut, Fennel Seeds (Saunf), Cardamom Powder."
    },
    preparation: {
      key: "preparation",
      type: "multi_line_text_field",
      value: "Sugar syrup is mixed with whole wheat flour and ghee. Shapes are hand-pressed on traditional moulds and slow-fried in pure ghee until crispy."
    },
    storage: {
      key: "storage",
      type: "multi_line_text_field",
      value: "Store in a dry place in an airtight container."
    },
    shelfLife: {
      key: "shelf_life",
      type: "single_line_text_field",
      value: "20 Days"
    }
  },
  {
    id: "gid://shopify/Product/4",
    handle: "sugar-rice-bran-thekua",
    title: "Sugar & Rice Bran Oil Thekua",
    description: "A crisp, golden treat made with pure white sugar and fried in light rice bran oil. Features a clean sweet flavor profile with a delicate, crunchy texture.",
    descriptionHtml: "<p>A crisp, golden treat made with pure white sugar and fried in light rice bran oil. Features a clean sweet flavor profile with a delicate, crunchy texture.</p>",
    availableForSale: true,
    images: { edges: mockImages.map(img => ({ node: img })) },
    priceRange: {
      minVariantPrice: { amount: "329.00", currencyCode: "INR" },
      maxVariantPrice: { amount: "599.00", currencyCode: "INR" }
    },
    variants: {
      edges: [
        {
          node: {
            id: "gid://shopify/ProductVariant/7",
            title: "400g Pouch",
            availableForSale: true,
            selectedOptions: [{ name: "Size", value: "400g" }],
            price: { amount: "329.00", currencyCode: "INR" },
            compareAtPrice: null
          }
        },
        {
          node: {
            id: "gid://shopify/ProductVariant/8",
            title: "Festive Gift Box (2x 400g)",
            availableForSale: true,
            selectedOptions: [{ name: "Size", value: "800g" }],
            price: { amount: "599.00", currencyCode: "INR" },
            compareAtPrice: { amount: "658.00", currencyCode: "INR" }
          }
        }
      ]
    },
    tags: ["Sugar based", "Rice bran oil based"],
    ingredients: {
      key: "ingredients",
      type: "multi_line_text_field",
      value: "Whole Wheat Flour (Atta), Rice Bran Oil, Sugar (Chini), Dry Coconut, Fennel Seeds (Saunf)."
    },
    preparation: {
      key: "preparation",
      type: "multi_line_text_field",
      value: "Whole wheat flour is bound with sugar syrup, pressed onto moulds, and deep-fried in rice bran oil on a low flame."
    },
    storage: {
      key: "storage",
      type: "multi_line_text_field",
      value: "Store in a dry, cool container."
    },
    shelfLife: {
      key: "shelf_life",
      type: "single_line_text_field",
      value: "20 Days"
    }
  }
];

export const mockThekuaProduct = mockProducts[0];

export const mockCollections: Record<string, Collection> = {
  "all-offerings": {
    id: "gid://shopify/Collection/1",
    handle: "all-offerings",
    title: "All Offerings",
    description: "Discover our handmade delicacies, preserving the true taste of Mithilanchal.",
    products: {
      pageInfo: { hasNextPage: false, endCursor: "" },
      edges: mockProducts.map(p => ({ node: p }))
    }
  }
};
