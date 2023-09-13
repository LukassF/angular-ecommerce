import { Component, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-filtersmenu",
  templateUrl: "./filtersmenu.component.html",
})
export class FiltersmenuComponent {
  @Output() filtersObject = new EventEmitter<Filters>();
  categories: Array<string> = [];
  types: Array<string> = [];
  gender: string | undefined;

  setCategory(e: any) {
    if (e.target.checked) {
      !this.categories.find((_item) => _item === e.target.value) &&
        this.categories.push(e.target.value);
    } else {
      const filtered = this.categories.filter(
        (_item) => _item !== e.target.value
      );
      this.categories = filtered;
    }
  }

  setType(e: any) {
    if (e.target.checked) {
      !this.types.find((_item) => _item === e.target.value) &&
        this.types.push(e.target.value);
    } else {
      const filtered = this.types.filter((_item) => _item !== e.target.value);
      this.types = filtered;
    }
  }

  setGender(gender: string) {
    this.gender = this.gender === gender ? "" : gender;
  }

  applyFilters() {
    const filters = {
      categories: this.categories,
      types: this.types,
      gender: this.gender,
    };

    this.filtersObject.emit(filters);
  }
}
