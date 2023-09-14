import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";

@Component({
  selector: "app-featured",
  templateUrl: "./featured.component.html",
})
export class FeaturedComponent implements OnChanges {
  isLoading: boolean = true;
  @Input() fetchedProducts: Product[] | undefined;

  ngOnChanges(changes: SimpleChanges): void {
    //@ts-ignore
    if (changes.fetchedProducts.currentValue) this.isLoading = false;
  }
}
