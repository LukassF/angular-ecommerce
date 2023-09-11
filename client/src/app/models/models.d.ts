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
