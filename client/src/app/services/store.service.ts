import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

const STORE_URL = "http://localhost:5000/api";

@Injectable({
  providedIn: "root",
})
export class StoreService {
  constructor(private httpClient: HttpClient) {}

  getAllProducts(): Observable<Array<Product>> {
    return this.httpClient.get<Array<Product>>(`${STORE_URL}/clothes`);
  }

  getProductById(id: string) {
    return this.httpClient.get<Product[]>(`${STORE_URL}/clothes/${id}`);
  }
}
