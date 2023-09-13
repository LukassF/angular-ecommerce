import { Component, OnInit } from "@angular/core";
import { CartService } from "src/app/services/cart.service";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
})
export class NavbarComponent {
  constructor(private cartS: CartService) {}

  get quantity() {
    return this.cartS.totalQuantity;
  }
}
