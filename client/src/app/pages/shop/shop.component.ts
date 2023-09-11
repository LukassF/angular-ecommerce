import { Subscription } from "rxjs";
import { Component, OnDestroy, OnInit } from "@angular/core";
import { StoreService } from "src/app/services/store.service";

@Component({
  selector: "app-shop",
  templateUrl: "./shop.component.html",
})
export class ShopComponent implements OnInit, OnDestroy {
  fetchedProducts: Product[] | undefined;
  productsSubscription: Subscription | undefined;
  constructor(private storeS: StoreService) {}

  ngOnInit(): void {
    this.getShopProducts();
  }

  getShopProducts() {
    this.productsSubscription = this.storeS
      .getAllProducts()
      .subscribe((_products) => (this.fetchedProducts = _products));
  }

  ngOnDestroy(): void {
    if (this.productsSubscription) this.productsSubscription.unsubscribe();
  }
}
