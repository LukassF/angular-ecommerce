import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";
import { CartService } from "src/app/services/cart.service";
import { StoreService } from "src/app/services/store.service";

@Component({
  selector: "app-productinfo",
  templateUrl: "./productinfo.component.html",
})
export class ProductinfoComponent implements OnInit, OnDestroy {
  loading: boolean = false;
  id: string | undefined;
  productSubscription: Subscription | undefined;
  product: Product | undefined;
  size: string = "S";
  quantity: number = 1;

  constructor(
    private route: ActivatedRoute,
    private storeS: StoreService,
    private cartS: CartService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((value) => {
      let id = value.get("id");
      this.id = id!;
    });

    this.getProduct();
  }

  getProduct(): void {
    this.loading = true;
    this.productSubscription = this.storeS
      .getProductById(this.id as string)
      .subscribe((_product) => {
        this.product = _product[0];
        this.loading = false;
      });
  }

  changeSize(e: any) {
    this.size = e.target.value;
  }
  setQuantity(e: any) {
    this.quantity = Number(e.target.value);
  }

  onAddToCart(): void {
    if (this.product)
      this.cartS.addToCart({
        ...this.product,
        quantity: this.quantity,
        size: this.size,
      });
  }

  ngOnDestroy(): void {
    if (this.productSubscription) this.productSubscription.unsubscribe();
  }
}
