import { Component, OnInit } from "@angular/core";
import { CartService } from "src/app/services/cart.service";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
})
export class CartComponent implements OnInit {
  cartItems: CartItem[] = [];
  constructor(private cartS: CartService) {}

  ngOnInit(): void {
    this.cartItems = this.cartS.cart.value.items;
  }

  get totalPrice() {
    return this.cartS.totalPrice;
  }

  deleteFromCart(e: CartItem) {
    this.cartS.removeFromCart(e);
    this.cartItems = this.cartS.cart.value.items;
  }

  changeQuantity(e: { product: CartItem; quantity: number }) {
    this.cartS.changeQuantity(e.product, e.quantity);
    this.cartItems = this.cartS.cart.value.items;
  }

  changeSize(e: { product: CartItem; size: string }) {
    this.cartS.changeSize(e.product, e.size);
    this.cartItems = this.cartS.cart.value.items;
  }
}
