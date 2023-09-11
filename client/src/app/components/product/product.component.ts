import { Component, Input, OnChanges } from "@angular/core";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
})
export class ProductComponent implements OnChanges {
  @Input() product: Product | undefined;
  categoriesUpperCase: Array<string> | undefined;

  ngOnChanges(changes: any) {
    const categories = changes.product.currentValue.categories;
    this.categoriesUpperCase = categories.map(
      (_category: string) => _category[0].toUpperCase() + _category.slice(1)
    );
  }
}
