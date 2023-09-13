import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";
import { CartService } from "src/app/services/cart.service";
import { StoreService } from "src/app/services/store.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
})
export class HomeComponent implements OnInit, OnDestroy {
  products: Product[] | undefined;
  newestProducts: Product[] | undefined;
  productsSubscription: Subscription | undefined;

  constructor(
    private storeS: StoreService,
    private route: ActivatedRoute,
    private cartS: CartService
  ) {}

  ngOnInit(): void {
    this.getProducts();
    //@ts-ignore
    if (this.route.queryParams._value.success === "true")
      this.cartS.clearCart();
  }

  getProducts(): void {
    this.productsSubscription = this.storeS
      .getAllProducts()
      .subscribe((_products) => {
        this.products = _products.slice(0, 10);
        this.newestProducts = _products
          .sort(
            (a, b) =>
              new Date(b.created_at).getTime() -
              new Date(a.created_at).getTime()
          )
          .slice(0, 10);
      });
  }

  ngOnDestroy(): void {
    if (this.productsSubscription) this.productsSubscription.unsubscribe();
  }
}
