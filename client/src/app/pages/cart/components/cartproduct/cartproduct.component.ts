import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from "@angular/core";
import { Router } from "@angular/router";

const SIZE_INDEXES = [
  { id: 0, size: "XS" },
  { id: 1, size: "S" },
  { id: 2, size: "M" },
  { id: 3, size: "L" },
  { id: 4, size: "XL" },
];

@Component({
  selector: "app-cartproduct",
  templateUrl: "./cartproduct.component.html",
})
export class CartproductComponent implements OnChanges {
  @Input() item: CartItem | undefined;
  @Output() itemToDelete = new EventEmitter<CartItem>();
  @Output() quantityChange = new EventEmitter<{
    product: CartItem;
    quantity: number;
  }>();
  @Output() sizeChange = new EventEmitter<{
    product: CartItem;
    size: string;
  }>();
  categoriesUpperCase: Array<string> | undefined;
  sizeIndex: number = 0;
  constructor(private router: Router) {}

  navigateToDetails(e: any) {
    console.log(e.target.id);
    if (e.target.id !== "not-link")
      this.router.navigate(["shop/product", `/1`]);
  }

  ngOnChanges(changes: any): void {
    const categories = changes.item.currentValue.categories;
    this.categoriesUpperCase = categories.map(
      (_category: string) => _category[0].toUpperCase() + _category.slice(1)
    );

    const size = changes.item.currentValue.size;
    this.sizeIndex = SIZE_INDEXES.filter((item) => item.size === size)[0].id;
  }

  deleteItem() {
    this.itemToDelete.emit(this.item);
  }

  changeQuantity(e: any) {
    if (!this.item) return;
    const quantity = Number(e.target.value);
    if (quantity === 0) this.itemToDelete.emit(this.item);
    else this.quantityChange.emit({ product: this.item, quantity: quantity });
  }

  setSize(e: any) {
    if (!this.item) return;
    const size = e.target.value;

    if (size) this.sizeChange.emit({ product: this.item, size: size });
  }
}
