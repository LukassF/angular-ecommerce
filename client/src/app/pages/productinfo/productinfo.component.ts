import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";
import { StoreService } from "src/app/services/store.service";

@Component({
  selector: "app-productinfo",
  templateUrl: "./productinfo.component.html",
})
export class ProductinfoComponent implements OnInit, OnDestroy {
  id: string | undefined;
  productSubscription: Subscription | undefined;
  product: Product | undefined;
  constructor(private route: ActivatedRoute, private storeS: StoreService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((value) => {
      let id = value.get("id");
      this.id = id!;
    });

    this.getProduct();
  }

  getProduct(): void {
    this.productSubscription = this.storeS
      .getProductById(this.id as string)
      .subscribe((_product) => (this.product = _product[0]));
  }

  ngOnDestroy(): void {
    if (this.productSubscription) this.productSubscription.unsubscribe();
  }
}
