import { Subscription } from "rxjs";
import { Component, OnDestroy, OnInit, HostListener } from "@angular/core";
import { StoreService } from "src/app/services/store.service";

const PER_PAGE = 4;

@Component({
  selector: "app-shop",
  templateUrl: "./shop.component.html",
})
export class ShopComponent implements OnInit, OnDestroy {
  loading: boolean = false;
  fetchedProducts: Product[] | undefined;
  productsOnPage: Product[] | undefined;
  productsSubscription: Subscription | undefined;
  numberOfPages: number[] | undefined;
  activePage: number = 1;
  constructor(private storeS: StoreService) {}
  @HostListener("window:resize", ["$event"])
  ngOnInit(): void {
    this.getShopProducts();
  }

  setProductsOnPage() {
    if (!this.fetchedProducts) return;
    this.productsOnPage = this.fetchedProducts.slice(
      (this.activePage - 1) * PER_PAGE,
      this.activePage * PER_PAGE
    );
  }

  public get width() {
    return window.innerWidth;
  }

  getShopProducts() {
    this.loading = true;
    this.productsSubscription = this.storeS
      .getAllProducts()
      .subscribe((_products) => {
        this.fetchedProducts = _products;
        this.setProductsOnPage();

        //setting number of pages
        const toAdd = _products.length % PER_PAGE > 0 ? 1 : 0;
        this.numberOfPages = new Array(
          Math.floor(_products.length / PER_PAGE) + toAdd
        ).fill(0);

        this.loading = false;
      });
  }

  applyFilters(e: Filters) {
    this.loading = true;
    this.productsSubscription = this.storeS
      .getAllProducts(e.categories.join(","), e.types.join(","), e.gender)
      .subscribe((_products) => {
        this.fetchedProducts = _products;
        this.setProductsOnPage();

        //setting number of pages
        const toAdd = _products.length % PER_PAGE > 0 ? 1 : 0;
        this.numberOfPages = new Array(
          Math.floor(_products.length / PER_PAGE) + toAdd
        ).fill(0);

        this.loading = false;
      });
  }

  setSortBy(e: any) {
    if (!this.fetchedProducts) return;

    switch (e.target.value) {
      case "price-asc":
        this.fetchedProducts.sort((a, b) => a.price - b.price);
        this.setProductsOnPage();
        break;
      case "price-desc":
        this.fetchedProducts.sort((a, b) => b.price - a.price);
        this.setProductsOnPage();
        break;
      case "name-asc":
        this.fetchedProducts.sort((a, b) => {
          if (a.name > b.name) return 1;
          else if (b.name > a.name) return -1;
          else return 0;
        });
        this.setProductsOnPage();
        break;
      case "name-desc":
        this.fetchedProducts.sort((a, b) => {
          if (a.name > b.name) return -1;
          else if (b.name > a.name) return 1;
          else return 0;
        });
        this.setProductsOnPage();
        break;
      default:
        this.fetchedProducts.sort((a, b) => a.id - b.id);
        this.setProductsOnPage();
        break;
    }
  }

  changePage(page: number) {
    this.activePage = page;
    this.setProductsOnPage();
  }

  ngOnDestroy(): void {
    if (this.productsSubscription) this.productsSubscription.unsubscribe();
  }
}
