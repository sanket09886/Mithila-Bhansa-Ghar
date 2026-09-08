export type Money = {
  amount: string;
  currencyCode: string;
};

export type Image = {
  url: string;
  altText: string;
  width: number;
  height: number;
};

export type Metafield = {
  key: string;
  value: string;
  type: string;
};

export type ProductVariant = {
  id: string;
  title: string;
  availableForSale: boolean;
  selectedOptions: {
    name: string;
    value: string;
  }[];
  price: Money;
  compareAtPrice: Money | null;
};

export type Product = {
  id: string;
  handle: string;
  title: string;
  description: string;
  descriptionHtml: string;
  availableForSale: boolean;
  images: {
    edges: {
      node: Image;
    }[];
  };
  priceRange: {
    minVariantPrice: Money;
    maxVariantPrice: Money;
  };
  variants: {
    edges: {
      node: ProductVariant;
    }[];
  };
  ingredients?: Metafield;
  preparation?: Metafield;
  storage?: Metafield;
  shelfLife?: Metafield;
  tags?: string[];
};

export type Collection = {
  id: string;
  handle: string;
  title: string;
  description: string;
  image?: Image;
  products: {
    pageInfo: {
      hasNextPage: boolean;
      endCursor: string;
    };
    edges: {
      node: Product;
    }[];
  };
};
