import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { HomeComponent } from "./pages/home/home.component";
import { ShopComponent } from "./pages/shop/shop.component";
import { ContactComponent } from "./pages/contact/contact.component";
import { CartComponent } from "./pages/cart/cart.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatIconModule } from "@angular/material/icon";
import { MatBadgeModule } from "@angular/material/badge";
import { HeroComponent } from "./pages/home/components/hero/hero.component";
import { FeaturedComponent } from "./pages/home/components/featured/featured.component";
import { ProductComponent } from "./components/product/product.component";
import { ArrivalsComponent } from "./pages/home/components/arrivals/arrivals.component";
import { PanelsComponent } from "./pages/home/components/panels/panels.component";
import { FooterComponent } from "./components/footer/footer.component";
import { ContactinfoComponent } from "./pages/contact/components/contactinfo/contactinfo.component";
import { ContactformComponent } from "./pages/contact/components/contactform/contactform.component";
import { ProductinfoComponent } from "./pages/productinfo/productinfo.component";
import { StoreService } from "./services/store.service";
import { HttpClientModule } from "@angular/common/http";
import { FiltersmenuComponent } from "./pages/shop/components/filtersmenu/filtersmenu.component";
import { MatMenuModule } from "@angular/material/menu";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { CartService } from "./services/cart.service";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { CartproductComponent } from './pages/cart/components/cartproduct/cartproduct.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ShopComponent,
    ContactComponent,
    CartComponent,
    HeroComponent,
    FeaturedComponent,
    ProductComponent,
    ArrivalsComponent,
    PanelsComponent,
    FooterComponent,
    ContactinfoComponent,
    ContactformComponent,
    ProductinfoComponent,
    FiltersmenuComponent,
    CartproductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatBadgeModule,
    HttpClientModule,
    MatMenuModule,
    FormsModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
  ],
  providers: [StoreService, CartService],
  bootstrap: [AppComponent],
})
export class AppModule {}
