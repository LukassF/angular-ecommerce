import { Component, Input, OnChanges } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { CartService } from "src/app/services/cart.service";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
})
export class ProductComponent implements OnChanges {
  constructor(private cartS: CartService, private router: Router) {}
  @Input() product: Product | undefined;
  categoriesUpperCase: Array<string> | undefined;

  ngOnChanges(changes: any) {
    const categories = changes.product.currentValue.categories;
    this.categoriesUpperCase = categories.map(
      (_category: string) => _category[0].toUpperCase() + _category.slice(1)
    );
  }

  navigateToDetails(e: any) {
    if (e.target!.id === "add-to-cart") return;
    else this.router.navigate(["shop/product", `/${this.product!.id}`]);
  }

  onAddToCart() {
    if (this.product)
      this.cartS.addToCart({
        ...this.product,
        quantity: 1,
        size: "XS",
      });
  }
}
