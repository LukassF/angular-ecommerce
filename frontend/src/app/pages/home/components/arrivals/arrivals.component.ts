import { Component, Input } from "@angular/core";

@Component({
  selector: "app-arrivals",
  templateUrl: "./arrivals.component.html",
})
export class ArrivalsComponent {
  @Input() fetchedProducts: Product[] | undefined;
}
