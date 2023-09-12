interface Product {
  id: number;
  created_at: Date;
  name: string;
  categories: string[];
  price: number;
  image: string;
  in_stock: number;
  gender: "male" | "female" | "unisex";
}

interface Filters {
  categories: Array<string>;
  types: Array<string>;
  gender: string | undefined;
}

type CartItem = Product & { quantity: number; size: string };

interface Cart {
  items: CartItem[];
}
