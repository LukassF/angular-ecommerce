import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { ShopComponent } from "./pages/shop/shop.component";
import { ContactComponent } from "./pages/contact/contact.component";
import { CartComponent } from "./pages/cart/cart.component";
import { ProductinfoComponent } from "./pages/productinfo/productinfo.component";

const routes: Routes = [
  { path: "home", component: HomeComponent },
  {
    path: "shop",
    component: ShopComponent,
  },
  { path: "shop/product/:id", component: ProductinfoComponent },
  { path: "contact", component: ContactComponent },
  { path: "cart", component: CartComponent },
  { path: "", redirectTo: "home", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
