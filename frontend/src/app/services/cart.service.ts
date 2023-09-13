import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class CartService {
  cart = new BehaviorSubject<Cart>(
    window.localStorage.getItem("cart")
      ? JSON.parse(window.localStorage.getItem("cart") as string)
      : { items: [] }
  );
  totalQuantity: number = 0;
  totalPrice: number = 0;

  constructor(private snackbar: MatSnackBar) {
    this.getTotalPrice(this.cart.value.items);
    this.getTotalQuantity(this.cart.value.items);
  }

  addToCart(product: CartItem): void {
    console.log(this.cart.value);
    const items = [...this.cart.value.items];

    const itemInCart = items.find(
      (_product) => product.id === _product.id && product.size === _product.size
    );

    if (itemInCart) {
      itemInCart.quantity += Number(product.quantity);
      this.snackbar.open("Item already in cart, increased quantity", "OK", {
        duration: 3000,
      });
    } else {
      items.push(product);
      this.snackbar.open("Added item to cart", "OK", { duration: 3000 });
    }

    this.getTotalQuantity(items);
    this.getTotalPrice(items);

    this.cart.next({ items });
    window.localStorage.setItem("cart", JSON.stringify({ items }));
  }

  changeQuantity(product: CartItem, quantity: number) {
    const items = [...this.cart.value.items];

    const itemToUpdate = items.find(
      (_item) => _item.id === product.id && _item.size === product.size
    );

    if (itemToUpdate) itemToUpdate.quantity = quantity;

    this.getTotalQuantity(items);
    this.getTotalPrice(items);

    this.cart.next({ items });
    window.localStorage.setItem("cart", JSON.stringify({ items }));
  }

  changeSize(product: CartItem, size: string) {
    const items = [...this.cart.value.items];

    const itemToUpdate = items.find(
      (_item) => _item.id === product.id && _item.size === product.size
    );

    if (itemToUpdate) itemToUpdate.size = size;

    this.getTotalQuantity(items);
    this.getTotalPrice(items);

    this.cart.next({ items });
    window.localStorage.setItem("cart", JSON.stringify({ items }));
  }

  removeFromCart(product: CartItem) {
    const items = [...this.cart.value.items];

    const index = items.indexOf(product);

    if (index && index !== 0) items.splice(index, 1);
    else if (index === 0) items.shift();

    this.getTotalQuantity(items);
    this.getTotalPrice(items);

    this.cart.next({ items });
    this.snackbar.open("Added removed from cart.", "OK", { duration: 3000 });
    window.localStorage.setItem("cart", JSON.stringify({ items }));
  }

  clearCart() {
    this.cart.next({ items: [] });
    window.localStorage.removeItem("cart");

    this.getTotalQuantity(this.cart.value.items);
    this.getTotalPrice(this.cart.value.items);

    this.snackbar.open("Cart cleared.", "OK", { duration: 3000 });
  }

  getTotalQuantity(items: CartItem[]) {
    this.totalQuantity = items
      .map((_item) => _item.quantity)
      .reduce((item, acc) => (acc += item), 0);
  }

  getTotalPrice(items: CartItem[]) {
    this.totalPrice = items
      .map((_item) => _item.price * _item.quantity)
      .reduce((item, acc) => (acc += Number(item)), 0);
  }
}
