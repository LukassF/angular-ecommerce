import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { loadStripe } from "@stripe/stripe-js";
import { CartService } from "src/app/services/cart.service";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
})
export class CartComponent implements OnInit {
  cartItems: CartItem[] = [];
  constructor(private cartS: CartService, private httpClient: HttpClient) {}

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

  proceedToCheckout() {
    this.httpClient
      .post("https://ngecommerce.onrender.com/api/checkout", {
        items: this.cartS.cart.value.items,
      })
      .subscribe(async (res: any) => {
        let stripe = await loadStripe(
          "pk_test_51NpczSALVeFQAsXKosIZoWYwXbEVFLtvBVQaU768TRN0lPuylueAVMr6q3umcRgmnp49lngHzWR3bximgu1JT8W500oP5c8KtI"
        );
        stripe?.redirectToCheckout({
          sessionId: res.id,
        });
      });
  }
}
