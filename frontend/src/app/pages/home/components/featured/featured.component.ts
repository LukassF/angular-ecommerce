import { Component, Input } from "@angular/core";

@Component({
  selector: "app-featured",
  templateUrl: "./featured.component.html",
})
export class FeaturedComponent {
  @Input() fetchedProducts: Product[] | undefined;
}
