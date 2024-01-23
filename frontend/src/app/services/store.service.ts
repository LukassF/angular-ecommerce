import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

const STORE_URL = "https://angular-ecommerce-production.up.railway.app/api";

@Injectable({
  providedIn: "root",
})
export class StoreService {
  constructor(private httpClient: HttpClient) {}

  getAllProducts(
    filters?: string,
    types?: string,
    gender?: string
  ): Observable<Array<Product>> {
    return this.httpClient.get<Array<Product>>(
      `${STORE_URL}/clothes?filters=${filters ? filters : ""}&types=${
        types ? types : ""
      }&gender=${gender ? gender : ""}`
    );
  }

  getProductById(id: string) {
    return this.httpClient.get<Product[]>(`${STORE_URL}/clothes/${id}`);
  }
}
