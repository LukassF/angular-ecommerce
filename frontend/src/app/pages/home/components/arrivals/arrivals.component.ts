import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";

@Component({
  selector: "app-arrivals",
  templateUrl: "./arrivals.component.html",
})
export class ArrivalsComponent implements OnChanges {
  isLoading: boolean = true;
  @Input() fetchedProducts: Product[] | undefined;

  ngOnChanges(changes: SimpleChanges): void {
    //@ts-ignore
    if (changes.fetchedProducts.currentValue) this.isLoading = false;
  }
}
